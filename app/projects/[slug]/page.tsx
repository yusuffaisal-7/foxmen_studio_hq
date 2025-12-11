import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
// import { projects } from "@/lib/data"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"




async function getProject(slug: string) {
    const res = await fetch(`http://localhost:5001/api/projects/${slug}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = await getProject(params.slug);

    if (!project) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#FFC224] selection:text-black">
            <Navigation />
            <main>
                {/* Back Link */}
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <Link href="/projects" className="inline-flex items-center text-lg font-bold hover:underline">
                        <ArrowLeft className="mr-2 w-5 h-5" /> Back to Projects
                    </Link>
                </div>

                {/* Hero */}
                <section className="pb-16 pt-8 px-4 text-center max-w-5xl mx-auto">
                    <div className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                        {project.category}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">{project.title}</h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto">
                        {project.description}
                    </p>
                </section>

                {/* Hero Image */}
                <section className="px-4 mb-24">
                    <div className="max-w-7xl mx-auto h-[400px] md:h-[600px] bg-gray-200 rounded-[32px] border-4 border-black overflow-hidden relative">
                        {/* <Image src={project.image} fill className="object-cover" /> */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-4xl font-bold">
                            Hero Image Mockup
                        </div>
                    </div>
                </section>

                {/* Overview */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                            <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                {project.overview?.problem || "Defining the core user problem and market needs."}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">The Solution</h3>
                            <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                {project.overview?.solution || "Designing a seamless, intuitive digital experience."}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">The Outcome</h3>
                            <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                {project.overview?.outcome || "Measurable success and positive user feedback."}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Grid */}
                {project.stats && (
                    <section className="py-16 px-4 border-y-4 border-black bg-[#FFC224]">
                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {project.stats.map((stat: any, i: number) => (
                                <div key={i}>
                                    <div className="text-5xl font-black mb-2">{stat.value}</div>
                                    <div className="text-sm font-bold uppercase tracking-wide opacity-80">{stat.label}</div>
                                </div>
                            ))}
                            <div>
                                <div className="text-5xl font-black mb-2">100%</div>
                                <div className="text-sm font-bold uppercase tracking-wide opacity-80">Dedication</div>
                            </div>
                            <div>
                                <div className="text-5xl font-black mb-2">24/7</div>
                                <div className="text-sm font-bold uppercase tracking-wide opacity-80">Support</div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Process / Screenshots Placeholder */}
                <section className="py-24 px-4">
                    <div className="max-w-6xl mx-auto space-y-24">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="h-[400px] bg-gray-100 rounded-[32px] border-4 border-black"></div>
                            <div>
                                <h3 className="text-4xl font-bold mb-6">Design Process</h3>
                                <p className="text-xl text-gray-600 font-medium leading-relaxed">
                                    We start with wireframes and move to high-fidelity prototypes, ensuring every interaction is purposeful.
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                            <div className="order-last md:order-first">
                                <h3 className="text-4xl font-bold mb-6">Engineering</h3>
                                <p className="text-xl text-gray-600 font-medium leading-relaxed">
                                    Built on a modern stack for speed, security, and scalability.
                                </p>
                            </div>
                            <div className="h-[400px] bg-gray-100 rounded-[32px] border-4 border-black"></div>
                        </div>
                    </div>
                </section>

                {/* Next Project CTA */}
                <section className="py-24 bg-[#FFFBF5] text-center border-t-4 border-black">
                    <h2 className="text-3xl font-bold mb-8">Ready to see more?</h2>
                    <Link href="/projects" className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                        View All Projects
                    </Link>
                </section>

            </main>
            <Footer />
        </div>
    )
}
