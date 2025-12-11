"use client"

import { ArrowRight, Check, Code, Cpu, Globe, Layout, Smartphone, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutHero() {
    return (
        <section className="py-24 md:py-32 bg-[#FFFBF5] text-center px-4 border-b-4 border-black">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Who We Are</h1>
                <p className="text-xl md:text-3xl text-gray-600 font-medium leading-relaxed">
                    A studio built to design, engineer, and elevate digital experiences.
                </p>
            </div>
        </section>
    )
}

export function AboutStory() {
    return (
        <section className="py-20 px-4 bg-white border-b-4 border-black">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
                    <div className="space-y-6 text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                        <p>
                            Foxmen Studio started with a simple belief: that digital products should not only function perfectly but feel alive. We noticed a gap between rigid engineering and fluid design, so we set out to bridge it.
                        </p>
                        <p>
                            Our mission is to craft digital experiences that resonate on an emotional level while being built on rock-solid engineering. We are guided by curiosity, precision, and an unyielding commitment to quality.
                        </p>
                    </div>
                </div>
                <div className="relative h-[400px] w-full bg-[#E0E7FF] rounded-[32px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex items-center justify-center">
                    {/* Placeholder for story image/illustration */}
                    <div className="text-center p-8">
                        <span className="text-6xl mb-4 block">📖</span>
                        <p className="font-bold text-xl">The Foxmen Journey</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function AboutMission() {
    return (
        <section className="py-20 px-4 bg-[#FFFBF5] border-b-4 border-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold">What We Believe</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#FFC224] p-10 rounded-[32px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                        <p className="text-xl font-bold leading-relaxed">
                            To empower businesses by creating digital tools that are intuitive, powerful, and delightfully simple to use.
                        </p>
                    </div>
                    <div className="bg-[#FF90E8] p-10 rounded-[32px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                        <p className="text-xl font-bold leading-relaxed">
                            A future where technology serves humanity with elegance, removing friction and sparking joy in everyday interactions.
                        </p>
                    </div>
                </div>
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
        <section className="py-20 px-4 bg-white border-b-4 border-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-[24px] border-4 border-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                                <service.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 font-medium">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function AboutApproach() {
    return (
        <section className="py-20 px-4 bg-[#F3F4F6] border-b-4 border-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">How We Work</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-1 bg-black z-0"></div>

                    {[
                        { step: "01", title: "Think", desc: "Deeply understand problems" },
                        { step: "02", title: "Design", desc: "Craft intuitive experiences" },
                        { step: "03", title: "Build", desc: "Engineer scalable products" }
                    ].map((item, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center text-xl font-bold mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                {item.step}
                            </div>
                            <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                            <p className="text-xl text-gray-600 font-medium">{item.desc}</p>
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
        <section className="py-20 px-4 bg-white border-b-4 border-black">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Built on Modern Engineering</h2>
                <div className="flex flex-wrapjustify-center gap-6 md:gap-10 justify-center">
                    {techs.map((tech, i) => (
                        <div key={i} className="bg-gray-100 px-6 py-3 rounded-xl border-2 border-transparent hover:border-black transition-colors font-bold text-lg md:text-xl text-gray-700">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function AboutTeam() {
    return (
        <section className="py-20 px-4 bg-[#FFFBF5] border-b-4 border-black">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">The Team Behind the Work</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-300 rounded-full mb-4 border-4 border-black overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center bg-[#FF4A60] text-white font-bold text-4xl">
                                    {/* Placeholder Avatar */}
                                    {String.fromCharCode(64 + i)}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold">Team Member {i}</h3>
                            <p className="text-gray-500 font-medium">Role Title</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function AboutValues() {
    const values = ["Integrity", "Innovation", "Precision", "Creativity", "Collaboration", "Quality Engineering"]
    return (
        <section className="py-20 px-4 bg-white border-b-4 border-black">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold">What Drives Us</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {values.map((value, i) => (
                        <div key={i} className="bg-white border-2 border-black rounded-[20px] p-6 text-center hover:bg-black hover:text-white transition-colors cursor-default">
                            <span className="text-lg md:text-xl font-bold">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function AboutStats() {
    const stats = [
        { label: "Projects", value: "120+" },
        { label: "Clients", value: "50+" },
        { label: "Years Exp.", value: "5+" },
        { label: "Client Satisfaction", value: "99%" },
    ]
    return (
        <section className="py-20 px-4 bg-[#111] text-white border-b-4 border-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">By the Numbers</h2>
                    <p className="text-gray-400">Our impact in digits</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col">
                            <span className="text-5xl md:text-6xl font-black mb-2">{stat.value}</span>
                            <span className="text-gray-400 font-bold tracking-wide uppercase text-sm">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function AboutCTA() {
    return (
        <section className="py-24 px-4 bg-[#FFFBF5]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build Something Meaningful?</h2>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#FF4A60] text-white border-4 border-black rounded-full px-12 py-6 text-xl font-bold hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1">
                    Start Your Project <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
            </div>
        </section>
    )
}
