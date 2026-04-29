'use client'
/** ProgressBar — animated horizontal progress fill with optional shimmer. */
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function ProgressBar({
  value,
  className,
  color = '#3b82f6',
  height = 6,
  shimmer = false,
}: { value: number; className?: string; color?: string; height?: number; shimmer?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className={cn('w-full rounded-full bg-muted overflow-hidden', className)} style={{ height }}>
      <motion.div
        className={cn('h-full rounded-full relative', shimmer && 'animate-shimmer')}
        style={{ background: color, backgroundSize: shimmer ? '200% 100%' : undefined }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${Math.min(100, Math.max(0, value))}%` } : undefined}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
