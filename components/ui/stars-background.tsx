'use client'
/** StarsBackground — twinkling star field. CSS-only (no canvas). */
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function StarsBackground({ count = 80, className }: { count?: number; className?: string }) {
  const [stars, setStars] = useState<{ top: string; left: string; size: number; delay: string; duration: string }[]>([])

  useEffect(() => {
    setStars(
      Array.from({ length: count }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: `${Math.random() * 4}s`,
        duration: `${Math.random() * 3 + 2}s`,
      })),
    )
  }, [count])

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)} aria-hidden>
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes twinkle { 0%,100%{opacity:.2} 50%{opacity:1} }
      `}</style>
    </div>
  )
}
