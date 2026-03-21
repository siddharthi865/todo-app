import { Checkbox } from "@/components/ui/checkbox";
import { useTodoStore } from "@/stores/todo-store";
import { Button } from "@/components/ui/button";
import type { Todo } from "@/types/todo";
import { Trash2 } from "lucide-react";

interface Props {
  todo: Todo;
}

export function TodoItem({ todo }: Props) {
  const { toggleTodo, deleteTodo } = useTodoStore();

  return (
    <div className="flex items-center justify-between p-3 border rounded-xl">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => toggleTodo(todo.id)}
          aria-label="Mark task complete"
        />
        <span
          className={`${todo.completed ? "line-through text-gray-400" : ""}`}
        >
          {todo.title}
        </span>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete task"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
}
