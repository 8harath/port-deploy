"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function AnimatedBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 20, stiffness: 100 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Create initial bubbles
    const initialBubbles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 3,
    }))
    setBubbles(initialBubbles)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      // Convert mouse position to percentage
      const x = (clientX / innerWidth) * 100
      const y = (clientY / innerHeight) * 100
      
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-primary/5 backdrop-blur-sm"
          style={{
            width: bubble.size,
            height: bubble.size,
            x: bubble.x,
            y: bubble.y,
          }}
          animate={{
            x: [
              bubble.x,
              bubble.x + (Math.random() * 10 - 5),
              bubble.x
            ],
            y: [
              bubble.y,
              bubble.y + (Math.random() * 10 - 5),
              bubble.y
            ],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
} 