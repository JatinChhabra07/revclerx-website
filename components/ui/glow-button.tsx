/** GlowButton — button with a persistent blurred glow behind. */
import { cn } from '@/lib/utils'

export function GlowButton({
  children,
  className,
  glowColor = 'rgba(59, 130, 246, 0.5)',
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { glowColor?: string }) {
  return (
    <button
      className={cn('relative inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg', className)}
      {...rest}
    >
      <span
        className="absolute inset-0 -z-10 rounded-full blur-xl transition-all duration-300"
        style={{ background: glowColor, transform: 'scale(1)' }}
      />
      <span>{children}</span>
    </button>
  )
}
