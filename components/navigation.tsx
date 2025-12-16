import Link from "next/link"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"


export function Navigation() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-4 relative z-50">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <Link href="/" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Home
          </Link>
          <Link href="/about" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            About
          </Link>
          <Link href="/projects" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Projects
          </Link>
          <Link href="/blog" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Blogs
          </Link>
          <Link href="/contact" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Contact Us
          </Link>
        </div>

        <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
          <Mail className="w-10 h-10" strokeWidth={2.5} />
        </Button>
      </nav>
    </div>
  )
}
