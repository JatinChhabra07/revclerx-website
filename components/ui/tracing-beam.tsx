'use client'
/** TracingBeam — animated vertical beam that tracks user's scroll down the page. */
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function TracingBeam({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) setSvgHeight(contentRef.current.offsetHeight)
  }, [])

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), { stiffness: 500, damping: 90 })
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), { stiffness: 500, damping: 90 })

  return (
    <motion.div ref={ref} className={cn('relative mx-auto max-w-4xl h-full w-full', className)}>
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{ boxShadow: scrollYProgress.get() > 0 ? 'none' : '0 0 0 2px rgba(99, 102, 241, 0.25)' }}
          className="ml-[27px] h-4 w-4 rounded-full border border-border bg-background shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{ backgroundColor: scrollYProgress.get() > 0 ? 'transparent' : '#10b981' }}
            className="h-2 w-2 rounded-full border border-border bg-primary"
          />
        </motion.div>
        <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="ml-4 block" aria-hidden>
          <motion.path d={`M 1 0 V -36 l 18 24 V ${svgHeight * 0.8} l -18 24 V ${svgHeight}`} fill="none" stroke="#9091A0" strokeOpacity="0.16" transition={{ duration: 10 }} />
          <motion.path d={`M 1 0 V -36 l 18 24 V ${svgHeight * 0.8} l -18 24 V ${svgHeight}`} fill="none" stroke="url(#tb-gradient)" strokeWidth="1.25" className="motion-reduce:hidden" />
          <defs>
            <motion.linearGradient id="tb-gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  )
}
