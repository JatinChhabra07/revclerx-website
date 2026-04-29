'use client'
/** FlickeringGrid — canvas grid cells randomly flicker on/off. */
import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = 'rgb(0, 0, 0)',
  maxOpacity = 0.3,
  className,
}: {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  maxOpacity?: number
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }
    resize()

    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    const cols = Math.floor(w / (squareSize + gridGap))
    const rows = Math.floor(h / (squareSize + gridGap))
    const opacities = new Float32Array(cols * rows).fill(Math.random() * maxOpacity)

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < opacities.length; i++) {
        if (Math.random() < flickerChance * 0.016) opacities[i] = Math.random() * maxOpacity
        const col = i % cols
        const row = Math.floor(i / cols)
        ctx.fillStyle = color
        ctx.globalAlpha = opacities[i]
        ctx.fillRect(col * (squareSize + gridGap), row * (squareSize + gridGap), squareSize, squareSize)
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [squareSize, gridGap, flickerChance, color, maxOpacity])

  return <canvas ref={canvasRef} className={cn('absolute inset-0 pointer-events-none', className)} aria-hidden />
}
