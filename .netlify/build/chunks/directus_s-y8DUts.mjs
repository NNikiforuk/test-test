import { e as createComponent, r as renderTemplate, g as addAttribute, j as renderHead, k as renderSlot, h as createAstro } from './astro/server_Cz2XOG8C.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { createDirectus, rest } from '@directus/sdk';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/natalianikiforuk/Desktop/test for /astro-directus/src/layouts/Layout.astro", undefined);

const directus = createDirectus("https://directus.trad.house").with(
  rest()
);

export { $$Layout as $, directus as d };
