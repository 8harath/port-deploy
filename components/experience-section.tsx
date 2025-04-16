"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TimelineItemModal } from "@/components/timeline-item-modal"
import { ChevronRight, Briefcase, Calendar, Building, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// Experience timeline items with actual image paths
const experienceItems = [
  {
    id: 3,
    type: "experience",
    title: "Generative AI Intern",
    organization: "GenX Reality",
    period: "May 2025",
    logo: "/images/certificates/genxreality-logo.png",
    website: "https://genxreality.in/",
    description: "Worked on implementing and optimizing neural network architectures for computer vision applications.",
    details: {
      achievements: [
        "Improved model accuracy by 15% through architecture optimization",
        "Reduced training time by 30% using distributed computing techniques",
        "Developed a custom data augmentation pipeline for limited datasets",
      ],
      skills: ["Computer Vision", "PyTorch", "Data Augmentation", "Model Optimization", "Docker"],
      projects: [
        "Real-time object detection system for autonomous vehicles",
        "Image classification model for medical diagnostics",
        "Data augmentation library for limited training datasets",
      ],
    },
  },
  {
    id: 4,
    type: "experience",
    title: "AI & ML Intern",
    organization: "Monospace",
    period: "March 2025",
    logo: "/images/logos/monospace.jpeg",
    website: "https://www.lilacmosaic.com/",
    description: "Assisted in research projects focused on natural language processing and sentiment analysis.",
    details: {
      achievements: [
        "Contributed to a research paper published in a top-tier NLP conference",
        "Developed a novel approach to sentiment analysis with 92% accuracy",
        "Created a dataset of 10,000+ annotated text samples",
      ],
      skills: ["NLP", "BERT", "Transformers", "Sentiment Analysis", "Python", "Research"],
      projects: [
        "Sentiment analysis model for social media content",
        "Text classification system for customer feedback",
        "Named entity recognition for legal documents",
      ],
    },
  },
  {
    id: 5,
    type: "experience",
    title: "Data Analyst Intern",
    organization: "1M1B",
    period: "February 2025",
    logo: "/images/logos/1m1b-logo.jpeg",
    website: "https://www.activate1m1b.org/",
    description: "Developed and maintained web applications using React and Node.js, implementing RESTful APIs.",
    details: {
      achievements: [
        "Reduced page load time by 40% through code optimization",
        "Implemented a new feature that increased user engagement by 25%",
        "Resolved 30+ bugs in the existing codebase",
      ],
      skills: ["React", "Node.js", "JavaScript", "RESTful APIs", "Git", "Agile"],
      projects: [
        "E-commerce dashboard with real-time analytics",
        "User authentication system with multi-factor authentication",
        "API integration with third-party payment processors",
      ],
    },
  },
]

export function ExperienceSection() {
  const [selectedItem, setSelectedItem] = useState<(typeof experienceItems)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState(true)

  // Add the helper function at the top of the component
  const getValidImageSrc = (src: string | undefined | null) => {
    if (!src || src === "") {
      return null
    }
    return src
  }

  const openModal = (item: (typeof experienceItems)[0]) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const toggleExpand = () => {
    setExpandedSection(!expandedSection)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 rounded-full">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">Experience</h3>
        </div>

        <Button variant="ghost" size="sm" onClick={toggleExpand} className="flex items-center gap-1">
          {expandedSection ? "Collapse" : "Expand"}
          <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection ? "rotate-180" : "rotate-0"}`} />
        </Button>
      </div>

      <AnimatePresence>
        {expandedSection && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 relative overflow-hidden"
          >
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

            {experienceItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-4 w-3 h-3 rounded-full bg-primary transform -translate-x-1.5" />

                <Card
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Link
                        href={item.website || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="relative min-w-[60px] w-[60px] h-[60px] rounded-xl overflow-hidden border bg-muted/20 hover:opacity-80 transition-opacity"
                      >
                        {getValidImageSrc(item.logo) ? (
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.organization}
                            fill
                            className="object-contain p-1"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-muted">
                            <span className="text-xs text-muted-foreground">Logo</span>
                          </div>
                        )}
                      </Link>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-semibold">{item.title}</h4>
                        </div>

                        <div className="flex items-center text-muted-foreground mb-3 text-sm">
                          <Building className="h-4 w-4 mr-1" />
                          <span>{item.organization}</span>
                          <span className="mx-2">•</span>
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{item.period}</span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                        <div className="flex items-center text-primary text-sm font-medium">
                          <span>View details</span>
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {!expandedSection && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-muted/30 rounded-lg p-4 text-center"
        >
          <p className="text-muted-foreground">
            3 positions including Machine Learning Intern, Research Assistant, and Software Development Intern
          </p>
        </motion.div>
      )}

      {/* Modal */}
      <TimelineItemModal isOpen={isModalOpen} onClose={closeModal} item={selectedItem!} />
    </div>
  )
}
