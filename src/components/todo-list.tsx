import { useTodoStore } from "@/stores/todo-store";

import { TodoItem } from "./todo-item";

export function TodoList() {
  const todos = useTodoStore((s) => s.todos);
  const filter = useTodoStore((s) => s.filter);

  const filteredTodos = todos?.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  if (!filteredTodos?.length) {
    return <p className="text-center text-gray-500 mt-4">No tasks found</p>;
  }

  return (
    <div className="space-y-2 mt-4">
      {filteredTodos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
