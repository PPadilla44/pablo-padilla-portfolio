import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      data-testid="theme-toggle-btn"
      whileTap={{ x: 3, y: 3, boxShadow: "0px 0px 0px 0px var(--color-shadow)" }}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 w-11 h-11 md:w-12 md:h-12 border-2 border-line bg-surface text-ink shadow-hard-sm flex items-center justify-center transition-all duration-150 hover:-translate-y-0.5"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        aria-hidden="true"
        className="block"
      >
        <Icon
          icon={isDark ? "ph:sun-bold" : "ph:moon-bold"}
          width={22}
          height={22}
        />
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;
