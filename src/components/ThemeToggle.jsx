import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-200 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 border border-border-primary dark:border-border-primary focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <BsSun className="w-5 h-5 text-text-primary dark:text-text-primary" />
      ) : (
        <BsMoon className="w-5 h-5 text-text-primary dark:text-text-primary" />
      )}
    </button>
  );
}
