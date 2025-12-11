export interface Project {
    slug: string
    title: string
    description: string
    category: string
    tags: string[]
    image: string
    overview?: {
        problem: string
        solution: string
        outcome: string
    }
    stats?: {
        label: string
        value: string
    }[]
}

export const projects: Project[] = [
    {
        slug: "fintech-app",
        title: "NeoBank Mobile",
        description: "A smart banking interface for the next generation.",
        category: "Mobile Apps",
        tags: ["Mobile", "Fintech", "iOS"],
        image: "/images/project1.jpg", // Placeholder
        overview: {
            problem: "Traditional banking apps are cluttered and confusing for young users.",
            solution: "We designed a gesture-based, minimalist interface that makes saving fun.",
            outcome: "40% increase in user retention within 3 months."
        },
        stats: [
            { label: "Downloads", value: "50k+" },
            { label: "Rating", value: "4.9" }
        ]
    },
    {
        slug: "ai-dashboard",
        title: "DataSense AI",
        description: "Analytics dashboard powered by predictive machine learning.",
        category: "AI Projects",
        tags: ["AI", "Dashboard", "React"],
        image: "/images/project2.jpg",
        overview: {
            problem: "Complex data was inaccessible to non-technical stakeholders.",
            solution: "Created a natural language interface to query and visualize data instantly.",
            outcome: "Reduced reporting time by 90%."
        }
    },
    {
        slug: "ecommerce-platform",
        title: "LuxeMarket",
        description: "High-performance headless e-commerce for luxury brands.",
        category: "Web Apps",
        tags: ["E-commerce", "Next.js", "Web"],
        image: "/images/project3.jpg"
    },
    {
        slug: "health-tracker",
        title: "Vitality",
        description: "Holistic health tracking with wearable integration.",
        category: "Mobile Apps",
        tags: ["Health", "Mobile", "Integration"],
        image: "/images/project4.jpg"
    },
    {
        slug: "corporate-portal",
        title: "Nexus Corp",
        description: "Internal communication portal for enterprise agility.",
        category: "Web Apps",
        tags: ["Enterprise", "Portal", "Secure"],
        image: "/images/project5.jpg"
    },
    {
        slug: "smart-home",
        title: "HomeOS",
        description: "Unified control system for IoT devices.",
        category: "Digital Products",
        tags: ["IoT", "Smart Home", "Design"],
        image: "/images/project6.jpg"
    }
]
