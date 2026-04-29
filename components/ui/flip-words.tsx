'use client'
/** FlipWords — rotates through words with a framer spring flip. */
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function FlipWords({ words, interval = 3000, className }: { words: string[]; interval?: number; className?: string }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <div className={cn('inline-block', className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
