'use client'
/** GlareCard — card with a diagonal glare that follows cursor. */
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function GlareCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  function move(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    ref.current.style.setProperty('--gx', `${x}%`)
    ref.current.style.setProperty('--gy', `${y}%`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={move}
      className={cn('relative overflow-hidden rounded-2xl border border-border bg-card p-8', className)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
        style={{
          background: 'radial-gradient(600px circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.15), transparent 40%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
