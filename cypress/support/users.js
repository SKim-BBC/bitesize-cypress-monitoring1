let under13;
let over13;

if (Cypress.env("under13")) {
	under13 = Cypress.env("under13");
}
else {
	under13 = {
		username: 'bitesizecypressunder13test',
		password: 'bbcpass1'
	};
}

if (Cypress.env("over13"))  {
	over13 = Cypress.env("over13");
}
else {
	over13 = {
		username: 'bitesizecypresstest@bbc.co.uk',
		password: 'bbcpass1'
	};
}

module.exports = {
	under13,
	over13
};