import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="absolute left-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-[#CFFF04] text-[#1b1b1b] shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110 sm:left-6 sm:top-6"
    >
      {isLight ? <Moon size={16} strokeWidth={2} /> : <Sun size={16} strokeWidth={2} />}
    </button>
  );
}
