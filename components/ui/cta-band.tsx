/** CTABand — horizontal CTA strip with heading + button. */
import { cn } from '@/lib/utils'

export function CTABand({
  heading,
  subheading,
  primaryCta,
  className,
  gradient = 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
}: {
  heading: string
  subheading?: string
  primaryCta: { label: string; href: string }
  className?: string
  gradient?: string
}) {
  return (
    <section className={cn('relative overflow-hidden rounded-3xl p-10 md:p-16 text-white', className)} style={{ background: gradient }}>
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">{heading}</h2>
          {subheading && <p className="mt-2 text-white/80 max-w-xl">{subheading}</p>}
        </div>
        <a
          href={primaryCta.href}
          className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-6 py-3 text-sm font-semibold shadow-lg hover:-translate-y-0.5 transition-transform"
        >
          {primaryCta.label} →
        </a>
      </div>
    </section>
  )
}
