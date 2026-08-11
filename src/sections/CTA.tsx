import { useState } from 'react'
import { motion } from 'framer-motion'
import { Arrow } from '../components/Arrow'
import { Letters } from '../components/Reveal'
import { EASE } from '../utils'

export function CTA() {
  const [hovered, setHovered] = useState(false)

  return (
    <section className="relative overflow-hidden px-6 py-32 text-center md:px-10 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1 }}
        >
          <p className="label mb-8 text-sub">Have a project in mind?</p>
          <h2 className="font-serif text-[clamp(3rem,7vw,8rem)] leading-[0.98] tracking-tight">
            <Letters text="Let's build" delay={0.1} />{' '}
            <em className="italic">
              <Letters text="something" delay={0.3} />
            </em>{' '}
            <Letters text="unforgettable" delay={0.5} />
          </h2>

          <motion.a
            href="/contact"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
            whileHover={{ scale: 1.04 }}
            className="mt-14 inline-flex items-center gap-4 rounded-full bg-ink px-10 py-6 text-lg font-semibold text-paper transition-colors duration-500 hover:bg-black"
          >
            Start a project
            <Arrow size={22} hovered={hovered} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
