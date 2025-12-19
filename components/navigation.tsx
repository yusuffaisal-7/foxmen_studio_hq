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
    <div className="container mx-auto px-4 pt-8 pb-4 relative z-50">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-5xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link href="/" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Home
          </Link>
          <Link href="/about" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            About
          </Link>
          <Link href="/services" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Services
          </Link>
          <Link href="/projects" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Projects
          </Link>
          <Link href="/blog" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Blogs
          </Link>
        </div>

        {/* Desktop Contact Button */}
        <ContactButton className="hidden md:flex" />


        {/* Mobile Navigation (Menu Icon) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <AnimatedHamburgerButton active={isOpen} onClick={() => setIsOpen(!isOpen)} />
            <SheetContent side="right" className="w-[300px] border-l-4 border-black p-0">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex flex-col h-full pt-16 px-6 pb-8">
                <div className="flex flex-col gap-8">
                  <Link href="/" className="text-3xl font-bold hover:underline">
                    Home
                  </Link>
                  <Link href="/about" className="text-3xl font-bold hover:underline">
                    About
                  </Link>
                  <Link href="/services" className="text-3xl font-bold hover:underline">
                    Services
                  </Link>
                  <Link href="/projects" className="text-3xl font-bold hover:underline">
                    Projects
                  </Link>
                  <Link href="/blog" className="text-3xl font-bold hover:underline">
                    Blogs
                  </Link>
                </div>

                {/* Mobile Contact Option */}
                <div className="mt-auto pt-8 border-t-4 border-black">
                  <ContactButton className="w-full" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div >
  )
}
