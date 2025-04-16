"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">Last updated: April 8, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>
              Welcome to Bharath K's personal portfolio website. I respect your privacy and am committed to protecting
              your personal data. This privacy policy will inform you about how I look after your personal data when you
              visit my website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">The Data I Collect</h2>
            <p>When you use the contact form on my website, I collect the following personal information:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Your name</li>
              <li>Your email address</li>
              <li>The subject of your message</li>
              <li>The content of your message</li>
            </ul>
            <p>Additionally, my website uses analytics tools that may collect:</p>
            <ul className="list-disc pl-6 my-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Time and date of your visit</li>
              <li>Pages you viewed</li>
              <li>Time spent on pages</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How I Use Your Data</h2>
            <p>I use the information you provide through the contact form solely to:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Respond to your inquiries</li>
              <li>Communicate with you about potential collaborations or opportunities</li>
              <li>Improve my website and services</li>
            </ul>
            <p>
              I will never sell your information to third parties or use it for marketing purposes without your explicit
              consent.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p>
              I have implemented appropriate security measures to prevent your personal data from being accidentally
              lost, used, or accessed in an unauthorized way. I limit access to your personal data to those who have a
              genuine business need to know it.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
            <p>Under data protection laws, you have rights including:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Your right of access - You have the right to ask me for copies of your personal information.</li>
              <li>
                Your right to rectification - You have the right to ask me to rectify information you think is
                inaccurate. You also have the right to ask me to complete information you think is incomplete.
              </li>
              <li>
                Your right to erasure - You have the right to ask me to erase your personal information in certain
                circumstances.
              </li>
              <li>
                Your right to restriction of processing - You have the right to ask me to restrict the processing of
                your information in certain circumstances.
              </li>
              <li>
                Your right to object to processing - You have the right to object to the processing of your personal
                data in certain circumstances.
              </li>
              <li>
                Your right to data portability - You have the right to ask that I transfer the information you gave me
                to another organization, or to you, in certain circumstances.
              </li>
            </ul>
            <p>
              You are not required to pay any charge for exercising your rights. If you make a request, I have one month
              to respond to you.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              I may update this privacy policy from time to time. I will notify you of any changes by posting the new
              privacy policy on this page and updating the "Last updated" date at the top of this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Me</h2>
            <p>If you have any questions about this privacy policy or my data practices, please contact me at:</p>
            <p className="my-4">Email: 8harath.k@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
