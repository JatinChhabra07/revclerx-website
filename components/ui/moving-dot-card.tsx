'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'

/**
 * MetricCard (aka MovingDotCard) — metric with:
 *   - Counter that animates when in view (IntersectionObserver)
 *   - Mouse-following gradient border (Bauhaus effect)
 *   - 3D tilt on mouse move (perspective 800px, max ±6°)
 *   - Shine overlay that appears on hover
 *
 * Requires `.metric-card`, `.metric-card-shine`, `.metric-card-inner`,
 * `.metric-card-value`, `.metric-card-label`, `.metric-card-desc` utility
 * CSS (see data/globals-base.css / VMS globals.css reference).
 *
 * Source: VMS
 */

interface MetricCardProps {
  target: number
  suffix?: string
  label: string
  description: string
  duration?: number
  index?: number
}

export function MetricCard({
  target,
  suffix = '',
  label,
  description,
  duration = 2000,
}: MetricCardProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({})

  // Trigger counter when in view
  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  // Counter animation
  useEffect(() => {
    if (!started) return
    const end = target
    if (end <= 0) return
    const increment = Math.ceil(end / (duration / 50))
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        current = end
        clearInterval(timer)
      }
      setCount(current)
    }, 50)
    return () => clearInterval(timer)
  }, [started, target, duration])

  // Mouse-following gradient border
  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const handleGradient = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      const angle = Math.atan2(-x, y)
      card.style.setProperty('--rotation', `${angle}rad`)
    }
    card.addEventListener('mousemove', handleGradient)
    return () => card.removeEventListener('mousemove', handleGradient)
  }, [])

  // 3D tilt
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const { left, top, width, height } = cardRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top
    const rotateX = ((y - height / 2) / (height / 2)) * -6
    const rotateY = ((x - width / 2) / (width / 2)) * 6

    setTiltStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`,
      transition: 'transform 0.1s ease-out',
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.4s ease-in-out',
    })
  }, [])

  return (
    <div
      ref={cardRef}
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="metric-card"
    >
      <div className="metric-card-inner" style={{ transform: 'translateZ(30px)' }}>
        <div className="metric-card-value">
          {count}
          {suffix}
        </div>
        <div className="metric-card-label">{label}</div>
        <p className="metric-card-desc">{description}</p>
      </div>
      <div className="metric-card-shine" />
    </div>
  )
}
