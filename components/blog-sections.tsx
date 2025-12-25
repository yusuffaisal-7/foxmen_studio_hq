"use client"
import { useState, useEffect } from "react"

import { ArrowRight, Search, ChevronRight, ChevronLeft, Mail, Clock, Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BlogHero() {
    return (
        <section className="py-16 md:py-24 bg-[#F8F8F8] px-4 md:px-8">
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                {/* Left Label */}
                <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#B256FF]"></div>
                    <span className="text-gray-500 font-medium text-lg" style={{ fontFamily: "var(--font-inter-regular)" }}>{"{01} — Our Blogs"}</span>
                </div>

                {/* Right Description */}
                <div className="max-w-2xl text-right md:text-left">
                    {/* Note: In the image it's right aligned relative to container, but text align is left? 
                         Actually looking at image, text is on the right side of screen, left aligned. */}
                    <p className="text-xl md:text-2xl text-[#333333] font-normal leading-relaxed" style={{ fontFamily: "var(--font-inter-regular)" }}>
                        We are a digital agency creating responsive 3D websites, engaging 3D animations, and impactful branding, combined with results-driven digital marketing; helping businesses grow online at a price that fits your budget.
                    </p>
                </div>
            </div>
        </section>
    )
}

export function SearchFilter() {
    const filters = ["All", "UI/UX Design", "Product Saas", "Design System", "Mobile & Product Design", "Branding Design"]
    return (
        <section className="py-8 md:py-12 px-4 md:px-8 bg-white sticky top-0 z-20 shadow-sm">
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center gap-6 justify-center">
                <div className="flex gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide justify-start md:justify-center">
                    {filters.map((filter, i) => (
                        <button key={i} className={`px-6 py-3 rounded-full font-medium text-sm md:text-base whitespace-nowrap border border-gray-200 transition-all ${i === 0 ? 'bg-[#003C43] text-white border-[#003C43]' : 'bg-white hover:border-black text-gray-700'}`} style={{ fontFamily: "var(--font-inter-regular)" }}>
                            {filter}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function FeaturedArticle() {
    return (
        <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="bg-gray-200 aspect-video lg:aspect-auto lg:h-[450px] rounded-[32px] md:rounded-[48px] border-4 border-black relative overflow-hidden group cursor-pointer shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-[#FFC224] px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-black font-bold uppercase text-xs md:text-base">AI Systems</div>
                </div>
                <div>
                    <div className="text-gray-500 font-bold mb-4 md:mb-6 uppercase tracking-wider text-sm md:text-lg" style={{ fontFamily: "var(--font-inter-regular)" }}>Featured Story</div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight hover:underline decoration-4 decoration-[#FF4A60] cursor-pointer" style={{ fontFamily: "var(--font-owners-regular)" }}>The Future of Generative AI in Web Design</h2>
                    <p className="text-base md:text-lg text-[#333333] mb-8 md:mb-12 leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-inter-regular)" }}>
                        How AI algorithms are reshaping the way we conceptualize, build, and deploy digital experiences in 2025.
                    </p>
                    <Link href="/blog/post-1" className="inline-flex items-center text-lg md:text-2xl font-bold text-black border-b-4 border-[#FF4A60] pb-2 hover:text-[#FF4A60] transition-colors" style={{ fontFamily: "var(--font-inter-regular)" }}>
                        Read More <ArrowRight className="ml-3 w-6 h-6 md:w-8 md:h-8" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export function ArticleGrid() {
    const [articles, setArticles] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://paperfolio-backend.vercel.app/api'}/posts`);
                const data = await res.json();

                // Static Featured Article to match the design reference top-heavy layout
                const featured = {
                    _id: "featured-1",
                    slug: "post-1",
                    title: "What is a 3D website? Simple Guide",
                    content: "What is a 3D website? Learn how 3D websites work, why they convert, and tools to build them.",
                    date: new Date().toISOString(),
                    coverImage: "https://res.cloudinary.com/duh7c5x99/image/upload/v1766675000/gradient-bg_c5yqjg.jpg",
                    tags: ["Methods"],
                    isFeatured: true
                };

                // If data is array, prepend. If not, just use featured.
                const allArticles = Array.isArray(data) ? [featured, ...data] : [featured];
                setArticles(allArticles);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        }
        fetchPosts();
    }, [])

    if (loading) return <div className="py-20 text-center" style={{ fontFamily: "var(--font-inter-regular)" }}>Loading Articles...</div>

    return (
        <section className="py-12 md:py-20 px-4 md:px-8 bg-[#f8f8f8]">
            <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {articles.map((art, i) => {
                    const isFeatured = i === 0;

                    if (isFeatured) {
                        return (
                            <Link href={`/blog/${art.slug}`} key={art._id} className="block group col-span-1 md:col-span-2 row-span-1 md:row-span-1 h-full min-h-[400px]">
                                <div className="relative h-full rounded-[32px] overflow-hidden p-8 flex flex-col justify-end bg-gradient-to-br from-[#E0AAFF] to-[#D0D0FF] shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-[1.005]">
                                    {/* Overlay for text readability if image exists, though we use gradient bg here */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                                    <div className="relative z-10 text-white">
                                        <div className="text-sm font-medium mb-3 opacity-90" style={{ fontFamily: "var(--font-inter-regular)" }}>
                                            {new Date(art.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: "var(--font-owners-regular)" }}>
                                            {art.title}
                                        </h3>
                                        <p className="text-white/95 text-base md:text-lg leading-relaxed max-w-xl line-clamp-3" style={{ fontFamily: "var(--font-inter-regular)" }}>
                                            {art.content}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }

                    return (
                        <Link href={`/blog/${art.slug}`} key={art._id} className="block group">
                            <div className="bg-white rounded-[32px] p-5 h-full min-h-[320px] border border-transparent hover:border-black/5 hover:shadow-lg transition-all duration-300 flex flex-col">

                                {/* Top Row: Image & Plus Icon */}
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-[20px] overflow-hidden shadow-sm bg-gray-100">
                                        {art.coverImage && <Image src={art.coverImage} alt={art.title} fill className="object-cover" />}
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#6E35FF] transition-colors">
                                        <Plus className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Date */}
                                <div className="mb-3 text-gray-400 text-xs font-medium" style={{ fontFamily: "var(--font-inter-regular)" }}>
                                    {new Date(art.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-bold mb-3 leading-[1.1] text-black group-hover:text-[#6E35FF] transition-colors" style={{ fontFamily: "var(--font-owners-regular)" }}>
                                    {art.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#666666] text-sm leading-relaxed line-clamp-3" style={{ fontFamily: "var(--font-inter-regular)" }}>
                                    {art.content ? art.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..." : "Explore the latest insights and trends in design and technology."}
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export function Pagination() {
    return (
        <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
            <div className="max-w-[1600px] mx-auto flex items-center justify-between">
                <button className="flex items-center font-bold text-lg md:text-xl text-gray-400 hover:text-black transition-colors disabled:opacity-50">
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 mr-2" /> Previous
                </button>
                <div className="flex gap-2 md:gap-3">
                    <button className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black text-white text-base md:text-lg font-bold flex items-center justify-center">1</button>
                    <button className="w-10 h-10 md:w-14 md:h-14 rounded-full hover:bg-gray-100 text-base md:text-lg font-bold flex items-center justify-center text-gray-500">2</button>
                    <button className="w-10 h-10 md:w-14 md:h-14 rounded-full hover:bg-gray-100 text-base md:text-lg font-bold flex items-center justify-center text-gray-500">3</button>
                </div>
                <button className="flex items-center font-bold text-lg md:text-xl text-black hover:opacity-70 transition-colors">
                    Next <ChevronRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
                </button>
            </div>
        </section>
    )
}



export function EmailSubscribe() {
    return (
        <section className="py-24 md:py-32 px-4 md:px-8 bg-black text-white">
            <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-[#FF4A60] rounded-full flex items-center justify-center mx-auto mb-8 md:mb-10 border-4 border-white">
                    <Mail className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">Get the Latest Insights</h2>
                <p className="text-gray-400 text-lg md:text-xl font-medium mb-8 md:mb-12">Updates, stories, and trends from FOXMEN Studio.</p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <Input placeholder="Enter your email" className="h-16 md:h-20 rounded-full text-black text-lg md:text-xl px-8 md:px-10 border-none focus-visible:ring-0" />
                    <Button className="h-16 md:h-20 rounded-full px-8 md:px-12 bg-[#FFC224] text-black text-lg md:text-xl font-bold hover:bg-[#FFC224]/90">
                        Subscribe
                    </Button>
                </div>
            </div>
        </section>
    )
}

export function RecommendedReads() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
            <div className="max-w-[1600px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12">You May Also Like</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[4/3] bg-gray-100 rounded-[24px] mb-4 border-2 border-black/10 group-hover:border-black transition-colors"></div>
                            <h4 className="font-bold text-lg md:text-xl leading-tight group-hover:underline decoration-2" style={{ fontFamily: "var(--font-owners-regular)" }}>Understanding Headless CMS Architecture</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function AuthorSpotlight() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F3F4F6]">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16">Meet the Writers</h2>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {['Alex Fox', 'Sarah Chen', 'Mike Ross'].map((name, i) => (
                        <div key={i} className="bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border-2 border-black/10 shadow-sm hover:border-black transition-all">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full mx-auto mb-4 md:mb-6 border-4 border-black"></div>
                            <h3 className="font-bold text-xl md:text-2xl mb-1">{name}</h3>
                            <p className="text-sm md:text-base text-gray-500 font-bold uppercase tracking-wide">Tech Lead</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function BlogCTA() {
    return (
        <section className="py-24 md:py-40 px-4 md:px-8 bg-[#FFFBF5] text-center">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-8xl font-bold mb-8 md:mb-10 leading-none">Ready to Build Your Website or App?</h2>
                <p className="text-xl md:text-3xl text-gray-500 font-medium mb-12 md:mb-16">Let's create something meaningful together.</p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#FF4A60] text-white border-4 border-black rounded-full px-10 py-6 md:px-16 md:py-8 text-xl md:text-2xl font-bold hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1">
                    Start Your Project <ArrowRight className="ml-3 w-6 h-6 md:w-8 md:h-8" />
                </Link>
            </div>
        </section>
    )
}
