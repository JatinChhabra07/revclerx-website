'use client'
/** LensCard — card with a circular "lens" that magnifies the area under cursor. */
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function LensCard({
  children,
  lensSize = 120,
  zoom = 1.6,
  className,
}: { children: React.ReactNode; lensSize?: number; zoom?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0, visible: false })

  function move(e: React.MouseEvent) {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top, visible: true })
  }

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => setPos(p => ({ ...p, visible: false }))}
      className={cn('relative overflow-hidden rounded-2xl', className)}
    >
      {children}
      {pos.visible && (
        <div
          className="pointer-events-none absolute rounded-full border border-white/30 overflow-hidden"
          style={{
            width: lensSize,
            height: lensSize,
            left: pos.x - lensSize / 2,
            top: pos.y - lensSize / 2,
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            backdropFilter: `blur(0) saturate(180%)`,
            transform: `scale(${zoom})`,
            transformOrigin: `${pos.x}px ${pos.y}px`,
          }}
        />
      )}
    </div>
  )
}
