'use client'
/** FlipText — per-character 3D flip-in on scroll. */
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function FlipText({
  text,
  duration = 0.5,
  delayStep = 0.05,
  className,
}: {
  text: string
  duration?: number
  delayStep?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <span ref={ref} className={cn('inline-flex', className)}>
      {text.split('').map((c, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', transformOrigin: '50% 60%' }}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={inView ? { rotateX: 0, opacity: 1 } : undefined}
          transition={{ duration, delay: i * delayStep, ease: [0.22, 1, 0.36, 1] }}
        >
          {c === ' ' ? '\u00A0' : c}
        </motion.span>
      ))}
    </span>
  )
}
