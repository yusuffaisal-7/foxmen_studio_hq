import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ArrowLeft, CheckCircle2, Rocket, Code2, Layout, Database, Smartphone, Globe, ArrowUpRight, Calendar, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

async function getProject(slug: string) {
    try {
        const res = await fetch(`http://localhost:5001/api/projects/${slug}`, { cache: 'no-store' });
        if (!res.ok) return null;
        return res.json();
    } catch (e) {
        return null;
    }
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = await getProject(params.slug);

    if (!project) {
        notFound()
    }

    // --- Fallbacks for optional fields ---
    const client = project.client || "Confidential Client";
    const role = project.role || "Full Stack Development";
    const duration = project.duration || "Ongoing";

    // Default Process Steps if not provided
    const defaultProcess = [
        { title: "Research", desc: "Competitor analysis & user personas" },
        { title: "Design", desc: "Wireframes & High-fidelity UI" },
        { title: "Development", desc: "Frontend & Backend Engineering" },
        { title: "Deployment", desc: "CI/CD & Cloud Hosting" },
    ];
    const processSteps = Array.isArray(project.process) ? project.process : defaultProcess;

    const features = Array.isArray(project.features) && project.features.length > 0
        ? project.features
        : ["Custom UI/UX", "Responsive Design", "Fast Performance", "Secure Authentication"];

    // Default Results if not provided
    const defaultResults = [
        { label: "Performance", value: "100%" },
        { label: "User Satisfaction", value: "5.0" },
        { label: "Uptime", value: "99.9%" },
    ];
    const results = Array.isArray(project.results) ? project.results : defaultResults;

    return (
        <div className="min-h-screen bg-[#FFFBF5] font-sans selection:bg-[#FFC224] selection:text-black">
            <Navigation />

            <main className="pt-24">
                {/* 1. Header & Back Link */}
                <div className="max-w-7xl mx-auto px-6 mb-12">
                    <Link href="/projects" className="inline-flex items-center text-lg font-bold hover:underline mb-8 uppercase tracking-wide">
                        <ArrowLeft className="mr-2 w-5 h-5" /> Back to Projects
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
                        <div className="max-w-4xl">
                            {/* Tags/Type */}
                            <div className="flex gap-3 mb-6 flex-wrap">
                                <span className="bg-[#FFC224] border-2 border-black px-4 py-1 rounded-full text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    {project.tags?.[0] || "Project"}
                                </span>
                                {project.tags?.slice(1, 3).map((tag: string) => (
                                    <span key={tag} className="bg-white border-2 border-black px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase leading-tight md:leading-none">
                                {project.title}
                            </h1>
                            <p className="text-xl md:text-3xl font-medium text-gray-700 leading-relaxed max-w-3xl">
                                {project.description}
                            </p>
                        </div>

                        {/* Project Meta Box */}
                        <div className="w-full md:w-auto bg-white p-6 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] min-w-[280px]">
                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Client</div>
                                    <div className="font-bold text-lg">{client}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Role</div>
                                    <div className="font-bold text-lg">{role}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Duration</div>
                                    <div className="font-bold text-lg">{duration}</div>
                                </div>
                                <div className="pt-2">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-[#FF4A60] transition-colors">
                                            Visit Live Site <ArrowUpRight className="ml-2 w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Hero Image */}
                <section className="px-6 mb-24">
                    <div className="max-w-7xl mx-auto aspect-video relative rounded-3xl overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-gray-100">
                        {project.image ? (
                            <Image src={project.image} alt={project.title} fill className="object-cover" priority />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                                <span className="text-gray-400 font-bold text-2xl">No Preview Available</span>
                            </div>
                        )}
                    </div>
                </section>

                {/* 2. Introduction */}
                <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
                    <h2 className="text-3xl font-black uppercase mb-8 decoration-[#FFC224] decoration-4 underline underline-offset-4">The Goal</h2>
                    <p className="text-2xl md:text-3xl font-medium leading-relaxed text-gray-800">
                        "{project.description}"
                    </p>
                </section>

                {/* 4. Overview Sections (Challenge/Solution/Outcome) */}
                <section className="bg-black text-white py-24 px-6 mb-24 skew-y-2">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 -skew-y-2">
                        <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800">
                            <div className="w-12 h-12 bg-[#FF4A60] rounded-full flex items-center justify-center mb-6 border-2 border-white text-black">
                                <span className="font-black text-xl">01</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#FF4A60]">The Challenge</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">{project.challenge || "Identification of core user problems and system bottlenecks."}</p>
                        </div>
                        <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800">
                            <div className="w-12 h-12 bg-[#FFC224] rounded-full flex items-center justify-center mb-6 border-2 border-white text-black">
                                <span className="font-black text-xl">02</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#FFC224]">The Solution</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">{project.solution || "Strategies and technologies implemented to address the issues."}</p>
                        </div>
                        <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800">
                            <div className="w-12 h-12 bg-[#4AFF93] rounded-full flex items-center justify-center mb-6 border-2 border-white text-black">
                                <span className="font-black text-xl">03</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#4AFF93]">The Outcome</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">{project.outcome || "Measurable results and key achievements delivered."}</p>
                        </div>
                    </div>
                </section>

                {/* 5. Key Features */}
                <section className="max-w-6xl mx-auto px-6 mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">Key Features</h2>
                        <p className="text-xl text-gray-600">Engineered for performance and scalability.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {features.map((feature: string, i: number) => (
                            <div key={i} className="flex items-center bg-white p-6 rounded-xl border-4 border-black hover:-translate-y-1 transition-transform">
                                <CheckCircle2 className="w-8 h-8 text-[#FF4A60] mr-4 flex-shrink-0" />
                                <span className="text-xl font-bold">{feature}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. Development Process */}
                <section className="bg-[#FFC224] py-24 px-6 mb-24 border-y-4 border-black">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black uppercase mb-16 text-center">How We Built It</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            {processSteps.map((step: any, i: number) => (
                                <div key={i} className="relative">
                                    <div className="bg-white p-8 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center h-full">
                                        {/* Icons are tricky with JSON, using generic if missing */}
                                        <Code2 className="w-12 h-12 mx-auto mb-6 text-black" />
                                        <h3 className="text-xl font-black uppercase mb-2">{step.title}</h3>
                                        <p className="text-gray-600 font-medium">{step.desc}</p>
                                    </div>
                                    {i < 3 && (
                                        <div className="hidden md:block absolute top-1/2 -right-6 w-8 h-1 bg-black z-10" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Tech Stack */}
                <section className="max-w-6xl mx-auto px-6 mb-24">
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 text-center">Technology Stack</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {project.tags?.map((tech: string) => (
                            <span key={tech} className="px-8 py-4 bg-gray-100 rounded-2xl text-xl font-bold border-2 border-gray-300 text-gray-500 hover:border-black hover:text-black hover:bg-white transition-all cursor-default">
                                {tech}
                            </span>
                        ))}
                        {/* Default fallback tags if few are present */}
                        {(!project.tags || project.tags.length < 4) && ["React", "TypeScript", "Node.js", "AWS"].map(tech => (
                            <span key={tech} className="px-8 py-4 bg-gray-100 rounded-2xl text-xl font-bold border-2 border-gray-300 text-gray-500 hover:border-black hover:text-black hover:bg-white transition-all cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* 8. Bento Grid Showcase */}
                <section className="max-w-7xl mx-auto px-6 mb-24">
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-16 text-center">Visual Showcase</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-[800px]">
                        {/* Large Main Item */}
                        <div className="md:col-span-2 md:row-span-2 relative bg-gray-100 rounded-[32px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden group">
                            {project.gallery && project.gallery[0] ? (
                                <Image src={project.gallery[0]} alt="Main View" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                            ) : project.image ? (
                                <Image src={project.image} alt="Main View" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center font-black text-2xl text-gray-300">MAIN VIEW</div>
                            )}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <h3 className="text-2xl font-bold">Dashboard Home</h3>
                            </div>
                        </div>

                        {/* Top Side Item */}
                        <div className="relative bg-black rounded-[32px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden group">
                            {project.gallery && project.gallery[1] ? (
                                <Image src={project.gallery[1]} alt="Mobile View" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                            ) : (
                                <>
                                    <div className="absolute inset-0 flex items-center justify-center font-black text-xl text-gray-700">MOBILE VIEW</div>
                                    <div className="absolute inset-0 bg-[#FFC224] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                </>
                            )}
                        </div>

                        {/* Bottom Side Item */}
                        <div className="relative bg-[#FF4A60] rounded-[32px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden group flex items-center justify-center">
                            {project.gallery && project.gallery[2] ? (
                                <Image src={project.gallery[2]} alt="System View" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                            ) : (
                                <span className="font-black text-4xl text-black mix-blend-multiply uppercase">Design System</span>
                            )}
                        </div>
                    </div>
                </section>

                {/* 9. Video Section */}
                <section className="max-w-6xl mx-auto px-6 mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">In Motion</h2>
                        <p className="text-xl text-gray-600">See the interactions come to life.</p>
                    </div>

                    {project.video ? (
                        <div className="aspect-video bg-black rounded-[32px] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative">
                            {/* Assuming project.video is a URL. If it's a YouTube link, we'd need to parse it or use an iframe. 
                                For now, simplistically render an iframe if it looks like a URL, or a video tag.
                                Let's assume the user inputs a full Embed URL for now OR we treat it as a source link.
                            */}
                            <iframe
                                src={project.video.replace("watch?v=", "embed/")}
                                className="w-full h-full"
                                title="Project Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        <div className="aspect-video bg-black rounded-[32px] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative group cursor-pointer hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all">
                            <div className="absolute inset-0 flex items-center justify-center bg-[url('/images/noise.png')] opacity-20"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 bg-[#FFC224] rounded-full flex items-center justify-center border-4 border-black group-hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-1"></div>
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md px-6 py-2 rounded-full text-white font-bold border border-white/20 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                Watch Demo Reel
                            </div>
                        </div>
                    )}
                </section>

                {/* 10. Results / Metrics */}
                <section className="bg-black text-white py-24 px-6 mb-24">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-gray-400">Impact & Results</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {results.map((stat: any, i: number) => (
                                <div key={i} className="p-6 border border-gray-800 rounded-2xl bg-[#0A0A0A]">
                                    <div className="text-6xl font-black text-[#FFC224] mb-2">{stat.value}</div>
                                    <div className="text-xl font-bold uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 11. Testimonial */}
                {project.testimonial?.text && (
                    <section className="max-w-4xl mx-auto px-6 mb-32 text-center">
                        <div className="bg-[#FFF8E6] p-12 rounded-[40px] border-4 border-black relative">
                            <div className="text-6xl absolute -top-8 left-12 text-[#FFC224]">“</div>
                            <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-8">
                                "{project.testimonial.text}"
                            </p>
                            <div className="flex items-center justify-center space-x-4">
                                <div className="w-12 h-12 bg-gray-300 rounded-full border-2 border-black flex items-center justify-center font-bold text-gray-500">
                                    {project.testimonial.author?.charAt(0) || "C"}
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-lg">{project.testimonial.author || "Client"}</div>
                                    <div className="text-sm text-gray-600 font-bold uppercase">{project.testimonial.role || "Role"}</div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* 12. Call To Action (CTA) */}
                <section className="relative py-32 bg-[#FF4A60] overflow-hidden text-center text-white border-t-4 border-black">
                    {/* Decorative background elements could go here */}
                    <div className="relative z-10 max-w-4xl mx-auto px-6">
                        <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
                            Have a similar idea?
                        </h2>
                        <p className="text-2xl md:text-3xl font-bold mb-12 opacity-90 max-w-2xl mx-auto">
                            Let's build your next game-changing digital product together.
                        </p>
                        <Link href="/contact" className="inline-flex items-center bg-white text-black text-xl font-black px-12 py-6 rounded-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all uppercase tracking-wide">
                            Start Your Project <Rocket className="ml-3 w-6 h-6" />
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
