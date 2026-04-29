/** ShimmerText — text with a traveling light sweep. Needs @keyframes shimmer. */
import { cn } from '@/lib/utils'

export function ShimmerText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn('inline-block bg-clip-text text-transparent animate-shimmer', className)}
      style={{
        backgroundImage: 'linear-gradient(110deg, #888 45%, #fff 55%, #888 65%)',
        backgroundSize: '200% 100%',
      }}
    >
      {children}
    </span>
  )
}
