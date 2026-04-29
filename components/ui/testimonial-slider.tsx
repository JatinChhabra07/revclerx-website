'use client'
/** TestimonialSlider — paging testimonial slideshow with dots + next/prev. */
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface T { quote: string; name: string; title: string; avatar?: string }

export function TestimonialSlider({ items, className }: { items: T[]; className?: string }) {
  const [i, setI] = useState(0)
  const next = () => setI((p) => (p + 1) % items.length)
  const prev = () => setI((p) => (p - 1 + items.length) % items.length)

  return (
    <div className={cn('relative max-w-3xl mx-auto', className)}>
      <div className="relative min-h-[240px] rounded-2xl border border-border bg-card p-8">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg leading-relaxed text-foreground">&ldquo;{items[i].quote}&rdquo;</p>
            <footer className="mt-6 flex items-center gap-3">
              {items[i].avatar && <img src={items[i].avatar} alt="" className="w-10 h-10 rounded-full" />}
              <div>
                <div className="text-sm font-semibold">{items[i].name}</div>
                <div className="text-xs text-muted-foreground">{items[i].title}</div>
              </div>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button onClick={prev} className="rounded-full border border-border bg-card p-2 hover:bg-muted"><span className="sr-only">Prev</span>‹</button>
        <div className="flex gap-2">
          {items.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={cn('h-2 w-2 rounded-full transition-all', i === idx ? 'w-6 bg-primary' : 'bg-muted-foreground/30')} />
          ))}
        </div>
        <button onClick={next} className="rounded-full border border-border bg-card p-2 hover:bg-muted"><span className="sr-only">Next</span>›</button>
      </div>
    </div>
  )
}
