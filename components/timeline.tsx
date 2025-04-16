"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TimelineItemModal } from "@/components/timeline-item-modal"
import { ChevronRight, GraduationCap, Briefcase, Calendar, Building } from "lucide-react"

// Enhanced timeline items with more details
const timelineItems = [
  {
    id: 1,
    type: "education",
    title: "Bachelor's in Computer Application",
    organization: "Jain (Deemed to be University)",
    period: "2023 - 2026",
    description:
      "Specializing in Artificial Intelligence and Machine Learning with a focus on neural networks and deep learning architectures.",
    details: {
      achievements: [
        "Dean's List for Academic Excellence (2022-2023)",
        "First place in the University AI Challenge",
        "Published research paper on 'Neural Network Optimization Techniques'",
      ],
      skills: ["Python", "TensorFlow", "PyTorch", "Data Structures", "Algorithms", "Machine Learning"],
      courses: [
        "Advanced Algorithms and Data Structures",
        "Neural Networks and Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Reinforcement Learning",
      ],
    },
  },
  {
    id: 2,
    type: "education",
    title: "Pre University",
    organization: "Jain PU College",
    period: "2021 - 2023",
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
  {
    id: 3,
    type: "experience",
    title: "Generative AI Intern",
    organization: "GenX Reality",
    period: "May 2025",
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

export function Timeline() {
  const [selectedItem, setSelectedItem] = useState<(typeof timelineItems)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (item: (typeof timelineItems)[0]) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 rounded-full">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          <div className="space-y-6 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

            {timelineItems
              .filter((item) => item.type === "education")
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12"
                  onClick={() => openModal(item)}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-4 w-3 h-3 rounded-full bg-primary transform -translate-x-1.5" />

                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6">
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
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 rounded-full">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>

          <div className="space-y-6 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

            {timelineItems
              .filter((item) => item.type === "experience")
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12"
                  onClick={() => openModal(item)}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-4 w-3 h-3 rounded-full bg-primary transform -translate-x-1.5" />

                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6">
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
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <TimelineItemModal isOpen={isModalOpen} onClose={closeModal} item={selectedItem!} />
    </div>
  )
}
