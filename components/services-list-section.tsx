"use client"

import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"
import Link from "next/link"

export function ServicesListSection() {
    const services = [
        {
            title: "Website Development",
            description: "Create a Digital Experience People Can't Forget. Your website should do more than just exist – it should be an experience that captivates your audience. We specialize in creating websites that not only look stunning but also function seamlessly.",
            tags: ["3D Websites", "E-commerce", "Service Pages", "USER EXPERIENCE", "WEB DESIGN"],
            price: "Starting from $1000",
            image: "/images/web-design.svg",
            video: "https://res.cloudinary.com/duh7c5x99/video/upload/v1765989198/ef3c79c3a83dd64ca8a9ee6aa8cc5bab_gk2t5n.mov"
        },
        {
            title: "UI/UX Design",
            description: "User-centric design that blends aesthetics with functionality. We conduct deep user research to create intuitive interfaces that users love, ensuring high engagement and retention rates for your digital products.",
            tags: ["Mobile Apps", "Web Apps", "Design Systems", "Prototyping", "User Research"],
            price: "Starting from $800",
            image: "/images/ui-ux-design.svg",
            video: "https://res.cloudinary.com/duh7c5x99/video/upload/v1765984569/Cinematic_screen_recording_1080p_20251217202_uwdlly.mov"
        },
        {
            title: "Mobile App Development",
            description: "Scalable, native and cross-platform mobile applications. Whether it's iOS or Android, we build robust mobile solutions that offer smooth performance and native-like experiences using the latest frameworks.",
            tags: ["iOS Development", "Android", "React Native", "Flutter", "App Store Optimization"],
            price: "Starting from $1500",
            image: "/images/product-design.svg",
            video: "https://res.cloudinary.com/duh7c5x99/video/upload/v1765987892/A_darkthemed_code_1080p_202512172206_s6n6n1.mov"
        },
        {
            title: "AI Agent & Automation",
            description: "Custom AI solutions to streamline your business. From intelligent chatbots to complex workflow automations, we leverage large language models to increase efficiency and reduce operational costs.",
            tags: ["Chatbots", "Process Automation", "LLM Integration", "Data Analysis", "Python"],
            price: "Starting from $2000",
            image: "https://res.cloudinary.com/duh7c5x99/image/upload/v1766073345/Gemini_Generated_Image_3460b53460b53460_pjugzt.png",
        },
        {
            title: "Branding & Identity",
            description: "Strategic brand identity design that communicates your core values. We create cohesive visual systems including logos, color palettes, and typography that help your brand stand out in a crowded market.",
            tags: ["Logo Design", "Brand Identity", "Guidelines", "Marketing Materials", "Strategy"],
            price: "Starting from $1200",
            image: "https://res.cloudinary.com/duh7c5x99/image/upload/v1766073045/__11_gexklm.jpg",
        },
    ]

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="space-y-24 md:space-y-32">
                    {services.map((service, index) => (
                        <ServiceRow key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ServiceRow({ service, index }: { service: any, index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true
            videoRef.current.play().catch((e) => console.log("Autoplay blocked:", e))
        }
    }, [])

    return (
        <div className="group">
            {/* Number */}
            <div className="text-sm font-bold text-black mb-4 md:mb-6 pl-1">
                {String(index + 1).padStart(2, '0')}.
            </div>

            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
                {/* Left Column: Content */}
                <div>
                    <h2
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#0B0B0B] mb-8 md:mb-10 tracking-tight"
                        style={{ fontFamily: "var(--font-sfpro)" }}
                    >
                        {service.title}
                    </h2>

                    <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
                        {service.tags.map((tag: string, i: number) => (
                            <span
                                key={i}
                                className="px-4 py-2 rounded-full border border-gray-200 text-xs md:text-sm font-bold uppercase tracking-wide text-gray-600 hover:border-black hover:text-black transition-colors cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-6 md:space-y-8 max-w-2xl">
                        <h3 className="text-2xl md:text-4xl font-medium leading-tight text-[#0B0B0B]" style={{ fontFamily: "var(--font-sfpro-regular)" }}>
                            {service.description.split('.')[0]}.
                        </h3>
                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                            {service.description.split('.').slice(1).join('.')}
                        </p>

                        <button className="group/btn relative flex items-center justify-between bg-[#1C1C1C] text-white rounded-full p-2 pl-8 pr-2 w-full max-w-[280px] hover:scale-[1.02] transition-transform duration-300">
                            <span className="text-lg font-medium">Start Project</span>
                            <div className="bg-white rounded-full p-4 text-black group-hover/btn:rotate-[-45deg] transition-transform duration-300">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Right Column: Media Card */}
                <div className="relative">
                    <div className="absolute -top-6 -right-2 md:-top-8 md:-right-4 z-20 bg-white border-[3px] border-black rounded-xl px-4 py-2 md:px-6 md:py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF4A60] animate-pulse"></div>
                        <span className="font-bold text-sm md:text-base whitespace-nowrap">{service.price}</span>
                    </div>

                    <div className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] aspect-[4/3] md:aspect-[16/10] relative group-hover:translate-y-[-4px] transition-transform duration-500">
                        {service.video ? (
                            <video
                                ref={videoRef}
                                src={service.video}
                                autoPlay
                                loop
                                muted
                                playsInline={true}
                                preload="auto"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <Image
                                src={service.image || "/placeholder.svg"}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                        )}

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="mt-24 md:mt-32 border-b border-gray-200"></div>
        </div>
    )
}
