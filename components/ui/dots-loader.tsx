/** DotsLoader — 3-dot pulsing loader. */
import { cn } from '@/lib/utils'

export function DotsLoader({ className, color = 'currentColor', size = 8 }: { className?: string; color?: string; size?: number }) {
  return (
    <span className={cn('inline-flex items-center gap-1', className)} role="status" aria-label="Loading">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="rounded-full"
          style={{
            width: size,
            height: size,
            background: color,
            animation: 'dots-pulse 1.2s ease-in-out infinite',
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes dots-pulse { 0%,80%,100%{opacity:.25; transform:scale(.8)} 40%{opacity:1; transform:scale(1.1)} }
      `}</style>
    </span>
  )
}
