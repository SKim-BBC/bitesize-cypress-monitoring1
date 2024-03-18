// ***********************************************************
// index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';
import addContext from 'mochawesome/addContext';

Cypress.on('uncaught:exception', () => {
	// returning false here prevents Cypress from failing the test due to uncaught exception
	return false;
});

Cypress.on('test:after:run', (test, runnable) => {
	if ('failed' === test.state) {
		addContext({ test }, `../artifact/results/screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`);
	}
});

beforeEach(function () {
	cy.setCookie('ckns_explicit', '2');
	cy.setCookie('ckns_policy', '111');
});