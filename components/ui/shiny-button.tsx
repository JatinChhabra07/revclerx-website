/** ShinyButton — button with sliding shine stripe on hover. */
import { cn } from '@/lib/utils'

export function ShinyButton({ children, className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn('group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5', className)}
      {...rest}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
    </button>
  )
}
