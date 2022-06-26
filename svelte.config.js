import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: `@import './src/lib/styles/styles.scss';`
			  }
		}),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: "./src/routes/blog/layout.svelte"
			  },
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			  ],
			highlight: {
				alias: { js: "javascript" }
			}
		  })
	  ],
};

export default config;
