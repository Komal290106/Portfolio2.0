import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { Heart, Coffee, Code, Laptop, Keyboard, Mouse, Headphones, Brain, ScrollText, Zap, Briefcase, Sparkles } from 'lucide-react';
import { useState } from 'react';
import LightCat from '../assets/light_cat.png';
import DarkCat from '../assets/dark_cat.png';
import Avatar from '../assets/avatar.png';

const CAT_MESSAGES = [
  "By the ancient scrolls of CSS! Another bug defeated!",
  "My purrs generate better code than your AI tools, mortal!",
  "I've seen better responsive design in a litter box!",
  "This sorceress feeds me well for debugging her React spells!",
  "Hiss! Another merge conflict in the sacred repository!",
  "My tail twitches when I sense bad accessibility practices!",
  "I could code better with my paws tied! Bring more treats!",
  "The prophecy foretold of a developer who would share their tuna...",
];

export function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [catMessage, setCatMessage] = useState<string | null>(null);
  const [hp, setHp] = useState('100 ☕');
  const [iconHover, setIconHover] = useState<string | null>(null);

  const handleCatClick = () => {
    const message = CAT_MESSAGES[Math.floor(Math.random() * CAT_MESSAGES.length)];
    setCatMessage(message);
    setTimeout(() => setCatMessage(null), 4000);
  };

  const traits = [
    { name: 'Creativity', value: 95, color: 'from-pink-500 to-pink-600' },
    { name: 'Persistence', value: 80, color: 'from-orange-500 to-amber-500' },
    { name: 'Debug Patience', value: 50, color: 'from-purple-500 to-violet-500' },
    { name: 'Problem Solving', value: 90, color: 'from-green-500 to-emerald-400' },
    { name: 'Team Collaboration', value: 85, color: 'from-blue-500 to-cyan-400' },
  ];

  const equipment = [
    { name: 'ASUS VivoBook', icon: Laptop, description: 'Intel i7, 8GB RAM' },
    { name: 'Laptop Keyboard', icon: Keyboard, description: 'Built-in backlit' },
    { name: 'Wireless Mouse', icon: Mouse, description: 'Logitech MX Series' },
    { name: 'JBL Headphones', icon: Headphones, description: 'Wireless Noise Cancelling' },
  ];

  const questIcons = [
    { 
      icon: Heart, 
      message: 'Passion for pixel perfection!',
      color: isDark ? 'text-pink-400' : 'text-pink-600'
    },
    { 
      icon: Coffee, 
      message: 'Fueled by magical brews!',
      color: isDark ? 'text-amber-400' : 'text-orange-600'
    },
    { 
      icon: Code, 
      message: 'Ultimate Skill: Debugging Magic!',
      color: isDark ? 'text-violet-400' : 'text-purple-600'
    }
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Solid Background Colors - No Gradient */}
      <div className={`absolute inset-0 ${
        isDark ? 'bg-[#1a1330]' : 'bg-[#FFFDE7]'
      }`} />

      {/* Grid Background */}
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
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${isDark ? 'bg-fuchsia-400' : 'bg-orange-500'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`font-mono text-xs mb-4 text-center ${
            isDark ? 'text-fuchsia-300' : 'text-purple-700'
          }`}
        >
          {'>'} Loading profile data...
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`font-mono text-4xl md:text-5xl text-center mb-12 tracking-wider font-bold ${
            isDark ? 'text-fuchsia-400' : 'text-purple-700'
          }`}
          style={{
            textShadow: isDark 
              ? '3px 3px 0px rgba(255, 255, 255, 0.8)' 
              : '3px 3px 0px #FF9800',
          }}
          // Remove shadow on mobile
          suppressHydrationWarning
        >
          PROFILE OVERVIEW
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* LEFT SIDE - Character & Personality Traits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Character Container */}
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  boxShadow: [
                    '8px 8px 0px rgba(232, 121, 249, 0.5)',
                    '8px 8px 20px rgba(232, 121, 249, 0.8)',
                    '8px 8px 0px rgba(232, 121, 249, 0.5)'
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className={`w-full aspect-square max-w-sm mx-auto rounded-none border-4 ${
                  'bg-white border-fuchsia-500'
                } flex items-center justify-center relative overflow-hidden backdrop-blur-sm`}
                style={{
                  boxShadow: isDark 
                    ? '8px 8px 0px rgba(232, 121, 249, 0.5)' 
                    : '8px 8px 0px rgba(255, 152, 0, 0.4)',
                }}
              >
                {/* Avatar Image */}
                <img 
                  src={Avatar} 
                  alt="Komal - Frontend Developer"
                  className="w-full h-full object-cover"
                />

                {/* Sparkle effect */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-4 right-6"
                >
                  <Sparkles className={`w-8 h-8 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
                </motion.div>
              </motion.div>

              {/* Cat image in bottom-left corner of character box */}
              <motion.button
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCatClick}
                className={`absolute -bottom-3 -left-3 w-20 h-20 rounded-none border-4 ${
                  isDark ? 'bg-slate-700 border-amber-400 hover:bg-slate-600' : 'bg-orange-100 border-orange-500 hover:bg-orange-200'
                } flex items-center justify-center cursor-pointer transition-colors z-10 overflow-hidden`}
                style={{
                  boxShadow: isDark 
                    ? '4px 4px 0px rgba(251, 191, 36, 0.5)' 
                    : '4px 4px 0px rgba(255, 152, 0, 0.4)',
                }}
              >
                <img 
                  src={isDark ? DarkCat : LightCat} 
                  alt="Coding cat companion"
                  className="w-full h-full object-cover"
                />
              </motion.button>

{/* Cat Message - Positioned right above the cat */}
{catMessage && (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className={`absolute -top-4 left-20 transform max-w-xs p-3 rounded-none border-3 ${
      isDark ? 'bg-slate-800 border-amber-400 text-amber-200' : 'bg-white border-orange-400 text-gray-800'
    } font-mono text-xs z-20`}
    style={{
      boxShadow: isDark 
        ? '4px 4px 0px rgba(251, 191, 36, 0.4)' 
        : '4px 4px 0px rgba(255, 152, 0, 0.3)',
    }}
  >
    <div className="flex items-start gap-2">
      <span className="text-lg">🐾</span>
      <span>{catMessage}</span>
    </div>
    {/* Speech bubble tip */}
    <div className={`absolute -left-2 top-5 w-3 h-3 rotate-45 ${
      isDark ? 'bg-slate-800 border-l-3 border-b-3 border-amber-400' : 'bg-white border-l-3 border-b-3 border-orange-400'
    }`} />
  </motion.div>
)}
            </div>

            {/* Personality Traits - Below Character */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-5 rounded-none border-4 ${
                isDark ? 'bg-slate-800/90 border-violet-400' : 'bg-white/90 border-purple-500'
              } backdrop-blur-sm`}
              style={{
                boxShadow: isDark 
                  ? '6px 6px 0px rgba(167, 139, 250, 0.4)' 
                  : '6px 6px 0px rgba(168, 85, 247, 0.3)',
              }}
            >
              <h3 className={`font-mono text-base mb-4 font-bold flex items-center gap-2 ${
                isDark ? 'text-violet-300' : 'text-purple-600'
              }`}>
                <Brain className="w-5 h-5" />
                PERSONALITY TRAITS
              </h3>
              <div className="space-y-3">
                {traits.map((trait, idx) => (
                  <div key={trait.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className={`font-mono text-sm font-medium ${isDark ? 'text-violet-100' : 'text-gray-800'}`}>
                        {trait.name}
                      </span>
                      <span className={`font-mono text-sm font-bold ${isDark ? 'text-fuchsia-400' : 'text-orange-600'}`}>
                        {trait.value}%
                      </span>
                    </div>
                    <div className={`h-5 rounded-none border-2 ${
                      isDark ? 'bg-slate-900 border-slate-700' : 'bg-gray-200 border-gray-400'
                    } overflow-hidden`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${trait.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${trait.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Quest Log, Stats & Equipment */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quest Log Description */}
            <div className={`p-6 rounded-none border-4 ${
              isDark ? 'bg-slate-800/90 border-fuchsia-500' : 'bg-white/90 border-orange-500'
            } backdrop-blur-sm`}
            style={{
              boxShadow: isDark 
                ? '8px 8px 0px rgba(232, 121, 249, 0.5)' 
                : '8px 8px 0px rgba(255, 152, 0, 0.4)',
            }}
          >
              <h3 className={`font-mono text-base mb-2 font-bold flex items-center gap-2 ${
                isDark ? 'text-violet-300' : 'text-orange-700'
              }`}>
                <ScrollText className="w-5 h-5" />
                QUEST LOG:
              </h3>
              <p className={`font-mono text-sm ${isDark ? 'text-violet-100' : 'text-gray-700'} leading-relaxed mb-3`}>
  Hi, I'm Komal - a frontend developer passionate about crafting smooth, 
  interactive, and visually engaging web experiences. 
  I enjoy blending design and development to create interfaces that feel intuitive and alive. 
  Currently focusing on React, Framer Motion, and accessibility to bring creative ideas to life.
</p>


              {/* Interactive Quest Log Icons - Aligned to left */}
              <div className="flex gap-4">
                {questIcons.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.3 }}
                      className="relative cursor-pointer group"
                      onMouseEnter={() => setIconHover(item.message)}
                      onMouseLeave={() => setIconHover(null)}
                    >
                      <IconComponent className={`w-6 h-6 ${item.color}`} />
                      {iconHover === item.message && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`absolute -top-8 left-1/2 transform -translate-x-1/2 font-mono text-xs px-2 py-1 rounded-none border-2 whitespace-nowrap ${
                            isDark ? 'bg-slate-800 border-fuchsia-400 text-fuchsia-200' : 'bg-white border-orange-500 text-orange-700'
                          }`}
                        >
                          {item.message}
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Character Stats */}
            <div className={`p-6 rounded-none border-4 ${
              isDark ? 'bg-slate-800/90 border-violet-400' : 'bg-white/90 border-purple-500'
            } backdrop-blur-sm`}
            style={{
              boxShadow: isDark 
                ? '6px 6px 0px rgba(167, 139, 250, 0.4)' 
                : '6px 6px 0px rgba(168, 85, 247, 0.3)',
            }}
          >
              <h3 className={`font-mono text-base mb-4 font-bold flex items-center gap-2 ${
                isDark ? 'text-violet-300' : 'text-purple-600'
              }`}>
                <Zap className="w-5 h-5" />
                CHARACTER STATS
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b-2 border-dashed" style={{
                  borderColor: isDark ? '#e879f9' : '#FF9800'
                }}>
                  <span className={`font-mono text-base font-bold ${isDark ? 'text-fuchsia-300' : 'text-orange-600'}`}>
                    NAME:
                  </span>
                  <span className={`font-mono text-sm font-bold ${isDark ? 'text-fuchsia-100' : 'text-gray-800'}`}>
                    Komal Kaur Dhillon
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b-2 border-dashed" style={{
                  borderColor: isDark ? '#e879f9' : '#FF9800'
                }}>
                  <span className={`font-mono text-base font-bold ${isDark ? 'text-fuchsia-300' : 'text-orange-600'}`}>
                    CLASS:
                  </span>
                  <span className={`font-mono text-sm font-bold ${isDark ? 'text-fuchsia-100' : 'text-gray-800'}`}>
                    Frontend Developer <Sparkles className="inline w-4 h-4" />
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b-2 border-dashed" style={{
                  borderColor: isDark ? '#e879f9' : '#FF9800'
                }}>
                  <span className={`font-mono text-base font-bold ${isDark ? 'text-fuchsia-300' : 'text-orange-600'}`}>
                    LEVEL:
                  </span>
                  <span className={`font-mono text-sm font-bold ${isDark ? 'text-fuchsia-100' : 'text-gray-800'}`}>
                    19 (Undergraduate, 3rd Semester)
                  </span>
                </div>
                <div 
  className="flex justify-between items-center pb-2 border-b-2 border-dashed cursor-pointer group" 
  style={{
    borderColor: isDark ? '#e879f9' : '#FF9800'
  }}
>
  <span className={`font-mono text-base font-bold ${isDark ? 'text-fuchsia-300' : 'text-orange-600'}`}>
    Location:
  </span>
  <span className={`font-mono text-sm font-bold ${isDark ? 'text-fuchsia-100' : 'text-gray-800'}`}>
    India 🇮🇳
  </span>
</div>

              </div>
            </div>

            {/* Equipment Section - Small & Compact */}
            <div className={`p-4 rounded-none border-4 ${
              isDark ? 'bg-slate-800/90 border-emerald-400' : 'bg-white/90 border-emerald-500'
            } backdrop-blur-sm`}
            style={{
              boxShadow: isDark 
                ? '6px 6px 0px rgba(52, 211, 153, 0.4)' 
                : '6px 6px 0px rgba(16, 185, 129, 0.3)',
            }}
          >
              <h3 className={`font-mono text-base mb-3 font-bold flex items-center gap-2 ${
                isDark ? 'text-emerald-300' : 'text-emerald-700'
              }`}>
                <Briefcase className="w-5 h-5" />
                EQUIPMENT
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {equipment.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={`p-2 rounded-none border-2 text-center ${
                        isDark ? 'bg-slate-700/50 border-emerald-500' : 'bg-emerald-50 border-emerald-400'
                      }`}
                    >
                      <IconComponent className={`w-6 h-6 mx-auto mb-1 ${
                        isDark ? 'text-emerald-300' : 'text-emerald-600'
                      }`} />
                      <div className={`font-mono text-xs font-bold ${
                        isDark ? 'text-emerald-200' : 'text-emerald-800'
                      }`}>
                        {item.name}
                      </div>
                      <div className={`font-mono text-xs ${
                        isDark ? 'text-emerald-300' : 'text-emerald-600'
                      }`}>
                        {item.description}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
