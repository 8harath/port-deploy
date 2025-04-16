"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
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
          <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">Last updated: April 8, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored
              in your web browser and allows the website or a third-party service to recognize you and make your next
              visit easier and the website more useful to you.
            </p>
            <p>
              Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or
              mobile device when you go offline, while session cookies are deleted as soon as you close your web
              browser.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How I Use Cookies</h2>
            <p>When you use and access my website, I may place a number of cookie files in your web browser.</p>
            <p>I use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 my-4">
              <li>To enable certain functions of the website</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>To enable the theme toggle functionality (light/dark mode)</li>
            </ul>
            <p>
              I use both session and persistent cookies on the website and I use different types of cookies to run the
              website:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>
                Essential cookies: These cookies are required for the basic functionality of my website, such as
                security features and enabling you to navigate the site and use its features.
              </li>
              <li>
                Preferences cookies: These cookies allow my website to remember choices you have made in the past, like
                what theme (light or dark) you prefer.
              </li>
              <li>
                Analytics cookies: These cookies collect information about how you use my website, like which pages you
                visited and which links you clicked on. None of this information can be used to identify you. It is all
                aggregated and, therefore, anonymized.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Cookies</h2>
            <p>
              In addition to my own cookies, I may also use various third-party cookies to report usage statistics of
              the website and improve the user experience.
            </p>
            <p>These third-party services include:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Google Analytics: Used to understand how visitors interact with the website</li>
              <li>Vercel Analytics: Used to collect anonymous usage data to improve website performance</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Your Choices Regarding Cookies</h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the
              help pages of your web browser.
            </p>
            <p>
              Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use
              all of the features I offer, you may not be able to store your preferences, and some of my pages might not
              display properly.
            </p>
            <p>You can learn more about cookies and the following third-party websites:</p>
            <ul className="list-disc pl-6 my-4">
              <li>
                AllAboutCookies:{" "}
                <a
                  href="https://www.allaboutcookies.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.allaboutcookies.org/
                </a>
              </li>
              <li>
                Network Advertising Initiative:{" "}
                <a
                  href="https://www.networkadvertising.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://www.networkadvertising.org/
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Cookie Policy</h2>
            <p>
              I may update this Cookie Policy from time to time. I will notify you of any changes by posting the new
              Cookie Policy on this page and updating the "Last updated" date at the top of this page.
            </p>
            <p>
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy
              are effective when they are posted on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Me</h2>
            <p>If you have any questions about this Cookie Policy, please contact me at:</p>
            <p className="my-4">Email: 8harath.k@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
