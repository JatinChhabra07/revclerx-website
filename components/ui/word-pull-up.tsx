'use client'
/** WordPullUp — words fade+rise one at a time on in-view. */
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function WordPullUp({
  text,
  delayStep = 0.12,
  className,
}: {
  text: string
  delayStep?: number
  className?: string
}) {
  const ref = useRef<HTMLHeadingElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <h2 ref={ref} className={cn('flex flex-wrap', className)}>
      {text.split(' ').map((w, i) => (
        <motion.span
          key={i}
          className="mr-2 inline-block"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: i * delayStep, ease: [0.22, 1, 0.36, 1] }}
        >
          {w}
        </motion.span>
      ))}
    </h2>
  )
}
