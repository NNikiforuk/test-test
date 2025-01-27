import { createDirectus, rest } from "@directus/sdk";

type Global = {
	title: string;
	description: string;
};

type Author = {
	id: string | number;
	name: string;
};

type Page = {
	title: string;
	content: string;
	slug: string;
};

type Post = {
	title: string;
	author: string | Author;
	content: string;
	published_date: string;
	slug: string;
};

type Schema = {
	posts: Post[];
	global: Global;
	pages: Page[];
	authors: Author[];
};

const directus = createDirectus<Schema>("https://directus.trad.house").with(
	rest()
);

export default directus;
