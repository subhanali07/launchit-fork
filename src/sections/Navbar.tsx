import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { data, EASE, cn } from '../utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        className={cn(
          'fixed top-0 left-0 z-50 w-full transition-colors duration-500',
          scrolled || open ? 'bg-paper/90 backdrop-blur-md border-b border-line' : 'bg-transparent',
        )}
      >
        <nav
          className={cn(
            'mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10 xl:px-16 py-5',
          )}
        >
          <a
            href="#"
            className="font-serif text-2xl tracking-tight text-ink"
            aria-label="Blanc home"
          >
            BLANC
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {data.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="label link-underline text-ink/80 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            {open ? (
              <HiOutlineX size={20} />
            ) : (
              <HiOutlineMenuAlt3 size={20} />
            )}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-paper px-6 md:px-10 lg:px-16"
          >
            <ul className="flex flex-col gap-2">
              {data.nav.map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.1 + i * 0.07 }}
                    className="group flex items-center gap-6 py-2"
                  >
                    <span className="font-num text-sm text-sub">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-5xl text-ink transition-transform duration-500 group-hover:translate-x-3 md:text-6xl">
                      {item.label}
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12 flex flex-wrap gap-x-10 gap-y-2 text-sm text-sub"
            >
              <a href="mailto:hello@blanc.studio" className="link-underline">
                hello@blanc.studio
              </a>
              <a href="tel:+100****0000" className="link-underline">
                +1 000 000 0000
              </a>
              <span>New York · Lisbon</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}