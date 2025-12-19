"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ContactButtonProps {
    className?: string
}

export function ContactButton({ className }: ContactButtonProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Link href="/contact">
            <motion.button
                className={cn(
                    "group relative flex items-center justify-between overflow-hidden rounded-full bg-[#1F1F1F] p-[4px] transition-all w-auto cursor-pointer min-w-[160px] sm:min-w-[180px] h-[50px]",
                    className
                )}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <motion.span
                    layout
                    className={cn(
                        "flex-1 text-center font-medium text-white text-base sm:text-lg px-4",
                        isHovered ? "text-right" : "text-center"
                    )}
                >
                    Contact Us
                </motion.span>
                <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className={cn(
                        "flex h-[42px] w-[42px] items-center justify-center rounded-full transition-colors duration-300 flex-shrink-0",
                        isHovered
                            ? "order-first border border-white bg-transparent text-white"
                            : "order-last bg-white text-black"
                    )}
                >
                    <Phone className="h-5 w-5" />
                </motion.div>
            </motion.button>
        </Link>
    )
}
