/** MeteorCard — card with meteors overlay. Combines Meteors + card surface. */
import { Meteors } from './meteors'
import { cn } from '@/lib/utils'

export function MeteorCard({ children, className, meteorCount = 20 }: { children: React.ReactNode; className?: string; meteorCount?: number }) {
  return (
    <div className={cn('relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white', className)}>
      <Meteors number={meteorCount} />
      <div className="relative">{children}</div>
    </div>
  )
}
