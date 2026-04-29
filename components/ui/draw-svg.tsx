'use client'
/** DrawSVG — wrapper that draws any SVG path on in-view (path-length animation). */
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function DrawSVG({
  path,
  stroke = 'currentColor',
  strokeWidth = 2,
  duration = 1.5,
  className,
  viewBox = '0 0 200 200',
}: {
  path: string
  stroke?: string
  strokeWidth?: number
  duration?: number
  className?: string
  viewBox?: string
}) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <svg ref={ref} viewBox={viewBox} className={cn('w-full h-full', className)} fill="none" aria-hidden>
      <motion.path
        d={path}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
        transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  )
}
