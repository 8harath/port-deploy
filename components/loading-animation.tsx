"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import Image from "next/image"
import logo from "/public/images/logo-me.png" // Replace with the actual path to your logo

interface LoadingAnimationProps {
  onLoadingComplete?: () => void
}

export function LoadingAnimation({ onLoadingComplete }: LoadingAnimationProps) {
  useEffect(() => {
    // Simple timeout to simulate loading
    const timer = setTimeout(() => {
      if (onLoadingComplete) onLoadingComplete()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Rotating Logo */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
        className="w-20 h-20 mb-6"
      >
        <Image src={logo} alt="Logo" width={80} height={80} className="w-full h-full object-contain" />
      </motion.div>

      {/* Loading Line */}
      <div className="relative w-48 h-2 bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 1.5,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="absolute left-0 top-0 w-8 h-2 bg-primary rounded-full"
        />
      </div>
    </div>
  )
}
