'use client'

import { useRef, type ComponentPropsWithoutRef, type ElementType, type ReactNode, type RefObject } from 'react'
import { motion, useInView, type TargetAndTransition, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * TimelineContent — staggered blur-to-sharp reveal used on process /
 * timeline sections. Each item gets `animationNum={n}`; delays automatically
 * by animationNum * 0.15s.
 *
 * Source: veloice-ai
 *
 * Usage:
 *   {steps.map((step, i) => (
 *     <TimelineContent key={i} animationNum={i}>
 *       <Step {...step} />
 *     </TimelineContent>
 *   ))}
 */

type MotionIncompatibleDivProps =
  | 'onAnimationStart'
  | 'onAnimationEnd'
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd'
  | 'onDragEnter'
  | 'onDragExit'
  | 'onDragLeave'
  | 'onDragOver'
  | 'onDrop'

interface CustomVariants {
  visible: ((i: number) => TargetAndTransition) | TargetAndTransition
  hidden: TargetAndTransition
}

interface TimelineContentProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children' | MotionIncompatibleDivProps> {
  as?: ElementType
  animationNum?: number
  timelineRef?: RefObject<HTMLDivElement | null>
  customVariants?: CustomVariants
  className?: string
  children: ReactNode
}

export function TimelineContent({
  as: _as,
  animationNum = 0,
  timelineRef: _timelineRef,
  customVariants,
  className,
  children,
  ...rest
}: TimelineContentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const resolvedVariants: Variants = customVariants
    ? {
        visible:
          typeof customVariants.visible === 'function'
            ? customVariants.visible(animationNum)
            : customVariants.visible,
        hidden: customVariants.hidden,
      }
    : {
        visible: {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          transition: { delay: animationNum * 0.15, duration: 0.5 },
        },
        hidden: { y: -20, opacity: 0, filter: 'blur(10px)' },
      }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={resolvedVariants}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
