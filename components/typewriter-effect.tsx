"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  text: string
  delay?: number
}

export function TypewriterEffect({ text, delay = 100 }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, delay, text])

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </h1>
  )
}
