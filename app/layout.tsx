import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Syne } from "next/font/google"

// Initialize the Syne font with Next.js font optimization
const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
})

export const metadata: Metadata = {
  title: "Bharath K | Computer Science Student | AI Enthusiast",
  description:
    "Personal portfolio of Bharat K (8harath), a computer science undergraduate specializing in artificial intelligence and machine learning.",
  keywords: "Bharat K, 8harath, computer science, machine learning, AI, artificial intelligence, student portfolio",
  openGraph: {
    title: "Bharath K | Computer Science Student | AI Enthusiast",
    description:
      "Personal portfolio of Bharat K (8harath), a computer science undergraduate specializing in artificial intelligence and machine learning.",
    url: "https://bharatk.dev",
    siteName: "Bharath K Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bharath K Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'Bharam K'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={syne.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </head>
      <body className={syne.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'