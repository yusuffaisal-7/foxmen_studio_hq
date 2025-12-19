import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { FeaturedProjectsSection } from "@/components/featured-projects-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <HeroSection />
      <LogoMarquee />
      <FeaturedProjectsSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ArticlesSection />
      <Footer />
    </main>
  )
}
