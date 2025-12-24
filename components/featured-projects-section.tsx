"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

function ScrollRevealText({ text }: { text: string }) {
    const chars = text.split("")
    const id = "reveal-" + Math.random().toString(36).substr(2, 9)

    // We want the reveal to happen as the element enters the viewport.
    // Total range: entry 0% to cover 50% (visible).
    // Stagger each char across this range.

    return (
        <span style={{ viewTimelineName: `--${id}`, viewTimelineAxis: 'block' } as any} className="inline-block w-full">
            {chars.map((char, i) => {
                const step = 40 / chars.length // spread over 40% of viewport height
                const start = 10 + (i * step) // start at 10% entry
                const end = start + 20 // each char takes 20% of viewport to fully fade in (smooth)

                return (
                    <span
                        key={i}
                        className="inline-block transition-colors duration-0"
                        style={{
                            color: '#cecece', // start color
                            animationName: 'reveal-char',
                            animationTimeline: `--${id}`,
                            animationRangeStart: `entry ${start}%`,
                            animationRangeEnd: `entry ${end}%`,
                            animationFillMode: 'both',
                            // Ensure animation logic matches the keyframes
                        } as any}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                )
            })}
        </span>
    )
}

export function FeaturedProjectsSection() {
    const projects = [
        {
            title: "Business Management Website",
            description:
                "A comprehensive management platform for an aerospace company, designed to streamline complex operations in the astro and space industry.",
            tag: "Commercial",
            logo: "/logos/company.svg",
            bgColor: "bg-[#FFC224]",
            illustration: "/images/studio-workspace.svg", // Using existing placeholder
            video: "https://res.cloudinary.com/duh7c5x99/video/upload/v1765916680/Screen_Recording_2025-12-16_at_4.13.24_PM_1_1_vtucjo.mp4",
            displayUrl: "https://www.vastspace.com/?ref=siteinspire"
        },
        {
            title: "LMS & Online Learning Platform",
            description:
                "A comprehensive learning management system inspired by Pluralsight, featuring online courses and interactive learning paths.",
            tag: "EdTech",
            logo: "/logos/startup.svg",
            bgColor: "bg-[#FF90E8]",
            illustration: "/images/venture-workspace.svg", // Using existing placeholder
            video: "https://res.cloudinary.com/duh7c5x99/video/upload/v1766047326/Screen_Recording_2025-12-18_at_2.32.23_PM_nmuegb.mov",
            displayUrl: "https://www.pluralsight.com/"
        },
        {
            title: "Fintech, Investment, Wefunder",
            description:
                "A secure investment platform for funders and investors, built to handle complex financial situations with top-tier security.",
            tag: "Fintech",
            logo: "/logos/healthcare.svg",
            bgColor: "bg-[#27C93F]",
            illustration: "/images/studio-workspace.svg",
            video: "https://res.cloudinary.com/duh7c5x99/video/upload/v1766050597/Screen_Recording_2025-12-18_at_3.23.38_PM_1_b0becr.mov",
            displayUrl: "https://wefunder.com/home"
        },
        {
            title: "Coinbase — Futuristic Brand Identity",
            description:
                "Emotion-led and futuristic branding for marketing, designed for Coinbase Ltd to redefine their visual identity.",
            tag: "Branding",
            logo: "/logos/agency.svg",
            bgColor: "bg-[#FF5F56]",
            illustration: "/images/venture-workspace.svg",
            video: "https://res.cloudinary.com/duh7c5x99/video/upload/v1766061712/coinbase_brand_film_1080p_ym70u6.mp4",
            displayUrl: "https://www.coinbase.com"
        },
        {
            title: "Mobile App: Wallet",
            description:
                "A comprehensive banking and financial mobile app designed for seamless money transfers and digital payment services.",
            tag: "Fintech",
            logo: "/logos/startup.svg",
            bgColor: "bg-[#4F46E5]",
            illustration: "/images/studio-workspace.svg",
            video: "https://res.cloudinary.com/duh7c5x99/video/upload/v1766068763/From_KlickPin_CF_UI_Design_for_money_transfer_and_digital_payment_services_Payoneer_Interactive_web_design_Mobile_app_design_inspiration_Banking_app_b58lz8.mp4",
            displayUrl: "# Mobile App: Wallet"
        },
    ]

    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center max-w-4xl mx-auto">
                    {/* Header */}
                    <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-sfpro)" }}>
                        Featured <span className="bg-[#6e35ff] text-white px-3 py-1 rounded-lg inline-block transform -rotate-2">projects</span>
                    </h2>

                    {/* Body - Staggered Reveal */}
                    <div className="text-xl md:text-2xl text-[#393939] font-medium leading-relaxed mb-8 flex flex-wrap justify-center gap-[0.25em]" style={{ fontFamily: 'var(--font-inter-regular)' }}>
                        <ScrollRevealText text="Highlights from our recent work in digital product design and branding." />
                    </div>

                    <a
                        href="#"
                        className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all text-xl mt-4"
                        style={{ fontFamily: 'var(--font-sfpro-regular)' }}
                    >
                        View all projects <ArrowRight className="w-6 h-6" />
                    </a>
                </div>

                <div className="space-y-8 mb-12">
                    {projects.map((project, index) => (
                        <FeaturedProjectCard key={index} project={project} />
                    ))}
                </div>

                <div className="flex justify-center md:hidden">
                    <button className="bg-black text-white px-6 py-4 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full">
                        View all projects
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    )
}

function FeaturedProjectCard({ project }: { project: any }) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true
            videoRef.current.play().catch((e) => console.log("Autoplay blocked:", e))
        }
    }, [])

    return (
        <div className="sticky top-28 group bg-white border-[3px] border-black rounded-[24px] md:rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col aspect-[4/3] md:aspect-[16/10]">
            {/* Browser Window Header */}
            <div className="border-b-[3px] border-black p-3 md:p-4 flex items-center gap-3 bg-white z-10 relative shrink-0">
                <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56] border-[1.5px] border-black" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E] border-[1.5px] border-black" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27C93F] border-[1.5px] border-black" />
                </div>
                <div className="flex-1 bg-[#F3F4F6] border-[1.5px] border-black rounded-full h-7 md:h-8 flex items-center px-3 md:px-4 min-w-0">
                    <span className="text-[10px] md:text-xs font-mono text-gray-500 truncate w-full" style={{ fontFamily: "var(--font-inter-regular)" }}>
                        {project.displayUrl || `https://${project.title.toLowerCase().replace(/ /g, '-')}.com`}
                    </span>
                </div>
            </div>

            {/* Card Body - Laptop Screen Content */}
            <div className={`flex-1 relative overflow-hidden ${project.bgColor}`}>
                {/* Full Screen Image/Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for project image - using the illustration as background */}
                    {project.video ? (
                        <video
                            ref={videoRef}
                            src={project.video}
                            autoPlay
                            loop
                            muted
                            playsInline={true}
                            preload="auto"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Image
                            src={project.illustration || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    )}
                </div>

                {/* Floating Content Card */}
                <div className="absolute bottom-3 right-3 w-[60%] md:w-[480px] md:left-6 md:right-auto md:bottom-6 bg-white/60 backdrop-blur-md border-[3px] border-black rounded-xl md:rounded-2xl p-3 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-4">
                        <span className="inline-block bg-[#F3F4F6] border border-black text-black text-[9px] md:text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase tracking-wider" style={{ fontFamily: "var(--font-inter-regular)" }}>
                            {project.tag}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-black"></div>
                        <h3 className="text-sm md:text-xl font-bold leading-tight text-[#0B0B0B]" style={{ fontFamily: "var(--font-owners-regular)" }}>
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-[10px] md:text-base text-[#393939] mb-0 md:mb-6 leading-relaxed font-medium line-clamp-2" style={{ fontFamily: "var(--font-inter-regular)" }}>
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
