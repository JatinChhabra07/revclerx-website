'use client'
/** RippleButton — click ripple effect (material design style). */
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface Ripple { x: number; y: number; size: number; id: number }

export function RippleButton({ children, className, rippleColor = 'rgba(255,255,255,0.5)', ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement> & { rippleColor?: string }) {
  const ref = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])

  function click(e: React.MouseEvent<HTMLButtonElement>) {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const size = Math.max(r.width, r.height) * 2
    const ripple = { x: e.clientX - r.left - size / 2, y: e.clientY - r.top - size / 2, size, id: Date.now() }
    setRipples(prev => [...prev, ripple])
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== ripple.id)), 600)
    rest.onClick?.(e)
  }

  return (
    <button
      ref={ref}
      onClick={click}
      className={cn('relative overflow-hidden inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground', className)}
      {...rest}
    >
      {ripples.map(r => (
        <span
          key={r.id}
          className="absolute rounded-full pointer-events-none"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size, background: rippleColor, animation: 'ripple-expand 600ms ease-out forwards' }}
        />
      ))}
      <span className="relative">{children}</span>
      <style>{`
        @keyframes ripple-expand { to { transform: scale(1); opacity: 0; } from { transform: scale(0); opacity: 1; } }
      `}</style>
    </button>
  )
}
