'use client'
/** Sparkles — decorative sparkle/star particles (use behind headings). */
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface S { id: number; top: string; left: string; size: number; delay: number }

export function Sparkles({ count = 15, color = '#FFD700', className }: { count?: number; color?: string; className?: string }) {
  const [sparkles, setSparkles] = useState<S[]>([])

  useEffect(() => {
    setSparkles(
      Array.from({ length: count }, (_, id) => ({
        id,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 8 + 4,
        delay: Math.random() * 2,
      })),
    )
  }, [count])

  return (
    <div className={cn('pointer-events-none absolute inset-0', className)} aria-hidden>
      {sparkles.map((s) => (
        <svg
          key={s.id}
          viewBox="0 0 24 24"
          className="absolute"
          style={{
            top: s.top, left: s.left, width: s.size, height: s.size,
            fill: color,
            animation: `sparkle-twinkle 2s ease-in-out ${s.delay}s infinite`,
          }}
        >
          <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" />
        </svg>
      ))}
      <style>{`
        @keyframes sparkle-twinkle { 0%,100%{transform:scale(0) rotate(0)} 50%{transform:scale(1) rotate(180deg)} }
      `}</style>
    </div>
  )
}
