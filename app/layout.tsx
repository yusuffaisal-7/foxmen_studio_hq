import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest, Geist_Mono as Geist_Mono_Font } from "next/font/google"
import localFont from "next/font/local"
import TargetCursor from "@/components/target-cursor"

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

const sfProFont = localFont({
  src: "./fonts/SFPRODISPLAYBOLD.otf",
  variable: "--font-sfpro",
})

const sfProRegularFont = localFont({
  src: "./fonts/SFPRODISPLAYREGULAR.otf",
  variable: "--font-sfpro-regular",
})


export const metadata: Metadata = {
  metadataBase: new URL("https://foxmen.studio"),
  title: {
    default: "Foxmen Studio | Building End-to-End Premium Web, Mobile, UI/UX & SaaS Experiences",
    template: "%s | Foxmen Studio",
  },
  description:
    "FOXMEN Studio builds end-to-end premium web, mobile, UI/UX and SaaS products. From strategy and design to development, launch and growth.",
  keywords: [
    "Foxmen Studio",
    "Web Design",
    "UI/UX",
    "SaaS",
    "Mobile App Development",
    "Branding",
    "foxmen.studio",
    "Premium Web Development",
    "End-to-End Product Development",
  ],
  authors: [{ name: "Foxmen Studio", url: "https://foxmen.studio" }],
  creator: "Foxmen Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://foxmen.studio",
    title: "Foxmen Studio | Building End-to-End Premium Web, Mobile, UI/UX & SaaS Experiences",
    description:
      "FOXMEN Studio builds end-to-end premium web, mobile, UI/UX and SaaS products. From strategy and design to development, launch and growth.",
    siteName: "Foxmen Studio",
    images: [
      {
        url: "/images/og-image.jpg", // We need to ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "Foxmen Studio - Premium Digital Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foxmen Studio | Building End-to-End Premium Web, Mobile, UI/UX & SaaS Experiences",
    description:
      "FOXMEN Studio builds end-to-end premium web, mobile, UI/UX and SaaS products. From strategy and design to development, launch and growth.",
    images: ["/images/og-image.jpg"],
    creator: "@foxmenstudio", // Assuming handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://foxmen.studio",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Foxmen Studio",
  url: "https://foxmen.studio",
  logo: "https://foxmen.studio/icon.svg",
  image: "https://foxmen.studio/images/og-image.jpg",
  description: "Foxmen Studio is a creative design agency from New York building end-to-end premium web, mobile, UI/UX and SaaS products.",
  address: {
    "@type": "PostalAddress",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "addressCountry": "All"
  },
  areaServed: "Worldwide",
  priceRange: "$$",
  sameAs: [
    "https://twitter.com/foxmenstudio",
    "https://www.linkedin.com/company/foxmenstudio",
    "https://www.instagram.com/foxmenstudio",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+880-1753973892",
    contactType: "customer service",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} ${sfProFont.variable} ${sfProRegularFont.variable} font-sans antialiased overflow-x-hidden`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
          targetSelector="a, button, input, textarea, .cursor-pointer, .cursor-target, [role='button'], [data-cal-link]"
        />
        {children}
      </body>
    </html>
  )
}
