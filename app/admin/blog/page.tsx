"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Edit, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

type Post = {
    _id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    coverImage: string;
    tags: string[];
    date: string;
};

export default function BlogAdmin() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentPost, setCurrentPost] = useState<Partial<Post>>({});
    const [isEditing, setIsEditing] = useState(false);

    const fetchPosts = async () => {
        try {
            const res = await fetch("http://localhost:5001/api/posts");
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.error("Failed to fetch posts", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem("adminToken");

        const tags = typeof currentPost.tags === 'string'
            ? (currentPost.tags as string).split(',').map((t: string) => t.trim())
            : currentPost.tags;

        const payload = { ...currentPost, tags };

        try {
            const url = isEditing
                ? `http://localhost:5001/api/posts/${currentPost._id}`
                : "http://localhost:5001/api/posts";

            const method = isEditing ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setIsDialogOpen(false);
                setCurrentPost({});
                setIsEditing(false);
                fetchPosts();
            }
        } catch (error) {
            console.error("Failed to save post", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure?")) return;
        const token = localStorage.getItem("adminToken");
        try {
            await fetch(`http://localhost:5001/api/posts/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchPosts();
        } catch (error) {
            console.error("Failed to delete post", error);
        }
    };

    const openEdit = (post: Post) => {
        setCurrentPost({
            ...post,
            tags: post.tags
        });
        setIsEditing(true);
        setIsDialogOpen(true);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight">Blog Posts</h2>
                <Button onClick={() => { setCurrentPost({}); setIsEditing(false); setIsDialogOpen(true); }}>
                    <Plus className="mr-2 h-4 w-4" /> Add Post
                </Button>
            </div>

            {loading ? (
                <p>Loading posts...</p>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Card key={post._id}>
                            <CardHeader>
                                <CardTitle className="line-clamp-1">{post.title}</CardTitle>
                                <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <FileText className="mr-2 h-4 w-4" />
                                    {new Date(post.date).toLocaleDateString()}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-end gap-2">
                                <Button variant="outline" size="sm" onClick={() => openEdit(post)}>
                                    <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="destructive" size="sm" onClick={() => handleDelete(post._id)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[800px] overflow-y-auto max-h-[90vh]">
                    <DialogHeader>
                        <DialogTitle>{isEditing ? "Edit Post" : "Add Post"}</DialogTitle>
                        <DialogDescription>
                            Create or edit a blog post.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    value={currentPost.title || ""}
                                    onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="slug">Slug</Label>
                                <Input
                                    id="slug"
                                    value={currentPost.slug || ""}
                                    onChange={(e) => setCurrentPost({ ...currentPost, slug: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="excerpt">Excerpt</Label>
                            <Input
                                id="excerpt"
                                value={currentPost.excerpt || ""}
                                onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="coverImage">Cover Image URL</Label>
                            <Input
                                id="coverImage"
                                value={currentPost.coverImage || ""}
                                onChange={(e) => setCurrentPost({ ...currentPost, coverImage: e.target.value })}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="content">Content (Markdown supported)</Label>
                            <Textarea
                                id="content"
                                className="min-h-[200px]"
                                value={currentPost.content || ""}
                                onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                                required
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="tags">Tags (comma separated)</Label>
                            <Input
                                id="tags"
                                value={Array.isArray(currentPost.tags) ? currentPost.tags.join(', ') : currentPost.tags || ""}
                                onChange={(e) => setCurrentPost({ ...currentPost, tags: e.target.value.split(',') })}
                            />
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
