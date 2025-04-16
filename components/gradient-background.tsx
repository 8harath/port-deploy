"use client"

import { useEffect, useRef } from "react"

export function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient points
    const points = [
      { x: 0, y: 0, vx: 0.2, vy: 0.1, color: "rgba(139, 92, 246, 0.15)" }, // Purple
      { x: canvas.width, y: 0, vx: -0.1, vy: 0.2, color: "rgba(59, 130, 246, 0.15)" }, // Blue
      { x: canvas.width / 2, y: canvas.height, vx: 0.15, vy: -0.1, color: "rgba(99, 102, 241, 0.15)" }, // Indigo
      { x: canvas.width / 3, y: canvas.height / 2, vx: -0.2, vy: -0.1, color: "rgba(139, 92, 246, 0.15)" }, // Purple
    ]

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update points position
      points.forEach((point) => {
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x <= 0 || point.x >= canvas.width) point.vx *= -1
        if (point.y <= 0 || point.y >= canvas.height) point.vy *= -1
      })

      // Draw gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8,
      )

      // Add color stops
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)")

      points.forEach((point, index) => {
        const distance = Math.sqrt(Math.pow(point.x - canvas.width / 2, 2) + Math.pow(point.y - canvas.height / 2, 2))
        const normalizedDistance = distance / (canvas.width * 0.8)
        gradient.addColorStop(0.3 + ((normalizedDistance * 0.7) / points.length) * (index + 1), point.color)
      })

      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      // Fill canvas with gradient
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10 opacity-70" />
}
