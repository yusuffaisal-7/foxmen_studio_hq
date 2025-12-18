"use client"
import { useState } from "react"

import { ArrowRight, Mail, Phone, MapPin, ChevronDown, Check, Video, MessageCircle, Facebook, Linkedin, Instagram, Dribbble, Upload, Youtube } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function ContactHero() {
    return (
        <section className="py-12 md:py-32 bg-[#FFFBF5] text-center px-4 border-b-4 border-black">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-7xl font-bold mb-6">Let's Build Your Digital Existence.</h1>
                <p className="text-lg md:text-3xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
                    Whether it’s a website, web app, mobile app, or an intelligent AI solution — tell us what you want to create.
                </p>
            </div>
        </section>
    )
}

export function ContactOptions() {
    const options = [
        {
            icon: Mail,
            label: "Emails",
            value: ["contact@foxmenstudio.com", "info@foxmenstudio.com"],
            desc: "Best for project inquiries and collaboration.",
            link: "mailto:contact@foxmenstudio.com"
        },
        {
            icon: Phone,
            label: "Phone / WhatsApp",
            value: "+880 1753973892",
            desc: "Fast communication, quick clarifications.",
            link: "https://wa.me/8801753973892"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Dhaka, Bangladesh",
            desc: "Meetings, consultations, and presentations.",
            link: null
        },
    ]
    return (
        <section className="py-12 md:py-20 px-4 bg-white border-b-4 border-black">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
                {options.map((opt, i) => {
                    const content = (
                        <div className="h-full">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <opt.icon className="w-8 h-8 text-gray-700" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{opt.label}</h3>
                            <div className="mb-4">
                                {Array.isArray(opt.value) ? (
                                    opt.value.map((v, idx) => (
                                        <p key={idx} className="text-lg font-bold text-[#FF4A60]">{v}</p>
                                    ))
                                ) : (
                                    <p className="text-lg font-bold text-[#FF4A60]">{opt.value}</p>
                                )}
                            </div>
                            <p className="text-gray-500 font-medium">{opt.desc}</p>
                        </div>
                    );

                    const className = "bg-white border-4 border-black rounded-[24px] p-8 text-center hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow block h-full";

                    if (opt.link) {
                        return (
                            <Link key={i} href={opt.link} target={opt.link.startsWith("http") ? "_blank" : undefined} className={className}>
                                {content}
                            </Link>
                        )
                    }

                    return (
                        <div key={i} className={className}>
                            {content}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export function InquiryForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        message: ""
    })
    const [status, setStatus] = useState("")

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name || e.target.id]: e.target.value })
    }

    const handleSelectChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setStatus("sending")

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://paperfolio-backend.vercel.app/api'}/messages`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: `${formData.projectType || 'Inquiry'} from ${formData.name}`,
                    message: `
                        Name: ${formData.name}
                        Phone: ${formData.phone}
                        Company: ${formData.company}
                        Budget: ${formData.budget}
                        Message: ${formData.message}
                    `
                })
            })
            if (res.ok) {
                setStatus("success")
                setFormData({ name: "", email: "", phone: "", company: "", projectType: "", budget: "", message: "" })
            } else {
                setStatus("error")
            }
        } catch (error) {
            console.error(error)
            setStatus("error")
        }
    }

    return (
        <section className="py-12 md:py-24 px-4 bg-[#F3F4F6] border-b-4 border-black">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white p-5 md:p-16 rounded-[32px] md:rounded-[48px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">Start a Project</h2>
                        <p className="text-lg md:text-xl text-gray-500 font-medium">Tell us about your goals and let's craft something unique.</p>
                    </div>

                    <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-wider text-black pl-1">Full Name</label>
                                <Input id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="h-14 md:h-16 rounded-2xl border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black focus-visible:border-4 transition-all text-lg md:text-xl px-4 md:px-6 bg-gray-50/50" required />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-wider text-black pl-1">Email Address</label>
                                <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="h-14 md:h-16 rounded-2xl border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black focus-visible:border-4 transition-all text-lg md:text-xl px-4 md:px-6 bg-gray-50/50" required />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-wider text-black pl-1">Phone (Optional)</label>
                                <Input id="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="h-14 md:h-16 rounded-2xl border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black focus-visible:border-4 transition-all text-lg md:text-xl px-4 md:px-6 bg-gray-50/50" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-wider text-black pl-1">Company (Optional)</label>
                                <Input id="company" value={formData.company} onChange={handleChange} placeholder="Acme Inc." className="h-14 md:h-16 rounded-2xl border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black focus-visible:border-4 transition-all text-lg md:text-xl px-4 md:px-6 bg-gray-50/50" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-wider text-black pl-1">Project Type</label>
                                <Select onValueChange={(val) => handleSelectChange("projectType", val)}>
                                    <SelectTrigger className="h-14 md:h-16 rounded-2xl border-2 border-gray-200 focus:ring-0 focus:border-black focus:border-4 transition-all text-lg md:text-xl px-4 md:px-6 bg-gray-50/50">
                                        <SelectValue placeholder="Select Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Website">Website</SelectItem>
                                        <SelectItem value="Web App">Web App</SelectItem>
                                        <SelectItem value="Mobile App">Mobile App</SelectItem>
                                        <SelectItem value="AI Solution">AI Solution</SelectItem>
                                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-bold uppercase tracking-wider text-black pl-1">Budget Range</label>
                                <Select onValueChange={(val) => handleSelectChange("budget", val)}>
                                    <SelectTrigger className="h-14 md:h-16 rounded-2xl border-2 border-gray-200 focus:ring-0 focus:border-black focus:border-4 transition-all text-lg md:text-xl px-4 md:px-6 bg-gray-50/50">
                                        <SelectValue placeholder="Select Range" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="$1k - $5k">$1k - $5k</SelectItem>
                                        <SelectItem value="$5k - $10k">$5k - $10k</SelectItem>
                                        <SelectItem value="$10k - $25k">$10k - $25k</SelectItem>
                                        <SelectItem value="$25k+">$25k+</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-bold uppercase tracking-wider text-black pl-1">Project Details</label>
                            <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project goals..." className="min-h-[160px] md:min-h-[200px] rounded-2xl border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black focus-visible:border-4 transition-all text-lg md:text-xl p-4 md:p-6 bg-gray-50/50 resize-y" required />
                        </div>

                        <div className="pt-4 md:pt-8">
                            <Button type="submit" disabled={status === "sending"} className="w-full h-16 md:h-20 text-xl md:text-2xl font-bold rounded-full bg-[#FF4A60] hover:bg-black text-white hover:text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all uppercase tracking-wide">
                                {status === "sending" ? "Sending..." : "Start Your Project"} <ArrowRight className="ml-3 w-6 h-6 md:w-8 md:h-8" />
                            </Button>
                            {status === "success" && <p className="text-green-600 mt-4 text-center text-lg font-bold">Message sent successfully!</p>}
                            {status === "error" && <p className="text-red-600 mt-4 text-center text-lg font-bold">Something went wrong. Please try again.</p>}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export function ContactFAQ() {
    const faqs = [
        { q: "How long does it take to build a website?", a: "Typically 2-6 weeks depending on complexity. We work in agile sprints to ensure rapid delivery throughout the process." },
        { q: "What is the cost of a mobile app?", a: "It varies greatly based on features, but usually starts from $5k for an MVP. We provide transparent pricing after our initial discovery call." },
        { q: "Do you provide ongoing support?", a: "Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, and content updates." },
        { q: "Can you redesign an existing system?", a: "Absolutely. We specialize in modernizing legacy apps, improving UI/UX, and refactoring codebases for better performance." },
        { q: "Do you work with startups?", a: "We love startups! We have special packages designed to help early-stage companies launch quickly and scale effectively." },
    ]
    return (
        <section className="py-12 md:py-24 px-4 bg-white border-b-4 border-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-center">Before You Contact Us</h2>
                <div className="space-y-4">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border-4 border-black rounded-2xl px-4 md:px-6 bg-white data-[state=open]:bg-gray-50 transition-colors">
                                <AccordionTrigger className="hover:no-underline py-4 md:py-6">
                                    <span className="text-lg md:text-2xl font-bold text-left mr-4">{faq.q}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-base md:text-lg text-gray-600 font-medium pb-4 md:pb-6 leading-relaxed">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export function StartProcess() {
    return (
        <section className="py-12 md:py-24 px-4 bg-[#FFFBF5] border-b-4 border-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-3xl font-bold mb-10 md:mb-16 text-center">How It Starts</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center relative">
                    <div className="hidden md:block absolute top-[28px] left-[16%] right-[16%] h-1 bg-gray-200 z-0"></div>
                    {[
                        { title: "Share Your Idea", desc: "Tell us what you want to build." },
                        { title: "We Plan", desc: "We design the approach and timeline." },
                        { title: "We Build", desc: "Your digital existence comes to life." }
                    ].map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                                {i + 1}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-600 font-medium px-8">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function QuickActions() {
    return (
        <section className="py-12 md:py-24 px-4 bg-white border-b-4 border-black">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12">Need Answers Faster?</h2>
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
                    <button className="flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-[#FFC224] text-black border-4 border-black text-lg md:text-xl font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                        <Video className="w-5 h-5 md:w-6 md:h-6" /> Book a Meeting
                    </button>
                    <a href="https://wa.me/8801753973892" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-white text-black border-4 border-black text-lg md:text-xl font-bold shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" /> Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}

export function SocialConnect() {
    const socials = [
        { icon: Facebook, name: "Facebook", color: "hover:bg-[#1877F2] hover:text-white" },
        { icon: Linkedin, name: "LinkedIn", color: "hover:bg-[#0A66C2] hover:text-white" },
        { icon: Instagram, name: "Instagram", color: "hover:bg-[#E1306C] hover:text-white" },
        { icon: Youtube, name: "Youtube", color: "hover:bg-[#FF0000] hover:text-white" },
        { icon: Dribbble, name: "Dribbble", color: "hover:bg-[#EA4C89] hover:text-white" },
    ]
    return (
        <section className="py-12 md:py-24 px-4 bg-[#F3F4F6] border-b-4 border-black">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16">Stay Connected</h2>
                <div className="flex justify-center gap-4 md:gap-10 flex-wrap">
                    {socials.map((soc, i) => (
                        <div key={i} className={`group cursor-pointer bg-white w-20 h-20 md:w-32 md:h-32 rounded-[20px] md:rounded-[24px] border-4 border-black flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all ${soc.color}`}>
                            <soc.icon className="w-8 h-8 md:w-12 md:h-12 transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function LocationMap() {
    return (
        <section className="py-12 md:py-24 px-4 bg-white border-b-4 border-black">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 md:mb-12 text-center">Visit Us</h2>
                <div className="w-full h-[300px] md:h-[400px] bg-gray-200 rounded-[24px] md:rounded-[32px] border-4 border-black overflow-hidden flex items-center justify-center">
                    <p className="text-xl font-bold text-gray-500">Google Map Embed Placeholder</p>
                </div>
            </div>
        </section>
    )
}

export function ContactCTA() {
    return (
        <section className="py-20 md:py-32 px-4 bg-[#FFFBF5] text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build Your Digital Presence?</h2>
                <Link href="#form" className="inline-flex items-center justify-center bg-[#FF4A60] text-white border-4 border-black rounded-full px-8 md:px-12 py-5 md:py-6 text-xl font-bold hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1">
                    Start Your Project <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
            </div>
        </section>
    )
}
