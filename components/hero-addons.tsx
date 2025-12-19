"use client"

import { useState, useEffect } from "react"

export function UserCoordinates() {
    return (
        <div className="fixed top-6 left-6 z-[100] hidden md:block font-mono text-xs md:text-sm font-thin tracking-widest text-black uppercase">
            <span>
                LAT: 23.8103 / LON: 90.4125
            </span>
        </div>
    )
}

export function LocalTime() {
    const [time, setTime] = useState<string>("")

    useEffect(() => {
        // Initial set
        const updateTime = () => {
            setTime(new Date().toLocaleTimeString("en-US", {
                hour12: true,
                timeZone: "Asia/Dhaka"
            }))
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="fixed top-6 right-6 z-[100] hidden md:block font-mono text-xs md:text-sm font-thin tracking-widest text-black uppercase">
            {time ? `TIME : ${time}` : "TIME : 00:00:00 PM"}
        </div>
    )
}
