'use client'
/** ZoomParallax — images zoom differently as the section scrolls past (cinematic gallery). */
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function ZoomParallax({ images, className }: { images: string[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const scale0 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 9])
  const scales = [scale0, scale1, scale2, scale3, scale4]

  const positions = [
    { top: '0', left: '0', width: '25vw', height: '25vh' },
    { top: '-30vh', left: '5vw', width: '35vw', height: '30vh' },
    { top: '-10vh', left: '-25vw', width: '20vw', height: '45vh' },
    { top: '25vh', left: '25vw', width: '25vw', height: '25vh' },
    { top: '27.5vh', left: '-22.5vw', width: '30vw', height: '25vh' },
  ]

  return (
    <div ref={ref} className={cn('h-[300vh] relative', className)}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.slice(0, 5).map((img, i) => (
          <motion.div key={i} style={{ scale: scales[i], ...positions[i] }} className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="relative" style={{ width: positions[i].width, height: positions[i].height }}>
              <Image src={img} alt="" fill className="object-cover" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
