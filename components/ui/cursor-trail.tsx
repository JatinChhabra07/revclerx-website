'use client'
/** CursorTrail — trail of colored dots following the cursor. Desktop only. */
import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export function CursorTrail({ color = '#6366f1', size = 8, trailLength = 12, className }: { color?: string; size?: number; trailLength?: number; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    const points: { x: number; y: number }[] = []
    const handle = (e: MouseEvent) => { points.push({ x: e.clientX, y: e.clientY }); if (points.length > trailLength) points.shift() }
    window.addEventListener('mousemove', handle)

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      points.forEach((p, i) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, (size * (i / trailLength)) / 1.5 + 2, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.globalAlpha = (i / trailLength) * 0.6
        ctx.fill()
      })
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => { window.removeEventListener('resize', resize); window.removeEventListener('mousemove', handle); cancelAnimationFrame(raf) }
  }, [color, size, trailLength])

  return <canvas ref={canvasRef} className={cn('fixed inset-0 pointer-events-none z-[100]', className)} aria-hidden />
}
