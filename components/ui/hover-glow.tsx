'use client'
/** HoverGlow — wraps any element; adds a soft glow that follows the cursor on hover. */
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function HoverGlow({
  children,
  className,
  color = 'rgba(99, 102, 241, 0.3)',
  size = 300,
}: { children: React.ReactNode; className?: string; color?: string; size?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  function move(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--gx', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--gy', `${e.clientY - r.top}px`)
  }

  return (
    <div ref={ref} onMouseMove={move} className={cn('relative', className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[inherit]"
        style={{ background: `radial-gradient(${size}px circle at var(--gx, 50%) var(--gy, 50%), ${color}, transparent 50%)` }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
