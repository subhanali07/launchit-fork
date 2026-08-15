import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '../utils'

const NAV_ITEMS = [
  { label: 'HOME', number: '02', to: '/' },
  { label: 'SERVICES', number: '12', to: '/services' },
  { label: 'ABOUT', number: '14', to: '/#about' },
  { label: 'PROJECTS', number: '10', to: '/#featured' },
  { label: 'FAQS', number: '16', to: '/#faqs' },
  { label: 'CONTACT US', number: '19', to: '/contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('HOME')
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const el = document.getElementById('hero')
    const check = () => {
      if (open) {
        setDark(false)
        return
      }
      if (!el) {
        setDark(false)
        return
      }
      const rect = el.getBoundingClientRect()
      setDark(rect.top < 40 && rect.bottom > 20)
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [open])

  const iconClass = open
    ? 'text-(--text)'
    : dark
      ? 'text-white'
      : 'text-(--text)'

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'fixed top-4 right-4 z-[70] p-1 transition-colors duration-300 sm:top-6 sm:right-8',
          iconClass,
        )}
      >
        {open ? <X size={40} strokeWidth={1.8} /> : <Menu size={40} strokeWidth={1.8} />}
      </button>

      <div
        className={cn(
          'fixed inset-0 z-[60] bg-(--page) transition-transform duration-300 ease-in-out',
          open ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <div className="flex items-center justify-between px-6 py-6 sm:px-14 sm:py-10">
          <div className="flex items-center gap-2 text-(--lime-text)">
            <span className="h-px w-24 bg-[#CFFF04] sm:w-40" />
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </div>
        </div>

        <ul className="mt-4">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.label
            return (
              <li key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => {
                    setActive(item.label)
                    setOpen(false)
                  }}
                  className={cn(
                    'flex w-full items-center gap-3 px-6 py-4 text-left transition-colors sm:px-14 sm:py-5',
                    isActive
                      ? 'bg-[#CFFF04] text-black'
                      : 'bg-transparent text-(--text) hover:bg-(--border)',
                  )}
                >
                  <span
                    className={cn(
                      'text-xs font-medium',
                      isActive ? 'text-black/60' : 'text-(--lime-text)',
                    )}
                  >
                    /{item.number}
                  </span>
                  <span
                    className={cn(
                      'font-black uppercase tracking-tight',
                      isActive ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl',
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
