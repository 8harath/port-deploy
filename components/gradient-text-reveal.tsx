"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface GradientTextRevealProps {
  text: string
}

export function GradientTextReveal({ text }: GradientTextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const textRef = useRef<HTMLHeadingElement>(null)

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

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  const words = text.split(" ")

  return (
    <h1 ref={textRef} className="text-4xl md:text-5xl lg:text-6xl font-bold flex flex-wrap justify-center">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="gradient-text-reveal inline-block mr-4 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  )
}
