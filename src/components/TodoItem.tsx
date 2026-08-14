import type { Task } from "../types/task";

interface TodoItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TodoItem({ task, onToggle, onDelete }: TodoItemProps) {
  return (
    <li
      className={`flex items-center gap-3 rounded-xl border p-4 transition ${
        task.completed
          ? "border-slate-200 bg-slate-50"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Mark "${task.title}" as ${
          task.completed ? "incomplete" : "complete"
        }`}
        className="size-5 shrink-0 cursor-pointer accent-indigo-600"
      />

      <span
        className={`min-w-0 flex-1 break-words text-sm leading-6 sm:text-base ${
          task.completed ? "text-slate-400 line-through" : "text-slate-700"
        }`}
      >
        {task.title}
      </span>

      <button
        type="button"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete "${task.title}"`}
        title="Delete task"
        className="shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9 14.4 18m-4.8 0L9.26 9m9.97-3.21c.34.05.68.1 1.02.16m-1.02-.16L18.16 19.67A2.25 2.25 0 0 1 15.92 21H8.08a2.25 2.25 0 0 1-2.24-2.08L4.77 5.79m14.46 0a48.1 48.1 0 0 0-3.48-.4m-10.98.4c.34-.06.68-.11 1.02-.16m0 0a48.13 48.13 0 0 1 3.48-.4m6.48.16V4.48c0-1.18-.91-2.16-2.09-2.2a52.23 52.23 0 0 0-3.32 0c-1.18.04-2.09 1.02-2.09 2.2v.75m7.5.16a48.67 48.67 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </li>
  );
}

export default TodoItem;
