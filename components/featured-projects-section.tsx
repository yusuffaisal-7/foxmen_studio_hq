import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function FeaturedProjectsSection() {
    const projects = [
        {
            title: "Mobile banking application",
            description:
                "A complete redesign of a mobile banking experience, focusing on user accessibility and intuitive navigation flow for complex financial transactions.",
            tag: "Fintech",
            logo: "/logos/company.svg",
            bgColor: "bg-[#FFC224]",
            illustration: "/images/studio-workspace.svg", // Using existing placeholder
        },
        {
            title: "E-commerce dashboard interface",
            description:
                "Comprehensive dashboard for online retailers to manage inventory, track sales, and analyze customer behavior in real-time.",
            tag: "SaaS",
            logo: "/logos/startup.svg",
            bgColor: "bg-[#FF90E8]",
            illustration: "/images/venture-workspace.svg", // Using existing placeholder
        },
    ]

    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            Featured <span className="bg-[#FF90E8] px-2 italic border-2 border-black rounded-lg transform -rotate-2 inline-block">projects</span>
                        </h2>
                        <p className="text-xl text-[#393939] max-w-2xl">
                            Highlights from our recent work in digital product design and branding.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="hidden md:flex items-center gap-2 font-bold hover:gap-3 transition-all"
                    >
                        View all projects <ArrowRight className="w-5 h-5" />
                    </a>
                </div>

                <div className="space-y-8 mb-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="sticky top-28 group bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col aspect-[16/10]"
                        >
                            {/* Browser Window Header */}
                            <div className="border-b-[3px] border-black p-4 flex items-center gap-3 bg-white z-10 relative">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border-[1.5px] border-black" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border-[1.5px] border-black" />
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border-[1.5px] border-black" />
                                </div>
                                <div className="flex-1 bg-[#F3F4F6] border-[1.5px] border-black rounded-full h-8 flex items-center px-4">
                                    <span className="text-xs font-mono text-gray-500 truncate">https://{project.title.toLowerCase().replace(/ /g, '-')}.com</span>
                                </div>
                            </div>

                            {/* Card Body - Laptop Screen Content */}
                            <div className={`flex-1 relative overflow-hidden ${project.bgColor}`}>
                                {/* Full Screen Image/Background */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Placeholder for project image - using the illustration as background */}
                                    <Image
                                        src={project.illustration || "/placeholder.svg"}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    {/* Fallback pattern if needed or overlay to ensure text contrast if no card used (but we use card) */}
                                </div>

                                {/* Floating Content Card */}
                                <div className="absolute bottom-6 left-6 right-6 md:w-[480px] bg-white border-[3px] border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="inline-block bg-[#F3F4F6] border border-black text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {project.tag}
                                        </span>
                                        <div className="w-1 h-1 rounded-full bg-black"></div>
                                        <h3 className="text-lg md:text-xl font-bold leading-tight text-[#0B0B0B]">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-sm md:text-base text-[#393939] mb-6 leading-relaxed font-medium line-clamp-2">
                                        {project.description}
                                    </p>

                                    <a
                                        href="#"
                                        className="flex items-center gap-2 font-bold text-[#0B0B0B] hover:gap-3 transition-all text-sm border-b-2 border-black pb-0.5 w-fit"
                                    >
                                        View case study
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
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
