'use client'

import React, { useEffect, useRef } from 'react'
import { ChronicleButton } from './chronicle-button'

/**
 * BauhausCard — gradient-border card with mouse-following border rotation.
 * Hover mouse → `--rotation` CSS var updates → conic gradient shifts.
 * Premium, designer-forward aesthetic.
 *
 * Source: VMS
 */

const BAUHAUS_CARD_STYLES = `
.bauhaus-card {
  position: relative;
  z-index: 1;
  max-width: 20rem;
  min-height: 20rem;
  width: 100%;
  display: grid;
  place-content: center;
  place-items: center;
  text-align: center;
  box-shadow: 0 4px 24px rgba(15,23,42,0.08);
  border-radius: var(--card-radius, 20px);
  border: var(--card-border-width, 2px) solid transparent;
  --rotation: 4.2rad;
  background-image:
    linear-gradient(var(--card-bg, #f0f4fb), var(--card-bg, #f0f4fb)),
    linear-gradient(calc(var(--rotation,4.2rad)), var(--card-accent, #156ef6) 0, var(--card-bg, #f0f4fb) 30%, transparent 80%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  color: var(--card-text-main, #111014);
  transition: box-shadow 0.3s ease;
}
.bauhaus-card:hover { box-shadow: 0 8px 32px rgba(15,23,42,0.12); }
.bauhaus-card-header { position: absolute; top: 0; left: 0; right: 0; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0.8em 0.5em 0 1.5em; }
.bauhaus-button-container { display: flex; justify-content: center; align-items: center; gap: 14px; padding-top: 7px; padding-bottom: 7px; }
.bauhaus-date { color: var(--card-text-top, #3b4252); }
.bauhaus-size6 { width: 2.5rem; cursor: pointer; }
.bauhaus-card-body { position: absolute; width: 100%; display: block; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 0.7em 1.25em 0.5em 1.5em; }
.bauhaus-card-body h3 { font-size: 1.375rem; margin-top: -0.4em; margin-bottom: 0.188em; font-weight: 600; color: var(--card-text-main, #111014); }
.bauhaus-card-body p { color: var(--card-text-sub, #5e6473); font-size: 1rem; letter-spacing: 0.031rem; }
.bauhaus-progress { margin-top: 0.938rem; }
.bauhaus-progress-bar { position: relative; width: 100%; background: var(--card-progress-bar-bg, #e5e7eb); height: 0.313rem; display: block; border-radius: 3.125rem; }
.bauhaus-progress-bar > div { height: 5px; border-radius: 3.125rem; }
.bauhaus-progress span:first-of-type { text-align: left; font-weight: 600; width: 100%; display: block; margin-bottom: 0.313rem; color: var(--card-text-progress-label, #454f55); }
.bauhaus-progress span:last-of-type { margin-top: 0.313rem; text-align: right; display: block; color: var(--card-text-progress-value, #1c2541); }
.bauhaus-card-footer { position: absolute; bottom: 0; left: 0; right: 0; width: 100%; display: flex; justify-content: center; align-items: center; padding: 0.7em 1.25em 0.5em 1.5em; border-bottom-left-radius: inherit; border-bottom-right-radius: inherit; border-top: 0.063rem solid var(--card-separator, #d3dce8); }
`

function injectBauhausCardStyles() {
  if (typeof window === 'undefined') return
  if (!document.getElementById('bauhaus-card-styles')) {
    const style = document.createElement('style')
    style.id = 'bauhaus-card-styles'
    style.innerHTML = BAUHAUS_CARD_STYLES
    document.head.appendChild(style)
  }
}

export interface BauhausCardProps {
  id: string
  accentColor: string
  topInscription: string
  mainText: string
  subMainText: string
  progressBarInscription: string
  progress: number
  progressValue: string
  filledButtonInscription?: string
  outlinedButtonInscription?: string
  onFilledButtonClick: (id: string) => void
  onOutlinedButtonClick: (id: string) => void
  onMoreOptionsClick: (id: string) => void
  borderRadius?: string
  backgroundColor?: string
  separatorColor?: string
  borderWidth?: string
  mirrored?: boolean
  swapButtons?: boolean
  textColorTop?: string
  textColorMain?: string
  textColorSub?: string
  textColorProgressLabel?: string
  textColorProgressValue?: string
  progressBarBackground?: string
  chronicleButtonBg?: string
  chronicleButtonFg?: string
  chronicleButtonHoverFg?: string
}

export function BauhausCard({
  id,
  borderRadius = '2em',
  backgroundColor = '#f0f4fb',
  separatorColor = '#d3dce8',
  accentColor = '#156ef6',
  borderWidth = '2px',
  topInscription = '',
  swapButtons = false,
  mainText = '',
  subMainText = '',
  progressBarInscription = '',
  progress = 0,
  progressValue = '',
  filledButtonInscription = '',
  outlinedButtonInscription = '',
  onFilledButtonClick,
  onOutlinedButtonClick,
  onMoreOptionsClick,
  mirrored = false,
  textColorTop = '#3b4252',
  textColorMain = '#111014',
  textColorSub = '#5e6473',
  textColorProgressLabel = '#454f55',
  textColorProgressValue = '#1c2541',
  progressBarBackground = '#e5e7eb',
  chronicleButtonBg = '#151419',
  chronicleButtonFg = '#fff',
  chronicleButtonHoverFg = '#fff',
}: BauhausCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    injectBauhausCardStyles()
    const card = cardRef.current
    const handleMouseMove = (e: MouseEvent) => {
      if (card) {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        const angle = Math.atan2(-x, y)
        card.style.setProperty('--rotation', angle + 'rad')
      }
    }
    if (card) card.addEventListener('mousemove', handleMouseMove)
    return () => {
      if (card) card.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      className="bauhaus-card"
      ref={cardRef}
      style={{
        '--card-bg': backgroundColor,
        '--card-accent': accentColor,
        '--card-radius': borderRadius,
        '--card-border-width': borderWidth,
        '--card-text-top': textColorTop,
        '--card-text-main': textColorMain,
        '--card-text-sub': textColorSub,
        '--card-text-progress-label': textColorProgressLabel,
        '--card-text-progress-value': textColorProgressValue,
        '--card-separator': separatorColor,
        '--card-progress-bar-bg': progressBarBackground,
      } as React.CSSProperties}
    >
      <div
        style={{ transform: mirrored ? 'scaleX(-1)' : 'none' }}
        className="bauhaus-card-header"
      >
        <div className="bauhaus-date" style={{ transform: mirrored ? 'scaleX(-1)' : 'none' }}>
          {topInscription}
        </div>
        <div onClick={() => onMoreOptionsClick(id)} style={{ cursor: 'pointer' }}>
          <svg viewBox="0 0 24 24" fill="var(--card-text-main)" className="bauhaus-size6">
            <path
              fillRule="evenodd"
              d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="bauhaus-card-body">
        <h3>{mainText}</h3>
        <p>{subMainText}</p>
        <div className="bauhaus-progress">
          <span style={{ textAlign: mirrored ? 'right' : 'left' }}>{progressBarInscription}</span>
          <div style={{ transform: mirrored ? 'scaleX(-1)' : 'none' }} className="bauhaus-progress-bar">
            <div style={{ width: `${progress}%`, backgroundColor: accentColor }} />
          </div>
          <span style={{ textAlign: mirrored ? 'left' : 'right' }}>{progressValue}</span>
        </div>
      </div>
      <div className="bauhaus-card-footer">
        <div className="bauhaus-button-container">
          {swapButtons ? (
            <>
              <ChronicleButton text={outlinedButtonInscription} outlined width="124px" onClick={() => onOutlinedButtonClick(id)} borderRadius={borderRadius} hoverColor={accentColor} customBackground={chronicleButtonBg} customForeground={chronicleButtonFg} hoverForeground={chronicleButtonHoverFg} />
              <ChronicleButton text={filledButtonInscription} width="124px" onClick={() => onFilledButtonClick(id)} borderRadius={borderRadius} hoverColor={accentColor} customBackground={chronicleButtonBg} customForeground={chronicleButtonFg} hoverForeground={chronicleButtonHoverFg} />
            </>
          ) : (
            <>
              <ChronicleButton text={filledButtonInscription} width="124px" onClick={() => onFilledButtonClick(id)} borderRadius={borderRadius} hoverColor={accentColor} customBackground={chronicleButtonBg} customForeground={chronicleButtonFg} hoverForeground={chronicleButtonHoverFg} />
              <ChronicleButton text={outlinedButtonInscription} outlined width="124px" onClick={() => onOutlinedButtonClick(id)} borderRadius={borderRadius} hoverColor={accentColor} customBackground={chronicleButtonBg} customForeground={chronicleButtonFg} hoverForeground={chronicleButtonHoverFg} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
