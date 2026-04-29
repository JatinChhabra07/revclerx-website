'use client'
/** BarChartAnimated — bars grow in staggered on in-view. */
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function BarChartAnimated({
  data,
  labels,
  color = '#3b82f6',
  className,
  height = 200,
}: {
  data: number[]
  labels?: string[]
  color?: string
  className?: string
  height?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const max = Math.max(...data) || 1

  return (
    <div ref={ref} className={cn('flex items-end gap-2', className)} style={{ height }}>
      {data.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center justify-end gap-2">
          <motion.div
            className="w-full rounded-t"
            style={{ background: color }}
            initial={{ height: 0 }}
            animate={inView ? { height: `${(v / max) * 100}%` } : undefined}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          />
          {labels && <span className="text-[10px] text-muted-foreground">{labels[i]}</span>}
        </div>
      ))}
    </div>
  )
}
