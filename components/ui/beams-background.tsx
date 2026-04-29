/** BeamsBackground — vertical light beams for hero atmosphere. */
import { cn } from '@/lib/utils'

export function BeamsBackground({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)} aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 w-px opacity-40"
          style={{
            left: `${15 + i * 18}%`,
            background: 'linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.6) 50%, transparent 100%)',
            animation: `beam-pulse ${4 + i * 0.6}s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes beam-pulse { 0%,100%{opacity:.1; transform:scaleY(1)} 50%{opacity:.7; transform:scaleY(1.1)} }
      `}</style>
    </div>
  )
}
