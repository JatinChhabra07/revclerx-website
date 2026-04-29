'use client'
/** VortexBackground — rotating radial gradient vortex. */
import { cn } from '@/lib/utils'

export function VortexBackground({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)} aria-hidden>
      <div
        className="absolute -inset-[50%]"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, #4f46e5, #9333ea, #db2777, #f59e0b, #4f46e5)',
          filter: 'blur(80px)',
          animation: 'spin-slow 25s linear infinite',
        }}
      />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-3xl" />
    </div>
  )
}
