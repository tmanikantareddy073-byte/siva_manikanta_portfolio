import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative p-2.5 rounded-xl border border-white/10 dark:border-white/10 hover:border-cyber-cyan/50 bg-white/5 dark:bg-dark-card/60 backdrop-blur-md transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-cyber-cyan group"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="relative"
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-cyber-cyan transition-colors" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 transition-colors" />
        )}
      </motion.div>
    </button>
  );
}
