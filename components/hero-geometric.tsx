"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function HeroGeometric() {
  // Animation variants for text elements
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 + i * 0.1,
        ease: "easeOut",
      },
    }),
  }

  // Floating shapes data with slower movement
  const floatingShapes = [
    {
      size: "w-64 h-64",
      position: "left-[-10%] md:left-[-5%] top-[15%]",
      rotate: 15,
      gradient: "from-indigo-500/[0.10] to-transparent",
      delay: 0.1,
      duration: 15, // Slower movement
      movement: { x: 20, y: 15 },
    },
    {
      size: "w-72 h-72",
      position: "right-[-15%] md:right-[-10%] top-[10%]",
      rotate: -10,
      gradient: "from-rose-500/[0.10] to-transparent",
      delay: 0.2,
      duration: 18,
      movement: { x: -15, y: 20 },
    },
    {
      size: "w-80 h-80",
      position: "left-[10%] bottom-[10%]",
      rotate: 5,
      gradient: "from-violet-500/[0.10] to-transparent",
      delay: 0.15,
      duration: 20,
      movement: { x: 25, y: -15 },
    },
    {
      size: "w-56 h-56",
      position: "right-[5%] bottom-[20%]",
      rotate: -20,
      gradient: "from-amber-500/[0.10] to-transparent",
      delay: 0.25,
      duration: 17,
      movement: { x: -20, y: -10 },
    },
    {
      size: "w-48 h-48",
      position: "left-[40%] top-[5%]",
      rotate: 25,
      gradient: "from-cyan-500/[0.10] to-transparent",
      delay: 0.2,
      duration: 19,
      movement: { x: 10, y: 25 },
    },
  ]

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#030303] flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />

      {/* Floating shapes with white borders and shadow effects */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} ${shape.position} rounded-full bg-gradient-to-br ${shape.gradient} backdrop-blur-xl border-2 border-white/[0.15] shadow-[0_0_30px_rgba(255,255,255,0.1)]`}
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: shape.delay,
            ease: "easeOut",
          }}
        >
          {/* Slower floating animation */}
          <motion.div
            className="w-full h-full"
            animate={{
              x: [0, shape.movement.x, 0, -shape.movement.x / 2, 0],
              y: [0, shape.movement.y, 0, -shape.movement.y / 2, 0],
            }}
            transition={{
              duration: shape.duration,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          />
        </motion.div>
      ))}

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUpVariants} className="mb-8">
          <Badge className="px-4 py-1 text-sm bg-white/10 hover:bg-white/20 text-white border-white/20">
            Computer Science Student
          </Badge>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUpVariants}
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="block bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
            Hi, I'm Bharath K
          </span>
          <span
            className="block text-3xl sm:text-5xl md:text-6xl mt-2 font-normal text-white/80"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            AI Enthusiast & Developer
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUpVariants}
          className="text-lg md:text-xl max-w-2xl mx-auto text-white/60 mb-12"
        >
          Exploring the frontiers of artificial intelligence and machine learning to build innovative solutions for
          tomorrow's challenges.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
            <motion.a
            href="https://drive.google.com/file/d/1JH87mrksZFSBAQj49RrW3t9yp8t7lYBl/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            >
            Download Resume
            </motion.a>
            <motion.a
            href="https://8harath.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            >
            View Projects
            </motion.a>
        </motion.div>
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80" />
    </div>
  )
}
