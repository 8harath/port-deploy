"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsGrid } from "@/components/certifications-grid"
import { ContactForm } from "@/components/contact-form"
import { SocialIcons } from "@/components/social-icons"
import { PersonalInterests } from "@/components/personal-interests"
import { LogoAnimation } from "@/components/logo-animation"
import { HeroGeometric } from "@/components/hero-geometric"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { LoadingAnimation } from "@/components/loading-animation"
import { AnimatedBubbles } from "@/components/animated-bubbles"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUp, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Reduced to 1.5 seconds for faster loading

    return () => clearTimeout(timer)
  }, [])

  // Add a useEffect to preload placeholder images
  useEffect(() => {
    // Preload placeholder images to avoid empty src errors
    const preloadImage = (src: string) => {
      const img = new Image()
      img.src = src
    }

    preloadImage("/placeholder.svg?height=300&width=600")
    preloadImage("/placeholder.svg?height=80&width=80")
    preloadImage("/placeholder.svg?height=400&width=600")
  }, [])

  // Add this function at the top of the component, before the return statement
  // Helper function to check if an image path is valid
  const getValidImageSrc = (src: string | undefined | null) => {
    if (!src || src === "") {
      return null // Return null for empty strings or undefined
    }
    return src
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingAnimation key="loading" />
      ) : (
        <motion.main
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-background relative"
        >
          <AnimatedBubbles />
          {/* Navigation */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center">
                <LogoAnimation />
                <div className="text-xl font-semibold">Bharath K</div>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
                <a href="#certifications" className="hover:text-primary transition-colors">
                  Certifications
                </a>
                <a href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </a>
                <a href="#education" className="hover:text-primary transition-colors">
                  Education
                </a>
                <a href="#experience" className="hover:text-primary transition-colors">
                  Experience
                </a>
                <a href="#beyond-tech" className="hover:text-primary transition-colors">
                  Beyond Tech
                </a>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <ModeToggle />
                <div className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <span className="sr-only">Open menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" x2="20" y1="12" y2="12" />
                      <line x1="4" x2="20" y1="6" y2="6" />
                      <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Hero Geometric Section */}
          <section id="home" className="min-h-screen">
            <HeroGeometric />
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-muted/30">
            <AboutSection />
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
              <CertificationsGrid />
              <div className="text-center mt-12">
                <Button variant="outline" asChild>
                  <Link href="/certifications">Show More Certifications</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <p className="text-lg max-w-2xl mx-auto mb-12 text-center">
                Hey, these are some of my favorite builds! Each one started with 'I wonder if...' and ended with something I'm actually pretty proud of.
                </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-500 shadow-lg hover:shadow-primary/50 px-8 py-6 rounded-xl"
                  asChild
                >
                  <a 
                    href="https://8harath.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <span className="relative z-10 text-lg font-medium">Explore My Projects</span>
                    <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
              <SkillsSection />
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Education & Experience</h2>
              <EducationSection />
              <ExperienceSection />
            </div>
          </section>

          {/* Personal Interests Section */}
          <section id="beyond-tech" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6 text-center">Beyond Tech</h2>
              <p className="text-lg text-center max-w-2xl mx-auto mb-12">
              My laptop closes eventually!
            Here's where my mind wanders when I step away from all things digital.
              </p>
              <PersonalInterests />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-3">Get In Touch</h2>
                  <p className="text-muted-foreground">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-6 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <LogoAnimation />
                  <p className="text-sm text-muted-foreground">© 2025 Bharath K (8harath)</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://github.com/8harath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted/50 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/8harath/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted/50 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/8harath_k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted/50 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4l11.733 16h4.267l-11.733-16z"></path>
                      <path d="M4 20l6.768-6.768m2.46-2.46L20 4"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/8harath.k/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted/50 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="https://reddit.com/user/8harath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted/50 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Reddit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M13 8c0-1 1-2 2-2 1.5 0 2.5 1 3 2.5"></path>
                      <path d="M20 12a2 2 0 0 0-2-2c-.5 0-1 0-1.5.5"></path>
                      <path d="M13 16c1 1 2 1 3.5 1 1 0 2 0 2.5-1"></path>
                      <path d="M8 20c0-1 1-2 3-2s3 1 3 2"></path>
                      <path d="M8 12a2 2 0 0 0-2-2c-.5 0-1 0-1.5.5"></path>
                      <path d="M11 16c-1 1-2 1-3.5 1-1 0-2 0-2.5-1"></path>
                    </svg>
                  </a>
                  <a
                    href="https://discord.gg/8harath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted/50 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Discord"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="9" cy="12" r="1"></circle>
                      <circle cx="15" cy="12" r="1"></circle>
                      <path d="M7.5 7.5c3.5-1 5.5-1 9 0"></path>
                      <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                      <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2-1.5 2-3 0-1.5-3-1.5-3-6 0-4.5 1.5-5.5 3-5.5 1.5 0 1.5 1.5 1.5 3"></path>
                      <path d="M8.5 17c0 1-1.5 3-2 3-1.5 0-2-1.5-2-3 0-1.5 3-1.5 3-6 0-4.5-1.5-5.5-3-5.5-1.5 0-1.5 1.5-1.5 3"></path>
                    </svg>
                  </a>
                  <a
                    href="https://bento.me/8harath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted/50 rounded-full hover:bg-primary/20 transition-colors"
                    aria-label="Bento"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="8" height="8" x="2" y="2" rx="2"></rect>
                      <rect width="8" height="8" x="14" y="2" rx="2"></rect>
                      <rect width="8" height="8" x="2" y="14" rx="2"></rect>
                      <rect width="8" height="8" x="14" y="14" rx="2"></rect>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="border-t border-border mt-4 pt-4">
                <div className="flex justify-center gap-6">
                  <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/cookie-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </div>

                <div className="text-center mt-2 text-xs text-muted-foreground">
                  <p>Designed and developed with passion.</p>
                </div>
              </div>
            </div>
          </footer>

          <div className="fixed bottom-8 right-8 z-50">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  )
}
