"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroBookingButton() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.button
            className="group relative flex items-center justify-between overflow-hidden rounded-full bg-[#1F1F1F] p-[4px] sm:p-[6px] transition-all w-auto cursor-pointer min-w-[240px] sm:min-w-[300px] h-[50px] sm:h-[72px]"
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
                    "flex-1 text-center font-medium text-white text-[16px] sm:text-2xl px-2 sm:px-8",
                    isHovered ? "text-right" : "text-center"
                )}
            >
                Book a Meeting
            </motion.span>
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={cn(
                    "flex h-[42px] w-[42px] sm:h-[60px] sm:w-[60px] items-center justify-center rounded-full transition-colors duration-300 flex-shrink-0",
                    isHovered
                        ? "order-first border border-white bg-transparent text-white"
                        : "order-last bg-white text-black"
                )}
            >
                <ArrowRight className="h-6 w-6 md:h-8 md:w-8" />
            </motion.div>
        </motion.button>
    )
}
