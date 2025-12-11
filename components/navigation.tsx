import Link from "next/link"
import { Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
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
            Portfolio
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity outline-none">
              Pages
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-white border-2 border-black rounded-xl p-2 w-48 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <DropdownMenuItem asChild>
                <Link href="/about" className="text-lg font-bold w-full cursor-pointer hover:bg-black hover:text-white rounded-lg px-3 py-2 transition-colors">
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/projects" className="text-lg font-bold w-full cursor-pointer hover:bg-black hover:text-white rounded-lg px-3 py-2 transition-colors">
                  Projects
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact" className="text-lg font-bold w-full cursor-pointer hover:bg-black hover:text-white rounded-lg px-3 py-2 transition-colors">
                  Contact Us
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/blog" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Insights
          </Link>
        </div>

        <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
          <Mail className="w-10 h-10" strokeWidth={2.5} />
        </Button>
      </nav>
    </div>
  )
}
