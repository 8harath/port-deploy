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
  {
    id: 1,
    title: "GitHub Copilot for Project Management",
    organization: "Microsoft",
    platform: "Microsoft",
    date: "March 2025",
    category: "other",
    logo: "/images/certificates/c1_page-0001.jpg", // Updated path
    skills: ["Project Management", "GitHub Copilot"],
    duration: "4 Hours",
    description: "Grade Achieved: 97.50%",
  },
  {
    id: 2,
    title: "Building Generative AI Capabilities",
    organization: "University of Virginia Darden School Foundation",
    platform: "Coursera",
    date: "January 2025",
    category: "machine-learning",
    logo: "/images/certificates/c2_page-0001.jpg", // Updated path
    skills: ["Generative AI"],
    duration: "5 Hours",
    description: "Grade Achieved: 99%",
  },
  {
    id: 3,
    title: "Statistics Foundations",
    organization: "Meta",
    platform: "Coursera",
    date: "N/A",
    category: "data-science",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Statistics"],
    duration: "N/A",
    description: "Grade Achieved: 95%",
  },
  {
    id: 4,
    title: "Optimizing Your Workflow with GitHub Copilot and VS Code",
    organization: "Microsoft",
    platform: "Microsoft",
    date: "N/A",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["GitHub Copilot", "VS Code"],
    duration: "N/A",
    description: "Grade Achieved: 90%",
  },
  {
    id: 5,
    title: "Introduction to Generative AI with Snowflake",
    organization: "Snowflake",
    platform: "Snowflake",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Generative AI"],
    duration: "N/A",
    description: "Grade Achieved: 91.83%",
  },
  {
    id: 6,
    title: "Introduction to Data Analytics",
    organization: "Meta",
    platform: "Coursera",
    date: "N/A",
    category: "data-science",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Data Analytics"],
    duration: "N/A",
    description: "Grade Achieved: 89.37%",
  },
  {
    id: 7,
    title: "Introduction to Generative AI for Developers With Copilot",
    organization: "Microsoft",
    platform: "Microsoft",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Generative AI", "GitHub Copilot"],
    duration: "N/A",
    description: "Grade Achieved: 90%",
  },
  {
    id: 8,
    title: "Boost Your Productivity with GitHub Copilot",
    organization: "Microsoft",
    platform: "Microsoft",
    date: "N/A",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["GitHub Copilot"],
    duration: "N/A",
    description: "Grade Achieved: 97.50%",
  },
  {
    id: 9,
    title: "Trustworthy AI: Managing Bias, Ethics, and Accountability",
    organization: "Johns Hopkins University",
    platform: "Coursera",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["AI Ethics"],
    duration: "N/A",
    description: "Grade Achieved: 89.16%",
  },
  {
    id: 10,
    title: "Introduction to Business Analytics",
    organization: "Tableau Learning Partner",
    platform: "Tableau",
    date: "N/A",
    category: "data-science",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Business Analytics"],
    duration: "N/A",
    description: "Grade Achieved: 93.12%",
  },
  {
    id: 11,
    title: "Introduction to Artificial Intelligence (AI)",
    organization: "IBM",
    platform: "IBM",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Artificial Intelligence"],
    duration: "N/A",
    description: "Grade Achieved: 98%",
  },
  {
    id: 12,
    title: "GenAI Basics - How LLMs Work",
    organization: "Duke University",
    platform: "Coursera",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Generative AI", "LLMs"],
    duration: "N/A",
    description: "Grade Achieved: 100%",
  },
  {
    id: 13,
    title: "Responsible AI: Applying AI Principles with Google Cloud",
    organization: "Google Cloud",
    platform: "Google Cloud",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Responsible AI"],
    duration: "N/A",
    description: "Grade Achieved: 100%",
  },
  {
    id: 14,
    title: "Advertising in the Age of Generative AI",
    organization: "University of Virginia Darden School Foundation",
    platform: "Coursera",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Generative AI"],
    duration: "N/A",
    description: "Grade Achieved: 100%",
  },
  {
    id: 15,
    title: "Introduction to Responsible AI",
    organization: "Google Cloud",
    platform: "Google Cloud",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Responsible AI"],
    duration: "N/A",
    description: "Grade Achieved: 75%",
  },
  {
    id: 16,
    title: "Google Prompting Essentials",
    organization: "Google",
    platform: "Google",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Prompt Engineering"],
    duration: "N/A",
    description: "Grade Achieved: 99.16%",
  },
  {
    id: 17,
    title: "Introduction to Large Language Models",
    organization: "Google Cloud",
    platform: "Google Cloud",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["LLMs"],
    duration: "N/A",
    description: "Grade Achieved: 100%",
  },
  {
    id: 18,
    title: "Generative AI with Large Language Models",
    organization: "DeepLearning.AI, Amazon Web Services",
    platform: "Coursera",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Generative AI", "LLMs"],
    duration: "N/A",
    description: "Grade Achieved: 99.25%",
  },
  {
    id: 19,
    title: "Customer Service in the Age of Generative AI",
    organization: "University of Virginia Darden School Foundation",
    platform: "Coursera",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Generative AI"],
    duration: "N/A",
    description: "Grade Achieved: 100%",
  },
  {
    id: 20,
    title: "Content Marketing Using Generative AI",
    organization: "University of Virginia Darden School Foundation",
    platform: "Coursera",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Generative AI"],
    duration: "N/A",
    description: "Grade Achieved: 98.75%",
  },
  // New certifications
  {
    id: 21,
    title: "Ancient Philosophy: Plato & His Predecessors",
    organization: "University of Pennsylvania",
    platform: "Coursera",
    date: "N/A",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Philosophy"],
    duration: "N/A",
    description: "Grade Achieved: 95.32%",
  },
  {
    id: 22,
    title: "Introduction to Software Engineering",
    organization: "IBM",
    platform: "IBM",
    date: "N/A",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Software Engineering"],
    duration: "N/A",
    description: "Grade Achieved: 88.50%",
  },
  {
    id: 23,
    title: "Prompt Engineering for ChatGPT",
    organization: "Vanderbilt University",
    platform: "Coursera",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Prompt Engineering"],
    duration: "N/A",
    description: "Grade Achieved: 100%",
  },
  {
    id: 24,
    title: "Philosophy of Science",
    organization: "University of Pennsylvania",
    platform: "Coursera",
    date: "N/A",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Philosophy"],
    duration: "N/A",
    description: "Grade Achieved: 90.33%",
  },
  {
    id: 25,
    title: "Introduction to Generative AI",
    organization: "Google Cloud",
    platform: "Google Cloud",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Generative AI"],
    duration: "N/A",
    description: "Grade Achieved: 100%",
  },
  {
    id: 26,
    title: "Design Thinking for Innovation",
    organization: "University of Virginia",
    platform: "Coursera",
    date: "N/A",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Design Thinking"],
    duration: "N/A",
    description: "Grade Achieved: 100%",
  },
  {
    id: 27,
    title: "Basics of Computer Systems",
    organization: "Jain Group of Institutes",
    platform: "Jain University",
    date: "N/A",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Computer Systems"],
    duration: "N/A",
    description: "Grade Achieved: 100%",
  },
  {
    id: 28,
    title: "Software Engineering: Modeling Software Systems using UML",
    organization: "The Hong Kong University of Science and Technology",
    platform: "Coursera",
    date: "N/A",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Software Engineering", "UML"],
    duration: "N/A",
    description: "Grade Achieved: 85.71%",
  },
  {
    id: 29,
    title: "Global Strategy II: Doing Business in The Global Economy",
    organization: "University of Illinois Urbana-Champaign",
    platform: "Coursera",
    date: "N/A",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Global Strategy"],
    duration: "N/A",
    description: "Grade Achieved: 98.14%",
  },
  {
    id: 30,
    title: "Blockchain and Cryptocurrency Explained",
    organization: "University of Michigan",
    platform: "Coursera",
    date: "N/A",
    category: "data-science",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Blockchain", "Cryptocurrency"],
    duration: "N/A",
    description: "Grade Achieved: 93.29%",
  },
  {
    id: 31,
    title: "Introduction to Philosophy",
    organization: "The University of Edinburgh",
    platform: "Coursera",
    date: "N/A",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Philosophy"],
    duration: "N/A",
    description: "Grade Achieved: 94%",
  },
  {
    id: 32,
    title: "The Bits and Bytes of Computer Networking",
    organization: "Google",
    platform: "Coursera",
    date: "N/A",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Networking"],
    duration: "N/A",
    description: "Grade Achieved: 92.80%",
  },
  {
    id: 33,
    title: "Machine Learning for All",
    organization: "University of London",
    platform: "Coursera",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Machine Learning"],
    duration: "N/A",
    description: "Grade Achieved: 96%",
  },
  {
    id: 34,
    title: "The Structured Query Language (SQL)",
    organization: "University of Colorado Boulder",
    platform: "Coursera",
    date: "N/A",
    category: "data-science",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["SQL"],
    duration: "N/A",
    description: "Grade Achieved: 98%",
  },
  {
    id: 35,
    title: "Generative AI: Business Transformation and Career Growth",
    organization: "IBM",
    platform: "Coursera",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Generative AI"],
    duration: "N/A",
    description: "Grade Achieved: 95.14%",
  },
  {
    id: 36,
    title: "Operators in C",
    organization: "Jain Group of Institutes",
    platform: "Jain University",
    date: "N/A",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["C Programming"],
    duration: "N/A",
    description: "Grade Achieved: 100%",
  },
  {
    id: 37,
    title: "AI For Everyone",
    organization: "DeepLearning.AI",
    platform: "Coursera",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Artificial Intelligence"],
    duration: "N/A",
    description: "Grade Achieved: 93.25%",
  },
  {
    id: 38,
    title: "Global Impact: Business Ethics",
    organization: "University of Illinois Urbana-Champaign",
    platform: "Coursera",
    date: "N/A",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Business Ethics"],
    duration: "N/A",
    description: "Grade Achieved: 95.50%",
  },
  {
    id: 39,
    title: "Generative AI: Impact, Considerations, and Ethical Issues",
    organization: "IBM",
    platform: "Coursera",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Generative AI", "AI Ethics"],
    duration: "N/A",
    description: "Grade Achieved: 91.75%",
  },
  {
    id: 40,
    title: "Programming for Everybody (Getting Started with Python)",
    organization: "University of Michigan",
    platform: "Coursera",
    date: "N/A",
    category: "data-science",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Python"],
    duration: "N/A",
    description: "Grade Achieved: 95.77%",
  },
  {
    id: 41,
    title: "Generative AI: Foundation Models and Platforms",
    organization: "IBM",
    platform: "Coursera",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Generative AI"],
    duration: "N/A",
    description: "Grade Achieved: 93.75%",
  },
  {
    id: 42,
    title: "Generative AI: Prompt Engineering Basics",
    organization: "IBM",
    platform: "Coursera",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Prompt Engineering"],
    duration: "N/A",
    description: "Grade Achieved: 85.71%",
  },
  {
    id: 43,
    title: "Introduction to Networking",
    organization: "NVIDIA",
    platform: "NVIDIA",
    date: "N/A",
    category: "other",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Networking"],
    duration: "N/A",
    description: "Grade Achieved: 86%",
  },
  {
    id: 44,
    title: "Generative AI: Introduction and Applications",
    organization: "IBM",
    platform: "Coursera",
    date: "N/A",
    category: "machine-learning",
    logo: "/placeholder.svg?height=40&width=120",
    skills: ["Generative AI"],
    duration: "N/A",
    description: "Grade Achieved: 100%",
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
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline">{certification.platform}</Badge>
          <span className="text-xs text-muted-foreground">{certification.date}</span>
        </div>
      </CardContent>
    </Card>
  );
}
