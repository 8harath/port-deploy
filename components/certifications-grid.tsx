"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import { CertificationModal } from "./certification-modal"

// Updated certifications with actual image paths
const certifications = [
  {
    id: 1,
    title: "Microsoft Copilot for Software Developmen",
    organization: "Microsoft",
    platform: "Coursera",
    date: "January 2025",
    logo: "",
    image: "/images/logos/microsoft-logo-02.jpeg",
    skills: ["Code Analysis", "Developing with AI", "Project Management", "Code Generation", "GenAI", "AI Tools in Business", "GenAI Basics", "Ethics in AI", "GitHub Copilot", "VS Code", "Document Generation"],  
    duration: "2 months",
    description:
"A comprehensive course designed to build expertise in leveraging Microsoft Copilot for software development. Focused on enhancing productivity, efficiency, and effectiveness, this program explores the capabilities of GitHub Copilot in real-world development workflows. It covers generative AI fundamentals and applies them across code review, documentation, development planning, and more—equipping developers with practical skills to integrate AI into everyday coding tasks.",
    verificationUrl: "https://coursera.org/share/5ba17c4389772d155809bb719ffc0903",
  },
  {
    id: 2,
    title: "Introduction To Data Analytics",
    organization: "Mata",
    platform: "Coursera",
    date: "February 2025",
    logo: "/images/certifications/deeplearning-logo.jpg",
    image: "/images/logos/meta.png",
    skills: ["Marketing", "Data Management", "Data Analysis", "Data Visualization"] ,  
    duration: "1 Month",
    description:
      "A hands-on course focused on applying Generative AI in digital marketing. Learn how to create logos, marketing content, and services using AI tools. Gain practical experience in reviewing and deploying custom GPT chatbots for marketing and customer service. The course also covers the implementation of AI-driven marketing strategies, addressing both internal and external strategic considerations to help you build effective, ethical, and future-ready campaigns.",
    verificationUrl: "https://coursera.org/share/1f326cf40ae92549139d88b3ba4d1612",
  },
  {
    id: 3,
    title: "Introduction to Generative AI Learning Path",
    organization: "Google",
    platform: "Coursera",
    date: "July 2023",
    logo: "/images/certifications/google-logo.jpg",
    image: "/images/logos/google-logo.webp",
    skills: ["TensorFlow", "Keras", "Model Deployment", "ML Pipelines"],
    duration: "6 weeks",
    description:
      "Professional certification validating expertise in building and deploying machine learning models using TensorFlow.",
    verificationUrl: "https://coursera.org/share/385da91f61d0241bfda5adadc7ecb4ac",
  },
  {
    id: 4,
    title: "Generative AI Fundamentsals",
    organization: "IBM",
    platform: "Coursera",
    date: "December 2024",
    logo: "/images/logos/IBM.jpg",
    image: "/images/logos/IBM.jpg",
    skills: ["Prompt Engineering", "Generative AI Careers", "Generative AI", "Stable Diffusion", "Foundation Models", "Artificial Intelligence (AI)", "Hugging Face", "ChatGPT"],  
    duration: "3 weeks",
    description:
      "Comprehensive course on using Python libraries for data manipulation, analysis, and visualization in data science applications.",
    verificationUrl: "https://coursera.org/share/35d9322bf9977a30e16bbc49b0641c9f",
  },
]

// Placeholder function for image validation (replace with your actual implementation)
const getValidImageSrc = (src: string | undefined): src is string => {
  return typeof src === "string" && src.length > 0 // Basic check, improve as needed
}

export function CertificationsGrid() {
  const [selectedCertification, setSelectedCertification] = useState<(typeof certifications)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (certification: (typeof certifications)[0]) => {
    setSelectedCertification(certification)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedCertification(null), 300)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => openModal(cert)}
            className="cursor-pointer"
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02]">
              <CardHeader className="pb-2">
                <div className="h-32 mb-2 relative">
                  {getValidImageSrc(cert.image) ? (
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted rounded-md">
                      <span className="text-muted-foreground text-sm">Image not available</span>
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Badge variant="outline">{cert.platform}</Badge>
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <CertificationModal isOpen={isModalOpen} onClose={closeModal} certification={selectedCertification} />
    </>
  )
}
