import blogs from '$lib/Articles';

export async function load() {
	let devToArticles;
	devToArticles = blogs;

	return {
		devToArticles
	};
}
