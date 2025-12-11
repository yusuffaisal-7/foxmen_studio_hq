"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, MessageSquare, LogOut, FolderKanban, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [username, setUsername] = useState("Admin");

    useEffect(() => {
        const storedUser = localStorage.getItem("adminUser");
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                if (user.username) setUsername(user.username);
            } catch (e) {
                console.error("Failed to parse admin user");
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");
        router.push("/admin/login");
    };

    const links = [
        { href: "/admin/projects", label: "Projects", icon: FolderKanban },
        { href: "/admin/blog", label: "Blog", icon: FileText },
        { href: "/admin/messages", label: "Messages", icon: MessageSquare },
    ];

    if (pathname === "/admin/login") return null;

    return (
        <aside className="w-80 min-h-screen bg-white border-r-4 border-black flex flex-col relative z-50">
            {/* Header / Brand */}
            <div className="p-8 border-b-4 border-black">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white font-black text-2xl rotate-3">
                        F
                    </div>
                    <span className="text-2xl font-black uppercase tracking-tighter">FOXMEN STUDIO</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-6 space-y-4">
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname.startsWith(link.href);
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex items-center gap-4 px-6 py-4 rounded-xl transition-all border-4 text-lg font-bold uppercase tracking-wide",
                                isActive
                                    ? "bg-[#FFC224] text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-1"
                                    : "bg-white text-gray-500 border-transparent hover:border-black hover:bg-gray-50 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
                            )}
                        >
                            <Icon size={24} strokeWidth={isActive ? 3 : 2} />
                            {link.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer / Logout */}
            <div className="p-8 border-t-4 border-black bg-[#FFFBF5]">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full border-4 border-black bg-gray-200 overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`} alt="Admin" />
                    </div>
                    <div>
                        <p className="font-bold text-lg leading-tight capitalize">{username}</p>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Administrator</p>
                    </div>
                </div>
                <Button
                    onClick={handleLogout}
                    className="w-full h-14 bg-white text-[#FF4A60] border-4 border-[#FF4A60] hover:bg-[#FF4A60] hover:text-white font-bold text-lg rounded-xl shadow-[4px_4px_0px_0px_rgba(255,74,96,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(255,74,96,0.4)] transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                >
                    <LogOut size={20} />
                    Logout
                </Button>
            </div>
        </aside>
    );
}
