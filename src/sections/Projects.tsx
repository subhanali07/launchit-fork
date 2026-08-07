import { useState } from 'react'
import { motion } from 'framer-motion'
import { Arrow } from '../components/Arrow'
import { Reveal, Letters } from '../components/Reveal'
import { data, EASE } from '../utils'

export function Projects() {
  const [cursor, setCursor] = useState({ visible: false, x: 0, y: 0 })
  const [hovered, setHovered] = useState(-1)

  return (
    <section id="work" className="px-6 py-32 md:px-10 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="label mb-6 text-sub">Selected work</p>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1.02] tracking-tight">
              <Letters text="Work that speaks" />
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href="#contact"
              className="label link-underline inline-flex items-center gap-2 text-ink"
            >
              All projects <Arrow size={16} />
            </a>
          </Reveal>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-2"
          onMouseMove={(e) => setCursor({ visible: true, x: e.clientX, y: e.clientY })}
          onMouseLeave={() => setCursor((c) => ({ ...c, visible: false }))}
        >
          {data.projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 1, ease: EASE, delay: (i % 2) * 0.1 }}
              className={`group cursor-pointer ${i % 3 === 1 ? 'md:mt-28' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(-1)}
            >
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl tracking-tight md:text-3xl">{project.title}</h3>
                <span className="label text-sub">{project.year}</span>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={project.src}
                  alt={project.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>
              <p className="label mt-5 flex items-center justify-between text-sub">
                {project.category}
                <Arrow size={18} hovered={hovered === i} />
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed z-50 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink px-6 py-3 lg:flex"
          animate={{ left: cursor.x, top: cursor.y, opacity: cursor.visible ? 1 : 0, scale: cursor.visible ? 1 : 0.6 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        >
          <span className="label text-paper">View</span>
        </motion.div>
      </div>
    </section>
  )
}
