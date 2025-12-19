"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutButton() {
    return (
        <Link href="/about" passHref>
            <motion.div
                className="group flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#1F1F1F] px-8 py-4 transition-colors duration-300 w-full sm:w-auto sm:min-w-[200px] cursor-pointer"
                whileHover={{
                    scale: 1.05,
                    backgroundColor: "#5227FF"
                }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="font-medium text-white text-lg">
                    Know about us
                </span>
                <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </motion.div>
        </Link>
    )
}
