import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Theme Switch"
      className={`
        fixed top-6 right-6 z-50
        w-14 h-14 rounded-full
        flex items-center justify-center
        bg-white/80 dark:bg-neutral-900/80
        border border-white/30 dark:border-neutral-700/50
        shadow-xl
        transition-all duration-500
        focus:outline-none
        group
      `}
      style={{
        boxShadow: theme === "dark"
          ? "0 4px 24px 0 rgba(40,40,60,0.25)"
          : "0 4px 24px 0 rgba(120,120,180,0.15)"
      }}
    >
      <div className="relative w-8 h-8">
        <span
          className={`
            absolute left-0 top-0 transition-all duration-500
            ${theme === "light" ? "translate-x-0 rotate-0 opacity-100" : "translate-x-6 -rotate-90 opacity-0"}
          `}
        >
          <Sun className="w-8 h-8 text-yellow-400 drop-shadow" />
        </span>
        <span
          className={`
            absolute left-0 top-0 transition-all duration-500
            ${theme === "dark" ? "translate-x-0 rotate-0 opacity-100" : "-translate-x-6 rotate-90 opacity-0"}
          `}
        >
          <Moon className="w-8 h-8 text-blue-400 drop-shadow" />
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;