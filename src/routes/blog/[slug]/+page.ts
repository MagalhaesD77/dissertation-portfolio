import type { PageLoad } from './$types';
import blogs from '$lib/Articles';

export const load = (async ({ params }) => {
	let article = blogs.find((article) => article.id === Number(params.slug));
	return {
		article
	};
}) satisfies PageLoad;
