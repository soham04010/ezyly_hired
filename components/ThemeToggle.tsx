"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex gap-2">
      <button onClick={() => setTheme("light")} className={`p-2 rounded hover:bg-muted ${resolvedTheme === "light" ? "bg-muted" : ""}`}><Sun size={18} /></button>
      <button onClick={() => setTheme("dark") } className={`p-2 rounded hover:bg-muted ${resolvedTheme === "dark" ? "bg-muted" : ""}`}><Moon size={18} /></button>
      <button onClick={() => setTheme("system")} className={`p-2 rounded hover:bg-muted ${resolvedTheme === "system" ? "bg-muted" : ""}`}><Laptop size={18} /></button>
    </div>
  );
}