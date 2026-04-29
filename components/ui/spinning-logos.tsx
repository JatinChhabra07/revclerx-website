'use client'

import React, { useCallback } from 'react'
import type { ComponentType } from 'react'
import { cn } from '@/lib/utils'

/**
 * SpinningLogos — orbit of partner/review logos around a central hub.
 * Each logo counter-rotates so it reads upright while the orbit spins.
 * Think G2 / Capterra review badges, or integration partner orbits.
 *
 * Requires `.animate-spin-slow` and `.animate-spin-reverse` from keyframes.css.
 *
 * Source: VMS
 */

interface LogoItem {
  Logo: ComponentType<{ className?: string }>
  brandColor: string
  name: string
}

interface SpinningLogosProps {
  logos: LogoItem[]
  centerLabel?: string
  radius?: number
  iconSize?: number
  className?: string
  onLogoClick?: (index: number) => void
}

export function SpinningLogos({
  logos,
  centerLabel = 'BRAND',
  radius = 140,
  iconSize = 52,
  className,
  onLogoClick,
}: SpinningLogosProps) {
  const ringPadding = 32
  const toRadians = (deg: number): number => (Math.PI / 180) * deg
  const containerSize = radius * 2 + iconSize + ringPadding

  const handleClick = useCallback(
    (e: React.MouseEvent, index: number) => {
      e.stopPropagation()
      onLogoClick?.(index)
    },
    [onLogoClick],
  )

  return (
    <div className={cn('flex justify-center items-center', className)}>
      <div
        style={{ width: containerSize, height: containerSize }}
        className="relative rounded-full bg-gradient-to-br from-slate-50 to-slate-100 shadow-[0_2px_24px_rgba(15,23,42,0.06)] border border-slate-200/60"
      >
        {/* Orbit ring */}
        <div
          className="absolute rounded-full border border-dashed border-slate-200/80"
          style={{
            top: ringPadding / 2,
            left: ringPadding / 2,
            right: ringPadding / 2,
            bottom: ringPadding / 2,
          }}
        />

        {/* Spinning orbit */}
        <div className="absolute inset-0 animate-spin-slow">
          {logos.map((logo, index) => {
            const angle = (360 / logos.length) * index - 90
            return (
              <button
                key={index}
                type="button"
                onClick={(e) => handleClick(e, index)}
                style={{
                  top: `calc(50% - ${iconSize / 2}px + ${radius * Math.sin(toRadians(angle))}px)`,
                  left: `calc(50% - ${iconSize / 2}px + ${radius * Math.cos(toRadians(angle))}px)`,
                  width: iconSize,
                  height: iconSize,
                  borderColor: logo.brandColor,
                }}
                className="absolute flex items-center justify-center rounded-xl bg-white shadow-md border-2 animate-spin-reverse cursor-pointer transition-transform duration-200 hover:scale-110 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                aria-label={`View ${logo.name}`}
              >
                <logo.Logo className="h-6 w-6 pointer-events-none" />
              </button>
            )
          })}
        </div>

        {/* Center hub */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rounded-full w-[45%] h-[45%] flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <span className="text-base font-bold tracking-wide text-white">
              {centerLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
