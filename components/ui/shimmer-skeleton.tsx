/** ShimmerSkeleton — loading placeholder with shimmer sweep. */
import { cn } from '@/lib/utils'

export function ShimmerSkeleton({ className, rounded = 'rounded-lg' }: { className?: string; rounded?: string }) {
  return (
    <div className={cn('animate-shimmer bg-gradient-to-r from-muted via-muted-foreground/20 to-muted', rounded, className)} style={{ backgroundSize: '200% 100%' }} />
  )
}
