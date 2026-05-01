import { useThemeStore } from "@/stores/theme-store";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="cursor-pointer"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
