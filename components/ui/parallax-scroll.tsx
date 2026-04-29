'use client'
/** ParallaxScroll — 3-column masonry where each column scrolls at a different speed. */
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function ParallaxScroll({ images, className }: { images: string[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -200])
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 200])
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -200])

  const third = Math.ceil(images.length / 3)
  const first = images.slice(0, third)
  const second = images.slice(third, 2 * third)
  const third_ = images.slice(2 * third)

  return (
    <div ref={ref} className={cn('h-[40rem] items-start overflow-y-auto w-full', className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-20 px-10">
        <div className="grid gap-10">
          {first.map((el, i) => (
            <motion.div style={{ y: yLeft }} key={i}>
              <Image src={el} alt="" width={400} height={400} className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0" />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {second.map((el, i) => (
            <motion.div style={{ y: yMid }} key={i}>
              <Image src={el} alt="" width={400} height={400} className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0" />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {third_.map((el, i) => (
            <motion.div style={{ y: yRight }} key={i}>
              <Image src={el} alt="" width={400} height={400} className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
