import { motion } from 'framer-motion';
import { Download, Gamepad2, Sparkles } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Solid Background Colors - No Gradient */}
      <div className={`absolute inset-0 ${
        isDark ? 'bg-[#1a1330]' : 'bg-[#FFFDE7]'
      }`} />

      {/* Static Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(${isDark ? '#d946ef' : '#FF9800'} 2px, transparent 2px),
            linear-gradient(90deg, ${isDark ? '#d946ef' : '#FF9800'} 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating Pixel Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${isDark ? 'bg-fuchsia-400' : 'bg-orange-500'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        {/* Boot Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`font-mono text-xs mb-8 ${
            isDark ? 'text-fuchsia-300' : 'text-purple-700'
          }`}
        >
          {'>'} Booting Komal.exe ...
        </motion.div>

        {/* Name - Pixel Style */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
          className={`font-mono text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 tracking-wider font-bold ${
            isDark ? 'text-fuchsia-400' : 'text-purple-700'
          }`}
          style={{
            textShadow: isDark 
              ? '4px 4px 0px #e879f9, 8px 8px 20px rgba(232, 121, 249, 0.5)' 
              : '4px 4px 0px #FF9800, 8px 8px 20px rgba(255, 152, 0, 0.4)',
            letterSpacing: '0.05em'
          }}
        >
          HI, I'M KOMAL
        </motion.h1>

        {/* Subtitle with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-4"
        >
          <motion.p
            className={`font-mono text-xl sm:text-2xl md:text-3xl tracking-wide ${
              isDark ? 'text-violet-200' : 'text-green-600'
            }`}
          >
            {'<'} Frontend Adventurer & <span className="text-orange-600 dark:text-amber-400 font-semibold">Web Developer</span> {'/>'} 
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className={`font-mono text-sm sm:text-base mb-12 ${
            isDark ? 'text-violet-300' : 'text-purple-600'
          }`}
        >
          Crafting interactive <span className="text-orange-600 dark:text-amber-400 font-semibold">experiences</span>, one quest at a time.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <motion.a
            href="#contact"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.6, type: "spring" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: isDark 
                ? '0 0 25px rgba(232, 121, 249, 0.8)' 
                : '0 0 25px rgba(255, 152, 0, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 font-mono font-bold text-lg rounded-none border-4 ${
              isDark
                ? 'bg-fuchsia-500 text-white border-fuchsia-700 hover:bg-fuchsia-400'
                : 'bg-green-600 text-white border-green-800 hover:bg-green-500'
            } flex items-center gap-3 transition-all uppercase tracking-wider`}
          >
            <Gamepad2 className="w-6 h-6" />
            Start Quest
          </motion.a>

          <motion.a
            href="/resume.pdf"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.6, type: "spring" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: isDark 
                ? '0 0 25px rgba(245, 158, 11, 0.8)' 
                : '0 0 25px rgba(168, 85, 247, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 font-mono font-bold text-lg rounded-none border-4 ${
              isDark
                ? 'bg-transparent text-amber-400 border-amber-400 hover:bg-amber-400 hover:text-zinc-900'
                : 'bg-transparent text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white'
            } flex items-center gap-3 transition-all uppercase tracking-wider`}
          >
            <Download className="w-6 h-6" />
            Resume
          </motion.a>
        </motion.div>

        {/* Konami Code Hint - Positioned above scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="mb-6"
        >
          <motion.div
            animate={{ 
              y: [0, -3, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`font-mono text-xs ${
              isDark ? 'text-fuchsia-300' : 'text-orange-500'
            } opacity-50 hover:opacity-100 transition-opacity inline-flex items-center gap-2 cursor-help px-3 py-1 rounded-lg ${
              isDark ? 'bg-purple-900/30' : 'bg-orange-100/50'
            } backdrop-blur-sm`}
            title="Unlock ultimate mode with the classic cheat code!"
          >
            <Gamepad2 className="w-3 h-3" />
            <span>Pro tip: ↑↑↓↓←→←→BA</span>
            <Sparkles className="w-3 h-3" />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Moved down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-4"
        >
          <motion.p 
            className={`font-mono text-sm ${
              isDark ? 'text-fuchsia-400' : 'text-orange-600'
            }`}
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ▼ SCROLL TO START ▼
          </motion.p>
        </motion.div>
      </div>

      {/* Corner Decorative Elements */}
      <div className={`absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 ${
        isDark ? 'border-fuchsia-500' : 'border-orange-500'
      }`} />
      <div className={`absolute top-8 right-8 w-12 h-12 border-t-4 border-r-4 ${
        isDark ? 'border-fuchsia-500' : 'border-orange-500'
      }`} />
      <div className={`absolute bottom-8 left-8 w-12 h-12 border-b-4 border-l-4 ${
        isDark ? 'border-fuchsia-500' : 'border-orange-500'
      }`} />
      <div className={`absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 ${
        isDark ? 'border-fuchsia-500' : 'border-orange-500'
      }`} />
    </section>
  );
}