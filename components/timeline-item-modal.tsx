"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface TimelineItemModalProps {
  isOpen: boolean
  onClose: () => void
  item: {
    id: number
    type: string
    title: string
    organization: string
    period: string
    description: string
    logo?: string
    website?: string
    details?: {
      achievements?: string[]
      skills?: string[]
      courses?: string[]
      projects?: string[]
    }
  }
}

export function TimelineItemModal({ isOpen, onClose, item }: TimelineItemModalProps) {
  // Add the helper function at the top of the component
  const getValidImageSrc = (src: string | undefined | null) => {
    if (!src || src === "") {
      return null
    }
    return src
  }

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscapeKey)
    return () => document.removeEventListener("keydown", handleEscapeKey)
  }, [isOpen, onClose])

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!item) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl max-h-[80vh] overflow-auto bg-background border border-border rounded-xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="mb-6 pb-6 border-b">
              <div className="flex items-start gap-4 mb-4">
                {item.logo && (
                  <div className="relative min-w-[80px] w-[80px] h-[80px] rounded-xl overflow-hidden border bg-muted/20">
                    {item.website ? (
                      <Link href={item.website} target="_blank" rel="noopener noreferrer">
                        {getValidImageSrc(item.logo) ? (
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.organization}
                            fill
                            className="object-contain p-2"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-muted">
                            <span className="text-xs text-muted-foreground">No logo</span>
                          </div>
                        )}
                      </Link>
                    ) : getValidImageSrc(item.logo) ? (
                      <Image
                        src={item.logo || "/placeholder.svg"}
                        alt={item.organization}
                        fill
                        className="object-contain p-2"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <span className="text-xs text-muted-foreground">No logo</span>
                      </div>
                    )}
                  </div>
                )}
                <div>
                  <div className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {item.type === "education" ? "Education" : "Experience"}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h2>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-muted-foreground">
                    <span className="font-medium">{item.organization}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{item.period}</span>
                  </div>

                  {item.website && (
                    <Button variant="link" size="sm" className="p-0 h-auto mt-2" asChild>
                      <Link href={item.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Visit Website
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Overview</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>

              {/* Achievements */}
              {item.details?.achievements && item.details.achievements.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {item.details.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              {item.details?.skills && item.details.skills.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Skills Developed</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.details.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Courses */}
              {item.details?.courses && item.details.courses.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Notable Courses</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {item.details.courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Projects */}
              {item.details?.projects && item.details.projects.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Projects</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {item.details.projects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
