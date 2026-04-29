/** GradientButton — button with animated gradient fill that shifts on hover. */
import { cn } from '@/lib/utils'

export function GradientButton({
  children,
  className,
  colors = ['#ff79c6', '#bd93f9', '#8be9fd'],
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { colors?: string[] }) {
  return (
    <button
      className={cn('relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform active:scale-95', className)}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')}, ${colors[0]})`,
        backgroundSize: '300% 100%',
        animation: 'gradient-shift 6s ease infinite',
      }}
      {...rest}
    >
      {children}
    </button>
  )
}
