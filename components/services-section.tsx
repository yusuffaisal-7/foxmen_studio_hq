import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "Website Development",
      description: "Lacus adipiscing lectus convallis purus aliquet cursus magnaol dolori montes augue donec cras.",
      image: "/images/web-design.svg",
      video: "https://res.cloudinary.com/duh7c5x99/video/upload/v1765989198/ef3c79c3a83dd64ca8a9ee6aa8cc5bab_gk2t5n.mov"
    },
    {
      title: "UI/UX design",
      description: "Arcu venenatis sit nullam pellentesq varius urna non sed aliquam colemir imperdiet amet imperdiet.",
      image: "/images/ui-ux-design.svg",
      video: "https://res.cloudinary.com/duh7c5x99/video/upload/v1765984569/Cinematic_screen_recording_1080p_20251217202_uwdlly.mov"
    },
    {
      title: "Mobile app development",
      description: "Arcu venenatis sit nullam pellentesq varius urna non sed aliquam colemir imperdiet amet imperdiet.",
      image: "/images/product-design.svg",
      video: "https://res.cloudinary.com/duh7c5x99/video/upload/v1765987892/A_darkthemed_code_1080p_202512172206_s6n6n1.mov"
    },
    {
      title: "User research",
      description: "Lacus adipiscing lectus convallis purus aliquet cursus magnaol dolori montes augue donec cras.",
      image: "/images/user-research.svg",
    },
    {
      title: "Motion graphics",
      description: "Lacus adipiscing lectus convallis purus aliquet cursus magnaol dolori montes augue donec cras.",
      image: "/images/motion-graphics.svg",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              Our broad <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">set of services</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices
              nulla sed doler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}

            <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-6 md:p-8 flex flex-col items-center justify-center text-center hover:translate-y-[-4px] transition-transform aspect-square relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="mb-4">
                <Image
                  src="/images/get-in-touch.svg"
                  alt="Get in touch"
                  width={64}
                  height={64}
                  className="w-[64px] h-[64px]"
                />
              </div>
              <h3 className="text-[28px] leading-[40px] font-bold mb-4 text-[#0B0B0B]">Get in touch</h3>
              <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-6">
                Looking for another service? Get in touch with us!
              </p>
              <Button className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-4 font-medium text-[18px] w-full max-w-[340px] h-[52px]">
                <Mail className="w-5 h-5 mr-2" />
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: any }) {
  return (
    <div className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 aspect-square flex flex-col group">
      <div className="flex-1 -mx-[3px] -mt-[3px] overflow-hidden rounded-t-[29px] relative bg-[#F3F4F6]">
        {service.video ? (
          <video
            ref={(el) => {
              if (el) {
                el.muted = true
                el.play().catch((e) => console.log("Autoplay blocked:", e))
              }
            }}
            src={service.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out object-contain block"
          />
        ) : (
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-contain rounded-t-[29px] group-hover:scale-110 transition-transform duration-500 ease-out"
          />
        )}
      </div>
      <div className="p-5 flex flex-col">
        <h3 className="text-2xl font-bold mb-2 text-[#0B0B0B]">{service.title}</h3>
        <p className="text-sm leading-relaxed font-medium text-[#393939]">{service.description}</p>
      </div>
    </div>
  )
}
