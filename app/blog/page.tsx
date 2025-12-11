import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import {
    BlogHero,
    SearchFilter,
    FeaturedArticle,
    ArticleGrid,
    Pagination,
    PopularCategories,
    EmailSubscribe,
    RecommendedReads,
    AuthorSpotlight,
    BlogCTA
} from "@/components/blog-sections"

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#FFC224] selection:text-black">
            <Navigation />
            <main>
                <BlogHero />
                <SearchFilter />
                <FeaturedArticle />
                <ArticleGrid />
                <Pagination />
                <PopularCategories />
                <EmailSubscribe />
                <RecommendedReads />
                <AuthorSpotlight />
                <BlogCTA />
            </main>
            <Footer />
        </div>
    )
}
