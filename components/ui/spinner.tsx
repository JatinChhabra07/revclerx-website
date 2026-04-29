/** Spinner — simple CSS spinner. */
import { cn } from '@/lib/utils'

export function Spinner({ className, size = 20, strokeWidth = 2 }: { className?: string; size?: number; strokeWidth?: number }) {
  return (
    <svg
      className={cn('animate-spin-slow', className)}
      style={{ width: size, height: size, animationDuration: '1s' }}
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Loading"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={strokeWidth} strokeOpacity="0.2" />
      <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
