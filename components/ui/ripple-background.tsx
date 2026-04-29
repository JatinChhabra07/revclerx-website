/** RippleBackground — concentric expanding rings from center. */
import { cn } from '@/lib/utils'

export function RippleBackground({
  rings = 8,
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  className,
}: { rings?: number; mainCircleSize?: number; mainCircleOpacity?: number; className?: string }) {
  return (
    <div className={cn('absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none', className)} aria-hidden>
      {Array.from({ length: rings }).map((_, i) => {
        const size = mainCircleSize + i * 70
        const opacity = Math.max(mainCircleOpacity - i * 0.03, 0)
        return (
          <div
            key={i}
            className="absolute rounded-full border border-foreground/40"
            style={{
              width: size,
              height: size,
              opacity,
              animation: `ripple-grow ${3 + i * 0.3}s ease-out ${i * 0.3}s infinite`,
            }}
          />
        )
      })}
      <style>{`
        @keyframes ripple-grow { 0%{transform:scale(.95); opacity:.6} 100%{transform:scale(1.15); opacity:0} }
      `}</style>
    </div>
  )
}
