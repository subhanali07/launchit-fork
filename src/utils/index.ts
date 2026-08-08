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
      title: 'Web Design',
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
    {
      slug: 'aleeza-portfolio',
      title: 'Portfolio Site',
      category: 'Personal Site',
      year: '2026',
      url: 'https://portfolio-aleeza81.vercel.app/',
      tags: ['Branding', 'Projects', 'Contact'],
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
      title: 'How we launched Mono House in 30 days',
      tag: 'Case Study',
      date: 'Mar 2026',
      read: '8 min read',
      excerpt:
        'From first call to live store, the exact process we use to ship e-commerce sites that convert.',
      slug: 'mono-house-launch',
    },
    {
      title: 'Why your brand needs a presence, not just a website',
      tag: 'Blog',
      date: 'Feb 2026',
      read: '5 min read',
      excerpt:
        'A website is only the start. Here is how we turn it into a presence people actually remember.',
      slug: 'presence-not-website',
    },
    {
      title: 'SEO in 2026: what actually still works',
      tag: 'Blog',
      date: 'Jan 2026',
      read: '7 min read',
      excerpt:
        'Forget the hacks. These are the fundamentals that keep driving organic traffic this year.',
      slug: 'seo-in-2026',
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
        'A typical website ships in 2–6 weeks depending on scope. E-commerce and SaaS builds are planned milestone by milestone so you always know where things stand.',
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
}