import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import {
    ProjectsHero,
    ProjectGrid,
    ProjectTech,
    ProjectCTA
} from "@/components/project-sections"
import { FeaturedProjectsSection } from "@/components/featured-projects-section"
import {
    ProjectStats,
    IndustryCategories,
    BeforeAfter,
    ProjectProcess,
    ProjectTimeline,
    ProjectAwards,
    ClientLogos,
    FeaturedCaseStudyLong,
    AnimationShowcase,
    TechFilter,
    ImpactStories,
    BehindTheScenes,
    ProjectReel,
    ClosingCTA
} from "@/components/project-premium-sections"

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#FFC224] selection:text-black">
            <Navigation />
            <main>
                <ProjectsHero />
                <FeaturedProjectsSection />
                <ProjectGrid />
                <ProjectTech />

                {/* Premium Sections */}
                <ProjectStats />
                <IndustryCategories />
                <BeforeAfter />
                <ProjectProcess />
                <ProjectTimeline />
                <ProjectAwards />
                <ClientLogos />
                <FeaturedCaseStudyLong />
                <AnimationShowcase />
                <TechFilter />
                <ImpactStories />
                <BehindTheScenes />
                <ProjectReel />
                <ClosingCTA />
            </main>
            <Footer />
        </div>
    )
}
