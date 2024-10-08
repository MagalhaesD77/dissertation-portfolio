export interface Article {
	id: number;
	title: string;
	description: string;
	tags: string[];
	md: string;
}

export interface User {
	name: string;
	username: string;
	twitter_username: string;
	github_username: string;
	user_id: number;
	website_url: string;
	profile_image: string;
	profile_image_90: string;
}

export interface PageData {
	article: Article;
}
