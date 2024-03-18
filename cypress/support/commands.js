let cookieValue;
let authToken;

// Parses a cookie string for a particular value and sets it to a different domain
function setCookieFromString(cookieString, cookieName, domain) {
	if (cookieString.includes(cookieName + '=')) {
		var start = cookieString.match(cookieName + '=').index + cookieName.length + 1
		if (cookieString.substring(start).match(';')) {
			var end = cookieString.substring(start).match(';').index + start
		}
		else {
			var end = cookieString.length
		}
		var value = cookieString.substring(start, end)
		cy.log("Setting " + cookieName + " to " + value)
		cy.setCookie(cookieName, value, { 'domain': domain })
	}
	else {
		throw new Error("Cookie string did not contain " + cookieName)
	}
}
// Feature flag 
/* Cypress.Commands.add("featureFlag", () => {
	cy.window().then((win) => {
		var filterContainer = win.document.querySelector('.primary-index-filter-container');
		var headerImage = win.document.querySelector('.primary-index-header-wrapper');
		var messageBanner = win.document.querySelector('.messaging-banner-container');
		filterContainer.classList.toggle('primary-index-filter-container__show');
		headerImage.classList.toggle('primary-index-header-wrapper__show');
		messageBanner.classList.toggle('primary-index-filter-container__hide');
	});
}); */

// Clean up method to clear all of the added subjects in personalization. It can only be used after successful sign in
Cypress.Commands.add("cleanupAPI", () => {
	cy.getCookie('ckns_atkn')
		.should('exist')
		.then((cookie) => {
			cookieValue = cookie;
		});
	cy.then(() => {
		cy.log("The value of the cookie is " + cookieValue.value);
		authToken = 'Bearer ' + cookieValue.value;
		cy.log("The value of the authToken is " + authToken);
		const options = {
			method: 'DELETE',
			url: (Cypress.env('apiURL1')),
			headers: {
				'Authorization': authToken,
				'Content-Type': 'application/json',
				'X-Authentication-Provider': 'idv5',
				'X-API-Key': (Cypress.env('apiKey')),
			}
		};
		cy.request(options);
		const options2 = {
			method: 'DELETE',
			url: (Cypress.env('apiURL2')),
			headers: {
				'Authorization': authToken,
				'Content-Type': 'application/json',
				'X-Authentication-Provider': 'idv5',
				'X-API-Key': (Cypress.env('apiKey')),
			}
		};
		cy.request(options2);
	});
});

// Sign in command using provided credentials on front end
Cypress.Commands.add("signIn", (email) => {
	cy.get('#user-identifier-input').should('be.visible')
		.get('#user-identifier-input').type(email)
		.get('#password-input').type('bbcpass1')
		.get('#submit-button').click();
});

var signinURL;

// Sign in using a request
Cypress.Commands.add('signInUsingRequest', (user) => {
	// Always sign out first in case we have any state problems
	cy.signOutUsingRequest();
	// This will ensure we have the cookies we need for the GET /signin to succeed
	cy.request({ url: Cypress.env('sessionUrl') + '/session' }).then((resp) => {
		// Check if /session has redirected - if so, use the redirect URL for the POST request
		if ("redirects" in resp) {
			signinURL = resp.allRequestResponses[1]["Request URL"]
		}
		else {
			signinURL = Cypress.env('accountUrl') + '/signin'
		}
		// Sign in using the parameters provided in the function call and don't follow redirects as this will fail
		cy.request({
			method: 'POST',
			url: signinURL,
			form: true,
			body: {
				username: user.username,
				password: user.password
			},
			followRedirect: true
		});
		//  This /account endpoint gives us the authentication cookies we need
		cy.request({ url: Cypress.env('accountUrl') + '/signin', failOnStatusCode: false }).then((resp) => {
			var cookies = resp.requestHeaders.cookie
			if (cookies !== null) {
				setCookieFromString(cookies, "ckns_id", ".bbc.co.uk")
				setCookieFromString(cookies, "ckns_atkn", ".bbc.co.uk")	
			}
			else {
				throw new Error("No cookies were returned from " + Cypress.env('accountUrl') + "/account")
			}
		})
	});
});

Cypress.Commands.add('signOutUsingRequest', () => {
	const options = {
		url: Cypress.env('sessionUrl') + '/session/signout',
		qs: {
			ptrt: Cypress.env('accountUrl') + '/signout',
			switchTld: 1
		},
	};

	cy.request(options);
});

Cypress.Commands.add('signInUsingURL', (body) => {
	// Always sign out first in case we have any state problems
	cy.signOutUsingRequest();
	cy.request({
		method: 'GET',
		url: ('https://idcta.api.bbc.com/idcta/config'),
		body: body

	}).then((response) => {
		expect(response.status).to.eq(200);
		expect(response.body).to.have.property('signin_url');
		const body = (response.body);
		const sessionUrl = body.signin_url;
		const signInUrl = body.web.credentialsUrl;
		return sessionUrl, signInUrl;
	})

		.then(() => {
			cy.request({
				method: 'POST',
				url: "https://account.bbc.com/signin",
				form: true,
				body: {
					username: 'bitesizecypresstest@bbc.co.uk',
					password: 'bbcpass1'
				},
				followRedirect: true
			});
		});

});

Cypress.Commands.add('setCknsExplicitCookieAndReload', () => {
	cy.setCookie('ckns_explicit', '2');
	cy.reload();
});