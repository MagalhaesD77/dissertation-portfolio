import { base } from '$app/paths';

const routes = [
	{
		href: `${base}/`,
		label: 'Home'
	},
	{
		href: `${base}/repositories`,
		label: 'Repositories'
	},
	{
		href: `${base}/blog`,
		label: 'Activities'
	},
	{
		href: `${base}/about`,
		label: 'About'
	}
];

export default routes;
