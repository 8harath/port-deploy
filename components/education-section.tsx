"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TimelineItemModal } from "@/components/timeline-item-modal"
import { ChevronRight, GraduationCap, Calendar, Building, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// Education timeline items with actual image paths
const educationItems = [
  {
    id: 1,
    type: "education",
    title: "Bachelor's in Computer Application",
    organization: "Jain (Deemed to be University)",
    period: "2023 - 2026",
    logo: "/images/logos/jain-uni-logo.jpeg",
    website: "https://www.jainuniversity.ac.in/",
    description:
      "Specializing in Data Analytics with a focus on statistical modeling, predictive analytics, and data-driven decision-making techniques.",
    details: {
      achievements: [
        "Active member in the Research & Development Club",
        "Participated in various hackathons and coding competitions",
      ],
      skills: ["Python", "SQL", "Java", "C++", "Operating Systems", "Probablity and Statistics", "Data Structures", "Algorithms", "Machine Learning"],
      courses: [
        "Advanced Algorithms and Data Structures",
        "Data Analysis and Visualization",
        "Machine Learning",
        "Reinforcement Learning",
        "Programming Languages",
      ],
    },
  },
  {
    id: 2,
    type: "education",
    title: "Pre University",
    organization: "Jain PU College",
    period: "2021 - 2023",
    logo: "/images/logos/jain-pu-logo.jpeg",
    website: "https://www.futureplans.edu",
    description:
      "Planning to pursue advanced studies in AI research with a focus on generative models and reinforcement learning.",
    details: {
      skills: ["Generative Models", "Reinforcement Learning", "Research Methodology", "Advanced Mathematics"],
      courses: [
        "Advanced Deep Learning",
        "Generative Adversarial Networks",
        "Reinforcement Learning",
        "Research Methods in AI",
      ],
    },
  },
]

export function EducationSection() {
  const [selectedItem, setSelectedItem] = useState<(typeof educationItems)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState(true)

  // Add the helper function at the top of the component
  const getValidImageSrc = (src: string | undefined | null) => {
    if (!src || src === "") {
      return null
    }
    return src
  }

  const openModal = (item: (typeof educationItems)[0]) => {
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
    <div className="mb-16 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 rounded-full">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">Education</h3>
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

            {educationItems.map((item, index) => (
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
            Bachelor's in Computer Science (2022-2026) and plans for Postgraduate Studies (2026-2028)
          </p>
        </motion.div>
      )}

      {/* Modal */}
      <TimelineItemModal isOpen={isModalOpen} onClose={closeModal} item={selectedItem!} />
    </div>
  )
}
