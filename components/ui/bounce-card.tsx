'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * BounceCard — hover-bouncy card. Scales down + rotates slightly on hover
 * for a playful "pressed-in" feel. Good for feature grids.
 *
 * Source: VMS
 */

interface BounceCardProps {
  className?: string
  children: React.ReactNode
}

export function BounceCard({ className, children }: BounceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: '-1deg' }}
      className={cn(
        'group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-50 border border-slate-200/60 p-8',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export function BounceCardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mx-auto text-center text-2xl font-bold text-slate-900 md:text-3xl">
      {children}
    </h3>
  )
}
