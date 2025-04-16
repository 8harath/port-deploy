"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface MaskRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function MaskReveal({ children, delay = 0, className = "" }: MaskRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ width: "100%" }}
        animate={isVisible ? { width: "0%" } : { width: "100%" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 bg-background z-10"
        style={{ transformOrigin: "left" }}
      />
      {children}
    </div>
  )
}
