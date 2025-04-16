"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CertificationModal } from "@/components/certification-modal"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

// Extended certifications list
const certifications = [
  // Machine Learning category
  {
    id: 1,
    title: "Microsoft Copilot for Software Development",
    organization: "Microsoft",
    platform: "Coursera",
    date: "January 2025",
    category: "machine-learning",
    logo: "/Certi-1.jpg?height=40&width=120",
    skills: ["Code Analysis", "Developing with AI", "Project Management", "Code Generation", "GenAI", "AI Tools in Business", "GenAI Basics", "Ethics in AI", "GitHub Copilot", "vs code", "Document Generation"],
    duration: "1 month",
    description:
      "A comprehensive program focused on integrating generative AI into software development workflows, with an emphasis on GitHub Copilot. Covers foundational concepts of generative AI along with practical applications in coding, code review, documentation, and project planning to enhance productivity, efficiency, and overall development effectiveness.",
  },
  {
    id: 2,
    title: "Deep Learning Fundamentals",
    organization: "DeepLearning.AI",
    platform: "Coursera",
    date: "October 2023",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Deep Learning", "TensorFlow", "Neural Networks", "Computer Vision"],
    duration: "2 months",
    description:
      "An in-depth exploration of deep learning architectures, including CNNs, RNNs, and transformers with hands-on projects.",
  },
  {
    id: 3,
    title: "TensorFlow Developer Certificate",
    organization: "Google",
    platform: "TensorFlow",
    date: "July 2023",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["TensorFlow", "Keras", "Model Deployment", "ML Pipelines"],
    duration: "6 weeks",
    description:
      "Professional certification validating expertise in building and deploying machine learning models using TensorFlow.",
  },
  {
    id: 4,
    title: "Python for Data Science",
    organization: "IBM",
    platform: "edX",
    date: "March 2023",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Python", "Pandas", "NumPy", "Data Visualization"],
    duration: "8 weeks",
    description:
      "Comprehensive course on using Python libraries for data manipulation, analysis, and visualization in data science applications.",
  },

  // Web Development category
  {
    id: 5,
    title: "Full Stack Web Development",
    organization: "Meta",
    platform: "Coursera",
    date: "December 2023",
    category: "web-development",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    duration: "16 weeks",
    description:
      "Complete full-stack development program covering frontend, backend, databases, and deployment with industry-standard tools and frameworks.",
  },
  {
    id: 6,
    title: "React - The Complete Guide",
    organization: "Udemy",
    platform: "Udemy",
    date: "November 2023",
    category: "web-development",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["React", "Redux", "React Hooks", "Next.js", "TypeScript"],
    duration: "10 weeks",
    description:
      "Comprehensive React course covering core concepts, state management, hooks, routing, and advanced patterns for building modern web applications.",
  },

  // Cloud Computing category
  {
    id: 7,
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    platform: "AWS",
    date: "February 2024",
    category: "cloud-computing",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["AWS", "Cloud Architecture", "Serverless", "Infrastructure as Code"],
    duration: "12 weeks",
    description:
      "Professional certification validating expertise in designing distributed systems on AWS, including compute, storage, database, and networking services.",
  },
  {
    id: 8,
    title: "Google Cloud Platform Fundamentals",
    organization: "Google Cloud",
    platform: "Coursera",
    date: "September 2023",
    category: "cloud-computing",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["GCP", "Cloud Computing", "Kubernetes", "BigQuery"],
    duration: "8 weeks",
    description:
      "Introduction to Google Cloud Platform services and best practices for deploying, managing, and scaling applications in the cloud.",
  },

  // Other category
  {
    id: 9,
    title: "Data Structures and Algorithms",
    organization: "University of California San Diego",
    platform: "edX",
    date: "August 2023",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Algorithms", "Data Structures", "Problem Solving", "Complexity Analysis"],
    duration: "14 weeks",
    description:
      "Rigorous course on fundamental data structures and algorithms, including analysis, implementation, and optimization techniques.",
  },
  {
    id: 10,
    title: "Blockchain Fundamentals",
    organization: "Berkeley",
    platform: "edX",
    date: "June 2023",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Blockchain", "Smart Contracts", "Cryptography", "Decentralized Applications"],
    duration: "10 weeks",
    description:
      "Introduction to blockchain technology, distributed ledgers, consensus mechanisms, and smart contract development with practical applications.",
  },
]

export default function CertificationsPage() {
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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/#certifications">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold mb-2">My Certifications</h1>
          <p className="text-muted-foreground">
            A comprehensive list of all my professional certifications and courses
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="machine-learning">Machine Learning</TabsTrigger>
            <TabsTrigger value="web-development">Web Development</TabsTrigger>
            <TabsTrigger value="cloud-computing">Cloud Computing</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <CertificationCard key={cert.id} certification={cert} onClick={() => openModal(cert)} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="machine-learning" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications
                .filter((cert) => cert.category === "machine-learning")
                .map((cert) => (
                  <CertificationCard key={cert.id} certification={cert} onClick={() => openModal(cert)} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="web-development" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications
                .filter((cert) => cert.category === "web-development")
                .map((cert) => (
                  <CertificationCard key={cert.id} certification={cert} onClick={() => openModal(cert)} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="cloud-computing" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications
                .filter((cert) => cert.category === "cloud-computing")
                .map((cert) => (
                  <CertificationCard key={cert.id} certification={cert} onClick={() => openModal(cert)} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="other" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications
                .filter((cert) => cert.category === "other")
                .map((cert) => (
                  <CertificationCard key={cert.id} certification={cert} onClick={() => openModal(cert)} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <CertificationModal isOpen={isModalOpen} onClose={closeModal} certification={selectedCertification} />
      </div>
    </div>
  )
}

interface CertificationCardProps {
  certification: {
    id: number
    title: string
    organization: string
    platform: string
    date: string
    category: string
    logo: string
  }
  onClick: () => void
}

function CertificationCard({ certification, onClick }: CertificationCardProps) {
  return (
    <Card
      className="h-full hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="h-32 mb-2 relative">
          <Image
            src="/placeholder.svg?height=150&width=250"
            alt={certification.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <CardTitle className="text-lg">{certification.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{certification.organization}</p>
        <div className="flex justify-between items-center">
          <Badge variant="outline">{certification.platform}</Badge>
          <span className="text-xs text-muted-foreground">{certification.date}</span>
        </div>
      </CardContent>
    </Card>
  )
}
