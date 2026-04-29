'use client'
/** HyperText — scramble each letter once on mount/hover. */
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

export function HyperText({
  text,
  duration = 800,
  className,
  triggerOnHover = false,
}: {
  text: string
  duration?: number
  className?: string
  triggerOnHover?: boolean
}) {
  const [display, setDisplay] = useState(text)
  const raf = useRef<number | null>(null)

  function scramble() {
    const start = performance.now()
    const final = text.split('')
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const rev = Math.floor(p * final.length)
      setDisplay(final.map((c, i) => (i < rev || c === ' ' ? c : ALPHABET[Math.floor(Math.random() * ALPHABET.length)])).join(''))
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    if (!triggerOnHover) scramble()
    return () => { if (raf.current) cancelAnimationFrame(raf.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <span className={cn('inline-block font-mono', className)} onMouseEnter={triggerOnHover ? scramble : undefined} aria-label={text}>
      {display}
    </span>
  )
}
