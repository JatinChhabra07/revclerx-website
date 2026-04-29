'use client'
/** LetterReveal — per-letter fade+y rise on in-view. */
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function LetterReveal({
  text,
  stagger = 0.03,
  className,
}: {
  text: string
  stagger?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <span ref={ref} className={cn('inline-block', className)}>
      {text.split('').map((c, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.4, delay: i * stagger, ease: [0.22, 1, 0.36, 1] }}
        >
          {c === ' ' ? '\u00A0' : c}
        </motion.span>
      ))}
    </span>
  )
}
