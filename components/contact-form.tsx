"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Send, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({
      publicKey: "qx2jxijBdwq8Vvg0C",
      limitRate: {
        throttle: 1000,
      },
    })
  }, [])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required"
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setFormStatus("submitting")

    try {
      if (!formRef.current) {
        throw new Error("Form reference is not available")
      }

      const templateParams = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        subject: formData.subject,
        message: formData.message,
      }

      // Using EmailJS with the provided credentials
      const result = await emailjs.send(
        "service_dgh78ib",
        "template_75ham2s",
        templateParams,
        "qx2jxijBdwq8Vvg0C"
      )

      if (result.status === 200) {
        // Reset form
        setFormData({ user_name: "", user_email: "", subject: "", message: "" })
        setFormStatus("success")

        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus("idle")
        }, 5000)
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus("error")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="bg-card border rounded-xl p-6 md:p-8 shadow-lg">
        <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {formStatus === "success" && (
            <Alert className="bg-green-500/10 text-green-500 border-green-500/20">
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>Your message has been sent successfully! I'll get back to you soon.</AlertDescription>
            </Alert>
          )}

          {formStatus === "error" && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>There was an error sending your message. Please try again later.</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="user_name">Name</Label>
              <Input
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Your name"
                disabled={formStatus === "submitting"}
                className={`placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none ${
                  errors.user_name ? "border-red-500" : ""
                }`}
              />
              {errors.user_name && <p className="text-sm text-red-500">{errors.user_name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="user_email">Email</Label>
              <Input
                id="user_email"
                name="user_email"
                type="email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                disabled={formStatus === "submitting"}
                className={`placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none ${
                  errors.user_email ? "border-red-500" : ""
                }`}
              />
              {errors.user_email && <p className="text-sm text-red-500">{errors.user_email}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this regarding?"
              disabled={formStatus === "submitting"}
              className={`placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none ${
                errors.subject ? "border-red-500" : ""
              }`}
            />
            {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={5}
              maxLength={500}
              disabled={formStatus === "submitting"}
              className={`placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none ${
                errors.message ? "border-red-500" : ""
              }`}
            />
            <p className="text-xs text-muted-foreground">
              {formData.message.length}/500 characters
            </p>
            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            disabled={formStatus === "submitting"}
            className="w-full hover:bg-primary/90 active:scale-95 transition-transform relative overflow-hidden"
            size="lg"
          >
            <AnimatePresence mode="wait">
              {formStatus === "submitting" ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="mr-2 h-4 w-4" />
                  </motion.div>
                  <span>Sending...</span>
                </motion.span>
              ) : (
                <motion.span
                  key="send"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </motion.span>
              )}
            </AnimatePresence>
            {formStatus === "submitting" && (
              <motion.div
                className="absolute inset-0 bg-primary/20"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground mt-4">
            Your message will be sent directly to my inbox at 8harath.k@gmail.com
          </p>
        </form>
      </div>
    </motion.div>
  )
}
