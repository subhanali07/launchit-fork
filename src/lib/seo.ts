import { data } from "../utils";

type WritingData = (typeof data.writings)[number];

export const SITE_URL = "https://launchitweb.com";
export const SITE_NAME = "Launchit";
export const SITE_LOGO = `${SITE_URL}/Black%20and%20Red%20Bold%20Creative%20Scribble%20Artist%20Logo.png`;

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  jsonLd?: Record<string, unknown>[];
}

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function safeJson(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

const COMMON_KEYWORDS = [
  "web development agency",
  "custom website design",
  "web design for startups",
  "ecommerce website development",
  "seo services for small business",
  "saas product design agency",
  "portfolio website design",
  "affordable web development",
];

function faqSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

function articleSchema(
  post: WritingData,
  canonical: string,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };
}

const DEFAULT_IMAGE = SITE_LOGO;
const DEFAULT_IMAGE_ALT = "Launchit logo";
const IMAGE_WIDTH = "2000";
const IMAGE_HEIGHT = "2000";

function postSeo(post: WritingData): SeoMeta {
  const canonical = `${SITE_URL}/writings/${post.slug}`;
  return {
    title: `${post.title} | Launchit Web Development Agency`,
    description: post.excerpt,
    canonical,
    keywords: COMMON_KEYWORDS,
    image: DEFAULT_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    jsonLd: [articleSchema(post, canonical)],
  };
}

const HOME: SeoMeta = {
  title:
    "Launchit - Web Development Agency | Custom Websites, E-commerce & SEO",
  description:
    "Launchit is a web development agency building custom websites, e-commerce stores, portfolio sites and SaaS platforms, plus the SEO to get them found. Fast, crafted and built to convert.",
  canonical: `${SITE_URL}/`,
  keywords: COMMON_KEYWORDS,
  image: DEFAULT_IMAGE,
  imageAlt: DEFAULT_IMAGE_ALT,
  jsonLd: [faqSchema()],
};

export function getSeoForPath(pathname: string): SeoMeta {
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/") return HOME;

  if (path === "/services") {
    return {
      title: "Web Development & Design Services | Launchit",
      description:
        "Custom web development, web design, e-commerce, SaaS, portfolio sites and SEO services from one agency. From your first line of code to your first customer.",
      canonical: `${SITE_URL}/services`,
      keywords: COMMON_KEYWORDS,
      image: DEFAULT_IMAGE,
      imageAlt: DEFAULT_IMAGE_ALT,
    };
  }

  if (path === "/contact") {
    return {
      title: "Contact Us | Launchit Web Development Agency",
      description:
        "Start a project with our web development agency. Tell us what you're building and get a clear quote within two working days.",
      canonical: `${SITE_URL}/contact`,
      keywords: COMMON_KEYWORDS,
      image: DEFAULT_IMAGE,
      imageAlt: DEFAULT_IMAGE_ALT,
    };
  }

  if (path === "/privacy") {
    return {
      title: "Privacy Policy | Launchit",
      description:
        "How Launchit handles your data. We keep it safe, use it only to work with you, and never sell it.",
      canonical: `${SITE_URL}/privacy`,
    };
  }

  const match = /^\/writings\/([^/]+)$/.exec(path);
  if (match) {
    const post = data.writings.find((w) => w.slug === match[1]);
    if (post) return postSeo(post);
  }

  return HOME;
}

export function metaTagsToHtml(meta: SeoMeta): string {
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${esc(meta.canonical)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${esc(meta.canonical)}" />`,
    `<meta property="og:locale" content="en_PK" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:image" content="${esc(meta.image ?? DEFAULT_IMAGE)}" />`,
    `<meta property="og:image:width" content="${IMAGE_WIDTH}" />`,
    `<meta property="og:image:height" content="${IMAGE_HEIGHT}" />`,
    `<meta property="og:image:alt" content="${esc(meta.imageAlt ?? DEFAULT_IMAGE_ALT)}" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:image" content="${esc(meta.image ?? DEFAULT_IMAGE)}" />`,
  ];

  if (meta.keywords?.length) {
    tags.push(`<meta name="keywords" content="${esc(meta.keywords.join(", "))}" />`);
  }

  for (const schema of meta.jsonLd ?? []) {
    tags.push(
      `<script type="application/ld+json" data-seo-jsonld>${safeJson(schema)}</script>`,
    );
  }

  return tags.join("\n    ");
}

export function applySeo(meta: SeoMeta): void {
  if (typeof document === "undefined") return;

  document.title = meta.title;

  const upsertMeta = (name: string, content: string) => {
    let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  const upsertProp = (property: string, content: string) => {
    let el = document.head.querySelector<HTMLMetaElement>(
      `meta[property="${property}"]`,
    );
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("property", property);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  let canonical = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", meta.canonical);

  upsertMeta("description", meta.description);
  upsertMeta("robots", "index, follow");
  if (meta.keywords?.length) upsertMeta("keywords", meta.keywords.join(", "));
  upsertProp("og:title", meta.title);
  upsertProp("og:description", meta.description);
  upsertProp("og:url", meta.canonical);
  upsertProp("og:locale", "en_PK");
  upsertProp("og:type", "website");
  upsertProp("og:image", meta.image ?? DEFAULT_IMAGE);
  upsertProp("og:image:width", IMAGE_WIDTH);
  upsertProp("og:image:height", IMAGE_HEIGHT);
  upsertProp("og:image:alt", meta.imageAlt ?? DEFAULT_IMAGE_ALT);
  upsertProp("twitter:title", meta.title);
  upsertProp("twitter:description", meta.description);
  upsertProp("twitter:card", "summary_large_image");
  upsertProp("twitter:image", meta.image ?? DEFAULT_IMAGE);

  document
    .querySelectorAll("script[data-seo-jsonld]")
    .forEach((node) => node.remove());

  for (const schema of meta.jsonLd ?? []) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-jsonld", "");
    script.textContent = safeJson(schema);
    document.head.appendChild(script);
  }
}
