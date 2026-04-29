'use client'

import React, { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import Link from 'next/link'

/**
 * CinematicHero — GSAP ScrollTrigger-pinned hero.
 *
 * Timeline:
 *  - INTRO: hero-title fades in + scales (expo.out, 1.2s),
 *           subtitle clip-path reveals (power4.inOut, 0.9s, -0.6s overlap)
 *  - SCROLL (800px): hero-text fades, dark-card rises from below to
 *           fullscreen, card-content fades in, counter animates,
 *           cta-block fades in at end, dark-card exits upward.
 *  - Mouse parallax: phone mockup rotates subtly (rotationY/rotationX ±5°)
 *    on desktop only.
 *
 * Requires: gsap + gsap/ScrollTrigger installed.
 *   npm install gsap
 *
 * Customize:
 *  - background gradient on the outer div
 *  - copy: hero-title, hero-subtitle, card-content, cta-block
 *  - counter target (snap { innerHTML: 47 })
 *
 * This is the HEAVIEST animation. Use once per site on the homepage.
 * ALWAYS audit with prefers-reduced-motion users in mind.
 *
 * Source: VMS
 */

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  gsap.config({ force3D: true })
}

/** Override or replace this SVG with your own mascot / product illustration. */
function DefaultMascot() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" aria-hidden="true">
      <circle cx="100" cy="100" r="80" fill="#3b82f6" opacity="0.1" />
      <circle cx="100" cy="100" r="50" fill="#3b82f6" opacity="0.2" />
      <circle cx="100" cy="100" r="25" fill="#3b82f6" />
    </svg>
  )
}

export interface CinematicHeroProps {
  className?: string
  title?: string
  subtitle?: string
  cardTitle?: string
  cardDescription?: React.ReactNode
  badges?: string[]
  endCtaTitle?: string
  endCtaDescription?: string
  primaryCta?: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
  mascot?: React.ReactNode
  /** Counter target that animates to when card is fullscreen. Default 47. */
  counterTarget?: number
}

export function CinematicHero({
  className,
  title = 'Your Product',
  subtitle = 'Big Idea. One Price.',
  cardTitle = 'Reimagined.',
  cardDescription = <><span className="text-white font-semibold">BRAND</span> replaces the old way with something better.</>,
  badges = ['GDPR', 'AES-256', 'HIPAA'],
  endCtaTitle = 'Start your free trial.',
  endCtaDescription = 'Join 2,000+ teams. Get started in minutes.',
  primaryCta = { href: '/free-trial', label: 'Start free trial' },
  secondaryCta = { href: '/demo', label: 'Book a demo' },
  mascot = <DefaultMascot />,
  counterTarget = 47,
}: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mockupRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(0)

  const onMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY }
  }, [])

  // Mouse parallax on mockup
  useEffect(() => {
    let active = true
    function loop() {
      if (!active) return
      if (mockupRef.current && window.scrollY < window.innerHeight * 2) {
        const xN = (mouseRef.current.x / window.innerWidth - 0.5) * 2
        const yN = (mouseRef.current.y / window.innerHeight - 0.5) * 2
        gsap.to(mockupRef.current, { rotationY: xN * 5, rotationX: -yN * 5, ease: 'power2.out', duration: 0.8, overwrite: true })
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => {
      active = false
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [onMouseMove])

  // GSAP scroll timeline
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const vH = window.innerHeight
    const q = gsap.utils.selector(el)

    const ctx = gsap.context(() => {
      gsap.set(q('.hero-title'),    { opacity: 0, y: 40, scale: 0.92 })
      gsap.set(q('.hero-subtitle'), { opacity: 0, clipPath: 'inset(0 100% 0 0)' })
      gsap.set(q('.dark-card'),     { y: vH + 100, opacity: 1 })
      gsap.set(q('.card-content'),  { opacity: 0 })
      gsap.set(q('.cta-block'),     { opacity: 0, scale: 0.88 })

      const intro = gsap.timeline({ delay: 0.15 })
      intro
        .to(q('.hero-title'),    { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'expo.out' })
        .to(q('.hero-subtitle'), { opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power4.inOut' }, '-=0.6')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: '+=800',
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          fastScrollEnd: true,
        },
      })

      tl.to(q('.hero-text'),     { opacity: 0, duration: 0.6 }, 0)
        .to(q('.dark-card'),     { y: 0, width: '100vw', height: '100vh', borderRadius: '0px', duration: 1 }, 0)
        .to(q('.card-content'),  { opacity: 1, duration: 0.5 }, 0.3)
        .to(q('.counter-num'),   { innerHTML: counterTarget, snap: { innerHTML: 1 }, duration: 0.5, ease: 'expo.out' }, 0.4)
        .to({}, { duration: 0.3 })
        .to(q('.card-content'),  { opacity: 0, duration: 0.3 }, 'out')
        .to(q('.hero-text'),     { opacity: 0, duration: 0.01 }, 'out')
        .to(q('.cta-block'),     { opacity: 1, scale: 1, duration: 0.4 }, 'out')
        .to(q('.dark-card'),     { y: -vH - 200, duration: 0.6 }, 'out+=0.3')
    }, el)

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
      ctx.revert()
    }
  }, [counterTarget])

  return (
    <div
      ref={containerRef}
      className={cn('relative w-screen h-screen overflow-hidden flex items-center justify-center', className)}
      style={{
        perspective: '1500px',
        background: 'linear-gradient(180deg, #ffffff 0%, #eff6ff 40%, #f0fdfa 70%, #ffffff 100%)',
      }}
    >
      {/* Hero text (visible on load) */}
      <div className="hero-text absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4">
        <h1
          className="hero-title text-slate-900 text-4xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight mb-2 opacity-0"
          style={{ textShadow: '0 2px 8px rgba(15,23,42,0.04)' }}
        >
          {title}
        </h1>
        <h1
          className="hero-subtitle text-4xl md:text-6xl lg:text-[5.5rem] font-extrabold tracking-tighter"
          style={{
            background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {subtitle}
        </h1>
      </div>

      {/* CTA block (appears at end) */}
      <div className="cta-block absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 pointer-events-auto opacity-0">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {endCtaTitle}
        </h2>
        <p className="text-slate-500 text-base md:text-lg mb-10 max-w-lg mx-auto font-light leading-relaxed">
          {endCtaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={primaryCta.href}
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_4px_20px_-4px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 transition-transform"
          >
            {primaryCta.label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href={secondaryCta.href}
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-700 bg-white border border-slate-200 shadow-sm hover:-translate-y-0.5 transition-transform"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>

      {/* Dark card (fullscreen expansion) */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        style={{ perspective: '1500px' }}
      >
        <div
          className="dark-card pointer-events-auto overflow-hidden flex items-center justify-center w-[92vw] md:w-[88vw] h-[92vh] md:h-[88vh] rounded-[24px] md:rounded-[32px] translate-y-[200vh]"
          style={{
            background: 'linear-gradient(145deg, #2563eb 0%, #1e3a8a 100%)',
            boxShadow: '0 30px 80px -15px rgba(37,99,235,0.3), inset 0 1px 2px rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.08)',
            willChange: 'transform',
          }}
        >
          <div className="card-content relative w-full h-full max-w-7xl mx-auto px-4 lg:px-10 flex flex-col justify-evenly lg:grid lg:grid-cols-5 items-center lg:gap-6 z-10 py-6 lg:py-0 opacity-0">
            <div className="order-2 lg:order-1 lg:col-span-2 flex flex-col justify-center text-center lg:text-left w-full px-2 lg:px-0">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
                {cardTitle}
              </h3>
              <p className="text-blue-100/60 text-sm md:text-base leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none">
                {cardDescription}
              </p>
              <div className="hidden lg:flex items-center gap-2.5 mt-6">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-white/[0.07] px-3 py-1 text-[11px] font-bold text-blue-200 ring-1 ring-white/10"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Mascot + counter */}
            <div
              className="order-1 lg:order-2 lg:col-span-2 relative w-full h-[360px] lg:h-[500px] flex items-center justify-center z-10"
              style={{ perspective: '1000px' }}
            >
              <div ref={mockupRef} className="w-64 md:w-80">
                {mascot}
              </div>
            </div>

            <div className="order-3 lg:col-span-1 flex flex-col items-center lg:items-end justify-center z-20 w-full gap-3">
              <div className="text-right">
                <span className="text-5xl font-extrabold text-white counter-num">0</span>
                <span className="text-xs text-blue-200/40 ml-1.5">seconds avg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
