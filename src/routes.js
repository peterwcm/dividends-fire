export const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
		meta: {
			sitemap: {
				priority: 1.0,
				changefreq: 'weekly'
			}
		}
	},
]
