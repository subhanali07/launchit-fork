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
      desc: 'Custom websites and web applications built with cutting-edge technologies for seamless user experiences.',
    },
    {
      num: '02',
      title: 'Social Media Services',
      desc: 'Strategic social media management, content creation, and community engagement to grow your brand presence.',
    },
    {
      num: '03',
      title: 'SEO Optimization',
      desc: 'Comprehensive search engine optimization strategies to improve visibility and drive organic traffic.',
    },
    {
      num: '04',
      title: 'Brand Identity',
      desc: 'Strategy, naming and visual systems that give ambitious companies a voice with gravity.',
    },
  ],
  projects: [
    {
      title: 'Aurora Archive',
      category: 'Brand · Web',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Mono House',
      category: 'E-commerce',
      year: '2025',
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Terrain Journal',
      category: 'Editorial',
      year: '2025',
      src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Forma Studio',
      category: 'Identity · Web',
      year: '2024',
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Kaskar',
      category: 'Product',
      year: '2024',
      src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Nocturne',
      category: 'Motion',
      year: '2023',
      src: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1200&q=80',
    },
  ],
  awards: [
    { year: '2026', name: 'Awwwards — Site of the Day', detail: 'Aurora Archive' },
    { year: '2025', name: 'FWA of the Month', detail: 'Mono House' },
    { year: '2025', name: 'CSS Design Awards — Best UI', detail: 'Terrain Journal' },
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
}