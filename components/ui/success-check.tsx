'use client'
/** SuccessCheck — animated green checkmark SVG. Trigger on success states. */
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function SuccessCheck({ size = 80, color = '#22c55e', className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 52 52" width={size} height={size} className={cn('', className)} aria-hidden>
      <motion.circle
        cx="26"
        cy="26"
        r="25"
        fill="none"
        stroke={color}
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d="M14,27 L22,35 L38,17"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  )
}
