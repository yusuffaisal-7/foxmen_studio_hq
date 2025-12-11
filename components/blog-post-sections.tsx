"use client"

import { ArrowRight, Clock, Calendar, Share2, Facebook, Twitter, Linkedin, MessageSquare, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function PostHeader({ post }: { post: any }) {
    return (
        <section className="pt-32 pb-16 px-6 md:px-12 bg-[#FFFBF5] text-center border-b-4 border-black">
            <div className="max-w-[1600px] mx-auto">
                <div className="inline-block bg-[#FFC224] px-4 py-2 rounded-full border-2 border-black font-bold uppercase text-sm mb-8">{post.tags?.[0] || "Blog"}</div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight max-w-5xl mx-auto">{post.title}</h1>
                <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
                    {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm md:text-base font-bold text-gray-500">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" /> {new Date(post.date).toLocaleDateString()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export function PostHero({ image }: { image: string }) {
    return (
        <section className="py-12 md:py-20 px-6 md:px-12 bg-white">
            <div className="max-w-[1600px] mx-auto">
                <div className="aspect-[21/9] bg-gray-100 rounded-[32px] md:rounded-[48px] border-4 border-black overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    {image ? (
                        <Image src={image} alt="Hero" fill className="object-cover" />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-2xl font-bold uppercase">
                            No Hero Image
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export function PostBody({ content }: { content: string }) {
    return (
        <div className="prose prose-lg md:prose-xl prose-headings:font-bold prose-headings:text-black prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#FF4A60] prose-img:rounded-[32px] prose-img:border-4 prose-img:border-black max-w-none whitespace-pre-wrap">
            {content}
        </div>
    )
}

export function SidebarAuthorBio() {
    return (
        <div className="bg-[#F3F4F6] p-8 rounded-[32px] border-4 border-black text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 border-4 border-black"></div>
            <h3 className="text-xl font-bold mb-1">Alex Fox</h3>
            <p className="text-[#FF4A60] font-bold uppercase text-xs tracking-wide mb-4">Lead AI Engineer</p>
            <p className="text-gray-600 font-medium mb-6 text-sm leading-relaxed">
                Technologist with 10 years in AI. Passionate about intelligent systems.
            </p>
            <div className="flex gap-3 justify-center">
                <button className="p-2 rounded-full bg-white border-2 border-black hover:bg-black hover:text-white transition-colors"><Twitter className="w-4 h-4" /></button>
                <button className="p-2 rounded-full bg-white border-2 border-black hover:bg-black hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></button>
            </div>
        </div>
    )
}

export function SidebarTags({ tags }: { tags: string[] }) {
    if (!tags || tags.length === 0) return null;
    return (
        <div className="bg-white p-8 rounded-[32px] border-4 border-black">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wide">Tags</h4>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 rounded-full border-2 border-black font-bold hover:bg-black hover:text-white transition-colors cursor-pointer text-sm bg-gray-50">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export function SidebarRelated() {
    return (
        <div className="bg-white p-8 rounded-[32px] border-4 border-black">
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wide">Related</h4>
            <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="aspect-video bg-gray-100 rounded-xl mb-3 border-2 border-black/10 group-hover:border-black transition-colors overflow-hidden"></div>
                        <h4 className="font-bold text-base leading-tight group-hover:underline decoration-2">Scaling Your Startup MVP</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function CommentsSection() {
    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold mb-8">Discussion (3)</h2>

            <div className="space-y-6 mb-12">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-6 rounded-[24px] border-4 border-black/10">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-100 rounded-full border-2 border-black"></div>
                                <div>
                                    <div className="font-bold text-sm">Reader Name</div>
                                    <div className="text-xs text-gray-400 font-bold">2 days ago</div>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 font-medium text-sm">This is a great insight! I really appreciate the detailed breakdown of the generative process.</p>
                    </div>
                ))}
            </div>

            <div className="bg-[#FFFBF5] p-8 md:p-10 rounded-[40px] border-4 border-black">
                <h3 className="text-xl font-bold mb-6">Leave a Comment</h3>
                <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <Input placeholder="Name" className="h-12 rounded-xl border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black focus-visible:border-4" />
                        <Input placeholder="Email" className="h-12 rounded-xl border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black focus-visible:border-4" />
                    </div>
                    <Textarea placeholder="Share your thoughts..." className="min-h-[120px] rounded-xl border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black focus-visible:border-4 p-4 resize-y" />
                    <Button className="h-14 px-8 rounded-full bg-black text-white text-lg font-bold hover:bg-gray-800 w-full sm:w-auto">
                        Post Comment
                    </Button>
                </form>
            </div>
        </section>
    )
}

export function PostCTA() {
    return (
        <section className="py-32 px-6 md:px-12 bg-[#F3F4F6] text-center border-t-4 border-black text-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-8">Have an Idea?</h2>
                <p className="text-2xl text-gray-500 font-medium mb-12">Let's create. Together.</p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#FF4A60] text-white border-4 border-black rounded-full px-12 py-6 text-xl font-bold hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1">
                    Start Your Project <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
            </div>
        </section>
    )
}
