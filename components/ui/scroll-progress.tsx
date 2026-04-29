'use client'
/** ScrollProgress — top bar that fills as user scrolls the page. */
import { motion, useScroll, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

export function ScrollProgress({ className, color = '#3b82f6' }: { className?: string; color?: string }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, restDelta: 0.001 })
  return (
    <motion.div
      className={cn('fixed top-0 left-0 right-0 h-1 origin-left z-[100]', className)}
      style={{ scaleX, background: color }}
    />
  )
}
