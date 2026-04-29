/** AuroraText — rainbow aurora gradient text. Requires gradient-shift keyframe. */
import { cn } from '@/lib/utils'

export function AuroraText({
  children,
  className,
  colors = ['#ff79c6', '#bd93f9', '#50fa7b', '#8be9fd', '#ff79c6'],
  speed = 8,
}: {
  children: React.ReactNode
  className?: string
  colors?: string[]
  speed?: number
}) {
  return (
    <span
      className={cn('inline-block bg-clip-text text-transparent font-bold', className)}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: '300% 100%',
        animation: `gradient-shift ${speed}s ease infinite`,
      }}
    >
      {children}
    </span>
  )
}
