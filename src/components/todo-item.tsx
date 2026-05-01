import { Trash2, GripVertical } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useTodoStore } from "@/stores/todo-store";
import { useSortable } from "@dnd-kit/sortable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Todo } from "@/types/todo";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

interface Props {
  todo: Todo;
}

export function TodoItem({ todo }: Props) {
  const toggleTodo = useTodoStore((s) => s.toggleTodo);
  const deleteTodo = useTodoStore((s) => s.deleteTodo);
  const editTodo = useTodoStore((s) => s.editTodo);

  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.title);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleEdit = () => {
    if (value.trim()) {
      editTodo(todo.id, value);
    }
    setIsEditing(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-between p-3 border rounded-xl bg-white dark:bg-gray-800"
    >
      <div className="flex items-center gap-2 w-full">
        <span
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing text-gray-400"
          aria-label="Drag handle"
        >
          <GripVertical size={18} />
        </span>

        <Checkbox
          className="cursor-pointer"
          checked={todo.completed}
          onCheckedChange={() => toggleTodo(todo.id)}
        />

        {isEditing ? (
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={(e) => e.key === "Enter" && handleEdit()}
            autoFocus
          />
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.title}
          </span>
        )}
      </div>

      <Button
        className="cursor-pointer"
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
