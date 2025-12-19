"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroBookingButton() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.button
            className="group relative flex items-center justify-between overflow-hidden rounded-full bg-[#1F1F1F] p-[6px] transition-all w-full sm:w-auto sm:min-w-[260px] h-[52px] sm:h-[60px]"
            data-cal-link="yousuf-faysal/discussion-call"
            data-cal-namespace="discussion-call"
            data-cal-config='{"layout":"month_view"}'
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.span
                layout
                className={cn(
                    "flex-1 text-center font-medium text-white text-base md:text-lg px-6",
                    isHovered ? "text-right" : "text-left" // Optional: alignment shift
                )}
            >
                Book a Meeting
            </motion.span>
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={cn(
                    "flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full transition-colors duration-300",
                    isHovered
                        ? "order-first border border-white bg-transparent text-white"
                        : "order-last bg-white text-black"
                )}
            >
                <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
            </motion.div>
        </motion.button>
    )
}
