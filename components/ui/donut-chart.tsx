'use client'
/** DonutChart — SVG donut with animated stroke-dashoffset per slice. */
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function DonutChart({
  data,
  size = 180,
  strokeWidth = 22,
  className,
}: {
  data: { value: number; color: string; label?: string }[]
  size?: number
  strokeWidth?: number
  className?: string
}) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const total = data.reduce((a, b) => a + b.value, 0) || 1
  const r = (size - strokeWidth) / 2
  const c = 2 * Math.PI * r
  let acc = 0

  return (
    <svg ref={ref} width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={cn('', className)} aria-hidden>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth={strokeWidth} />
      {data.map((s, i) => {
        const portion = s.value / total
        const offset = c - portion * c
        const rotation = (acc / total) * 360
        acc += s.value
        return (
          <motion.circle
            key={i}
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={strokeWidth}
            strokeDasharray={c}
            strokeDashoffset={offset}
            strokeLinecap="butt"
            style={{ transform: `rotate(${rotation - 90}deg)`, transformOrigin: '50% 50%' }}
            initial={{ strokeDashoffset: c }}
            animate={inView ? { strokeDashoffset: offset } : undefined}
            transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        )
      })}
    </svg>
  )
}
