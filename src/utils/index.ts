import blogPresenceImage from '../assets/blog-presence.webp'
import blogSeoImage from '../assets/blog-seo.webp'
import frame1 from '../assets/frame1.png'

export const EASE = [0.16, 1, 0.3, 1] as const

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export function stagger(index: number, base = 0.08) {
  return { delay: index * base }
}

export const data = {
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  clients: ['NORTH', 'ATLAS', 'MONO', 'VERA', 'KAIRO', 'PONTI'],
  services: [
    {
      num: '01',
      title: 'Web Development',
      desc: 'Custom websites engineered to convert, from landing pages to full-scale web experiences, built for speed, elegance and results.',
    },
    {
      num: '02',
      title: 'E-commerce',
      desc: 'High-converting online stores built to sell. From product catalogs to seamless checkout, e-commerce experiences that turn visitors into customers.',
    },
    {
      num: '03',
      title: 'SaaS',
      desc: 'Scalable web applications and SaaS platforms designed to grow. We turn complex features into simple, fast products users love.',
    },
    {
      num: '04',
      title: 'Social Media',
      desc: 'Strategic social media management, content creation, and community engagement to grow your brand presence.',
    },
  ],
  projects: [
    {
      slug: 'portfolio',
      title: 'Portfolio',
      category: 'Personal Site',
      year: '2026',
      url: 'https://aleezazahra.com',
      tags: ['Branding', 'Motion', 'SEO'],
    },
    {
      slug: 'stationary',
      title: 'Stationary',
      category: 'E-commerce',
      year: '2026',
      url: 'https://project-stationary.vercel.app/',
      tags: ['Admin Panel', 'Checkout', 'Payments'],
    },
    {
      slug: 'naqsh-resume',
      title: 'Naqsh Resume',
      category: 'Web App',
      year: '2026',
      url: 'https://naqshresume.vercel.app/',
      tags: ['Live Preview', 'PDF Export', 'ATS-Ready'],
    },
    {
      slug: 'meguri-life',
      title: 'Meguri Life',
      category: 'Services Site',
      year: '2026',
      url: 'https://megurilife.vercel.app/',
      tags: ['Blog', 'Gallery', 'Bilingual'],
    },
    {
      slug: 'subhan-portfolio',
      title: 'Portfolio Site',
      category: 'Personal Site',
      year: '2026',
      url: 'https://subhanali.xyz/',
      tags: ['Profile', 'Projects', 'Contact'],
    },
  ],
  awards: [
    { year: '2026', name: 'Awwwards, Site of the Day', detail: 'Aurora Archive' },
    { year: '2025', name: 'FWA of the Month', detail: 'Mono House' },
    { year: '2025', name: 'CSS Design Awards, Best UI', detail: 'Terrain Journal' },
    { year: '2024', name: 'Webby Nominee', detail: 'Forma Studio' },
  ],
  process: [
    {
      num: '01',
      title: 'Discover',
      desc: 'We listen first. Workshops, audits and honest conversations to find the real problem.',
    },
    {
      num: '02',
      title: 'Define',
      desc: 'Strategy, positioning and scope distilled into a clear creative direction.',
    },
    {
      num: '03',
      title: 'Design',
      desc: 'Editorial layouts, motion studies and prototypes refined until every pixel earns its place.',
    },
    {
      num: '04',
      title: 'Deliver',
      desc: 'Hand-crafted builds, QA on every device, and a launch engineered to feel effortless.',
    },
  ],
  testimonials: [
    {
      quote:
        'They took a vague ambition and turned it into a product that feels inevitable. The most precise studio we have ever worked with.',
      name: 'Elena Vasquez',
      role: 'CEO, Aurora Archive',
    },
    {
      quote:
        'Every detail was considered, from the first scroll to the last frame. It made our brand look like the industry leader we wanted to be.',
      name: 'Marcus Chen',
      role: 'Founder, Mono House',
    },
    {
      quote:
        'A rare team that talks strategy and ships craft. The launch doubled our conversions within a month.',
      name: 'Sofia Marino',
      role: 'Head of Product, Kaskar',
    },
  ],
  writings: [
    {
      title: 'The thought process behind subhanali.xyz',
      tag: 'case study',
      date: 'August 2026',
      read: '5 min read',
      excerpt:
        'almost every artist wants a portfolio nowadays, this porfolio is a example of what we deliver.',
      slug: 'what-you-should-expect-from-us',
      image: frame1,
      body: [
        {
          heading: 'What we planned first',
          paragraphs: [
            "The portfolio's goal was clear from the beginning. It had to be niche, creative and visually appealing for the user.",
          ],
        },
        {
          heading: "How did we meet the wants of out client",
          paragraphs: [
            "Communicating with client is the best way to get into the head of client. We first understood the theme our client had in this mind and then we gave it our touch",
          ],
        },
        {
          heading: 'The theme',
          paragraphs: [
            'The theme, styling and fonts were meant to be neo brutalist but not the generic ones that everyone uses. we came up with idea to make something with doodles, soft colors and neo brutalist theme downed to near to elegance ',
          ],
        },
        {
          heading: 'Consistent styling',
          paragraphs: [
            "The design was carried out to be consistent through out the whole site and made sure it doesnt even break at any point of the site. It was compulsory for the portfolio to stay consistent with the themes and colors.",
          ],
        },
        {
          heading: 'The Verdict',
          paragraphs: [
            'After many mockups and trials, We and the client had come down to choose the current version of site as the final and implemented the final commits. For a creative agency proposing their own thoughts is the best way to improvise the product or anything they are working on',
          ],
        },
      ],
    },
    {
      title: 'Why Your Business Needs a Web Development Agency, Not Just a Website',
      tag: 'Blog',
      date: 'Feb 2026',
      read: '5 min read',
      excerpt:
        'A website is only the start. Here is how an agency turns it into a presence people actually remember.',
      slug: 'web-development-agency-not-just-a-website',
      image: blogPresenceImage,
      body: [
        {
          heading: 'A website is a document',
          paragraphs: [
            'Most websites are documents. They state facts, what you do, where you are, how to reach you, and then they sit there waiting to be looked at. That is not a presence, and it will not win you clients on its own.',
          ],
        },
        {
          heading: 'Presence is a system',
          paragraphs: [
            'A presence is everything that happens around your site: the content you publish, the places people find you, the way you answer questions, the pace at which you show up. A web development agency helps you build the site, then helps you keep it alive with fresh content and steady improvements.',
          ],
        },
        {
          heading: 'Where most businesses go wrong',
          paragraphs: [
            'Businesses invest once in a website and then vanish. The site goes stale, nothing is published, no one updates it. Six months later it feels abandoned, and visitors can tell. Search engines can tell too, and rankings slip.',
          ],
        },
        {
          heading: 'Hire for the long run',
          paragraphs: [
            'The best web design and development agencies think beyond launch day. They set up analytics, train you on your content system and give you a plan for what to publish next. That is what turns a one-time website project into an ongoing presence.',
          ],
        },
      ],
    },
    {
      title: 'Web Development and SEO: What Actually Still Works in 2026',
      tag: 'Blog',
      date: 'Jan 2026',
      read: '7 min read',
      excerpt:
        'Forget the hacks. These are the fundamentals that keep driving organic traffic this year.',
      slug: 'web-development-and-seo-2026',
      image: blogSeoImage,
      body: [
        {
          heading: 'The fundamentals never stopped working',
          paragraphs: [
            'Every year there is a new algorithm scare, and every year the basics still win: clear structure, real content, fast pages and links from places that matter. A web development agency that understands SEO builds those fundamentals into the site from day one.',
          ],
        },
        {
          heading: 'Content that answers, not fills',
          paragraphs: [
            'Search engines understand intent better than ever. Write pages that actually answer the question someone typed. Thin, keyword-stuffed filler is penalised harder than ever, so publish genuinely useful content instead.',
          ],
        },
        {
          heading: 'Speed is a ranking factor, period',
          paragraphs: [
            'Core Web Vitals are part of ranking. A site that loads in two seconds will outrank a slower one with better content, every time. That is why performance belongs in the design and build phase, not bolted on later.',
          ],
        },
        {
          heading: 'Technical SEO is a build decision',
          paragraphs: [
            'Clean URLs, fast image delivery, proper heading structure, a working sitemap. These are not afterthoughts. When a web development agency builds for SEO from the start, the site ranks faster and needs fewer fixes.',
          ],
        },
        {
          heading: 'The bottom line',
          paragraphs: [
            'SEO is not a one-off task. It is a slow, compounding discipline. The sites that win are the ones that treat it like a habit, not a campaign.',
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: 'What services do you offer?',
      answer:
        'We design and build e-commerce stores, portfolio sites, SaaS platforms and social media presences, plus the SEO that gets them found.',
    },
    {
      question: 'How much does a project cost?',
      answer:
        'Every project is scoped individually. Share what you are building and we will come back with a clear quote within two working days.',
    },
    {
      question: 'How long does a project take?',
      answer:
        'A typical website ships in 2-6 weeks depending on scope. E-commerce and SaaS builds are planned milestone by milestone so you always know where things stand.',
    },
    {
      question: 'Do you work with clients remotely?',
      answer:
        'Yes, we work with clients all over the world. Everything happens over calls, shared boards and live previews, so you are in the loop the whole time.',
    },
    {
      question: 'What do you need from me to get started?',
      answer:
        'Just a rough idea of your goals, brand and timeline. We handle strategy, design, build and launch from there.',
    },
    {
      question: 'Can you help redesign an existing website?',
      answer:
        'Absolutely. We can audit, redesign or rebuild a site you already have, without losing your content or rankings in the process.',
    },
  ],
}

export type Writing = {
  title: string
  tag: 'Blog' | 'Case Study'
  date: string
  read: string
  excerpt: string
  slug: string
  image: string
  body: { heading: string; paragraphs: string[] }[]
}