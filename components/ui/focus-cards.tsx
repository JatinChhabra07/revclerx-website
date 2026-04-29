'use client'
/** FocusCards — grid where unhovered cards blur+dim, focused card stays sharp. */
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface Card { title: string; image?: string; description?: string }

export function FocusCards({ cards, className }: { cards: Card[]; className?: string }) {
  const [focused, setFocused] = useState<number | null>(null)

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
      {cards.map((card, i) => (
        <div
          key={i}
          onMouseEnter={() => setFocused(i)}
          onMouseLeave={() => setFocused(null)}
          className={cn(
            'relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300',
            focused !== null && focused !== i && 'blur-sm scale-[0.98] opacity-60',
          )}
        >
          {card.image && <div className="aspect-video rounded-lg bg-muted mb-4 overflow-hidden"><img src={card.image} alt="" className="w-full h-full object-cover" /></div>}
          <h3 className="font-heading text-lg font-bold">{card.title}</h3>
          {card.description && <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>}
        </div>
      ))}
    </div>
  )
}
