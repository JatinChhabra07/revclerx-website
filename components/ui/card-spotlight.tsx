'use client'
/** CardSpotlight — radial spotlight follows cursor inside card. */
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function CardSpotlight({
  children,
  className,
  color = 'rgba(99, 102, 241, 0.15)',
  radius = 400,
}: { children: React.ReactNode; className?: string; color?: string; radius?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  function move(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    ref.current.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={move}
      className={cn('relative overflow-hidden rounded-2xl border border-border bg-card p-8 group', className)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(${radius}px circle at var(--mx, 50%) var(--my, 50%), ${color}, transparent 40%)` }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
