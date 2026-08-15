import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "../src/App";
import { getSeoForPath, metaTagsToHtml, SITE_URL } from "../src/lib/seo";
import { data } from "../src/utils";
import { industryRoutes } from "../src/lib/industries";

const SSR_DIR = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = resolve(SSR_DIR, "../dist");

const ROUTES = [
  "/",
  "/services",
  "/contact",
  "/privacy",
  ...industryRoutes,
  ...data.writings.map((writing) => `/writings/${writing.slug}`),
];

const TEMPLATE = readFileSync(join(DIST_DIR, "index.html"), "utf8");

const HEAD_START = "<!--SEO:START-->";
const HEAD_END = "<!--SEO:END-->";
const ROOT_REGEX = /<div id="root">\s*<\/div>/;

function buildPage(route: string): string {
  if (!ROOT_REGEX.test(TEMPLATE)) {
    throw new Error(`Prerender: #root div not found in ${DIST_DIR}/index.html`);
  }
  if (!TEMPLATE.includes(HEAD_START) || !TEMPLATE.includes(HEAD_END)) {
    throw new Error("Prerender: SEO markers not found in index.html");
  }

  const seo = getSeoForPath(route);
  const appHtml = renderToString(
    <StaticRouter location={route}>
      <App />
    </StaticRouter>,
  );

  return TEMPLATE
    .replace(ROOT_REGEX, `<div id="root">${appHtml}</div>`)
    .replace(
      new RegExp(`${HEAD_START}[\\s\\S]*?${HEAD_END}`),
      `${HEAD_START}\n    ${metaTagsToHtml(seo)}\n    ${HEAD_END}`,
    );
}

function outputPath(route: string): string {
  return route === "/"
    ? join(DIST_DIR, "index.html")
    : join(DIST_DIR, route.replace(/^\//, ""), "index.html");
}

function writeFile(path: string, content: string) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
  console.log(`  prerendered ${path.replace(`${DIST_DIR}/`, "/")}`);
}

function buildSitemap(): string {
  const lastmod = "2026-08-15";
  const config: Record<string, { freq: string; priority: string }> = {
    "/": { freq: "weekly", priority: "1.0" },
    "/services": { freq: "monthly", priority: "0.8" },
    "/contact": { freq: "monthly", priority: "0.8" },
    "/privacy": { freq: "yearly", priority: "0.3" },
  };
  const urls = ROUTES.map((route) => {
    const { freq, priority } = route.startsWith("/writings/")
      ? { freq: "monthly", priority: "0.6" }
      : route.startsWith("/industries/")
        ? { freq: "monthly", priority: "0.8" }
        : (config[route] ?? { freq: "monthly", priority: "0.6" });
    return `  <url>
    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

console.log("Prerendering static pages...");
for (const route of ROUTES) {
  writeFile(outputPath(route), buildPage(route));
}

writeFile(join(DIST_DIR, "sitemap.xml"), buildSitemap());
console.log("Done.");
