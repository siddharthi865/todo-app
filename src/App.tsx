import { BrowserRouter, Routes, Route } from "react-router";
import { useThemeStore } from "@/stores/theme-store";
import { useEffect } from "react";
import Home from "@/routes/Home";

export default function App() {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
