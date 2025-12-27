import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { FeaturedProjectsSection } from "@/components/featured-projects-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />
      <HeroSection />

      <ScrollAnimation>
        <LogoMarquee />
      </ScrollAnimation>

      <ScrollAnimation>
        <FeaturedProjectsSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <ServicesSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <StatsSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <AboutSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <ExperienceSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <TestimonialsSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <ArticlesSection />
      </ScrollAnimation>

      <Footer />
    </main>
  )
}
