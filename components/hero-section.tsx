"use client"

import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

import RotatingText from "@/components/RotatingText"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch((e) => console.log("Autoplay blocked:", e))
    }
  }, [])

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-6 relative z-10">
          <h1
            className="text-[44px] leading-[52px] md:text-[76px] font-bold md:leading-[88px]"
            style={{ fontFamily: "var(--font-sfpro)" }}
          >
            Welcome to <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Foxmen Studio</span>,<br className="block md:hidden" /> A creative agency for Building<br />
            <RotatingText
              texts={['Web Platforms', 'Mobile Apps', 'Global UI/UX', '3D Website', 'AI - Agents', 'Digital Marketing', 'Branding']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-[#5227ff] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg inline-flex"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h1>

          <p className="text-[#393939] text-[18px] md:text-[22px] font-medium leading-[30px] md:leading-[34px] max-w-xl">
            We transform brands and build solutions that engage audiences worldwide - luxurious in design, dominant in presence, and unique by nature.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <Mail className="w-5 h-5" />
              Get in touch
            </Button>
            <Button
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            >
              <FolderOpen className="w-5 h-5" />
              View portfolio
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-lg aspect-square overflow-hidden scale-100 md:scale-110 origin-center md:origin-right z-0">
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/duh7c5x99/video/upload/v1765859617/At_last_of_202512161032_xotbcd.mov"
              autoPlay
              loop
              muted
              playsInline={true}
              preload="auto"
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
