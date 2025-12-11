"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Edit, Upload, X, Link as LinkIcon, Github, Image as ImageIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog";

type Project = {
    _id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    github: string;
};

export default function ProjectsAdmin() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState<Partial<Project>>({});
    const [isEditing, setIsEditing] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [tagInput, setTagInput] = useState("");

    const router = useRouter();

    const fetchProjects = async () => {
        try {
            const res = await fetch("http://localhost:5001/api/projects");
            const data = await res.json();
            if (Array.isArray(data)) {
                setProjects(data);
            } else {
                console.error("Failed to load projects:", data);
                setProjects([]);
            }
        } catch (error) {
            console.error("Failed to fetch projects", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("image", file);

        try {
            const res = await fetch("http://localhost:5001/api/upload", {
                method: "POST",
                body: formData
            });
            const data = await res.json();
            if (res.ok) {
                // Ensure we use the full URL if needed, but relative path works if proxy/static setup correctly
                // Typically we want the backend to return full URL or we prepend it.
                // For now, let's prepend localhost if it starts with /uploads
                const imageUrl = `http://localhost:5001${data.filePath}`;
                setCurrentProject(prev => ({ ...prev, image: imageUrl }));
            }
        } catch (error) {
            console.error("Upload failed", error);
        } finally {
            setUploading(false);
        }
    };

    const handleAddTag = () => {
        if (!tagInput.trim()) return;
        const currentTags = Array.isArray(currentProject.tags) ? currentProject.tags : [];
        if (!currentTags.includes(tagInput.trim())) {
            setCurrentProject({ ...currentProject, tags: [...currentTags, tagInput.trim()] });
        }
        setTagInput("");
    };

    const removeTag = (tagToRemove: string) => {
        const currentTags = Array.isArray(currentProject.tags) ? currentProject.tags : [];
        setCurrentProject({ ...currentProject, tags: currentTags.filter(t => t !== tagToRemove) });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem("adminToken");

        // Ensure tags is array
        const tags = Array.isArray(currentProject.tags) ? currentProject.tags : [];

        const payload = { ...currentProject, tags };

        try {
            const url = isEditing
                ? `http://localhost:5001/api/projects/${currentProject._id}`
                : "http://localhost:5001/api/projects";

            const method = isEditing ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            if (res.status === 401) {
                alert("Session expired. Please login again.");
                localStorage.removeItem("adminToken");
                router.push("/admin/login");
                return;
            }

            const data = await res.json();

            if (res.ok) {
                setIsDialogOpen(false);
                setCurrentProject({});
                setIsEditing(false);
                fetchProjects();
            } else {
                alert(`Failed to save project: ${data.message}`);
            }
        } catch (error) {
            console.error("Failed to save project", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure?")) return;
        const token = localStorage.getItem("adminToken");
        try {
            await fetch(`http://localhost:5001/api/projects/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchProjects();
        } catch (error) {
            console.error("Failed to delete project", error);
        }
    };

    const openEdit = (project: Project) => {
        setCurrentProject(project);
        setIsEditing(true);
        setIsDialogOpen(true);
    };

    return (
        <div className="space-y-8 min-h-screen">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-5xl font-black uppercase tracking-tight mb-2">Projects</h1>
                    <p className="text-gray-500 font-bold text-lg">Manage your creative portfolio.</p>
                </div>
                <Button
                    onClick={() => { setCurrentProject({}); setIsEditing(false); setIsDialogOpen(true); }}
                    className="bg-[#FF4A60] text-white border-4 border-black hover:bg-black font-bold text-xl px-8 py-6 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                >
                    <Plus className="mr-2 h-6 w-6" /> Add Project
                </Button>
            </div>

            {loading ? (
                <div className="text-xl font-bold text-gray-400">Loading projects...</div>
            ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div key={project._id} className="bg-white border-4 border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all group flex flex-col">
                            {/* Image Area */}
                            <div className="relative h-48 bg-gray-100 border-b-4 border-black overflow-hidden">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-300">
                                        <ImageIcon className="w-12 h-12" />
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => openEdit(project)} className="p-2 bg-white border-2 border-black rounded-lg hover:bg-[#FFC224] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => handleDelete(project._id)} className="p-2 bg-white border-2 border-black rounded-lg hover:bg-[#FF4A60] hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-black mb-2 leading-tight">{project.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags?.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 rounded border border-black">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-600 font-medium line-clamp-2 mb-6 flex-1 text-sm">{project.description}</p>

                                <div className="flex items-center gap-4 mt-auto pt-4 border-t-2 border-dashed border-gray-100">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-[#FF4A60]">
                                            <LinkIcon className="w-4 h-4" /> Live Site
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-[#FF4A60]">
                                            <Github className="w-4 h-4" /> Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[700px] bg-white border-4 border-black rounded-[32px] shadow-[16px_16px_0px_0px_rgba(0,0,0,0.2)] p-0 overflow-hidden">
                    <DialogHeader className="p-8 pb-0">
                        <DialogTitle className="text-3xl font-black uppercase tracking-tight">
                            {isEditing ? "Edit Project" : "New Project"}
                        </DialogTitle>
                    </DialogHeader>

                    <div className="p-8 max-h-[70vh] overflow-y-auto space-y-6">
                        {/* Image Uploader */}
                        <div className="space-y-4">
                            <Label className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Cover</Label>
                            <div className="border-4 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:bg-gray-50 hover:border-black transition-all group relative cursor-pointer">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                {currentProject.image ? (
                                    <div className="relative h-48 rounded-lg overflow-hidden border-2 border-black">
                                        <img src={currentProject.image} alt="Preview" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <p className="text-white font-bold">Click to change</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="py-8">
                                        {uploading ? (
                                            <div className="animate-pulse font-bold text-gray-400">Uploading...</div>
                                        ) : (
                                            <>
                                                <Upload className="w-12 h-12 mx-auto text-gray-300 group-hover:text-black mb-4 transition-colors" />
                                                <p className="font-bold text-gray-500 group-hover:text-black">Drop image here or click to upload</p>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-xs font-bold uppercase tracking-widest text-gray-500">Title</Label>
                                <Input
                                    value={currentProject.title || ""}
                                    onChange={(e) => {
                                        const title = e.target.value;
                                        const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
                                        setCurrentProject({ ...currentProject, title, slug: currentProject.slug ? currentProject.slug : slug });
                                    }}
                                    className="h-12 border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black rounded-xl font-bold"
                                    placeholder="e.g. Neo-Brutalism UI Kit"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs font-bold uppercase tracking-widest text-gray-500">Slug</Label>
                                <Input
                                    value={currentProject.slug || ""}
                                    onChange={(e) => setCurrentProject({ ...currentProject, slug: e.target.value })}
                                    className="h-12 border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black rounded-xl font-mono text-sm"
                                    placeholder="e.g. neo-brutalism-ui"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-xs font-bold uppercase tracking-widest text-gray-500">Description</Label>
                            <Textarea
                                value={currentProject.description || ""}
                                onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                                className="min-h-[100px] border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black rounded-xl resize-none font-medium text-gray-600"
                                placeholder="What's this project about?"
                            />
                        </div>

                        {/* Tags & Suggestions */}
                        <div className="space-y-3">
                            <Label className="text-xs font-bold uppercase tracking-widest text-gray-500">Tags</Label>
                            <div className="flex gap-2">
                                <Input
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                                    className="h-12 border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black rounded-xl"
                                    placeholder="Type tag & press Enter"
                                />
                                <Button type="button" onClick={handleAddTag} className="h-12 w-12 rounded-xl border-2 border-black bg-[#FFC224] text-black hover:bg-black hover:text-[#FFC224]">
                                    <Plus className="w-6 h-6" />
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-2 min-h-[32px]">
                                {currentProject.tags?.map((tag, i) => (
                                    <span key={i} className="flex items-center gap-1 pl-3 pr-1 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-lg">
                                        {tag}
                                        <button onClick={() => removeTag(tag)} className="p-1 hover:text-red-400"><X className="w-3 h-3" /></button>
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-xs font-bold text-gray-400 uppercase">Suggestions:</span>
                                {["Next.js", "React", "Tailwind", "Node.js", "Design", "Figma", "Full Stack"].map(t => (
                                    <button
                                        key={t}
                                        type="button"
                                        onClick={() => setCurrentProject({ ...currentProject, tags: [...(currentProject.tags || []), t] })}
                                        className="text-xs font-bold text-gray-500 hover:text-black underline decoration-dashed"
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-xs font-bold uppercase tracking-widest text-gray-500">Live Link</Label>
                                <Input
                                    value={currentProject.link || ""}
                                    onChange={(e) => setCurrentProject({ ...currentProject, link: e.target.value })}
                                    className="h-12 border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black rounded-xl"
                                    placeholder="https://..."
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs font-bold uppercase tracking-widest text-gray-500">GitHub</Label>
                                <Input
                                    value={currentProject.github || ""}
                                    onChange={(e) => setCurrentProject({ ...currentProject, github: e.target.value })}
                                    className="h-12 border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-black rounded-xl"
                                    placeholder="https://github.com/..."
                                />
                            </div>
                        </div>

                    </div>

                    <div className="p-8 border-t-2 border-gray-100 bg-gray-50 flex justify-end gap-3">
                        <Button variant="ghost" onClick={() => setIsDialogOpen(false)} className="h-12 px-6 font-bold text-gray-500 hover:text-black hover:bg-transparent">
                            Cancel
                        </Button>
                        <Button onClick={handleSubmit} className="h-12 px-8 bg-black text-white rounded-xl font-bold uppercase tracking-wider hover:bg-[#FF4A60] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                            {isEditing ? "Update Project" : "Create Project"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
