import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function PortfolioSection() {
  const projects = [
    {
      title: "Studio user research and analysis",
      description:
        "In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus.",
      tag: "UI/UX Design",
      logo: "/images/studio-logo.svg",
      bgColor: "bg-[#6366F1]",
      illustration: "/images/studio-workspace.svg",
    },
    {
      title: "Venture Workspace web app redesign",
      description:
        "In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus.",
      tag: "UI/UX Design",
      logo: "/images/venture-logo.svg",
      bgColor: "bg-[#2F81F7]",
      illustration: "/images/venture-workspace.svg",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-sfpro)" }}>
            Take a look at our <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">design portfolio</span>
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={project.logo || "/placeholder.svg"}
                    alt={`${project.title} logo`}
                    width={120}
                    height={32}
                    className="h-6 md:h-8 w-auto"
                  />
                </div>

                <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
                  {project.tag}
                </span>

                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]" style={{ fontFamily: "var(--font-sfpro)" }}>
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] mb-8 leading-relaxed md:leading-[30px] font-medium">
                  {project.description}
                </p>

                <a
                  href="#"
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                >
                  View case study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[500px]`}>
                <Image
                  src={project.illustration || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Browse all portfolio
          </button>
        </div>
      </div>
    </section>
  )
}
