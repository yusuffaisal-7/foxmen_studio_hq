"use client"

import { ArrowRight, Check, Code, Cpu, Globe, Layout, Smartphone, Users, Zap, Award, Star, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutHero() {
    return (
        <section className="py-24 md:py-32 bg-white px-4 md:px-8">
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#6E35FF]"></div>
                    <span className="text-gray-500 font-medium text-lg md:text-xl" style={{ fontFamily: "var(--font-inter-regular)" }}>&#123;01&#125; — About us</span>
                </div>

                <p className="text-2xl md:text-4xl lg:text-5xl text-[#0B0B0B] font-medium leading-tight max-w-4xl" style={{ fontFamily: "var(--font-inter-regular)" }}>
                    We are a full-service digital agency specializing in website development, branding, 3D product animation, SEO, and digital marketing with affordable prices.
                </p>
            </div>
        </section>
    )
}

export function AboutHighlights() {
    return (
        <section className="pb-24 px-4 md:px-8 bg-white">
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Large Card - Top Rated */}
                <div className="bg-[#F8F8F8] p-8 md:p-12 rounded-[32px] md:rounded-[40px] flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
                    <div className="absolute top-8 right-8 w-16 h-16 bg-[#00C48C] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        fi
                    </div>

                    <div className="mt-auto z-10">
                        <p className="text-gray-500 font-medium mb-4 text-sm md:text-base tracking-wide uppercase">2023 - Present</p>
                        <h3 className="text-3xl md:text-5xl font-bold mb-8 text-[#0B0B0B]" style={{ fontFamily: "var(--font-owners-medium)" }}>Top Rated Seller on Fiverr</h3>

                        <div className="flex flex-wrap gap-3">
                            <span className="px-6 py-3 bg-white border border-gray-100 rounded-full text-sm font-bold text-gray-700">UI/UX Design</span>
                            <span className="px-6 py-3 bg-white border border-gray-100 rounded-full text-sm font-bold text-gray-700">Branding</span>
                        </div>
                    </div>
                    <div className="absolute bottom-8 right-8 text-[#6E35FF]/20 font-bold text-lg">01</div>
                </div>

                {/* Right Column - 2 Smaller Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Card 02 */}
                    <div className="bg-[#F8F8F8] p-8 rounded-[32px] md:rounded-[40px] flex flex-col justify-between min-h-[300px] relative">
                        <div>
                            <p className="text-gray-500 font-medium mb-4 text-sm tracking-wide uppercase">05 April, 2025</p>
                            <h3 className="text-2xl md:text-4xl font-bold text-[#0B0B0B] leading-tight" style={{ fontFamily: "var(--font-owners-medium)" }}>Sites of the Day Winner</h3>
                        </div>
                        <div className="absolute bottom-8 right-8 text-gray-300 font-bold text-lg">02</div>
                    </div>

                    {/* Card 03 */}
                    <div className="bg-[#F8F8F8] p-8 rounded-[32px] md:rounded-[40px] flex flex-col justify-between min-h-[300px] relative">
                        <div>
                            <p className="text-gray-500 font-medium mb-4 text-sm tracking-wide uppercase">2023 - 2025</p>
                            <h3 className="text-2xl md:text-4xl font-bold text-[#0B0B0B] leading-tight" style={{ fontFamily: "var(--font-owners-medium)" }}>Google Premier Partner</h3>
                        </div>
                        <div className="absolute bottom-8 right-8 text-gray-300 font-bold text-lg">03</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-1.5 bg-gray-100 mt-2 rounded-full overflow-hidden max-w-[1600px] mx-auto">
                <div className="h-full bg-[#6E35FF] w-1/2 rounded-full"></div>
            </div>
        </section>
    )
}

export function AboutServices() {
    const services = [
        { title: "Mobile App Development", icon: Smartphone, desc: "Native and cross-platform apps that feel seamless." },
        { title: "Web & Web App Dev", icon: Globe, desc: "Scalable, high-performance web solutions." },
        { title: "AI & Automation", icon: Zap, desc: "Smart integrations to power up your workflow." },
        { title: "Digital Product Dev", icon: Code, desc: "End-to-end product lifecycle management." },
        { title: "UI/UX Design", icon: Layout, desc: "Interfaces that users love to touch and explore." },
        { title: "Digital Marketing", icon: Users, desc: "Strategic growth and brand positioning." },
    ]
    return (
        <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-16 md:mb-24 max-w-2xl">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#0B0B0B]" style={{ fontFamily: "var(--font-owners-medium)" }}>What We Do</h2>
                    <p className="text-lg text-gray-500" style={{ fontFamily: "var(--font-inter-regular)" }}>Comprehensive digital solutions tailored to your growth.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 hover:shadow-lg hover:shadow-[#6E35FF]/5 hover:border-[#6E35FF]/20 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-[#F8F8F8] group-hover:bg-[#6E35FF] text-[#6E35FF] group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-colors">
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#0B0B0B]" style={{ fontFamily: "var(--font-owners-medium)" }}>{service.title}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed" style={{ fontFamily: "var(--font-inter-regular)" }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function AboutApproach() {
    return (
        <section className="py-20 md:py-32 px-4 md:px-8 bg-[#F8F8F8]">
            <div className="max-w-[1600px] mx-auto">
                <div className="mb-16 md:mb-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#0B0B0B]" style={{ fontFamily: "var(--font-owners-medium)" }}>How We Work</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-[2px] bg-gray-200 z-0"></div>

                    {[
                        { step: "01", title: "Think", desc: "Deeply understand problems" },
                        { step: "02", title: "Design", desc: "Craft intuitive experiences" },
                        { step: "03", title: "Build", desc: "Engineer scalable products" }
                    ].map((item, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center group">
                            <div className="w-20 h-20 bg-white border border-gray-100 rounded-full flex items-center justify-center text-xl font-bold mb-8 shadow-sm group-hover:scale-110 group-hover:border-[#6E35FF] group-hover:text-[#6E35FF] transition-all duration-300">
                                {item.step}
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-[#0B0B0B]" style={{ fontFamily: "var(--font-owners-medium)" }}>{item.title}</h3>
                            <p className="text-xl text-gray-500 font-medium" style={{ fontFamily: "var(--font-inter-regular)" }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function AboutTech() {
    const techs = ["Django", "MERN", "Next.js", "Nest.js", "Python", "React", "Figma", "Framer", "AI Tools"]
    return (
        <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
            <div className="max-w-[1600px] mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#0B0B0B]" style={{ fontFamily: "var(--font-owners-medium)" }}>Built on Modern Engineering</h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {techs.map((tech, i) => (
                        <div key={i} className="bg-white px-8 py-4 rounded-full border border-gray-200 hover:border-[#6E35FF] hover:text-[#6E35FF] transition-all font-bold text-lg text-gray-600 shadow-sm hover:shadow-md cursor-default">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function AboutStatsMarquee() {
    const stats = [
        { label: "satisfied clients", value: "+" },
        { label: "projects finished", value: "3500+" },
        { label: "orders in queue", value: "10+" },
        { label: "years experience", value: "5+" },
        { label: "team members", value: "20+" },
    ]

    return (
        <section className="py-12 bg-[#111] overflow-hidden whitespace-nowrap relative flex items-center">
            <div className="animate-marquee inline-flex items-center gap-12 md:gap-24 px-6">
                {[...stats, ...stats, ...stats].map((stat, i) => (
                    <div key={i} className="flex items-center gap-8 md:gap-12 shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6E35FF] text-white rounded-xl flex items-center justify-center rotate-45 shrink-0">
                            <Star className="w-5 h-5 md:w-6 md:h-6 -rotate-45 fill-white" />
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl md:text-5xl font-bold text-[#6E35FF]">{stat.value}</span>
                            <span className="text-3xl md:text-4xl font-medium text-white/90">/ {stat.label}</span>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    )
}

export function AboutCTA() {
    return (
        <section className="py-24 md:py-40 px-4 md:px-8 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-7xl font-bold mb-8 md:mb-10 leading-tight text-[#0B0B0B]" style={{ fontFamily: "var(--font-owners-medium)" }}>Ready to Build Something Meaningful?</h2>
                <p className="text-xl md:text-2xl text-gray-500 font-medium mb-12 md:mb-16 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-inter-regular)" }}>
                    Let's collaborate to bring your vision to life with precision and passion.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#6E35FF] text-white rounded-full px-12 py-6 text-xl md:text-2xl font-bold hover:shadow-[0px_10px_25px_-5px_rgba(110,53,255,0.4)] transition-all hover:-translate-y-1" style={{ fontFamily: "var(--font-inter-regular)" }}>
                    Start Your Project <ArrowRight className="ml-3 w-6 h-6 md:w-7 md:h-7" />
                </Link>
            </div>
        </section>
    )
}
