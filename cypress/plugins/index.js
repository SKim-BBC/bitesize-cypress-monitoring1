// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// promisified fs module
const fs = require('fs-extra');
const path = require('path');
const screenshots = [];

function getConfigByFile (file) {
	const pathToConfigFile = path.resolve('cypress/','config', `${file}.json`);

	return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
	// `on` is used to hook into various events Cypress emits
	// `config` is the resolved Cypress config

	// accept a configFile value or use development by default
	const file = config.env.configFile || 'test';

	on('task', {
		log (message) {
			console.log(message)

			return null
		}
	});

	on('before:browser:launch', (browser = {}, args) => {
		if (browser.family === 'chrome') {
			args.push('--disable-dev-shm-usage');
		}

		return args;
	});

	return getConfigByFile(file);
};