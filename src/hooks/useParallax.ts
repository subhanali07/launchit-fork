import { useEffect, useRef } from 'react'

export function useParallax(strength = 0.04, baseScale = 1) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0

    const onMouseMove = (e: globalThis.MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2
      ty = (e.clientY / window.innerHeight - 0.5) * 2
    }

    const loop = () => {
      cx += (tx - cx) * 0.08
      cy += (ty - cy) * 0.08
      el.style.transform = `translate3d(${cx * strength * 100}%, ${cy * strength * 100}%, 0) scale(${baseScale})`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMouseMove)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [strength, baseScale])

  return ref
}
