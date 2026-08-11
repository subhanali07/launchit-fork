import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { EASE } from '../utils'
import emailjs from '@emailjs/browser'

// Note: the contact email isn't functional yet because the domain name isn't set up, so this EmailJS integration stays disabled for now.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

type Status = { type: 'success' | 'error'; text: string } | null

const inputClass =
  'w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-[15px] text-ink transition-colors duration-300 placeholder:text-sub/50 focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10'

export function Contact() {
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
      subject: value('subject'),
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
    <section id="contact" className="border-t border-line px-6 py-32 md:px-10 xl:px-16">
      <div className="mx-auto max-w-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-16"
        >
          <p className="label mb-6 text-sub">Get in touch</p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-tight">
            Tell us about your project
          </h2>
          <p className="mt-6 max-w-md text-[18px] leading-relaxed text-sub">
            We reply to every serious enquiry, usually within two working days.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <label htmlFor="from_name" className="label mb-3 block text-sub">
                Name
              </label>
              <input type="text" id="from_name" name="from_name" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="from_email" className="label mb-3 block text-sub">
                Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                required
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="label mb-3 block text-sub">
              Subject
            </label>
            <input type="text" id="subject" name="subject" required className={inputClass} />
          </div>

          <div>
            <label htmlFor="message" className="label mb-3 block text-sub">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className={`${inputClass} resize-y`}
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button label={isSending ? 'Sending...' : 'Send message'} type="submit" disabled={isSending} />
          </div>

          {status && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-[15px] ${status.type === 'success' ? 'text-ink' : 'text-[#b3261e]'}`}
            >
              {status.text}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
