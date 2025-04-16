"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
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
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">Last updated: April 8, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>
              Welcome to Bharath K's personal portfolio website. These Terms of Service govern your use of my website.
              By accessing or using my website, you agree to be bound by these Terms. If you disagree with any part of
              the terms, you may not access the website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, I own the intellectual property rights for all material on this website. All
              intellectual property rights are reserved. You may view and/or print pages from the website for your own
              personal use subject to restrictions set in these terms of service.
            </p>
            <p>You must not:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Republish material from this website</li>
              <li>Sell, rent, or sub-license material from this website</li>
              <li>Reproduce, duplicate, or copy material from this website</li>
              <li>Redistribute content from this website (unless content is specifically made for redistribution)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">User Content</h2>
            <p>
              In these Terms of Service, "User Content" means material (including without limitation text, images, audio
              material, video material, and audio-visual material) that you submit to this website, for whatever
              purpose.
            </p>
            <p>
              You grant me a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt,
              publish, translate, and distribute your User Content in any existing or future media. You also grant me
              the right to sub-license these rights, and the right to bring an action for infringement of these rights.
            </p>
            <p>
              Your User Content must not be illegal or unlawful, must not infringe any third party's legal rights, and
              must not be capable of giving rise to legal action whether against you or me or a third party.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p>
              I will not be liable to you in relation to the contents of, or use of, or otherwise in connection with,
              this website:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>For any indirect, special, or consequential loss; or</li>
              <li>
                For any business losses, loss of revenue, income, profits, or anticipated savings, loss of contracts or
                business relationships, loss of reputation or goodwill, or loss or corruption of information or data.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Indemnification</h2>
            <p>
              You hereby indemnify me and undertake to keep me indemnified against any losses, damages, costs,
              liabilities, and expenses (including without limitation legal expenses and any amounts paid by me to a
              third party in settlement of a claim or dispute on the advice of my legal advisers) incurred or suffered
              by me arising out of any breach by you of any provision of these terms of service.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Breaches of These Terms of Service</h2>
            <p>
              Without prejudice to my other rights under these terms of service, if you breach these terms of service in
              any way, I may take such action as I deem appropriate to deal with the breach, including suspending your
              access to the website, prohibiting you from accessing the website, blocking computers using your IP
              address from accessing the website, contacting your internet service provider to request that they block
              your access to the website, and/or bringing court proceedings against you.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Variation</h2>
            <p>
              I may revise these terms of service from time to time. Revised terms of service will apply to the use of
              this website from the date of the publication of the revised terms of service on this website. Please
              check this page regularly to ensure you are familiar with the current version.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Entire Agreement</h2>
            <p>
              These terms of service, together with my privacy policy, constitute the entire agreement between you and
              me in relation to your use of this website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
            <p>If you have any questions about these Terms of Service, please contact me at:</p>
            <p className="my-4">Email: 8harath.k@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
