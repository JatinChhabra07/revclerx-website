'use client'
/** StickyScrollReveal — sticky left column with text, right column scrolls with visuals. */
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Section { title: string; description: string; content: React.ReactNode }

export function StickyScrollReveal({ content, className }: { content: Section[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const cardLength = content.length
      const breakpoints = content.map((_, i) => i / cardLength)
      const idx = breakpoints.reduce((acc, bp, i) => (latest >= bp ? i : acc), 0)
      setActive(idx)
    })
    return () => unsubscribe()
  }, [scrollYProgress, content.length])

  return (
    <motion.div ref={ref} className={cn('relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10', className)}>
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((c, i) => (
            <div key={i} className="my-20">
              <motion.h2 animate={{ opacity: active === i ? 1 : 0.3 }} className="text-2xl font-bold">{c.title}</motion.h2>
              <motion.p animate={{ opacity: active === i ? 1 : 0.3 }} className="mt-6 max-w-sm text-muted-foreground">{c.description}</motion.p>
            </div>
          ))}
        </div>
      </div>
      <div className="sticky top-10 hidden h-60 w-80 rounded-md overflow-hidden bg-card lg:block">
        {content[active]?.content}
      </div>
    </motion.div>
  )
}
