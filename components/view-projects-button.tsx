"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function ViewProjectsButton() {
    return (
        <Link href="/projects">
            <motion.button
                className="group relative flex items-center gap-3 overflow-hidden border-[3px] border-black bg-white px-8 py-4 text-lg font-bold uppercase tracking-wider text-black transition-colors"
                whileHover={{
                    x: -4,
                    y: -4,
                    boxShadow: "8px 8px 0px 0px #000000",
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                }}
            >
                View Projects
                <ArrowRight className="h-6 w-6 transition-colors duration-300 group-hover:text-red-500" />
            </motion.button>
        </Link>
    )
}
