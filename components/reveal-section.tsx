"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface RevealSectionProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
}

export function RevealSection({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
}: RevealSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Set initial and animate values based on direction
  const getVariants = () => {
    const distance = 50

    const variants = {
      hidden: {},
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth reveal
        },
      },
    }

    switch (direction) {
      case "up":
        variants.hidden = { opacity: 0, y: distance }
        break
      case "down":
        variants.hidden = { opacity: 0, y: -distance }
        break
      case "left":
        variants.hidden = { opacity: 0, x: distance }
        break
      case "right":
        variants.hidden = { opacity: 0, x: -distance }
        break
    }

    return variants
  }

  return (
    <div ref={sectionRef} className={className}>
      <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={getVariants()}>
        {children}
      </motion.div>
    </div>
  )
}
