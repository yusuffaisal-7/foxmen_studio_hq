"use client"

import Link from "next/link"
import { useState } from "react"
import { Phone } from "lucide-react"
import { AnimatedHamburgerButton } from "@/components/animated-hamburger"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ContactButton } from "@/components/contact-button"


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="w-full relative z-50 bg-white/80 backdrop-blur-md border-b border-black/30">
      <nav className="flex items-center justify-between px-6 py-10 w-full max-w-[1440px] mx-auto">
        <Link href="/" className="h-12 w-auto flex items-center justify-center flex-shrink-0 cursor-pointer">
          <img src="https://res.cloudinary.com/duh7c5x99/image/upload/v1766298303/logo_33_eve7gs.svg" alt="Foxmen Studio Logo" className="h-full w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 flex-1 justify-center">

          <Link href="/about" className="text-[18px] font-normal leading-[22px] hover:opacity-70 transition-opacity" style={{ fontFamily: "var(--font-inter-regular)" }}>
            About Us
          </Link>
          <Link href="/services" className="text-[18px] font-normal leading-[22px] hover:opacity-70 transition-opacity" style={{ fontFamily: "var(--font-inter-regular)" }}>
            Services
          </Link>
          <Link href="/projects" className="text-[18px] font-normal leading-[22px] hover:opacity-70 transition-opacity" style={{ fontFamily: "var(--font-inter-regular)" }}>
            Projects
          </Link>
          <Link href="/blog" className="text-[18px] font-normal leading-[22px] hover:opacity-70 transition-opacity" style={{ fontFamily: "var(--font-inter-regular)" }}>
            Blogs
          </Link>
        </div>

        {/* Desktop Contact Button */}
        <ContactButton className="hidden md:flex" />


        {/* Mobile Navigation (Menu Icon) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <AnimatedHamburgerButton active={isOpen} onClick={() => setIsOpen(!isOpen)} />
            <SheetContent side="right" className="w-[300px] border-l border-black/10 p-0">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex flex-col h-full pt-16 px-6 pb-8">
                <div className="flex flex-col gap-8">

                  <Link href="/about" className="text-3xl font-bold hover:underline" style={{ fontFamily: "var(--font-inter-regular)" }}>
                    About Us
                  </Link>
                  <Link href="/services" className="text-3xl font-bold hover:underline" style={{ fontFamily: "var(--font-inter-regular)" }}>
                    Services
                  </Link>
                  <Link href="/projects" className="text-3xl font-bold hover:underline" style={{ fontFamily: "var(--font-inter-regular)" }}>
                    Projects
                  </Link>
                  <Link href="/blog" className="text-3xl font-bold hover:underline" style={{ fontFamily: "var(--font-inter-regular)" }}>
                    Blogs
                  </Link>
                </div>

                {/* Mobile Contact Option */}
                <div className="mt-auto pt-8 border-t border-black/10">
                  <ContactButton className="w-full" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  )
}
