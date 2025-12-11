"use client"

import { ArrowRight, Play, Check, ChevronRight, Award, Zap, Layout, Search, Code, Smartphone, Rocket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function ProjectStats() {
    const stats = [
        { label: "Projects Delivered", value: "120+" },
        { label: "Industries Served", value: "50+" },
        { label: "Repeat Clients", value: "95%" },
        { label: "Years of Expertise", value: "5+" },
    ]
    return (
        <section className="py-20 px-4 bg-white border-b-4 border-black">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, i) => (
                    <div key={i}>
                        <div className="text-5xl md:text-6xl font-black mb-2">{stat.value}</div>
                        <div className="text-sm text-gray-400 font-bold uppercase tracking-wide">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export function IndustryCategories() {
    const industries = ["Fintech", "Health & Medical", "Education", "E-commerce", "Real Estate", "SaaS Products", "Logistics", "Entertainment"]
    return (
        <section className="py-20 px-4 bg-[#FFFBF5] border-b-4 border-black">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Browse by Industry</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {industries.map((ind, i) => (
                        <button key={i} className="px-6 py-3 bg-white border-2 border-black rounded-full font-bold hover:bg-black hover:text-white transition-colors">
                            {ind}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function BeforeAfter() {
    return (
        <section className="py-24 px-4 bg-white border-b-4 border-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Transforming Digital Experiences</h2>
                <div className="grid md:grid-cols-2 gap-0 border-4 border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <div className="bg-gray-100 p-12 flex items-center justify-center relative min-h-[400px]">
                        <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-1 rounded-full font-bold">BEFORE</div>
                        <div className="text-gray-400 font-bold text-2xl text-center">Cluttered & Confusing UI</div>
                    </div>
                    <div className="bg-[#E0E7FF] p-12 flex items-center justify-center relative min-h-[400px]">
                        <div className="absolute top-6 left-6 bg-green-500 text-white px-4 py-1 rounded-full font-bold">AFTER</div>
                        <div className="text-black font-bold text-2xl text-center">Clean, Intuitive & Engaging</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function ProjectProcess() {
    const steps = [
        { icon: Search, label: "Discovery" },
        { icon: Layout, label: "UX/UI" },
        { icon: Code, label: "Engineering" },
        { icon: Smartphone, label: "Testing" },
        { icon: Rocket, label: "Launch" },
    ]
    return (
        <section className="py-20 px-4 bg-[#F3F4F6] border-b-4 border-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center group">
                            <div className="w-20 h-20 bg-white border-4 border-black rounded-2xl flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-2 transition-transform">
                                <step.icon className="w-8 h-8" />
                            </div>
                            <span className="font-bold text-lg">{step.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function ProjectTimeline() {
    return (
        <section className="py-24 px-4 bg-white border-b-4 border-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-16 text-center">Project Timeline Example</h2>
                <div className="relative border-4 border-black rounded-[24px] p-8 md:p-12 overflow-hidden">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 hidden md:block"></div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { time: "2 weeks", label: "Research", color: "bg-blue-400" },
                            { time: "3 weeks", label: "UX/UI Design", color: "bg-yellow-400" },
                            { time: "4 weeks", label: "Development", color: "bg-green-400" },
                            { time: "1 week", label: "QA Testing", color: "bg-red-400" }
                        ].map((item, i) => (
                            <div key={i} className="relative bg-white border-2 border-black p-6 rounded-xl text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <div className={`w-3 h-3 rounded-full mx-auto mb-4 border-2 border-black ${item.color}`}></div>
                                <div className="text-lg font-bold mb-1">{item.time}</div>
                                <div className="text-gray-500 font-medium">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export function ProjectAwards() {
    const awards = [
        "Top App Developers 2024",
        "Recognized by Local Startups",
        "Featured in Tech Community",
        "Best UI/UX Design 2023"
    ]
    return (
        <section className="py-20 px-4 bg-[#FFFBF5] border-b-4 border-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-400 uppercase tracking-widest">Recognition</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {awards.map((award, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border-2 border-black/10 flex items-center justify-center text-center">
                            <div>
                                <Award className="w-8 h-8 text-[#FFC224] mx-auto mb-4" />
                                <span className="font-bold text-gray-800">{award}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function ClientLogos() {
    return (
        <section className="py-20 px-4 bg-white border-b-4 border-black">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-12 text-gray-400">Trusted By Industry Leaders</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-50 grayscale">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="h-12 bg-gray-200 rounded-md flex items-center justify-center font-bold text-gray-400">
                            LOGO {i}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function FeaturedCaseStudyLong() {
    return (
        <section className="bg-black text-white py-24 px-4 overflow-hidden border-b-4 border-black">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-block bg-[#FF4A60] text-white px-3 py-1 rounded-full text-sm font-bold uppercase mb-6">Featured Case Study</div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-8">Reinventing <br />Fintech</h2>
                    <div className="space-y-6 text-xl text-gray-400 font-medium">
                        <p>User retention was dropping. We stepped in to reimagine the entire onboarding flow, resulting in a 300% increase in sign-ups.</p>
                        <div className="flex gap-12 border-t border-white/20 pt-8">
                            <div>
                                <div className="text-4xl font-bold text-white">300%</div>
                                <div className="text-sm uppercase tracking-wide">Growth</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white">2M+</div>
                                <div className="text-sm uppercase tracking-wide">Users</div>
                            </div>
                        </div>
                    </div>
                    <button className="mt-12 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFC224] transition-colors">
                        Read Full Story
                    </button>
                </div>

                <div className="relative">
                    {/* Abstract Mockup */}
                    <div className="w-full h-[600px] bg-[#1a1a1a] rounded-[32px] border-4 border-white/20 relative rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black uppercase">
                            UI Mockup
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function AnimationShowcase() {
    return (
        <section className="py-24 px-4 bg-[#111] text-white overflow-hidden border-b-4 border-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold">Motion & Interaction</h2>
                    <p className="text-gray-400 max-w-md text-right mt-4 md:mt-0">We believe motion isn't just decoration. It's communication.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square bg-[#222] rounded-[24px] border-2 border-white/10 flex items-center justify-center relative group cursor-pointer overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                <Play className="w-6 h-6 fill-white text-white ml-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function TechFilter() {
    const techs = ["React", "Django", "Next.js", "AI", "Python", "Node.js"]
    return (
        <section className="py-20 px-4 bg-white border-b-4 border-black">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-8">Filter by Tech Stack</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {techs.map((t, i) => (
                        <button key={i} className="text-xl font-bold text-gray-500 hover:text-black hover:underline underline-offset-8 decoration-4 decoration-[#FF4A60] transition-all">
                            {t}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function ImpactStories() {
    const stories = [
        { val: "60%", desc: "Increase in conversions after redesign." },
        { val: "40%", desc: "Reduction in customer support load using AI." },
        { val: "70%", desc: "Of workflow processes automated." }
    ]
    return (
        <section className="py-24 px-4 bg-[#FFC224] border-b-4 border-black">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                {stories.map((s, i) => (
                    <div key={i} className="bg-white p-8 rounded-[24px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <div className="text-6xl font-black mb-4">{s.val}</div>
                        <p className="text-xl font-bold leading-tight">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export function BehindTheScenes() {
    return (
        <section className="py-24 px-4 bg-white border-b-4 border-black">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Behind the Scenes</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center bg-black/5 text-gray-400 font-bold">
                                WIP {i}
                            </div>
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">
                                View Design
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function ProjectReel() {
    return (
        <section className="h-[500px] md:h-[700px] bg-black relative border-b-4 border-black flex items-center justify-center group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[url('/images/noise.png')]"></div> {/* Texture placeholder */}
            <div className="text-center z-10">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 mx-auto hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 ml-1" fill="black" />
                </div>
                <h2 className="text-white text-3xl font-bold tracking-wider uppercase">Watch Showreel</h2>
            </div>
        </section>
    )
}

export function ClosingCTA() {
    return (
        <section className="py-32 px-4 bg-[#FFFBF5] text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Let's build something <span className="text-[#FF4A60]">remarkable</span>.</h2>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#FF4A60] text-white border-4 border-black rounded-full px-12 py-6 text-xl font-bold hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1">
                    Start Your Project <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
            </div>
        </section>
    )
}
