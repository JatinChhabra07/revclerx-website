/** ShineBorder — animated gradient border that rotates. Wrap any child. */
import { cn } from '@/lib/utils'

export function ShineBorder({
  children,
  className,
  borderRadius = 12,
  borderWidth = 2,
  duration = 14,
  color = 'linear-gradient(90deg, #FFBE7B, #FE8FB5, #A07CFE)',
}: {
  children: React.ReactNode
  className?: string
  borderRadius?: number
  borderWidth?: number
  duration?: number
  color?: string
}) {
  return (
    <div
      className={cn('relative grid place-items-center bg-card overflow-hidden', className)}
      style={{
        borderRadius,
        padding: borderWidth,
        background: color,
        backgroundSize: '200% 200%',
        animation: `shine-border ${duration}s linear infinite`,
      }}
    >
      <div style={{ borderRadius: borderRadius - borderWidth }} className="w-full h-full bg-card p-6">
        {children}
      </div>
      <style>{`
        @keyframes shine-border { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      `}</style>
    </div>
  )
}
