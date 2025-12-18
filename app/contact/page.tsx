import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import {
    ContactHero,
    ContactOptions,
    InquiryForm,
    ContactFAQ,
    StartProcess,
    QuickActions,
    SocialConnect,
    LocationMap,
    ContactCTA
} from "@/components/contact-sections"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Foxmen Studio. Let's discuss your project and how we can help you build premium web and mobile experiences.",
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#FFC224] selection:text-black">
            <Navigation />
            <main>
                <ContactHero />
                <ContactOptions />
                <div id="form">
                    <InquiryForm />
                </div>
                <ContactFAQ />
                <StartProcess />
                <QuickActions />
                <SocialConnect />
                <LocationMap />
                <ContactCTA />
            </main>
            <Footer />
        </div>
    )
}
