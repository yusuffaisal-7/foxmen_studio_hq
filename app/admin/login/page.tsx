"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("https://paperfolio-backend.vercel.app/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("adminToken", data.token);
                localStorage.setItem("adminUser", JSON.stringify(data.admin));
                router.push("/admin/projects");
            } else {
                if (data.message && data.message.includes("Can't reach database")) {
                    setError("Database is offline (Neon DB paused). Please check your console.");
                } else if (data.message && data.message.includes("Server error")) {
                    setError(data.message); // The middleware now returns clean "Server error: ..." messages
                } else {
                    setError(data.message || "Login failed");
                }
            }
        } catch (err) {
            setError("Something went wrong. Is backend running?");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#FFC224] font-sans">
            <div className="w-full max-w-md bg-white p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-black uppercase tracking-tight mb-2">Admin Portal</h1>
                    <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Foxmen Studio</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="username" className="font-bold uppercase text-xs tracking-wide">Username</Label>
                        <Input
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border-2 border-black rounded-xl h-12 text-lg font-bold focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                            placeholder="Enter username"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" className="font-bold uppercase text-xs tracking-wide">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-2 border-black rounded-xl h-12 text-lg font-bold focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && (
                        <div className="bg-red-100 border-2 border-red-500 text-red-600 p-3 rounded-xl text-sm font-bold flex items-center justify-center">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        className="w-full h-14 bg-black text-white text-lg font-black uppercase tracking-wide rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:bg-[#FF4A60] transition-all"
                    >
                        Access Dashboard
                    </Button>
                </form>
            </div>
        </div>
    );
}
