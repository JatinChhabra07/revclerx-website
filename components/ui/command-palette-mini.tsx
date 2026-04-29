'use client'
/** CommandPaletteMini — Cmd+K search palette (minimal). Wire up real search yourself. */
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface Cmd { label: string; hint?: string; onSelect: () => void }

export function CommandPaletteMini({ commands, placeholder = 'Type a command or search…', className }: { commands: Cmd[]; placeholder?: string; className?: string }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setOpen(true) }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!open) return null

  const filtered = commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className={cn('fixed inset-0 z-50 flex items-start justify-center pt-32 bg-black/50 backdrop-blur-sm animate-fade-in', className)} onClick={() => setOpen(false)}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-xl rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent px-4 py-3 text-sm outline-none"
        />
        <div className="border-t border-border max-h-80 overflow-y-auto">
          {filtered.map((c, i) => (
            <button
              key={i}
              onClick={() => { c.onSelect(); setOpen(false) }}
              className="w-full flex items-center justify-between px-4 py-2 text-left text-sm hover:bg-muted"
            >
              <span>{c.label}</span>
              {c.hint && <span className="text-xs text-muted-foreground">{c.hint}</span>}
            </button>
          ))}
          {filtered.length === 0 && <div className="px-4 py-3 text-sm text-muted-foreground">No results.</div>}
        </div>
      </div>
    </div>
  )
}
