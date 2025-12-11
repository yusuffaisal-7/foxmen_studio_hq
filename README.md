# Foxmen Studio HQ

A high-performance portfolio and agency website with a custom Admin Dashboard, built for **Foxmen Studio**.

![Project Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-Next.js%20%7C%20Tailwind%20%7C%20Node%20%7C%20Prisma-blue?style=for-the-badge)

## 🚀 Usage Guide

### Prerequisites
- Node.js (v18+)
- PostgreSQL Database (Neon DB recommended)

### 1. Start the Backend
The backend handles authentication, database connections, and file uploads.
```bash
cd backend
npm install
npm run dev
```
*Runs on: `http://localhost:5001`*

### 2. Start the Frontend
The Next.js application for the portfolio and admin panel.
```bash
npm install
npm run dev
```
*Runs on: `http://localhost:3000`*

---

## 📅 dev Log: Latest Updates (Dec 12, 2025)

We have successfully overhauled the **Admin Control Panel** to match the premium "Neo-Brutalist" aesthetic of the main brand.

### ✅ Completed Features
1.  **Admin Panel Redesign**
    *   Applied the **Foxmen Studio** branding (Yellow/Black/Bold) to the entire Admin functionality.
    *   Redesigned Sidebar with dynamic user welcome message.
    *   Redesigned **Messages** page with split-view layout and visual parsers.
    *   Redesigned **Projects** page with heavy border cards and hover effects.

2.  **Image Upload System**
    *   Built a custom file upload pipeline.
    *   **Backend**: `multer` integration to save images to `backend/uploads`.
    *   **Frontend**: Drag-and-drop style input with instant preview.
    *   **Database**: Stores valid image paths in Neon PostgreSQL.

3.  **Authentication & Stability**
    *   **Smart Session Handling**: Auto-redirects to Login if session expires (401).
    *   **Crash Protection**: Distinguishes between "Wrong Password" and "Database Offline".
    *   **UI Feedback**: Friendly error messages when the database connection is paused.
    *   **SSL Fix**: Resolved local connectivity issues with Neon DB using custom SSL config.

4.  **Infrastructure**
    *   Fixed Git repository issues (removed large `node_modules` from history).
    *   Validated full CRUD operations for Projects.

---

## 🗺️ Roadmap: What's Next?

### Phase 1: Frontend Integration (Immediate Focus)
- [ ] **Dynamic Home Page**: Connect the public homepage (`app/page.tsx`) to the live Database.
    - [ ] Fetch and display real Projects.
    - [ ] Fetch and display real Testimonials/Clients.
- [ ] **Dynamic Blog**: Build the public Blog Listing and Post Details pages using real data.

### Phase 2: Admin Expansion
- [ ] **Blog Management**: Create the Admin Blog View (Write/Edit/Delete articles).
- [ ] **Rich Text Editor**: Integrate a Markdown or Rich Text editor for writing blog posts.

### Phase 3: Deployment
- [ ] **Production Build**: Configure build scripts for Vercel (Frontend) and Render/Railway (Backend).
- [ ] **Storage Strategy**: Move from local `uploads/` folder to Cloud Storage (AWS S3 or Cloudinary) for production persistence.

---
**Developed by Foxmen Studio Team**
