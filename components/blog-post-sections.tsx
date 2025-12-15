"use client"
import React from 'react';
import { ArrowRight, Clock, Calendar, Share2, Facebook, Twitter, Linkedin, MessageSquare, Send, Link as LinkIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function PostHeader({ post }: { post: any }) {
    return (
        <section className="pt-32 pb-20 px-6 md:px-12 bg-[#FFFBF5] text-center border-b-4 border-black pattern-dots">
            <div className="max-w-[1600px] mx-auto relative z-10">
                <div className="inline-flex items-center gap-3 bg-[#FFC224] px-5 py-2.5 rounded-xl border-4 border-black font-black uppercase text-sm tracking-widest mb-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
                    {post.tags?.[0] || "Blog"}
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[0.9] max-w-6xl mx-auto uppercase tracking-tighter">
                    {post.title}
                </h1>

                <p className="text-xl md:text-3xl text-gray-700 font-bold leading-relaxed mb-12 max-w-4xl mx-auto font-sans">
                    {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                    <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border-4 border-black font-bold text-sm uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <Calendar className="w-5 h-5" />
                        {new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    {post.author && (
                        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border-4 border-black font-bold text-sm uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="w-2 h-2 rounded-full bg-[#FF4A60] animate-pulse"></span>
                            By {post.author}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export function PostHero({ image }: { image: string }) {
    return (
        <div className="mb-12">
            <div className="aspect-video w-full bg-gray-100 rounded-[32px] border-4 border-black overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {image ? (
                    <Image src={image} alt="Hero" fill className="object-cover" />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-2xl font-bold uppercase">
                        No Hero Image
                    </div>
                )}
            </div>
        </div>
    )
}

export function PostBody({ content }: { content: string }) {
    return (
        <div className="prose prose-lg md:prose-xl prose-headings:font-bold prose-headings:text-black prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#FF4A60] prose-img:rounded-[32px] prose-img:border-4 prose-img:border-black max-w-none">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ node, ...props }) => <h1 className="text-4xl font-black mb-6 mt-12 uppercase tracking-tight" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-3xl font-black mb-6 mt-12 bg-[#FFC224] inline-block px-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-2xl font-bold mb-4 mt-8 underline decoration-4 decoration-[#FF4A60]" {...props} />,
                    p: ({ node, ...props }) => <p className="mb-6 text-lg md:text-xl leading-relaxed font-medium text-gray-800" {...props} />,
                    blockquote: ({ node, ...props }) => (
                        <blockquote className="border-l-[8px] border-black pl-6 py-2 my-8 italic text-2xl font-bold bg-gray-50 rounded-r-xl" {...props} />
                    ),
                    ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2 font-bold marker:text-black" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-6 space-y-2 font-bold marker:text-black" {...props} />,
                    li: ({ node, ...props }) => <li className="pl-2" {...props} />,
                    a: ({ node, ...props }) => <a className="text-[#3b82f6] hover:text-black underline decoration-2 underline-offset-2 font-bold transition-colors" {...props} />,
                    code({ node, inline, className, children, ...props }: any) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                {...props}
                                style={dracula}
                                language={match[1]}
                                PreTag="div"
                                className="rounded-xl border-4 border-black !bg-[#282a36] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] my-8 text-sm md:text-base"
                            >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                        ) : (
                            <code {...props} className={`${className} bg-gray-100 px-1.5 py-0.5 rounded border-2 border-black text-[#FF4A60] font-black text-sm`}>
                                {children}
                            </code>
                        )
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}

export function SidebarAuthorBio({ post }: { post: any }) {
    return (
        <div className="bg-[#FFFBF5] p-8 rounded-[32px] border-4 border-black text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sticky top-32">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 border-4 border-black overflow-hidden relative shadow-sm">
                {post.authorImage ? (
                    <Image src={post.authorImage} alt={post.author} width={96} height={96} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 font-black text-3xl text-gray-300">
                        {post.author?.[0]?.toUpperCase()}
                    </div>
                )}
            </div>
            <h3 className="text-2xl font-black mb-2 uppercase">{post.author || "Admin"}</h3>
            <p className="inline-block bg-[#FF4A60] text-white px-3 py-1 rounded-lg border-2 border-black font-bold uppercase text-xs tracking-wider mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {post.authorRole || "Editor"}
            </p>
            <p className="text-gray-700 font-bold mb-8 text-sm leading-relaxed max-w-[250px] mx-auto">
                {post.authorBio || "Passionate about technology and design."}
            </p>
            <div className="flex gap-4 justify-center">
                {post.authorTwitter && (
                    <a href={post.authorTwitter} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white border-2 border-black hover:bg-black hover:text-white transition-all hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none">
                        <Twitter className="w-5 h-5" />
                    </a>
                )}
                {post.authorLinkedin && (
                    <a href={post.authorLinkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white border-2 border-black hover:bg-black hover:text-white transition-all hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none">
                        <Linkedin className="w-5 h-5" />
                    </a>
                )}
            </div>
        </div>
    )
}

export function SidebarTags({ tags }: { tags: string[] }) {
    if (!tags || tags.length === 0) return null;
    return (
        <div className="bg-white p-8 rounded-[32px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-xl mb-6 uppercase tracking-wider border-b-4 border-black pb-2 inline-block">Tags</h4>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 rounded-xl border-2 border-black font-bold hover:bg-[#FFC224] transition-all cursor-pointer text-sm bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export function SidebarReferences({ references }: { references: string[] }) {
    if (!references || references.length === 0) return null;
    return (
        <div className="bg-[#F9FAFB] p-8 rounded-[32px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-xl mb-6 uppercase tracking-wider flex items-center gap-2">
                <LinkIcon className="w-6 h-6" strokeWidth={3} /> References
            </h4>
            <div className="space-y-3">
                {references.map((ref, i) => (
                    <a
                        key={i}
                        href={ref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-white border-2 border-black rounded-xl text-sm font-bold text-gray-700 hover:bg-[#FFC224] hover:translate-x-1 transition-all truncate shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
                    >
                        <ArrowRight className="w-4 h-4 shrink-0" />
                        <span className="truncate">{ref}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export function SidebarRelated() {
    return (
        <div className="bg-white p-8 rounded-[32px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-xl mb-6 uppercase tracking-wider border-b-4 border-black pb-2 inline-block">Related</h4>
            <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="aspect-video bg-gray-100 rounded-2xl mb-3 border-4 border-black group-hover:bg-[#FFC224] transition-colors overflow-hidden flex items-center justify-center">
                            <span className="font-black opacity-20 text-3xl">IMG</span>
                        </div>
                        <h4 className="font-bold text-lg leading-tight group-hover:underline decoration-4 decoration-[#FFC224] underline-offset-4">Scaling Your Startup MVP</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function CommentsSection({ postId }: { postId: string }) {
    const [comments, setComments] = React.useState<any[]>([]);
    const [newItem, setNewItem] = React.useState({ name: "", email: "", content: "" });
    const [loading, setLoading] = React.useState(true);
    const [submitting, setSubmitting] = React.useState(false);

    React.useEffect(() => {
        if (!postId) return;
        fetch(`https://paperfolio-backend.vercel.app/api/posts/${postId}/comments`)
            .then(res => res.json())
            .then(data => {
                setComments(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [postId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch(`https://paperfolio-backend.vercel.app/api/posts/${postId}/comments`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newItem)
            });
            if (res.ok) {
                const newComment = await res.json();
                setComments(prev => [newComment, ...prev]);
                setNewItem({ name: "", email: "", content: "" });
            }
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="py-20" id="comments">
            <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#FFC224] p-3 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <MessageSquare className="w-8 h-8" strokeWidth={3} />
                </div>
                <h2 className="text-4xl font-black uppercase tracking-tight">Discussion ({comments.length})</h2>
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] gap-12">
                {/* Comments List */}
                <div className="space-y-8 order-2 lg:order-1">
                    {loading ? (
                        <div className="p-12 text-center border-4 border-dashed border-gray-300 rounded-[32px]">
                            <p className="text-xl font-bold text-gray-400 animate-pulse">Loading comments...</p>
                        </div>
                    ) : comments.length === 0 ? (
                        <div className="p-12 text-center bg-gray-50 border-4 border-dashed border-black/20 rounded-[32px]">
                            <p className="text-xl font-bold text-gray-500 italic">No comments yet. Be the first to share your thoughts!</p>
                        </div>
                    ) : (
                        comments.map((comment) => (
                            <div key={comment.id} className="bg-white p-8 rounded-[32px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 transition-transform">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#FFC224] rounded-full border-4 border-black flex items-center justify-center font-black text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                            {comment.name?.[0]?.toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="font-black text-lg">{comment.name}</div>
                                            <div className="text-xs font-bold px-2 py-0.5 bg-gray-100 rounded border border-black inline-block">
                                                {new Date(comment.createdAt).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-800 font-bold leading-relaxed">{comment.content}</p>
                            </div>
                        ))
                    )}
                </div>

                {/* Comment Form */}
                <div className="order-1 lg:order-2">
                    <div className="bg-[#FFFBF5] p-8 rounded-[32px] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] sticky top-32">
                        <h3 className="text-2xl font-black mb-6 uppercase flex items-center gap-2">
                            Leave a Comment <span className="text-[#FF4A60]">.</span>
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-4">
                                <Input
                                    placeholder="Your Name"
                                    required
                                    value={newItem.name}
                                    onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                                    className="h-14 rounded-xl border-4 border-black font-bold text-lg focus-visible:ring-0 focus-visible:bg-[#FFC224] focus-visible:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                                />
                                <Input
                                    placeholder="Your Email"
                                    type="email"
                                    required
                                    value={newItem.email}
                                    onChange={e => setNewItem({ ...newItem, email: e.target.value })}
                                    className="h-14 rounded-xl border-4 border-black font-bold text-lg focus-visible:ring-0 focus-visible:bg-[#FFC224] focus-visible:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                                />
                            </div>
                            <Textarea
                                placeholder="What's on your mind?"
                                required
                                value={newItem.content}
                                onChange={e => setNewItem({ ...newItem, content: e.target.value })}
                                className="min-h-[160px] rounded-xl border-4 border-black font-bold text-lg focus-visible:ring-0 focus-visible:bg-[#FFC224] focus-visible:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all p-4 resize-y"
                            />
                            <Button
                                type="submit"
                                disabled={submitting}
                                className="h-14 w-full rounded-xl bg-black text-white text-lg font-black uppercase tracking-wider border-4 border-black hover:bg-[#FF4A60] hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                            >
                                {submitting ? "Posting..." : "Post Comment"} <Send className="ml-2 w-5 h-5" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function PostCTA() {
    return (
        <section className="py-32 px-6 md:px-12 bg-[#F3F4F6] text-center border-t-4 border-black text-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">Have an Idea?</h2>
                <p className="text-2xl md:text-3xl text-gray-500 font-bold mb-12">Let's create something extraordinary.</p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#FF4A60] text-white border-4 border-black rounded-full px-12 py-6 text-xl font-black hover:bg-black hover:shadow-[12px_12px_0px_0px_rgba(255,194,36,1)] transition-all hover:-translate-y-2 uppercase tracking-wider">
                    Start Your Project <ArrowRight className="ml-3 w-8 h-8" strokeWidth={3} />
                </Link>
            </div>
        </section>
    )
}
