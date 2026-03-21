import { zodResolver } from "@hookform/resolvers/zod";
import { useTodoStore } from "@/stores/todo-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "Task cannot be empty"),
});

type FormData = z.infer<typeof schema>;

export function TodoForm() {
  const addTodo = useTodoStore((s) => s.addTodo);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    addTodo(data.title);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <Input
        placeholder="Add a task..."
        {...register("title")}
        aria-label="Task input"
      />
      <Button type="submit">Add</Button>

      {errors.title && (
        <p className="text-red-500 text-sm">{errors.title.message}</p>
      )}
    </form>
  );
}
