'use client'
/** VelocityScroll — horizontal marquee that speeds up based on scroll velocity. */
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, wrap } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function VelocityScroll({
  text,
  defaultVelocity = 5,
  className,
}: { text: string; defaultVelocity?: number; className?: string }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false })
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)
  const directionFactor = useRef(1)

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * defaultVelocity * (delta / 1000)
    if (velocityFactor.get() < 0) directionFactor.current = -1
    else if (velocityFactor.get() > 0) directionFactor.current = 1
    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className={cn('parallax overflow-hidden tracking-tight leading-[0.8]', className)}>
      <motion.div className="flex whitespace-nowrap text-5xl md:text-7xl font-bold" style={{ x }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="block mr-8">{text}</span>
        ))}
      </motion.div>
    </div>
  )
}
