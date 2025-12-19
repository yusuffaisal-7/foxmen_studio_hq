"use client"

import { MotionConfig, motion } from "framer-motion"

interface AnimatedHamburgerProps {
    active: boolean
    onClick?: () => void
}

export const AnimatedHamburgerButton = ({ active, onClick }: AnimatedHamburgerProps) => {
    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <motion.button
                initial={false}
                animate={active ? "open" : "closed"}
                onClick={onClick}
                className="relative h-12 w-12 rounded-full bg-transparent transition-colors hover:bg-black/5"
            >
                <motion.span
                    variants={VARIANTS.top}
                    className="absolute h-[3px] w-8 bg-black"
                    style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                />
                <motion.span
                    variants={VARIANTS.middle}
                    className="absolute h-[3px] w-8 bg-black"
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                    variants={VARIANTS.bottom}
                    className="absolute h-[3px] w-4 bg-black"
                    style={{
                        x: "-50%",
                        y: "50%",
                        bottom: "35%",
                        left: "calc(50% + 8px)", // Adjusted for shorter bottom line visual balance
                    }}
                />
            </motion.button>
        </MotionConfig>
    )
}

const VARIANTS = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
            width: "32px" // Expanding to full width on open
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "calc(50% + 8px)", // Reset position
            width: "16px" // Reset width
        },
    },
}
