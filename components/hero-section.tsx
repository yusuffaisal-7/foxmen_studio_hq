"use client"

import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { HeroBookingButton } from "./hero-booking-button"
import { ViewProjectsButton } from "@/components/view-projects-button"
import { UserCoordinates, LocalTime } from "@/components/hero-addons"

import RotatingText from "@/components/RotatingText"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch((e) => console.log("Autoplay blocked:", e))
    }

    // Cal.com embed initialization
    ; (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar)
      }
      let d = C.document
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal
          let ar = arguments
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            d.head.appendChild(d.createElement("script")).src = A
            cal.loaded = true
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments)
            }
            const namespace = ar[1]
            api.q = api.q || []
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], ar)
              p(cal, ["initNamespace", namespace])
            } else p(cal, ar)
            return
          }
          p(cal, ar)
        }
    })(window, "https://app.cal.com/embed/embed.js", "init")
    const cal = (window as any).Cal
    cal("init", "discussion-call", { origin: "https://app.cal.com" })

    cal.ns["discussion-call"]("ui", {
      cssVarsPerTheme: { dark: { "cal-brand": "#755ed2" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    })
  }, [])

  return (
    <section className="relative w-full px-4 py-16 md:py-24">
      <UserCoordinates />
      <LocalTime />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-6 relative z-10">
          <h1
            className="text-[44px] leading-[52px] md:text-[76px] font-bold md:leading-[88px]"
            style={{ fontFamily: "var(--font-sfpro)" }}
          >
            Welcome to <br className="block md:hidden" /><span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Foxmen Studio</span>,<br className="block md:hidden" /> A creative agency for Building<br />
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

          <p
            className="text-[#393939] text-[18px] md:text-[22px] font-medium leading-[30px] md:leading-[34px] max-w-xl"
            style={{ fontFamily: "var(--font-sfpro-regular)" }}
          >
            We transform brands and build solutions that engage audiences worldwide<br />- luxurious in design, dominant in presence, and unique by nature.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4 items-start">
            <HeroBookingButton />
            <ViewProjectsButton />
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
