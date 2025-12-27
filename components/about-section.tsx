"use client"

import { AboutButton } from "./about-button"
import Image from "next/image"
import { motion } from "framer-motion"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  }

  return (
    <motion.section
      className="container mx-auto px-4 py-16 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          className="flex justify-center"
          variants={imageVariants}
        >
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src="/images/about-me.svg" alt="About Foxmen Studio" fill className="object-cover" />
          </div>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-owners-medium)" }}
              variants={itemVariants}
            >
              Who's behind all this <span className="bg-[#6E35FF] text-white px-3 py-1 inline-block">great work?</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-inter-regular)" }}
              variants={itemVariants}
            >
              Foxmen Studio is a premier Creative Company specializing in building high-performance digital products. We combine strategic insight with world-class engineering to launch brands that dominate their markets.
            </motion.p>
          </div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.div
              className="flex gap-4 items-start"
              variants={itemVariants}
            >
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2" style={{ fontFamily: "var(--font-owners-medium)" }}>5+ Years of Industry Experience</h3>
                <p className="text-gray-600 text-sm md:text-base" style={{ fontFamily: "var(--font-inter-regular)" }}>
                  Proven expertise in crafting award-winning web and mobile experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4 items-start"
              variants={itemVariants}
            >
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2" style={{ fontFamily: "var(--font-owners-medium)" }}>200+ Complex Projects Delivered</h3>
                <p className="text-gray-600 text-sm md:text-base" style={{ fontFamily: "var(--font-inter-regular)" }}>
                  Successfully executed high-end solutions for startups and global enterprises.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AboutButton />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
