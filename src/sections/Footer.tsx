import { Reveal } from '../components/Reveal'
import { data } from '../utils'

const SOCIALS = [
  { label: 'Instagram', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-line px-6 pb-10 pt-20 md:px-10 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <a href="#" className="font-serif text-4xl tracking-tight text-ink" aria-label="Blanc home">
                BLANC
              </a>
              <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-sub">
                An independent creative studio building digital experiences with
                editorial precision.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="md:col-span-3">
            <p className="label mb-6 text-sub">Sitemap</p>
            <ul className="space-y-3">
              {data.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline text-[15px] text-ink/80 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-2">
            <p className="label mb-6 text-sub">Social</p>
            <ul className="space-y-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="link-underline text-[15px] text-ink/80 hover:text-ink"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-2">
            <p className="label mb-6 text-sub">Contact</p>
            <a
              href="mailto:hello@blanc.studio"
              className="link-underline text-[15px] text-ink/80 hover:text-ink"
            >
              hello@blanc.studio
            </a>
            <p className="mt-3 text-[15px] text-sub">New York · Lisbon</p>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-sub">© {new Date().getFullYear()} Blanc Studio. All rights reserved.</p>
          <p className="label text-sub">Made with restraint</p>
        </div>
      </div>
    </footer>
  )
}
