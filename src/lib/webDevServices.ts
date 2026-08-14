import ecommerceVideo from '../assets/ecommerce-site.mp4'
import ecommercePoster from '../assets/ecommerce-poster.webp'

export interface WebDevService {
  slug: string
  title: string
  tagline: string
  description: string
  keywords: string[]
  includes: string[]
  stack: string[]
  media?: { src: string; poster: string }
  body: { heading: string; paragraphs: string[] }[]
}

export const webDevServices: WebDevService[] = [
  {
    slug: "simple-website-design",
    title: "Simple Website Design",
    tagline: "Clean, fast and easy websites for small businesses",
    description:
      "Simple website design for small businesses and startups that need a professional online presence without the complexity or cost of a big build. We keep it simple: a few well-designed pages, fast loading, mobile friendly and easy for you to update.",
    keywords: [
      "simple website design",
      "small business website design",
      "affordable website design",
      "simple website for small business",
      "basic website design",
    ],
    includes: [
      "Custom design, not a template",
      "Up to five well-structured pages",
      "Mobile responsive layout",
      "Fast load times",
      "Easy content updates",
      "Contact forms and maps",
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vite",
    ],
    body: [
      {
        heading: "Simple, not basic",
        paragraphs: [
          "A simple website is not a boring website. It is a focused one: clear message, clean layout and one thing you want the visitor to do, whether that is calling you, emailing you or booking a service. Every element earns its place.",
        ],
      },
      {
        heading: "Built for local businesses",
        paragraphs: [
          "Most of our simple website design work is for local businesses, freelancers and startups that have been getting by without a site or with an outdated one. A simple, professional website instantly makes you more credible and easier to find.",
        ],
      },
      {
        heading: "Fast, so you rank",
        paragraphs: [
          "Search engines reward fast, clean websites. A simple site with optimised images, minimal scripts and sensible structure loads in well under a second on most connections, which helps your Google rankings and your visitors' patience.",
        ],
      },
    ],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    tagline: "Modernise your old site without losing your rankings",
    description:
      "A website redesign that keeps what works and fixes what doesn't. We audit your current site, modernise the design and navigation, improve speed and mobile experience, and migrate carefully so you keep the SEO rankings you already earned.",
    keywords: [
      "website redesign",
      "website redesign services",
      "redesign existing website",
      "rebuild my website",
      "website refresh",
    ],
    includes: [
      "Full website audit before redesign",
      "Modern UI and clearer navigation",
      "Speed and mobile improvements",
      "SEO preserved during migration",
      "Content restructure and copy clean-up",
      "Launch without downtime",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "JavaScript",
      "Node.js",
      "REST APIs",
    ],
    body: [
      {
        heading: "Start with an audit",
        paragraphs: [
          "Every redesign starts with an honest look at your current site: what is working, what is slow, what is confusing and what is hurting your rankings. We fix the foundations before we touch the visuals.",
        ],
      },
      {
        heading: "Keep your SEO intact",
        paragraphs: [
          "A redesign should not cost you your Google rankings. We preserve URLs where possible, set up redirects where needed and keep your existing search equity while modernising the look and structure of the site.",
        ],
      },
      {
        heading: "Modern, but familiar",
        paragraphs: [
          "Your customers know your brand. A good redesign modernises the experience without throwing away the trust you have built. Cleaner, faster, easier to use, but still recognisably you.",
        ],
      },
    ],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    tagline: "Monthly care so your site stays secure, fast and up to date",
    description:
      "Website maintenance services that keep your site secure, updated and running smoothly. Monthly care plans cover updates, backups, security monitoring and fixes, so your business never goes down and never falls behind.",
    keywords: [
      "website maintenance services",
      "website maintenance packages",
      "website care plans",
      "site maintenance monthly",
      "wordpress website maintenance",
    ],
    includes: [
      "Regular updates and backups",
      "Security monitoring and hardening",
      "Bug fixes and small improvements",
      "Uptime and speed checks",
      "Content and copy updates",
      "Monthly performance report",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "SQL",
      "Vercel",
    ],
    body: [
      {
        heading: "Why maintenance matters",
        paragraphs: [
          "Websites quietly break: plugins fall out of date, security holes appear, links rot and load times creep up. Maintenance catches these problems before they cost you customers or your Google rankings.",
        ],
      },
      {
        heading: "A plan that fits",
        paragraphs: [
          "We offer simple monthly care plans sized to your site. Smaller sites get updates, backups and monitoring. Growing businesses get content updates, reporting and priority support.",
        ],
      },
      {
        heading: "Never down, never outdated",
        paragraphs: [
          "With backups and monitoring in place, a problem is a small fix, not a crisis. Your site stays up, stays secure and stays current without you having to think about it.",
        ],
      },
    ],
  },
  {
    slug: "ecommerce-website-development",
    title: "E-commerce Website Development",
    tagline: "Online stores built to sell",
    description:
      "E-commerce website development built to sell. Product pages, cart and checkout set up so customers can browse on any device and buy without friction. We handle products, payments, shipping and order management for you.",
    keywords: [
      "ecommerce website development",
      "online store development",
      "ecommerce website design",
      "online store builder services",
      "ecommerce web development agency",
    ],
    includes: [
      "Product catalog setup",
      "Secure checkout and payments",
      "Inventory and order management",
      "Shipping and tax configuration",
      "Mobile-first shopping experience",
      "Speed optimised for conversions",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "SQL",
      "Stripe",
      "REST APIs",
    ],
    media: { src: ecommerceVideo, poster: ecommercePoster },
    body: [
      {
        heading: "Simple to shop, simple to run",
        paragraphs: [
          "A great online store is one you can manage in minutes. Product photos, prices, stock and orders are easy to update, while customers get a clean, fast shopping experience that works perfectly on a phone.",
        ],
      },
      {
        heading: "Checkout that converts",
        paragraphs: [
          "Every extra step in checkout loses customers. We set up secure, familiar payment options, minimal forms and clear shipping information so buyers finish the purchase instead of abandoning the cart.",
        ],
      },
      {
        heading: "Built to grow",
        paragraphs: [
          "Start with the products you have today and scale to hundreds of listings without rebuilding. Our e-commerce builds handle growth, traffic spikes and seasonal sales without breaking a sweat.",
        ],
      },
    ],
  },
  {
    slug: "hack-proof-websites",
    title: "Hack-Proof Websites",
    tagline: "Security-first websites you can trust",
    description:
      "Security-first websites built with protection in mind. We harden the code, secure the hosting and add ongoing monitoring so your site and your customers' data stay safe from hackers and attacks.",
    keywords: [
      "hack proof website",
      "secure website development",
      "website security services",
      "secure web development",
      "website protection",
    ],
    includes: [
      "Secure hosting configuration",
      "Hardened code and updated software",
      "SSL, HTTPS and safe data handling",
      "Firewall and attack protection",
      "Ongoing security monitoring",
      "Regular backups and recovery plan",
    ],
    stack: [
      "SSL / HTTPS",
      "TLS encryption",
      "Cloudflare",
      "Firewalls",
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "JWT Authentication",
      "Security Headers",
      "DDoS Protection",
      "Penetration Testing",
    ],
    body: [
      {
        heading: "Security is built in, not added on",
        paragraphs: [
          "Hackers look for easy targets. We build with security from the first line of code: hardened configurations, strict input validation, updated software and secure hosting. There is no bolting it on after launch.",
        ],
      },
      {
        heading: "Protecting your customers",
        paragraphs: [
          "If you take orders or collect information, your customers trust you with their data. A hacked site destroys that trust in minutes. We secure your data handling, payments and forms so that trust is never broken.",
        ],
      },
      {
        heading: "Monitoring after launch",
        paragraphs: [
          "Security is not a one-time fix. We keep your site monitored, updated and backed up, so an attack is prevented rather than repaired. If anything ever looks wrong, we fix it before it becomes a problem.",
        ],
      },
    ],
  },
]
