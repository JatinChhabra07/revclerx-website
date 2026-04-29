'use client'
/** HighlightText — sweeps a colored highlighter behind text on in-view. */
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function HighlightText({
  children,
  color = 'rgba(245, 208, 66, 0.35)',
  className,
}: {
  children: React.ReactNode
  color?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <span ref={ref} className={cn('relative inline-block', className)}>
      <motion.span
        className="absolute inset-y-0 left-0 -z-10 rounded"
        initial={{ width: '0%' }}
        animate={inView ? { width: '100%' } : undefined}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: color }}
      />
      <span className="relative">{children}</span>
    </span>
  )
}
