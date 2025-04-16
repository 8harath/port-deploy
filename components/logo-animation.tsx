"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

export function LogoAnimation() {
  const router = useRouter()
  const [isAnimating, setIsAnimating] = useState(false)

  const handleLogoClick = () => {
    setIsAnimating(true)
    setTimeout(() => {
      router.refresh()
      window.scrollTo({ top: 0, behavior: "smooth" })
      setTimeout(() => setIsAnimating(false), 500)
    }, 800)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: isAnimating ? [1, 0.8, 1.1, 1] : 1,
        rotate: isAnimating ? [0, 180, 360] : 0,
      }}
      transition={{
        duration: isAnimating ? 0.8 : 0.5,
        ease: "easeOut",
      }}
      className="flex items-center justify-center w-8 h-8 mr-2 cursor-pointer"
      onClick={handleLogoClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image
        src="/images/logo-me.png"
        alt="Bharath K Logo"
        width={32}
        height={32}
        className="object-contain"
        priority
      />
    </motion.div>
  )
}
