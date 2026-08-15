import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { EASE } from '../utils'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const FONT = 'font-[Arial_Rounded_MT_Bold,Arial,sans-serif]'

const inputClass =
  'w-full min-w-0 border-b border-(--border-strong) bg-transparent px-0 py-3.5 text-base text-(--text) transition-colors duration-300 placeholder:text-(--text-faint) focus:border-[#CFFF04] focus:outline-none'

export default function Connect() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    const value = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null)?.value ?? ''

    setStatus('sending')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: value('from_name'),
        from_email: value('from_email'),
        message: value('message'),
      }, { publicKey: PUBLIC_KEY })
      setStatus('sent')
      form.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="w-full overflow-hidden bg-(--surface) px-4 py-12 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mx-auto max-w-[1440px] rounded-[2rem] bg-(--card) px-5 py-7 sm:rounded-[2.75rem] sm:px-10 sm:py-11 lg:px-14 lg:py-14"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-20 xl:gap-28">
          <div className="flex min-w-0 flex-col">
            <div>
              <h2
                className={`${FONT} max-w-full text-[clamp(2.8rem,14vw,4.5rem)] font-black leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[clamp(4.5rem,6vw,6.5rem)]`}
              >
                <span className="block text-(--text)">let's</span>
                <span className="block text-(--pink-text)">connect.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-(--text-muted) sm:mt-8 sm:text-base mb-4">
                Have a project in mind or just want to say hello? Tell us a little
                about it.
              </p>
              <p className="mb-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-(--text-muted)">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-(--pink-text)" />
                  Islamabad, Pakistan
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-(--indigo-text)" />
                  Karachi, Pakistan
                </span>
                <span className="text-(--text-faint)">working with clients worldwide</span>
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-7 sm:mt-10 lg:mt-auto">
              <a
                href="mailto:launchitweb@gmail.com"
                className="group inline-flex w-full items-center justify-between rounded-full border border-[#CFFF04] px-5 py-3.5 text-base font-semibold text-(--lime-text) transition-colors duration-300 hover:bg-[#CFFF04] hover:text-[#1C1C1C] sm:w-fit sm:gap-8 sm:px-6"
              >
                Email us
                <ArrowUpRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                e.currentTarget.requestSubmit()
              }
            }}
            className="flex min-w-0 flex-col gap-7 lg:border-l lg:border-(--border) lg:pl-14 xl:pl-20"
          >
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8">
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Name"
                required
                className={inputClass}
              />
              <input
                type="email"
                id="from_email"
                name="from_email"
                placeholder="Email Address"
                required
                className={inputClass}
              />
            </div>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Message"
              required
              className={`${inputClass} resize-y`}
            />

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#CFFF04] px-8 py-4 text-base font-semibold text-[#1C1C1C] transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send'}
                <ArrowUpRight size={18} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              {status === 'error' && (
                <span className="text-center text-base font-medium text-red-400 sm:text-right">
                  Message not sent, please try again.
                </span>
              )}
              <span className="text-center text-base font-medium leading-relaxed text-(--text-faint) sm:text-right">
                or email us directly at{' '}
                <a
                  href="mailto:launchitweb@gmail.com"
                  className="font-semibold text-(--text) underline-offset-4 transition-colors hover:text-(--lime-text) hover:underline"
                >
                  launchitweb@gmail.com
                </a>
              </span>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
