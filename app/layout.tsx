import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest, Geist_Mono as Geist_Mono_Font } from "next/font/google"

// Initialize fonts
const _geistMono = Geist_Mono_Font({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: "Foxmen Studio | Building End-to-End Premium Web, Mobile, UI/UX & SaaS Experiences",
  description: "FOXMEN Studio builds end-to-end premium web, mobile, UI/UX and SaaS products. From strategy and design to development, launch and growth.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`} suppressHydrationWarning>{children}</body>
    </html>
  )
}
