'use client'
/** WavyBackground — SVG animated flowing waves for hero/footer. */
import { cn } from '@/lib/utils'

export function WavyBackground({
  colors = ['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'],
  waveOpacity = 0.5,
  className,
}: { colors?: string[]; waveOpacity?: number; className?: string }) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)} aria-hidden>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 560">
        {colors.map((c, i) => (
          <path
            key={i}
            d={`M0,${220 + i * 40} Q360,${160 + i * 60} 720,${240 + i * 30} T1440,${220 + i * 40} V560 H0 Z`}
            fill={c}
            opacity={waveOpacity - i * 0.08}
            style={{ animation: `wavy-drift ${8 + i * 1.4}s ease-in-out ${i * 0.5}s infinite` }}
          />
        ))}
      </svg>
      <style>{`
        @keyframes wavy-drift { 0%,100%{transform:translateX(0)} 50%{transform:translateX(-40px)} }
      `}</style>
    </div>
  )
}
