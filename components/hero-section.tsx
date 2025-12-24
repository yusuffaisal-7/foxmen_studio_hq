"use client"

import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { HeroBookingButton } from "./hero-booking-button"
import { ViewProjectsButton } from "@/components/view-projects-button"
import { UserCoordinates, LocalTime } from "@/components/hero-addons"

import { MorphingText } from "@/components/ui/liquid-text";

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
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A886FF] opacity-75 duration-1000"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#A886FF] shadow-[0_0_8px_2px_rgba(168,134,255,0.5)]"></span>
            </span>
            <span className="font-mono text-sm md:text-base font-medium text-[#393939]">
              Available for new projects
            </span>
          </div>
          <h1
            className="text-[36px] leading-[44px] sm:text-[44px] sm:leading-[52px] md:text-[92px] font-bold md:leading-[104px]"
            style={{ fontFamily: "var(--font-owners-regular)" }}
          >
            Welcome to <br className="block md:hidden" /><span className="whitespace-nowrap"><span className="bg-[#6E35FF] text-white px-3 py-1 inline-block">Foxmen Studio</span>,</span><br className="block md:hidden" /> <span className="whitespace-normal md:whitespace-nowrap bg-white/20 backdrop-blur-md border border-white/20 rounded-lg px-2">A creative agency for Building</span><br />
            <MorphingText
              className="!text-[36px] sm:!text-[44px] md:!text-[92px] !leading-[44px] sm:!leading-[52px] md:!leading-[104px] !text-left !mx-0 w-auto h-12 sm:h-16 md:h-[112px]"
              texts={['Web Platforms', 'Mobile Apps', 'Global UI/UX', '3D Website', 'AI - Agents', 'Digital Marketing', 'Branding']}
            />
          </h1>



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
