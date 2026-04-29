'use client'
/** AnimatedSubscribeButton — toggles between idle and "subscribed" state with animated swap. */
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function AnimatedSubscribeButton({
  subscribeStatus = false,
  buttonTextOne = 'Subscribe',
  buttonTextTwo = 'Subscribed',
  className,
  onToggle,
}: {
  subscribeStatus?: boolean
  buttonTextOne?: string
  buttonTextTwo?: string
  className?: string
  onToggle?: () => void
}) {
  const [sub, setSub] = useState(subscribeStatus)

  return (
    <AnimatePresence mode="wait">
      {sub ? (
        <motion.button
          key="subscribed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => { setSub(false); onToggle?.() }}
          className={cn('relative flex h-10 w-[200px] items-center justify-center overflow-hidden rounded-md bg-white outline outline-1 outline-gray-300 px-4 text-sm font-semibold', className)}
        >
          <motion.span initial={{ y: -50 }} animate={{ y: 0 }} exit={{ y: 50 }} className="flex items-center gap-2">
            ✓ {buttonTextTwo}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          key="subscribe"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => { setSub(true); onToggle?.() }}
          className={cn('relative flex h-10 w-[200px] items-center justify-center overflow-hidden rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground', className)}
        >
          <span>{buttonTextOne}</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
