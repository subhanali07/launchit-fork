import { useState } from 'react'
import { Arrow } from './Arrow'
import { cn } from '../utils'

type ButtonProps = {
  label: string
  href?: string
  variant?: 'primary' | 'secondary' | 'text'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({
  label,
  href = '#',
  variant = 'primary',
  className,
  type,
  disabled = false,
}: ButtonProps) {
  const [hovered, setHovered] = useState(false)

  const base =
    'group inline-flex items-center justify-center gap-3 rounded-full text-lg font-semibold tracking-wide transition-all duration-500'

  const styles = {
    primary: 'bg-ink text-paper px-8 py-4 hover:scale-[1.03] hover:bg-black',
    secondary:
      'border border-line text-ink px-8 py-4 hover:border-ink hover:bg-ink hover:text-paper',
    text: 'text-ink px-0 py-2',
  }

  const hoverProps = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }

  const content = (
    <>
      {label}
      <Arrow hovered={hovered} className="text-inherit transition-transform" />
    </>
  )

  if (type) {
    return (
      <button
        type={type}
        disabled={disabled}
        className={cn(base, styles[variant], disabled && 'pointer-events-none opacity-50', className)}
        {...hoverProps}
      >
        {content}
      </button>
    )
  }

  return (
    <a href={href} className={cn(base, styles[variant], className)} {...hoverProps}>
      {content}
    </a>
  )
}
