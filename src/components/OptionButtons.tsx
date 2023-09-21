import { useEffect, useState } from "react";
import { useRouter } from "next/router";

/* Next themes import */
import { useTheme } from "next-themes";

/* Framer motion import */
import { motion } from "framer-motion";

/* Icon imports */
import { FaMoon, FaSun } from "react-icons/fa";

const OptionButtons = () => {
  const router = useRouter();
  const { locale: activeLocale } = router;

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleChangeLanguage = () => {
    const nextLenguage = activeLocale == "en" ? "es" : "en";
    router.push("/", "/", { locale: nextLenguage });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-y-2">
      {/* Language toggler */}
      <motion.button
        initial={{ opacity: 0, y: 48 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.35 },
        }}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 1, transition: { duration: 0 } }}
        onClick={handleChangeLanguage}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-clr-three text-lg"
      >
        {activeLocale == "en" ? "Es" : "En"}
      </motion.button>

      {/* Theme toggler */}
      <motion.button
        initial={{ opacity: 0, y: 64 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.4 },
        }}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 1, transition: { duration: 0 } }}
        onClick={() =>
          theme == "light" ? setTheme("dark") : setTheme("light")
        }
        className="flex h-10 w-10 items-center justify-center rounded-full bg-clr-three text-lg"
      >
        {theme == "light" ? <FaMoon /> : <FaSun />}
      </motion.button>
    </div>
  );
};

export default OptionButtons;
