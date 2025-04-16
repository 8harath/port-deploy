"use client"

import { useEffect } from "react"
import { X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface CertificationModalProps {
  isOpen: boolean
  onClose: () => void
  certification: {
    id: number
    title: string
    organization: string
    platform: string
    date: string
    logo: string
    image?: string
    skills?: string[]
    duration?: string
    description?: string
    verificationUrl?: string
  } | null
}

export function CertificationModal({ isOpen, onClose, certification }: CertificationModalProps) {
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
        handleClose()
      }
    }

    document.addEventListener("keydown", handleEscapeKey)
    return () => document.removeEventListener("keydown", handleEscapeKey)
  }, [isOpen])

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

  const handleClose = () => {
    onClose()
  }

  const handleVerify = () => {
    if (certification?.verificationUrl) {
      window.open(certification.verificationUrl, "_blank")
    }
  }

  if (!certification) return null

  // Default skills if not provided
  const skills = certification.skills || ["Machine Learning", "Data Analysis", "Python Programming", "Neural Networks"]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-card w-full max-w-4xl max-h-[80vh] overflow-auto rounded-xl shadow-2xl"
            style={{ width: "80%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6 md:p-8">
              <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={handleClose}>
                <X className="h-5 w-5" />
              </Button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex flex-col items-center">
                  {/* Replace the Image component in the modal */}
                  <div className="w-full h-48 relative mb-4">
                    {getValidImageSrc(certification.image || certification.logo) ? (
                      <Image
                        src={certification.image || certification.logo}
                        alt={certification.title}
                        fill
                        className="object-contain rounded-md"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted rounded-md">
                        <span className="text-muted-foreground">No image available</span>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <Badge variant="outline" className="mb-2">
                      {certification.platform}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{certification.date}</p>
                    <p className="text-sm mt-2">{certification.duration || "12 weeks"}</p>

                    {certification.verificationUrl && (
                      <Button variant="outline" size="sm" className="mt-4 w-full" onClick={handleVerify}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Verify
                      </Button>
                    )}
                  </div>
                </div>

                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-2">{certification.title}</h2>
                  <p className="text-lg text-muted-foreground mb-4">{certification.organization}</p>

                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground">
                      {certification.description ||
                        "This comprehensive certification program covers fundamental concepts and practical applications. The curriculum is designed to provide both theoretical knowledge and hands-on experience through real-world projects and assessments."}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Skills Acquired</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
