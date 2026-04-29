'use client'
/** AnimatedBeam — SVG path with traveling light particle connecting two refs (Magic UI). */
import { useEffect, useState, type RefObject } from 'react'

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  duration = 5,
  gradientStartColor = '#18CCFC',
  gradientStopColor = '#6344F5',
  pathColor = 'rgba(148, 163, 184, 0.25)',
  pathWidth = 2,
  reverse = false,
}: {
  containerRef: RefObject<HTMLElement | null>
  fromRef: RefObject<HTMLElement | null>
  toRef: RefObject<HTMLElement | null>
  curvature?: number
  duration?: number
  gradientStartColor?: string
  gradientStopColor?: string
  pathColor?: string
  pathWidth?: number
  reverse?: boolean
}) {
  const [d, setD] = useState('')
  const [size, setSize] = useState({ w: 0, h: 0 })
  const id = `beam-${Math.random().toString(36).slice(2, 9)}`

  useEffect(() => {
    const update = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return
      const c = containerRef.current.getBoundingClientRect()
      const a = fromRef.current.getBoundingClientRect()
      const b = toRef.current.getBoundingClientRect()
      setSize({ w: c.width, h: c.height })
      const x1 = a.left - c.left + a.width / 2
      const y1 = a.top - c.top + a.height / 2
      const x2 = b.left - c.left + b.width / 2
      const y2 = b.top - c.top + b.height / 2
      const cx = (x1 + x2) / 2
      const cy = (y1 + y2) / 2 - curvature
      setD(`M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}`)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [containerRef, fromRef, toRef, curvature])

  return (
    <svg viewBox={`0 0 ${size.w} ${size.h}`} fill="none" className="pointer-events-none absolute left-0 top-0 transform-gpu stroke-2" width={size.w} height={size.h}>
      <path d={d} stroke={pathColor} strokeWidth={pathWidth} fill="none" />
      <path d={d} stroke={`url(#${id})`} strokeWidth={pathWidth} strokeLinecap="round" fill="none" />
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="0%" y2="0%">
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
          <animate attributeName="x1" values={reverse ? '100%;0%' : '0%;100%'} dur={`${duration}s`} repeatCount="indefinite" />
          <animate attributeName="x2" values={reverse ? '110%;10%' : '10%;110%'} dur={`${duration}s`} repeatCount="indefinite" />
        </linearGradient>
      </defs>
    </svg>
  )
}
