'use client'

import React, { useRef, type ReactNode } from 'react'
import { useScroll, useTransform, motion, type MotionValue } from 'framer-motion'

/**
 * ContainerScroll — 3D card that tilts + scales as the user scrolls.
 * The title translates up, card rotates from rotateX:20 → rotateX:0,
 * scales from 1.05 → 1. Mobile fallback: plain static layout
 * (no JS state, no hydration CLS).
 *
 * Classic hero showcase for SaaS product shots.
 *
 * Source: veloice-ai
 *
 * Usage:
 *   <ContainerScroll
 *     titleComponent={<h1>Unleash X</h1>}
 *   >
 *     <img src="/dashboard.png" />
 *   </ContainerScroll>
 */

export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: ReactNode
  children: ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1])
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <>
      {/* Mobile — static */}
      <div className="flex md:hidden flex-col items-center justify-start w-full pb-10">
        <div className="w-full text-center mb-6">{titleComponent}</div>
        <div className="w-full px-4">
          <div
            className="mx-auto h-[22rem] w-full border-4 border-[#6C6C6C] p-2 bg-[#222222] rounded-[30px] shadow-2xl"
            style={{
              boxShadow:
                '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
            }}
          >
            <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900">
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop — scroll timeline */}
      <div
        className="hidden md:flex h-[80rem] items-center justify-center relative p-2 md:p-20"
        ref={containerRef}
      >
        <div
          className="py-40 w-full relative"
          style={{ perspective: '1000px' }}
        >
          <ScrollHeader translate={translate} titleComponent={titleComponent} />
          <ScrollCard rotate={rotate} scale={scale}>
            {children}
          </ScrollCard>
        </div>
      </div>
    </>
  )
}

interface HeaderProps {
  translate: MotionValue<number>
  titleComponent: ReactNode
}

function ScrollHeader({ translate, titleComponent }: HeaderProps) {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  )
}

function ScrollCard({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  children: ReactNode
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className="max-w-5xl mt-8 mx-auto h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  )
}
