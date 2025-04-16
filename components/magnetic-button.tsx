"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MagneticButtonProps extends ButtonProps {
  strength?: number
  children: React.ReactNode
}

export function MagneticButton({ strength = 30, className, children, ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate distance from center
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Calculate movement (stronger when closer to center)
    const x = distanceX * (strength / 100)
    const y = distanceY * (strength / 100)

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    // Reset position with animation
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <Button
      ref={buttonRef}
      className={cn("transition-transform duration-200 ease-out", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: isHovered ? `translate(${position.x}px, ${position.y}px)` : "translate(0, 0)",
      }}
      {...props}
    >
      {children}
    </Button>
  )
}
