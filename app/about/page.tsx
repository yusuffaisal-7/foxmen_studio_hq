import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import {
    AboutHero,
    AboutHighlights,
    AboutServices,
    AboutApproach,
    AboutTech,
    AboutStatsMarquee,
    AboutCTA
} from "@/components/about-sections"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#6E35FF] selection:text-white">
            <Navigation />
            <main>
                <AboutHero />
                <AboutHighlights />
                <AboutServices />
                <AboutApproach />
                <AboutTech />
                <AboutStatsMarquee />
                <AboutCTA />
            </main>
            <Footer />
        </div>
    )
}
