# React To-Do List

A small to-do application built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Add tasks
- Mark tasks as complete
- Mark completed tasks as incomplete
- Delete tasks
- Display task statistics
- Persist tasks in localStorage
- Responsive layout
- Accessible form controls and buttons
- TypeScript type safety

## React concepts demonstrated

- `useState`
- `useEffect`
- Props
- Controlled inputs
- Form event handling
- Array `.map()`
- Array `.filter()`
- Immutable state updates
- Conditional rendering
- Component composition

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Installation

Clone or create the project directory, then install the dependencies:

```bash
npm install
```

## Development

Start the Vite development server:

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Type checking

```bash
npm run typecheck
```

## Production build

```bash
npm run build
```

The optimized production files will be generated in:

```text
dist/
```

## Preview the production build

```bash
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── TodoForm.tsx
│   ├── TodoItem.tsx
│   ├── TodoList.tsx
│   └── TodoStats.tsx
├── types/
│   └── task.ts
├── utils/
│   └── taskStorage.ts
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

## Data model

Each task uses the following shape:

```ts
interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}
```

Tasks are stored in the browser under the localStorage key:

```text
react-todo-list.tasks
```

No backend or database is required.
