import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import {
    PostHeader,
    PostHero,
    PostBody,
    SidebarAuthorBio,
    SidebarTags,
    SidebarRelated,
    SidebarReferences,
    CommentsSection,
    PostCTA
} from "@/components/blog-post-sections"

import { notFound } from "next/navigation"

async function getPost(slug: string) {
    try {
        const res = await fetch(`https://paperfolio-backend.vercel.app/api/posts/${slug}`, { cache: 'no-store' });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        return null;
    }
}

async function getRecentPosts() {
    try {
        const res = await fetch('https://paperfolio-backend.vercel.app/api/posts', { next: { revalidate: 60 } });
        if (!res.ok) return [];
        return res.json();
    } catch (error) {
        return [];
    }
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const postData = getPost(params.slug);
    const recentPostsData = getRecentPosts();

    const [post, recentPosts] = await Promise.all([postData, recentPostsData]);

    if (!post) {
        notFound()
    }

    // Filter out current post and get top 3
    const otherPosts = Array.isArray(recentPosts)
        ? recentPosts.filter((p: any) => p.slug !== params.slug).slice(0, 3)
        : [];

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#FFC224] selection:text-black">
            <Navigation />

            {/* Full Width Header & Hero */}
            <PostHeader post={post} />
            <main className="px-6 md:px-12 pt-12 pb-24">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-12 lg:gap-24">

                    {/* Left Column: Content */}
                    <div className="min-w-0">
                        <PostHero image={post.coverImage} />
                        <PostBody content={post.content} />
                        <div className="mt-16 border-t border-gray-100 pt-16">
                            <CommentsSection postId={post.id} />
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="space-y-8 mt-12 lg:mt-0">
                        <SidebarAuthorBio post={post} />
                        <SidebarTags tags={post.tags} />
                        <SidebarReferences references={post.references} />
                        <SidebarRelated posts={otherPosts} />
                    </div>
                </div>
            </main>

            <PostCTA />
            <Footer />
        </div >
    )
}
