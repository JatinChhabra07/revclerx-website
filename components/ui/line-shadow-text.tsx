/** LineShadowText — text with a layered stripe shadow for depth. */
import { cn } from '@/lib/utils'

export function LineShadowText({
  children,
  shadowColor = 'black',
  className,
}: {
  children: React.ReactNode
  shadowColor?: string
  className?: string
}) {
  return (
    <span
      className={cn('relative inline-flex', className)}
      style={{
        textShadow: `1px 1px 0 ${shadowColor}, 2px 2px 0 ${shadowColor}, 3px 3px 0 ${shadowColor}, 4px 4px 0 ${shadowColor}, 5px 5px 0 ${shadowColor}, 6px 6px 0 ${shadowColor}`,
      }}
    >
      {children}
    </span>
  )
}
