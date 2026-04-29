'use client'
/** PillNav — animated pill that slides behind the active nav item. */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function PillNav({
  items,
  className,
  activeIndex = 0,
  onChange,
}: {
  items: { label: string; href?: string }[]
  className?: string
  activeIndex?: number
  onChange?: (i: number) => void
}) {
  const [active, setActive] = useState(activeIndex)

  return (
    <nav className={cn('inline-flex rounded-full bg-muted p-1', className)}>
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => { setActive(i); onChange?.(i) }}
          className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
        >
          {active === i && (
            <motion.div
              layoutId="pill-bg"
              className="absolute inset-0 rounded-full bg-background shadow-sm"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          <span className={cn('relative z-10', active === i ? 'text-foreground' : 'text-muted-foreground')}>
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  )
}
