import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { Reveal } from '../components/Reveal'
import { data, EASE } from '../utils'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = data.testimonials.length
  const item = data.testimonials[index]

  const go = (dir: number) => {
    setIndex((i) => (i + dir + total) % total)
  }

  return (
    <section id="testimonials" className="border-t border-line px-6 py-32 md:px-10 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <p className="label mb-6 text-sub">Testimonials</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="relative flex min-h-[340px] items-center md:col-span-9">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <p className="font-serif text-[clamp(1.75rem,3.2vw,3.25rem)] leading-[1.15] tracking-tight">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-10 flex items-center gap-4">
                  <img
                    src={`https://i.pravatar.cc/64?u=${index}`}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-[15px] font-semibold">{item.name}</p>
                    <p className="text-sm text-sub">{item.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-end gap-6 md:col-span-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                <HiArrowLeft size={18} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                <HiArrowRight size={18} />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-num text-lg">{String(index + 1).padStart(2, '0')}</span>
              <span className="h-px flex-1 bg-line" />
              <span className="font-num text-lg text-sub">
                {String(total).padStart(2, '0')}
              </span>
            </div>
            <div className="label text-sub">Trusted by teams worldwide</div>
          </div>
        </div>
      </div>
    </section>
  )
}
