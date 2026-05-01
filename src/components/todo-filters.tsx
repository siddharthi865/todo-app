import { useTodoStore, type Filter } from "@/stores/todo-store";
import { Button } from "@/components/ui/button";

const filters: Filter[] = ["all", "active", "completed"];

export function TodoFilters() {
  const filter = useTodoStore((s) => s.filter);
  const setFilter = useTodoStore((s) => s.setFilter);

  return (
    <div className="flex justify-center gap-2 mt-4">
      {filters?.map((f) => (
        <Button
          className="cursor-pointer"
          key={f}
          variant={filter === f ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter(f)}
          aria-label={`Filter ${f}`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </Button>
      ))}
    </div>
  );
}
