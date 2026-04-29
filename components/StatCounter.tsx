'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  to: number
  suffix?: string
  duration?: number
  decimals?: number
  className?: string
}

export default function StatCounter({
  to,
  suffix = '',
  duration = 1400,
  decimals = 0,
  className = ''
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    let started = false
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true
            const start = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              setValue(parseFloat((to * eased).toFixed(decimals)))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [to, duration, decimals])

  return (
    <span ref={ref} className={className}>
      {decimals === 0 ? Math.round(value) : value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
