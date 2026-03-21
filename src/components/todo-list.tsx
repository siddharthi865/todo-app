import { useTodoStore } from "@/stores/todo-store";

import { TodoItem } from "./todo-item";

export function TodoList() {
  const todos = useTodoStore((s) => s.todos);

  if (!todos.length) {
    return <p className="text-center text-gray-500 mt-4">No tasks yet</p>;
  }

  return (
    <div className="space-y-2 mt-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
