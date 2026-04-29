'use client'
/** InfiniteMovingCards — marquee of cards (testimonial-style). Auto-scrolls, pauses on hover. */
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface Item { quote: string; name: string; title: string }

export function InfiniteMovingCards({
  items,
  direction = 'left',
  speed = 'slow',
  className,
}: {
  items: Item[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return
    // Duplicate children for seamless loop
    const children = Array.from(scrollerRef.current.children)
    children.forEach((child) => scrollerRef.current!.appendChild(child.cloneNode(true)))
    containerRef.current.style.setProperty('--animation-direction', direction === 'left' ? 'forwards' : 'reverse')
    containerRef.current.style.setProperty('--animation-duration', speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s')
    setStarted(true)
  }, [direction, speed])

  return (
    <div
      ref={containerRef}
      className={cn('scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]', className)}
    >
      <ul
        ref={scrollerRef}
        className={cn('flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap', started && 'animate-scroll hover:[animation-play-state:paused]')}
      >
        {items.map((item, i) => (
          <li key={i} className="w-[350px] max-w-full shrink-0 rounded-2xl border border-border bg-card px-8 py-6">
            <blockquote>
              <p className="text-sm leading-relaxed text-foreground">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-4 text-xs text-muted-foreground">
                <strong>{item.name}</strong> · {item.title}
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
      <style>{`
        @keyframes scroll { to { transform: translate(calc(-50% - 0.5rem)); } }
        .animate-scroll { animation: scroll var(--animation-duration, 40s) linear var(--animation-direction, forwards) infinite; }
      `}</style>
    </div>
  )
}
