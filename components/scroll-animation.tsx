"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ScrollAnimationProps {
    children: ReactNode
    className?: string
    delay?: number
}

export function ScrollAnimation({
    children,
    className = "",
    delay = 0
}: ScrollAnimationProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
                scale: 0.98
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
            }}
            viewport={{
                once: true,
                margin: "-100px"
            }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom bezier for smooth "approaching" feel
                delay: delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
