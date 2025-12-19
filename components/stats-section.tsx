"use client"

import { motion } from "framer-motion"

const stats = [
    {
        number: "200+",
        label: "Completed Projects",
    },
    {
        number: "120+",
        label: "Assisted Projects",
    },
    {
        number: "300+",
        label: "Served Brands",
    },
]

export function StatsSection() {
    return (
        <section className="container mx-auto px-4 py-16 md:py-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center text-center p-8 md:p-12"
                        >
                            <h3
                                className="text-6xl md:text-8xl font-bold text-black mb-4 tracking-tight"
                                style={{ fontFamily: "var(--font-sfpro-bold)" }}
                            >
                                {stat.number}
                            </h3>
                            <p
                                className="text-lg md:text-xl font-medium text-gray-500 uppercase tracking-widest"
                                style={{ fontFamily: "var(--font-sfpro-regular)" }}
                            >
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
