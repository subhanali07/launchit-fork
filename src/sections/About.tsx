import { Reveal, Words } from '../components/Reveal'
import { data } from '../utils'

const STATS = [
  { value: '48', label: 'Projects shipped' },
  { value: '12', label: 'Industry awards' },
  { value: '9', label: 'Senior specialists' },
  { value: '11', label: 'Years in craft' },
]

export function About() {
  return (
    <section id="about" className="border-t border-line px-6 py-32 md:px-10 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <p className="label mb-8 text-sub">About the studio</p>
        </Reveal>

        <h2 className="max-w-5xl font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1.04] tracking-tight">
          <Words text="A small senior team with a taste for the uncomfortable, and a mania for the immaculate." />
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5" delay={0.1}>
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
                alt="The Blanc team in the studio"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col justify-between md:col-span-7">
            <Reveal delay={0.15}>
              <p className="max-w-xl text-[18px] leading-relaxed text-sub">
                We are an independent creative studio built around a simple
                belief, restraint is a superpower. We work with founders and
                brands who want fewer, better decisions, and we sweat the
                details other teams skip.
              </p>
              <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-sub">
                Our process is slow at the start and fast at the end. Strategy
                first, craft always. No bloated teams, no committees, just a
                small group of obsessive people doing the best work of their
                careers.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-2 gap-y-10 border-t border-line pt-10 sm:grid-cols-4">
              {STATS.map((stat, i) => (
                <Reveal key={stat.label} delay={0.1 + i * 0.07}>
                  <p className="font-num text-4xl tracking-tight md:text-5xl">{stat.value}</p>
                  <p className="label mt-3 text-sub">{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="label mb-8 text-sub">Recognition</p>
          </Reveal>
          <div className="border-t border-line">
            {data.awards.map((award, i) => (
              <Reveal key={award.name} delay={i * 0.05}>
                <div className="group flex items-center justify-between gap-6 border-b border-line py-7">
                  <span className="font-num text-sm text-sub">{award.year}</span>
                  <h3 className="flex-1 text-left font-serif text-xl transition-transform duration-500 group-hover:translate-x-3 md:text-2xl">
                    {award.name}
                  </h3>
                  <span className="label text-sub">{award.detail}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
