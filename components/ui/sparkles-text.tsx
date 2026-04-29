'use client'
/** SparklesText — text with randomly-placed twinkling stars around it. */
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface Sparkle { id: number; x: number; y: number; size: number; duration: number; delay: number }

export function SparklesText({
  text,
  sparkleCount = 10,
  colors = ['#FFD700', '#FF69B4', '#00E5FF'],
  className,
}: {
  text: string
  sparkleCount?: number
  colors?: string[]
  className?: string
}) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const s = Array.from({ length: sparkleCount }, (_, id) => ({
      id,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 4,
      duration: Math.random() * 1.5 + 1.5,
      delay: Math.random() * 2,
    }))
    setSparkles(s)
  }, [sparkleCount])

  return (
    <span className={cn('relative inline-block', className)}>
      {sparkles.map((s, i) => (
        <svg
          key={s.id}
          viewBox="0 0 24 24"
          className="absolute pointer-events-none"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            fill: colors[i % colors.length],
            animation: `soft-ping ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        >
          <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
        </svg>
      ))}
      <span className="relative z-10">{text}</span>
    </span>
  )
}
