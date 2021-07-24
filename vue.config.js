const esmRequire = require('esm')(module);
const { routes } = esmRequire('./src/routes.js');

module.exports = {
	pluginOptions: {
		sitemap: {
			baseURL: 'https://dividendsfire.com',
			routes,
            outputDir: './public',
            pretty: true,
		}
	}
}
