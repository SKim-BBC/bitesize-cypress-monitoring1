// const functions = require('../../support/functions');
import { urls } from '../../support/locators';


describe('Monitoring', function () {
	it('All Levels', function () {
		cy.visit(urls.allLevels)
			.get('h1').contains('All levels').should('be.visible')
			.get('.card-list').should('be.visible');
	});
  it('All Subjects', function () {
		cy.visit(locator.urls.allSubjects)
			.get('h1').contains('All subjects').should('be.visible')
			.get('[data-testid="main-content"]').should('be.visible');
	});
	it('Article (with Topic)', function () {
		cy.visit(locator.urls.articleWithTopic)
			.get('h1').contains('Number lines').should('be.visible')
			.get('[data-testid="main-content"]').should('be.visible')
			.get('[data-component="video-block"]').should('be.visible')
			.get('[data-component="legacy-activity-block"]').should('be.visible');
	});
	it('Article (without Topic)', function () {
		cy.visit(locator.urls.articleWithoutTopic)
			.get('h1').contains('Careers A to Z: Find your perfect job').should('be.visible')
			.get("[class*=SidebarItemSpan]").should('be.visible');
	});
	it('Careers', function () {
		cy.visit(locator.urls.careers)
			.get('h1').contains('Careers').should('be.visible')
			.get("[class*=ChildrenContainer]").should('be.visible');
	});
	/* it('Class Clip', function () {
		cy.visit(locator.urls.classClip)
			.get('h1').contains('Boudicca\'s attack on Colchester').should('be.visible')
			.get('.classclips__content').should('be.visible')
			.get('.media-player--video').should('be.visible')
	});
	it('Class Clip List', function () {
		cy.visit(locator.urls.classClips)
			.get('.classclips__content').should('be.visible')
	}); */
	it('Collection', function () {
		cy.visit(locator.urls.collection)
			.get('h1').contains('prenticeships').should('be.visible')
			.get("[class*=Container]").should('be.visible');
	});
	it('Exam Boards', function () {
		cy.visit(locator.urls.examBoards)
			.get('h1').contains('English Literature').should('be.visible')
			.get("[class*=CallToActionLink]").should('be.visible');
	});
	it('Exam Specs', function () {
		cy.visit(locator.urls.examSpecs)
			.get('h1').contains('English Literature').should('be.visible')
			.get('h2').contains('Podcasts').should('be.visible');
	});
	it('Field of Study', function () {
		cy.visit(locator.urls.fieldOfStudy)
			.get('h1').contains('Maths').should('be.visible')
			.get('[data-testid="main-content"]').should('be.visible');
	});
	it('Flashcard', function () {
		cy.visit(locator.urls.flashcard)
			.get('.quote__text').contains('The intent of').should('be.visible');
	});
	it('Game (Cage)', function () {
		cy.visit(locator.urls.gameCage)
			.get('.game-wrapper__game').should('be.visible');
	});
	it('Game (Toybox)', function () {
		cy.visit(locator.urls.gameToybox)
			.get('#og-game-holder').should('be.visible');
	});
	it('Homepage', function () {
		cy.visit(locator.urls.homepage)
			.get('h1').contains('Learn & revise').should('be.visible');
	});
	it('Learn and Revise', function () {
		cy.visit(locator.urls.learnAndRevise)
			.get('h1').contains('Learn & revise').should('be.visible');
	});
	it('Levels', function () {
		cy.visit(locator.urls.levels)
			.get('h1').contains('GCSE').should('be.visible')
			.get("[class*=BaseUl-GridWrapper]").should('be.visible');
	});
	//it('My Bitesize (signed in - under 13)', function () {
	//	cy.visit(locator.urls.myBitesize)
	//		.signInUsingURL(users.under13)
	//		.reload()
	//		.get('.my-bitesize__content-container').should('be.visible')
	//		.get('.bitesize-error__text').should('not.be.visible');
	//});
	//it('My Bitesize (signed in - over 13)', function () {
	//	cy.visit(locator.urls.myBitesize)
	//		.signInUsingURL(users.over13)
	//		.reload()
	//		.get('.my-bitesize__content-container').should('be.visible')
	//		.get('.bitesize-error__text').should('not.be.visible');
	//});
	it('My Bitesize (signed out)', function () {
		cy.visit(locator.urls.myBitesize)
			.get('.my-bitesize__idcta-title').contains('Your learning in one place').should('be.visible')
			.get('.my-bitesize__idcta-external-component').should('be.visible');
	});
	it('Primary', function () {
		cy.visit(locator.urls.primary)
		//	.featureFlag()
			.get('h1').contains('Primary Levels').should('be.visible')
			.get("[class*=StyledHeading]").should('be.visible')
			.get("[class*=GroupWrapper]").should('be.visible');
	});
	// it('Primary Catch-Up Lessons', function () {
	//	cy.visit(locator.urls.primaryCatchUpLessons)
	//		.get('h1').contains("Bitesize collections").should('be.visible')
	//		.get('.collections-container').should('be.visible');
});
it('POS (Primary)', function () {
	cy.visit(locator.urls.programmeOfStudyPrimary)
		.get('h1').contains('Maths').should('be.visible')
		.get('h2').contains('Games').should('be.visible')
		.get('.ssrcss-hsh1b1-GridWrapper').should('be.visible');
});
it('POS (Secondary)', function () {
	cy.visit(locator.urls.programmeOfStudySecondary)
		.get('h1').contains('Art and Design').should('be.visible')
		.get('h2').contains('Choose your exam specification').should('be.visible');

});
it('Secondary', function () {
	cy.visit(locator.urls.secondary)
		.get('h1').contains('Secondary').should('be.visible')
		.get('h2').contains('England').should('be.visible');
});
it('Study Guide (Audio)', function () {
	cy.visit(locator.urls.studyGuideAudio)
		.get("[class*=ContentStack]").should('be.visible')
		.get("[class*=LabelWrap]").should('be.visible')
		.get("[class*=MediaPlayer]").should('be.visible');
});
it('Study Guide (Non Cerego Test)', function () {
	cy.visit(locator.urls.studyGuideNonCeregoTest)
		.get('h1').contains('Whole numbers').should('be.visible')
		.get("[class*=ContentStack]").should('be.visible')
		.get("[class*=LabelWrap]").should('be.visible');
});
it('Study guide (Revision)', function () {
	cy.visit(locator.urls.studyGuideRevision)
		.get("[class*=ContentStack]").should('be.visible')
		.get("[class*=LabelWrap]").should('be.visible');
});

it('Study Guide (Revision) - .hybrid', function () {
	cy.visit(locator.urls.studyGuideRevisionDotHybrid)
		.get('.hybrid-studyguide__content').should('be.visible')
		.get('h1').contains('Prose fiction').should('be.visible');
});
it('Study Guide (Video)', function () {
	cy.visit(locator.urls.studyGuideVideo)
		.get("[class*=ContentStack]").should('be.visible')
		.get("[class*=LabelWrap]").should('be.visible')
		.get("[class*=MediaPlayer]").should('be.visible');
});
it('Super Programme of Study', function () {
	cy.visit(locator.urls.superProgrammeOfStudy)
		.get('h1').contains('Science').should('be.visible')
		.get("[class*=GridWrapper]").should('be.visible')
		.get("[class*=PromoHeadline]").contains('Chemistry').should('be.visible');
});
it('Support', function () {
	cy.visit(locator.urls.support)
		.get('h1').contains('Study support').should('be.visible')
		.get("[class*=Container]").should('be.visible');
});
it('Tags', function () {
	cy.visit(locator.urls.tags)
		.get('h1').contains('Skills and qualities').should('be.visible')
		.get("[class*=Container]").should('be.visible');
});
it('Bitesize collections', function () {
	cy.visit(locator.urls.thisTermsTopics)
		.get('h1').contains("Bitesize collections").should('be.visible')
		.get('.ec-content-panel--bitesize').should('be.visible');
});
it('Topics', function () {
	cy.visit(locator.urls.topics)
		.get('h1').should('be.visible')
		.get('[data-testid="main-content"]').should('be.visible');
});
// it('Curations', function () {
//	cy.visit({ url: Cypress.env('ownitUrl')})
//		.get('.c-CardsList-item').should('have.length', 25);
// });

// Loop through pages in 'cachebust' array to help keep the cache fresh
// for (const page in locator.cachebust) {
//	it(`Cachebust (${page})`, function () {
//		cy.visit(locator.cachebust[page], { failOnStatusCode: false })
//			.visit(locator.cachebust[page] + '?cachebust=' + Date.now(), { failOnStatusCode: false })
//	})
// }
