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
    }),
    {
      name: "todo-storage",
      partialize: (state) => ({ todos: state.todos, filter: state.filter }),
    },
  ),
);
