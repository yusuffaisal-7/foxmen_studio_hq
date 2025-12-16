"use client"

import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
// import { projects } from "@/lib/data"

export function ProjectsHero() {
    return (
        <section className="py-24 md:py-32 bg-[#FFFBF5] text-center px-4 border-b-4 border-black">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Work</h1>
                <p className="text-xl md:text-3xl text-gray-600 font-medium leading-relaxed">
                    A collection of digital products, apps, and intelligent systems we've built with precision and purpose.
                </p>
            </div>
        </section>
    )
}

export function ProjectGrid() {
    const categories = ["All", "Mobile Apps", "Web Apps", "AI Projects", "Digital Products", "UI/UX Design"]
    const [activeCategory, setActiveCategory] = useState("All")
    const [projects, setProjects] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://paperfolio-backend.vercel.app/api'}/projects`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setProjects(data)
                } else {
                    console.error("API Error:", data)
                    setProjects([])
                }
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [])

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.tags && p.tags.some((tag: string) => tag.toLowerCase() === activeCategory.toLowerCase() || tag.includes(activeCategory)))

    if (loading) return <div className="py-20 text-center">Loading Projects...</div>

    return (
        <section className="py-20 px-4 bg-white border-b-4 border-black min-h-screen">
            <div className="max-w-[1800px] mx-auto">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-lg font-bold transition-all border-2 ${activeCategory === cat
                                ? "bg-black text-white border-black"
                                : "bg-white text-gray-500 border-transparent hover:border-gray-300"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <Link href={`/projects/${project.slug}`} key={project._id} className="group block h-full">
                            <div className="relative aspect-square rounded-[32px] overflow-hidden border-4 border-black group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 bg-gray-100">
                                {/* Full Background Image */}
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-6xl font-bold bg-gray-100">
                                        {project.title.substring(0, 2).toUpperCase()}
                                    </div>
                                )}

                                {/* Overlay Content */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/40 backdrop-blur-xl border-[3px] border-black rounded-[24px] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">

                                        {/* Top Row: Category & Signal */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="bg-[#FFC224] border-2 border-black px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                                                {project.tags?.[0] || 'Project'}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Live</span>
                                                <div className="relative flex shrink-0 w-3 h-3">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-white"></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl font-black text-black leading-none mb-6">
                                            {project.title}
                                        </h3>

                                        {/* Button */}
                                        <div className="flex items-center justify-between border-t-2 border-gray-200 pt-4 mt-4">
                                            <div className="flex gap-1 overflow-hidden h-6">
                                                {project.techStack?.slice(0, 3).map((tech: string, i: number) => (
                                                    <span key={i} className="text-[10px] font-bold text-gray-400 uppercase">{tech}{i < (project.techStack?.length < 3 ? project.techStack.length : 2) ? '•' : ''}</span>
                                                ))}
                                            </div>
                                            <span className="inline-flex items-center text-sm font-black uppercase border-b-2 border-black hover:border-[#FF4A60] hover:text-[#FF4A60] transition-colors pb-0.5">
                                                Know More <ArrowRight className="ml-1 w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function ProjectTech() {
    const techs = ["Django", "MERN", "Next.js", "Nest.js", "Python", "React", "Figma", "Framer", "AI Tools"]
    return (
        <section className="py-20 px-4 bg-[#F3F4F6] border-b-4 border-black">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Built with Modern Engineering</h2>
                <div className="grid grid-cols-3 md:grid-cols-9 gap-8 items-center justify-center opacity-70">
                    {techs.map((tech, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <span className="w-12 h-12 bg-gray-300 rounded-full mb-2 block"></span> {/* Icon Placeholder */}
                            <span className="font-bold text-sm">{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function ProjectCTA() {
    return (
        <section className="py-24 px-4 bg-[#FFFBF5]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Have a Project in Mind?</h2>
                <p className="text-xl md:text-2xl text-gray-600 font-medium mb-10">Let's build something incredible together.</p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#FF4A60] text-white border-4 border-black rounded-full px-12 py-6 text-xl font-bold hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1">
                    Start Your Project <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
            </div>
        </section>
    )
}
