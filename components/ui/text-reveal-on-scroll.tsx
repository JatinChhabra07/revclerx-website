'use client'
/** TextRevealOnScroll — each word brightens as user scrolls (like Linear blog). */
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function TextRevealOnScroll({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.25'] })
  const words = text.split(' ')

  return (
    <div ref={ref} className={cn('relative z-0', className)}>
      <p className="flex flex-wrap text-2xl md:text-3xl font-bold text-foreground/20">
        {words.map((w, i) => {
          const start = i / words.length
          const end = start + 1 / words.length
          return <Word key={i} progress={scrollYProgress} range={[start, end]}>{w}</Word>
        })}
      </p>
    </div>
  )
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <span className="mr-2 mt-2 inline-block">
      <motion.span style={{ opacity }} className="text-foreground">{children}</motion.span>
    </span>
  )
}
