/** RetroGrid — synthwave-style perspective grid floor. */
import { cn } from '@/lib/utils'

export function RetroGrid({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = 'gray',
  darkLineColor = 'gray',
  className,
}: { angle?: number; cellSize?: number; opacity?: number; lightLineColor?: string; darkLineColor?: string; className?: string }) {
  return (
    <div
      className={cn('pointer-events-none absolute size-full overflow-hidden [perspective:200px]', className)}
      style={{ '--grid-angle': `${angle}deg`, '--cell-size': `${cellSize}px`, '--opacity': opacity, '--light-line': lightLineColor, '--dark-line': darkLineColor } as React.CSSProperties}
      aria-hidden
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className="animate-grid"
          style={{
            backgroundImage: `linear-gradient(to right, ${lightLineColor} 1px, transparent 0), linear-gradient(to bottom, ${lightLineColor} 1px, transparent 0)`,
            backgroundRepeat: 'repeat',
            backgroundSize: `${cellSize}px ${cellSize}px`,
            height: '300vh',
            inset: '0% 0px',
            marginLeft: '-200%',
            transformOrigin: '100% 0 0',
            width: '600vw',
            opacity,
            animation: 'retro-grid 15s linear infinite',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent to-90%" />
      <style>{`
        @keyframes retro-grid { 0%{transform:translateY(0)} 100%{transform:translateY(${cellSize}px)} }
      `}</style>
    </div>
  )
}
