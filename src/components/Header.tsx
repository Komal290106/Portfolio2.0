import { motion } from 'framer-motion';
import { Sun, Moon, Sword } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useState, useEffect } from 'react';

export function Header() {
  const { theme, toggleTheme, toggleCount } = useTheme();
  const [showSecret, setShowSecret] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    setShowSecret(true);
    setTimeout(() => setShowSecret(false), 3000);
  };

  const handleToggle = () => {
    toggleTheme();
    if (toggleCount >= 4) {
      const colors = ['#FF69B4', '#00FF00', '#00FFFF', '#FF1493', '#FFD700'];
      document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      setTimeout(() => (document.body.style.backgroundColor = ''), 500);
    }
  };

  // ✅ Simplified recruiter-friendly links
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Badges', href: '#badges' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#quests' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-slate-900/95 border-b-2 border-purple-400/80'
            : 'bg-white/95 border-b-2 border-orange-500 shadow-lg'
          : isDark
          ? 'bg-transparent border-b-2 border-transparent'
          : 'bg-white/20 border-b-2 border-orange-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLogoClick}
          className="flex items-center gap-2 group relative"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sword
              className={`w-6 h-6 ${
                isScrolled
                  ? isDark
                    ? 'text-purple-400'
                    : 'text-orange-600'
                  : isDark
                  ? 'text-purple-300'
                  : 'text-orange-500'
              }`}
            />
          </motion.div>
          <span
            className={`pixel-font text-sm font-bold tracking-wider ${
              isScrolled
                ? isDark
                  ? 'text-purple-400'
                  : 'text-orange-700'
                : isDark
                ? 'text-purple-300'
                : 'text-orange-600'
            }`}
          >
            KOMAL
          </span>
        </motion.button>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 font-mono font-medium">
          {quickLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector(link.href);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-3 py-1 transition-all font-bold ${
                isScrolled
                  ? isDark
                    ? 'text-purple-200 hover:text-purple-400'
                    : 'text-gray-800 hover:text-orange-600'
                  : isDark
                  ? 'text-purple-100 hover:text-purple-300'
                  : 'text-orange-800 hover:text-orange-600'
              }`}
            >
              {link.name}
              <motion.div
                className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                  isScrolled
                    ? isDark
                      ? 'bg-purple-400'
                      : 'bg-orange-600'
                    : isDark
                    ? 'bg-purple-300'
                    : 'bg-orange-500'
                }`}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleToggle}
          className={`p-2 rounded-lg transition-all ${
            isScrolled
              ? isDark
                ? 'bg-purple-900/50 text-purple-400 hover:bg-purple-800/70'
                : 'bg-orange-100 text-orange-600 hover:bg-orange-200 border border-orange-300'
              : isDark
              ? 'bg-purple-900/30 text-purple-300 hover:bg-purple-800/50'
              : 'bg-orange-100/80 text-orange-600 hover:bg-orange-200 border border-orange-200'
          }`}
          style={{
            boxShadow: isScrolled
              ? isDark
                ? '0 4px 15px rgba(192, 132, 252, 0.3)'
                : '0 4px 15px rgba(249, 115, 22, 0.3)'
              : '0 2px 8px rgba(249, 115, 22, 0.2)',
          }}
        >
          {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={`absolute bottom-0 left-0 h-0.5 ${
          isDark ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-orange-500 to-amber-500'
        }`}
        initial={{ width: 0 }}
        animate={{ width: isScrolled ? '100%' : '0%' }}
        transition={{ duration: 0.3 }}
      />

      {/* Secret Message */}
      {showSecret && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 rounded font-mono text-xs backdrop-blur-md ${
            isScrolled
              ? isDark
                ? 'bg-slate-800/90 text-green-400 border border-purple-400/50'
                : 'bg-white/95 text-green-700 border border-orange-500 shadow-lg'
              : isDark
              ? 'bg-slate-900/80 text-green-400 border border-purple-300/50'
              : 'bg-white/90 text-green-700 border border-orange-400 shadow-md'
          }`}
          style={{ boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)' }}
        >
          {'> Crafted with ☕ & ✨'}
        </motion.div>
      )}
    </motion.header>
  );
}
