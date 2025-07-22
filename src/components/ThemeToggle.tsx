import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-white/20 dark:border-neutral-700/50 hover:bg-white/90 dark:hover:bg-neutral-800/90 transition-all duration-300 shadow-medium"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </Button>
  );
};

export default ThemeToggle;