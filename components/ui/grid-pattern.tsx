/** GridPattern — SVG pattern grid bg. Use as hero background. */
import { cn } from '@/lib/utils'

export function GridPattern({
  size = 40,
  strokeColor = 'rgba(148, 163, 184, 0.2)',
  className,
}: { size?: number; strokeColor?: string; className?: string }) {
  return (
    <svg
      className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
      aria-hidden
      style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)' }}
    >
      <defs>
        <pattern id="grid-pattern" width={size} height={size} patternUnits="userSpaceOnUse">
          <path d={`M ${size} 0 L 0 0 0 ${size}`} fill="none" stroke={strokeColor} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  )
}
