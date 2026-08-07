import { FiArrowUpRight } from 'react-icons/fi'

type ArrowProps = {
  size?: number
  hovered?: boolean
  className?: string
}

export function Arrow({ size = 20, hovered = false, className }: ArrowProps) {
  return (
    <span
      className={`inline-flex items-center justify-center transition-transform duration-500 ${
        hovered ? 'translate-x-1 -translate-y-1' : ''
      } ${className ?? ''}`}
      aria-hidden="true"
    >
      <FiArrowUpRight size={size} strokeWidth={1.5} />
    </span>
  )
}
