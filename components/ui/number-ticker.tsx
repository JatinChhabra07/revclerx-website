'use client'
/** NumberTicker — animated odometer-style number on in-view. */
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  duration = 1600,
  className,
  decimals = 0,
}: {
  value: number
  direction?: 'up' | 'down'
  delay?: number
  duration?: number
  className?: string
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(direction === 'down' ? value : 0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now() + delay
        const from = direction === 'down' ? value : 0
        const to = direction === 'down' ? 0 : value
        const tick = (now: number) => {
          const t = Math.min(Math.max(now - start, 0) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(from + (to - from) * eased)
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, direction, delay, duration])

  return (
    <span ref={ref} className={cn('inline-block tabular-nums', className)}>
      {display.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
    </span>
  )
}
