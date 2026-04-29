'use client'
/** TiltCard — mouse-driven 3D tilt with highlight. Simpler than Card3D. */
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function TiltCard({ children, className, maxTilt = 12 }: { children: React.ReactNode; className?: string; maxTilt?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({ transform: 'perspective(800px) rotateX(0) rotateY(0)' })

  function move(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top
    const rx = ((y - height / 2) / (height / 2)) * -maxTilt
    const ry = ((x - width / 2) / (width / 2)) * maxTilt
    setStyle({ transform: `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`, transition: 'transform 80ms linear' })
  }

  function leave() {
    setStyle({ transform: 'perspective(800px) rotateX(0) rotateY(0)', transition: 'transform 400ms cubic-bezier(0.22, 1, 0.36, 1)' })
  }

  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} style={style} className={cn('will-change-transform', className)}>
      {children}
    </div>
  )
}
