import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_Cz2XOG8C.mjs';
import 'kleur/colors';
import { $ as $$Layout, d as directus } from '../chunks/directus_s-y8DUts.mjs';
import { readItems } from '@directus/sdk';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
async function getStaticPaths() {
  const pages = await directus.request(readItems("pages"));
  return pages.map((page) => ({
    params: { slug: page.slug },
    props: page
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const page = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": page.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>${page.title}</h1> <div>${unescapeHTML(page.content)}</div> </main> ` })}`;
}, "/Users/natalianikiforuk/Desktop/test for /astro-directus/src/pages/[slug].astro", undefined);

const $$file = "/Users/natalianikiforuk/Desktop/test for /astro-directus/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
