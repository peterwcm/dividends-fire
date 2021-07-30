const esmRequire = require('esm')(module);
const { routes } = esmRequire('./src/routes.js');
const path = require('path');

module.exports = {
	pluginOptions: {
		sitemap: {
			baseURL: 'https://dividendsfire.com',
			routes,
            outputDir: './public',
            pretty: true,
		},
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: [path.resolve(__dirname, './src/styles/abstracts/_index.scss')],
		},
	}
}
