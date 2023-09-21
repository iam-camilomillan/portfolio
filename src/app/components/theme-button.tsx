"use client";

/* Theme import */
import { useTheme } from "next-themes";

/* Icon imports */
import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeButton = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={handleThemeButton}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-clr-secondary-two text-lg"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeButton;
