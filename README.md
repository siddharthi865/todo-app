# 📝 Todo App (Modern React + TypeScript)

A sleek, production-ready Todo List application built with **modern React architecture**, featuring drag & drop, inline editing, and persistent state.

---

## ✨ Features

### ✅ Core Functionality

- ➕ Add new tasks with validation
- ❌ Delete tasks instantly
- ✔️ Mark tasks as complete/incomplete
- ✏️ Inline editing

### 🎯 Advanced Features

- 🧲 Drag & drop reordering (smooth UX)
- 🔍 Filter tasks:
  - All
  - Active
  - Completed

- 💾 LocalStorage persistence (auto-save)
- 🌙 Dark / Light mode toggle

---

## 🧱 Tech Stack

- ⚡ **Vite** – Lightning-fast build tool
- ⚛️ **React (Latest)** – Modern hooks & patterns
- 🔷 **TypeScript (Strict Mode)**
- 🎨 **Tailwind CSS v4** – Utility-first styling
- 🧩 **shadcn/ui** – Accessible UI components
- 🐻 **Zustand** – Lightweight state management
- 📝 **React Hook Form + Zod** – Form validation
- 🧲 **@dnd-kit** – Drag & drop system
- 🎯 **Lucide React** – Icon library

---

## 📁 Project Structure

```
src/
├── app.tsx
├── routes/
├── components/
│   ├── ui/
│   ├── todo-form.tsx
│   ├── todo-item.tsx
│   ├── todo-list.tsx
│   ├── todo-filters.tsx
│   └── theme-toggle.tsx
├── stores/
│   ├── todo-store.ts
│   └── theme-store.ts
├── types/
├── lib/
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Open in browser

```
http://localhost:5173
```

---

## 🏗 Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 🧠 Key Concepts Used

- **Zustand Persist Middleware** → Seamless LocalStorage sync
- **Derived State Filtering** → Clean and scalable logic
- **Drag Handle Pattern** → Prevents UI conflicts
- **Component Isolation** → Better performance & maintainability
