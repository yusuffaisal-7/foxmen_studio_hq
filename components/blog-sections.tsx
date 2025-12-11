"use client"
import { useState, useEffect } from "react"

import { ArrowRight, Search, ChevronRight, ChevronLeft, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BlogHero() {
    return (
        <section className="py-16 md:py-32 bg-[#FFFBF5] text-center px-4 md:px-8 border-b-4 border-black">
            <div className="max-w-[1600px] mx-auto">
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8">Insights & Ideas</h1>
                <p className="text-lg md:text-2xl lg:text-3xl text-gray-600 font-medium leading-relaxed max-w-4xl mx-auto">
                    Thoughts on technology, AI, development, and digital experiences.
                </p>
            </div>
        </section>
    )
}

export function SearchFilter() {
    const filters = ["All", "AI", "Web Development", "Mobile Apps", "UI/UX", "Strategy", "Case Studies"]
    return (
        <section className="py-8 md:py-12 px-4 md:px-8 bg-white border-b-4 border-black sticky top-0 z-20">
            <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row items-center gap-6 xl:gap-8 justify-between">
                <div className="relative w-full xl:w-[500px]">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 md:w-6 md:h-6" />
                    <Input placeholder="Search articles..." className="pl-14 h-14 md:h-16 rounded-full border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black focus-visible:border-4 text-base md:text-xl" />
                </div>
                <div className="flex gap-3 overflow-x-auto w-full xl:w-auto pb-2 xl:pb-0 scrollbar-hide">
                    {filters.map((filter, i) => (
                        <button key={i} className={`px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg whitespace-nowrap border-2 border-black transition-all ${i === 0 ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}>
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
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white border-b-4 border-black">
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="bg-gray-200 aspect-video lg:aspect-auto lg:h-[500px] rounded-[32px] md:rounded-[48px] border-4 border-black relative overflow-hidden group cursor-pointer shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-[#FFC224] px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-black font-bold uppercase text-xs md:text-base">AI Systems</div>
                </div>
                <div>
                    <div className="text-gray-500 font-bold mb-4 md:mb-6 uppercase tracking-wider text-sm md:text-lg">Featured Story</div>
                    <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight hover:underline decoration-4 decoration-[#FF4A60] cursor-pointer">The Future of Generative AI in Web Design</h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 leading-relaxed max-w-2xl">
                        How AI algorithms are reshaping the way we conceptualize, build, and deploy digital experiences in 2025.
                    </p>
                    <Link href="/blog/post-1" className="inline-flex items-center text-lg md:text-2xl font-bold text-black border-b-4 border-[#FF4A60] pb-2 hover:text-[#FF4A60] transition-colors">
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
        fetch("http://localhost:5001/api/posts")
            .then(res => res.json())
            .then(data => {
                setArticles(data)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [])

    if (loading) return <div className="py-20 text-center">Loading Articles...</div>

    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F3F4F6] border-b-4 border-black">
            <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {articles.map((art, i) => (
                    <Link href={`/blog/${art.slug}`} key={art._id} className="block h-full">
                        <div className="bg-white rounded-[32px] md:rounded-[48px] border-4 border-black p-6 md:p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all cursor-pointer flex flex-col h-full">
                            <div className="aspect-[16/10] bg-gray-100 rounded-[24px] md:rounded-[32px] mb-6 md:mb-8 border-2 border-black/10 overflow-hidden relative">
                                {art.coverImage && <Image src={art.coverImage} alt={art.title} fill className="object-cover" />}
                            </div>
                            <div className="flex justify-between items-center mb-4 md:mb-6">
                                <span className="bg-gray-100 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase">{art.tags?.[0] || "Blog"}</span>
                                <span className="text-gray-400 text-sm md:text-base font-bold">{new Date(art.date).toLocaleDateString()}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-tight max-w-md">{art.title}</h3>
                            <p className="text-gray-500 font-medium mb-6 md:mb-8 text-base md:text-lg flex-grow line-clamp-3">{art.excerpt}</p>
                            <div className="font-bold border-b-2 border-black self-start text-base md:text-lg">Read Article</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export function Pagination() {
    return (
        <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b-4 border-black">
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

export function PopularCategories() {
    const cats = ["AI Systems", "Web App Development", "Mobile App Development", "UX/UI", "Tech Trends", "Startup Growth"]
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-[#FFFBF5] border-b-4 border-black">
            <div className="max-w-[1600px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center">Explore Topics</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {cats.map((cat, i) => (
                        <div key={i} className="aspect-square bg-white border-4 border-black rounded-[32px] md:rounded-[40px] flex flex-col items-center justify-center p-4 md:p-6 text-center hover:bg-black hover:text-white transition-colors cursor-pointer group shadow-sm hover:shadow-lg">
                            <span className="text-3xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">✨</span>
                            <span className="font-bold text-sm md:text-lg leading-tight">{cat}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function EmailSubscribe() {
    return (
        <section className="py-24 md:py-32 px-4 md:px-8 bg-black text-white border-b-4 border-black">
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
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white border-b-4 border-black">
            <div className="max-w-[1600px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12">You May Also Like</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[4/3] bg-gray-100 rounded-[24px] md:rounded-[32px] mb-4 md:mb-6 border-2 border-black/10 group-hover:border-black transition-colors"></div>
                            <h4 className="font-bold text-xl md:text-2xl leading-tight group-hover:underline decoration-2">Understanding Headless CMS Architecture</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function AuthorSpotlight() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F3F4F6] border-b-4 border-black">
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
