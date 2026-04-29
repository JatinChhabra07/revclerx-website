'use client'
/** AreaChart — minimalist SVG area chart. Animates fill on in-view. */
import { motion, useInView } from 'framer-motion'
import { useId, useRef } from 'react'
import { cn } from '@/lib/utils'

export function AreaChart({
  data,
  width = 400,
  height = 120,
  color = '#3b82f6',
  className,
}: { data: number[]; width?: number; height?: number; color?: string; className?: string }) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const id = useId()

  if (data.length < 2) return null
  const max = Math.max(...data), min = Math.min(...data), range = max - min || 1
  const pad = 4
  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (width - pad * 2)
    const y = height - pad - ((v - min) / range) * (height - pad * 2)
    return `${x},${y}`
  })
  const line = points.join(' ')
  const fill = `${pad},${height - pad} ${line} ${width - pad},${height - pad}`

  return (
    <svg ref={ref} width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={cn('w-full h-auto', className)} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.polygon
        points={fill}
        fill={`url(#${id})`}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <motion.polyline
        points={line}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : undefined}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  )
}
