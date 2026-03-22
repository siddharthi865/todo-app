import { Card, CardContent } from "@/components/ui/card";
import { TodoFilters } from "@/components/todo-filters";
import { ThemeToggle } from "@/components/theme-toggle";
import { TodoList } from "@/components/todo-list";
import { TodoForm } from "@/components/todo-form";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Todo App</h1>
            <ThemeToggle />
          </div>

          <TodoForm />
          <TodoFilters />
          <TodoList />
        </CardContent>
      </Card>
    </div>
  );
}
