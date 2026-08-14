import { useState, type FormEvent } from "react";

interface TodoFormProps {
  onAddTask: (title: string) => void;
}

const MAX_TASK_LENGTH = 120;

function TodoForm({ onAddTask }: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedTitle = title.trim();

    if (!normalizedTitle) {
      setError("Enter a task before adding it.");
      return;
    }

    if (normalizedTitle.length > MAX_TASK_LENGTH) {
      setError(`Tasks cannot exceed ${MAX_TASK_LENGTH} characters.`);
      return;
    }

    onAddTask(normalizedTitle);
    setTitle("");
    setError("");
  };

  const handleChange = (value: string) => {
    setTitle(value);

    if (error) {
      setError("");
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit} noValidate>
      <label className="sr-only" htmlFor="task-title">
        New task
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="task-title"
          name="task-title"
          type="text"
          value={title}
          onChange={(event) => handleChange(event.target.value)}
          placeholder="What needs to be done?"
          maxLength={MAX_TASK_LENGTH}
          autoComplete="off"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "task-error" : "task-hint"}
          className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        />

        <button
          type="submit"
          className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-800"
        >
          Add task
        </button>
      </div>

      <div className="flex min-h-5 items-center justify-between gap-4 px-1 text-xs">
        {error ? (
          <p id="task-error" role="alert" className="font-medium text-red-600">
            {error}
          </p>
        ) : (
          <p id="task-hint" className="text-slate-500">
            Add something you want to get done.
          </p>
        )}

        <span className="shrink-0 text-slate-400">
          {title.length}/{MAX_TASK_LENGTH}
        </span>
      </div>
    </form>
  );
}

export default TodoForm;
