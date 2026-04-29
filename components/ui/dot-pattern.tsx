/** DotPattern — SVG dot pattern bg (simpler than InteractiveDotGrid). */
import { cn } from '@/lib/utils'

export function DotPattern({
  size = 24,
  dotSize = 1,
  color = 'rgba(148, 163, 184, 0.4)',
  className,
}: { size?: number; dotSize?: number; color?: string; className?: string }) {
  return (
    <svg
      className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
      aria-hidden
      style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)' }}
    >
      <defs>
        <pattern id="dot-pattern" width={size} height={size} patternUnits="userSpaceOnUse">
          <circle cx={size / 2} cy={size / 2} r={dotSize} fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  )
}
