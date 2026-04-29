'use client'
/** Tooltip — minimal tooltip with fade+rise. */
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Tooltip({
  content,
  children,
  className,
  side = 'top',
}: {
  content: React.ReactNode
  children: React.ReactNode
  className?: string
  side?: 'top' | 'bottom' | 'left' | 'right'
}) {
  const [open, setOpen] = useState(false)
  const offsets: Record<typeof side, string> = { top: 'bottom-full mb-2', bottom: 'top-full mt-2', left: 'right-full mr-2', right: 'left-full ml-2' }

  return (
    <span className={cn('relative inline-flex', className)} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {children}
      <AnimatePresence>
        {open && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.12 }}
            className={cn('absolute z-50 whitespace-nowrap rounded bg-foreground text-background px-2 py-1 text-xs', offsets[side])}
          >
            {content}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
