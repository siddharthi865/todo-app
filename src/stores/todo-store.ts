import { persist } from "zustand/middleware";
import { create } from "zustand";

import type { Todo } from "../types/todo";

export type Filter = "all" | "active" | "completed";

interface TodoState {
  todos: Todo[];
  filter: Filter;
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  setFilter: (filter: Filter) => void;
  reorderTodos: (activeId: string, overId: string) => void;
  editTodo: (id: string, title: string) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      filter: "all",

      addTodo: (title) =>
        set((state) => ({
          todos: [
            {
              id: crypto.randomUUID(),
              title,
              completed: false,
              createdAt: Date.now(),
            },
            ...state.todos,
          ],
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        })),

      setFilter: (filter) => set({ filter }),

      reorderTodos: (activeId, overId) =>
        set((state) => {
          const oldIndex = state.todos.findIndex((t) => t.id === activeId);
          const newIndex = state.todos.findIndex((t) => t.id === overId);

          const updated = [...state.todos];
          const [moved] = updated.splice(oldIndex, 1);
          updated.splice(newIndex, 0, moved);

          return { todos: updated };
        }),

      editTodo: (id, title) =>
        set((state) => ({
          todos: state.todos.map((t) => (t.id === id ? { ...t, title } : t)),
        })),
    }),
    {
      name: "todo-storage",
      partialize: (state) => ({ todos: state.todos, filter: state.filter }),
    },
  ),
);
