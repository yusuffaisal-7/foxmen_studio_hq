import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import {
    AboutHero,
    AboutStory,
    AboutMission,
    AboutServices,
    AboutApproach,
    AboutTech,
    AboutTeam,
    AboutValues,
    AboutStats,
    AboutCTA
} from "@/components/about-sections"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#FFC224] selection:text-black">
            <Navigation />
            <main>
                <AboutHero />
                <AboutStory />
                <AboutMission />
                <AboutServices />
                <AboutApproach />
                <AboutTech />
                <AboutTeam />
                <AboutValues />
                <AboutStats />
                <AboutCTA />
            </main>
            <Footer />
        </div>
    )
}
