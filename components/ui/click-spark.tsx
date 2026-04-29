'use client'
/** ClickSpark — small burst of sparks radiating from the click point. */
import { useEffect } from 'react'

export function ClickSpark({ sparkColor = '#fbbf24', count = 8, sparkSize = 10, sparkDuration = 400 }: { sparkColor?: string; count?: number; sparkSize?: number; sparkDuration?: number }) {
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      for (let i = 0; i < count; i++) {
        const s = document.createElement('span')
        const angle = (Math.PI * 2 * i) / count
        const dx = Math.cos(angle) * 40
        const dy = Math.sin(angle) * 40
        s.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:${sparkSize}px;height:2px;background:${sparkColor};pointer-events:none;z-index:9999;transform-origin:0 50%;transform:rotate(${angle}rad);transition:transform ${sparkDuration}ms cubic-bezier(0.22,1,0.36,1), opacity ${sparkDuration}ms ease;`
        document.body.appendChild(s)
        requestAnimationFrame(() => {
          s.style.transform = `rotate(${angle}rad) translateX(${Math.sqrt(dx * dx + dy * dy)}px)`
          s.style.opacity = '0'
        })
        setTimeout(() => s.remove(), sparkDuration)
      }
    }
    window.addEventListener('click', handle)
    return () => window.removeEventListener('click', handle)
  }, [sparkColor, count, sparkSize, sparkDuration])

  return null
}
