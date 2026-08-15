import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { EASE } from '../utils'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const inputClass =
  'w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-lg text-ink transition-colors duration-300 placeholder:text-sub/50 focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10'

export function Contact() {
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
        subject: value('subject'),
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
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              e.currentTarget.requestSubmit()
            }
          }}
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
            <Button
              label={status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send message'}
              type="submit"
              disabled={status === 'sending'}
            />
            {status === 'error' && (
              <p className="text-base text-red-500">Message not sent, please try again.</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
