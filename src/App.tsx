import { useEffect, useState } from "react";

import { loadTasks, saveTasks } from "./utils/taskStorage";
import TodoStats from "./components/TodoStats";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import type { Task } from "./types/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
  };

  const toggleTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-2xl">
        <header className="mb-8 text-center">
          <div className="mb-3 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-700 uppercase">
            Daily tasks
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            To-Do List
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
            Keep track of what needs doing and check things off as you go.
          </p>
        </header>

        <section
          aria-label="To-do manager"
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-8"
        >
          <TodoForm onAddTask={addTask} />

          <div className="my-6 border-t border-slate-100" />

          <TodoStats total={tasks.length} completed={completedCount} />

          <div className="mt-6">
            <TodoList
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          </div>
        </section>

        <footer className="mt-6 text-center text-xs text-slate-400">
          Your tasks are stored locally in this browser.
        </footer>
      </div>
    </main>
  );
}

export default App;
