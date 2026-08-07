import { useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Reveal, Letters } from '../components/Reveal'
import { data, EASE } from '../utils'

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 24 })

  return (
    <section id="process" className="border-t border-line px-6 py-32 md:px-10 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <p className="label mb-6 text-sub">Process</p>
          <h2 className="max-w-3xl font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1.02] tracking-tight">
            <Letters text="How we work" />
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-20">
          <motion.div
            className="absolute left-0 top-0 h-px w-full bg-line"
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-0 top-0 h-px w-full origin-left bg-ink"
            style={{ scaleX }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-12 pt-12 md:grid-cols-2 xl:grid-cols-4">
            {data.process.map((step, i) => {
              const isActive = active === i
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ duration: 0.9, ease: EASE, delay: i * 0.12 }}
                  onMouseEnter={() => setActive(i)}
                  className="group cursor-default"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-num text-6xl leading-none text-ink/85 transition-colors duration-500 group-hover:text-ink md:text-7xl">
                      {step.num}
                    </span>
                    <span className="h-2 w-2 rounded-full transition-colors duration-500"
                      style={{ backgroundColor: isActive ? '#111' : 'rgba(0,0,0,0.15)' }}
                    />
                  </div>
                  <h3 className="font-serif text-2xl tracking-tight md:text-3xl">{step.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-sub">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
