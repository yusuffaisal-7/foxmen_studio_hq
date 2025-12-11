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
        fetch("http://localhost:5001/api/projects")
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
            <div className="max-w-7xl mx-auto">
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
                        <Link href={`/projects/${project.slug}`} key={project._id} className="group block">
                            <div className="bg-white rounded-[24px] overflow-hidden border-4 border-black group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">
                                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden border-b-4 border-black">
                                    {project.image ? (
                                        <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-6xl font-bold">
                                            {project.title.substring(0, 2).toUpperCase()}
                                        </div>
                                    )}
                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="bg-white text-black font-bold px-6 py-3 rounded-full flex items-center">
                                            View Case Study <ArrowUpRight className="ml-2 w-5 h-5" />
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tags && project.tags.map((tag: string) => (
                                            <span key={tag} className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 rounded-md">{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#FF4A60] transition-colors">{project.title}</h3>
                                    <p className="text-gray-600 font-medium line-clamp-2">{project.description}</p>
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
