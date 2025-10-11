import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { useState } from 'react';
import { 
  Code2, Database, Palette, 
  FileCode, GitBranch, Figma, Zap,
  Monitor, Package, Layers
} from 'lucide-react';

interface Fruit {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  icon: React.ReactNode;
  x: number;
  y: number;
}

export function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [hoveredFruit, setHoveredFruit] = useState<string | null>(null);
  const [clickedFruit, setClickedFruit] = useState<string | null>(null);

  const fruits: Fruit[] = [
    // Frontend
    { id: 'html', name: 'HTML', category: 'frontend', icon: <FileCode className="w-6 h-6" />, x: 12, y: 20 },
    { id: 'css', name: 'CSS', category: 'frontend', icon: <Layers className="w-6 h-6" />, x: 28, y: 18 },
    { id: 'javascript', name: 'JavaScript', category: 'frontend', icon: <Zap className="w-6 h-6" />, x: 50, y: 10 },
    { id: 'react', name: 'React', category: 'frontend', icon: <Code2 className="w-6 h-6" />, x: 72, y: 18 },
    { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', icon: <Monitor className="w-6 h-6" />, x: 88, y: 20 },

    // Backend
    { id: 'nodejs', name: 'Node.js', category: 'backend', icon: <Package className="w-6 h-6" />, x: 22, y: 45 },
    { id: 'express', name: 'Express.js', category: 'backend', icon: <Code2 className="w-6 h-6" />, x: 50, y: 42 },
    { id: 'mongodb', name: 'MongoDB', category: 'backend', icon: <Database className="w-6 h-6" />, x: 78, y: 45 },

    // Tools & Design
    { id: 'git', name: 'Git', category: 'tools', icon: <GitBranch className="w-6 h-6" />, x: 15, y: 70 },
    { id: 'vscode', name: 'VS Code', category: 'tools', icon: <Code2 className="w-6 h-6" />, x: 32, y: 75 },
    { id: 'figma', name: 'Figma', category: 'tools', icon: <Figma className="w-6 h-6" />, x: 50, y: 72 },
    { id: 'vite', name: 'Vite', category: 'tools', icon: <Zap className="w-6 h-6" />, x: 68, y: 75 },
    { id: 'canva', name: 'Canva', category: 'tools', icon: <Palette className="w-6 h-6" />, x: 85, y: 70 },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return isDark 
          ? { bg: 'bg-orange-900', border: 'border-amber-400', glow: 'shadow-amber-500', textColor: 'text-amber-300' }
          : { bg: 'bg-amber-100', border: 'border-orange-500', glow: 'shadow-orange-400', textColor: 'text-orange-600' };
      case 'backend':
        return isDark
          ? { bg: 'bg-blue-900', border: 'border-cyan-400', glow: 'shadow-cyan-500', textColor: 'text-cyan-300' }
          : { bg: 'bg-blue-100', border: 'border-blue-500', glow: 'shadow-blue-400', textColor: 'text-blue-600' };
      case 'tools':
        return isDark
          ? { bg: 'bg-purple-900', border: 'border-pink-400', glow: 'shadow-pink-500', textColor: 'text-pink-300' }
          : { bg: 'bg-pink-100', border: 'border-purple-500', glow: 'shadow-purple-400', textColor: 'text-purple-600' };
      default:
        return isDark
          ? { bg: 'bg-slate-700', border: 'border-fuchsia-400', glow: 'shadow-fuchsia-500', textColor: 'text-fuchsia-300' }
          : { bg: 'bg-slate-100', border: 'border-slate-500', glow: 'shadow-slate-400', textColor: 'text-slate-600' };
    }
  };

  return (
    <section
      id="skills"
      className={`py-20 px-4 relative overflow-hidden ${
        isDark ? 'bg-[#1a1330]' : 'bg-[#FFFDE7]'
      }`}
    >
      {/* Grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 dark:opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(${isDark ? '#d946ef' : '#FF9800'} 2px, transparent 2px),
            linear-gradient(90deg, ${isDark ? '#d946ef' : '#FF9800'} 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 ${isDark ? 'bg-fuchsia-300' : 'bg-orange-400'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className={`font-mono text-4xl md:text-5xl text-center mb-2 font-bold tracking-wider ${
            isDark ? 'text-fuchsia-400' : 'text-purple-700'
          }`}
          style={{
            textShadow: isDark 
              ? '2px 2px 0px #e879f9, 4px 4px 15px rgba(232, 121, 249, 0.4)' 
              : '2px 2px 0px #ec4899, 4px 4px 15px rgba(236, 72, 153, 0.3)',
          }}
        >
          🌳 SKILL ORCHARD 🌳
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-center font-mono text-sm mb-8 ${
            isDark ? 'text-violet-300' : 'text-purple-600'
          }`}
        >
          Where code fruits grow from caffeine and curiosity ☕🌱
        </motion.p>

        {/* Orchard Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative w-full h-96 md:h-[600px] mb-12"
        >
          {/* SVG for branches and vines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Main trunk lines - pixel style */}
            <defs>
              <pattern id="trunkPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                <rect width="2" height="4" fill={isDark ? '#8B4513' : '#A0522D'} />
              </pattern>
              <filter id="pixelFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
              </filter>
            </defs>

            {/* Main trunk */}
            <rect x="48" y="80" width="4" height="20" fill={isDark ? '#8B4513' : '#A0522D'} />
            
            {/* Trunk wood texture */}
            <rect x="48" y="80" width="4" height="20" fill={isDark ? '#654321' : '#5C4033'} opacity="0.4" />

            {/* Main branches */}
            <line x1="50" y1="80" x2="30" y2="60" stroke={isDark ? '#8B4513' : '#A0522D'} strokeWidth="1.5" />
            <line x1="50" y1="80" x2="70" y2="60" stroke={isDark ? '#8B4513' : '#A0522D'} strokeWidth="1.5" />
            <line x1="50" y1="75" x2="50" y2="50" stroke={isDark ? '#8B4513' : '#A0522D'} strokeWidth="1.5" />

            {/* Secondary branches - frontend tier */}
            <line x1="50" y1="50" x2="12" y2="20" stroke={isDark ? '#996633' : '#8B6F47'} strokeWidth="1.2" strokeDasharray="2,2" />
            <line x1="50" y1="50" x2="28" y2="18" stroke={isDark ? '#996633' : '#8B6F47'} strokeWidth="1.2" strokeDasharray="2,2" />
            <line x1="50" y1="50" x2="72" y2="18" stroke={isDark ? '#996633' : '#8B6F47'} strokeWidth="1.2" strokeDasharray="2,2" />
            <line x1="50" y1="50" x2="88" y2="20" stroke={isDark ? '#996633' : '#8B6F47'} strokeWidth="1.2" strokeDasharray="2,2" />

            {/* Secondary branches - backend tier */}
            <line x1="30" y1="60" x2="22" y2="45" stroke={isDark ? '#CC9966' : '#A0826D'} strokeWidth="1.1" strokeDasharray="2,2" />
            <line x1="50" y1="75" x2="50" y2="42" stroke={isDark ? '#CC9966' : '#A0826D'} strokeWidth="1.1" strokeDasharray="2,2" />
            <line x1="70" y1="60" x2="78" y2="45" stroke={isDark ? '#CC9966' : '#A0826D'} strokeWidth="1.1" strokeDasharray="2,2" />

            {/* Tertiary branches - tools tier */}
            <line x1="30" y1="60" x2="15" y2="70" stroke={isDark ? '#B8860B' : '#DAA520'} strokeWidth="1" strokeDasharray="1,1" />
            <line x1="30" y1="60" x2="32" y2="75" stroke={isDark ? '#B8860B' : '#DAA520'} strokeWidth="1" strokeDasharray="1,1" />
            <line x1="50" y1="75" x2="50" y2="72" stroke={isDark ? '#B8860B' : '#DAA520'} strokeWidth="1" strokeDasharray="1,1" />
            <line x1="70" y1="60" x2="68" y2="75" stroke={isDark ? '#B8860B' : '#DAA520'} strokeWidth="1" strokeDasharray="1,1" />
            <line x1="70" y1="60" x2="85" y2="70" stroke={isDark ? '#B8860B' : '#DAA520'} strokeWidth="1" strokeDasharray="1,1" />

            {/* Vine connections to fruits with animation */}
            {fruits.map((fruit) => (
              <motion.line
                key={`vine-${fruit.id}`}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: hoveredFruit === fruit.id ? 0.8 : 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                x1="50"
                y1="80"
                x2={fruit.x}
                y2={fruit.y}
                stroke={isDark ? '#d946ef' : '#FF9800'}
                strokeWidth="1.5"
                strokeDasharray="3,3"
                style={{
                  opacity: hoveredFruit === fruit.id ? 0.8 : 0.3,
                  transition: 'opacity 0.3s ease',
                }}
              />
            ))}
          </svg>



          {/* Fruits */}
          {fruits.map((fruit, idx) => {
            const colors = getCategoryColor(fruit.category);
            return (
              <motion.div
                key={fruit.id}
                initial={{ opacity: 0, scale: 0, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.08, type: 'spring', stiffness: 200 }}
                animate={hoveredFruit === fruit.id ? { y: -12 } : { y: 0 }}
                whileHover={{ scale: 1.15 }}
                style={{
                  left: `${fruit.x}%`,
                  top: `${fruit.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="absolute cursor-pointer"
                onHoverStart={() => setHoveredFruit(fruit.id)}
                onHoverEnd={() => setHoveredFruit(null)}
                onClick={() => setClickedFruit(fruit.id)}
              >
                {/* Foliage blob behind fruit */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.08 }}
                  className={`absolute inset-0 rounded-full pointer-events-none ${
                    isDark ? 'bg-green-700' : 'bg-green-400'
                  }`}
                  style={{
                    filter: 'blur(20px)',
                    opacity: 0.35,
                  }}
                />

                {/* Glow effect */}
                {(hoveredFruit === fruit.id || clickedFruit === fruit.id) && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className={`absolute inset-0 rounded-full ${colors.glow} blur-lg`}
                    style={{ boxShadow: `0 0 40px currentColor` }}
                  />
                )}

                {/* Fruit orb */}
                <motion.div
                  animate={{
                    scale: hoveredFruit === fruit.id ? [1, 1.1, 1] : [1, 1.05, 1],
                    opacity: [0.9, 1, 0.9],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center transition-all ${colors.bg} ${colors.border} ${
                    hoveredFruit === fruit.id || clickedFruit === fruit.id
                      ? `shadow-lg ${colors.glow}`
                      : ''
                  }`}
                >
                  <div className={colors.textColor}>
                    {fruit.icon}
                  </div>
                </motion.div>

                {/* Tooltip */}
                {hoveredFruit === fruit.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: -20 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-none border-2 whitespace-nowrap text-xs font-mono font-bold z-20 ${
                      isDark
                        ? 'bg-slate-800 border-fuchsia-400 text-fuchsia-200'
                        : 'bg-white border-purple-500 text-purple-700'
                    }`}
                  >
                    {fruit.name}
                  </motion.div>
                )}

                {/* Level up effect */}
                {clickedFruit === fruit.id && (
                  <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 0, y: -40 }}
                    transition={{ duration: 1 }}
                    onAnimationComplete={() => setClickedFruit(null)}
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 font-mono font-bold text-lg ${
                      isDark ? 'text-amber-400' : 'text-orange-500'
                    }`}
                  >
                    +1 XP
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 px-4"
        >
          {[
            { label: 'Frontend', category: 'frontend' },
            { label: 'Backend', category: 'backend' },
            { label: 'Tools', category: 'tools' },
          ].map((item) => {
            const colors = getCategoryColor(item.category);
            return (
              <div key={item.category} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full border-2 ${colors.bg} ${colors.border}`} />
                <span className={`font-mono text-sm font-bold ${colors.textColor}`}>
                  {item.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>


    </section>
  );
}