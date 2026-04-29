'use client'
/** Hover3DCard — lighter 3D card (just rotate + shadow-lift). */
import { useRef } from 'react'
import { cn } from '@/lib/utils'

export function Hover3DCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  function move(e: React.MouseEvent) {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width - 0.5) * 16
    const y = ((e.clientY - r.top) / r.height - 0.5) * -16
    ref.current.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg)`
  }
  function leave() {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0)'
  }

  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={cn('transition-transform will-change-transform', className)}>
      {children}
    </div>
  )
}
