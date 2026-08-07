import { motion } from 'framer-motion'
import { EASE } from '../utils'

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade-down'
  delay?: number
}

const offsets = {
  'fade-up': { y: 60 },
  'fade-down': { y: -60 },
  'fade-left': { x: -60 },
  'fade-right': { x: 60 },
} as const

export function ScrollReveal({ children, variant = 'fade-up', delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0, ...offsets[variant] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}
