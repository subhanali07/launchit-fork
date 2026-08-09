import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import { EASE } from '../utils'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const SOCIALS = [
  { label: 'Instagram', href: '#', Icon: FaInstagram },
  { label: 'LinkedIn', href: '#', Icon: FaLinkedinIn },
  { label: 'X', href: '#', Icon: FaXTwitter },
  { label: 'YouTube', href: '#', Icon: FaYoutube },
]

const FONT = 'font-[Arial_Rounded_MT_Bold,Arial,sans-serif]'

type Status = { type: 'success' | 'error'; text: string } | null

const inputClass =
  'w-full min-w-0 border-b border-(--border-strong) bg-transparent px-0 py-3.5 text-base text-(--text) transition-colors duration-300 placeholder:text-(--text-faint) focus:border-[#CFFF04] focus:outline-none'

export default function Connect() {
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<Status>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: 'error',
        text: 'The contact form isn\u2019t configured yet. Add your EmailJS keys to the .env file to enable sending.',
      })
      return
    }

    const value = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null)?.value ?? ''

    const templateParams = {
      from_name: value('from_name'),
      from_email: value('from_email'),
      message: value('message'),
    }

    setIsSending(true)
    setStatus(null)

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY })
      .then(
        () => {
          setStatus({
            type: 'success',
            text: 'Message sent successfully. We\u2019ll get back to you within two working days.',
          })
          form.reset()
          setIsSending(false)
        },
        (error) => {
          console.error('EmailJS error:', error)
          setStatus({
            type: 'error',
            text: 'Something went wrong. Please try again.',
          })
          setIsSending(false)
        },
      )
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
        <div className="mb-10 flex items-center justify-between border-b border-(--border) pb-4 sm:mb-14">
          <span className="font-num text-xs font-medium text-(--text-faint)">
            [ contact ]
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-20 xl:gap-28">
          <div className="flex min-w-0 flex-col">
            <div>
              <h2
                className={`${FONT} max-w-full text-[clamp(2.8rem,14vw,4.5rem)] font-black leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[clamp(4.5rem,6vw,6.5rem)]`}
              >
                <span className="block text-(--text)">let's</span>
                <span className="block text-[#FF2E91]">connect.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-(--text-muted) sm:mt-8 sm:text-base mb-4">
                Have a project in mind or just want to say hello? Tell us a little
                about it.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-7 sm:mt-10 lg:mt-auto">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-between rounded-full border border-[#CFFF04] px-5 py-3.5 text-sm font-semibold text-[#CFFF04] transition-colors duration-300 hover:bg-[#CFFF04] hover:text-[#1C1C1C] sm:w-fit sm:gap-8 sm:px-6"
              >
                Book a call
                <ArrowUpRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <div className="flex flex-col items-start gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-(--text-faint)">
                  Find us on
                </span>
                <div className="grid w-full grid-cols-4 gap-2.5 sm:flex sm:w-auto sm:gap-3">
                  {SOCIALS.map((social) => {
                    const { Icon } = social
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex aspect-square w-full items-center justify-center rounded-full border border-(--border-strong) text-(--text) transition-colors duration-300 hover:border-[#CFFF04] hover:bg-[#CFFF04] hover:text-[#1C1C1C] sm:h-11 sm:w-11"
                      >
                        <Icon size={16} strokeWidth={1.75} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex min-w-0 flex-col gap-7 lg:border-l lg:border-(--border) lg:pl-14 xl:pl-20">
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
                disabled={isSending}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#CFFF04] px-8 py-4 text-base font-semibold text-[#1C1C1C] transition-transform duration-300 hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
              >
                {isSending ? 'Sending...' : 'Send'}
                <ArrowUpRight size={18} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <span className="text-center text-sm font-medium leading-relaxed text-(--text-faint) sm:text-right">
                Prefer email?{' '}
                <a href="mailto:hello@launchit.com" className="font-bold text-(--text) underline underline-offset-2">
                  hello@launchit.com
                </a>
              </span>
            </div>

            {status && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-[15px] font-semibold ${status.type === 'success' ? 'text-[#CFFF04]' : 'text-[#ff6b6b]'}`}
              >
                {status.text}
              </motion.p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  )
}
