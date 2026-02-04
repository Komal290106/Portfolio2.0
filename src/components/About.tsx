import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { Heart, Coffee, Code, Laptop, Keyboard, Mouse, Headphones, Brain, ScrollText, Zap, Briefcase, Sparkles, MapPin } from 'lucide-react';
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
      message: 'Passion for pixel-perfect design',
      color: isDark ? 'text-pink-400' : 'text-pink-600'
    },
    { 
      icon: Coffee, 
      message: 'Consistent and dedicated work ethic',
      color: isDark ? 'text-amber-400' : 'text-orange-600'
    },
    { 
      icon: Code, 
      message: 'Strong problem-solving skills',
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

      {/* ✅ Changed from max-w-7xl to max-w-6xl for width reduction */}
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
          suppressHydrationWarning
        >
          PROFILE OVERVIEW
        </motion.h2>

        {/* 3-Column Bento Layout */}
        {/* ✅ Changed from max-w-7xl to max-w-6xl for width reduction */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-6xl mx-auto">
          
          {/* ========== COLUMN 1: Avatar ========== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-2"
          >
            <div className="relative h-full">
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
                className={`h-full w-full rounded-none border-4 ${
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
                  alt="Komal - Web Developer"
                  className="w-full h-full object-cover"
                />

                {/* Sparkle effect */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-4 right-4"
                >
                  <Sparkles className={`w-7 h-7 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
                </motion.div>

                {/* Cat button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCatClick}
                  className={`absolute bottom-4 left-4 w-16 h-16 rounded-none border-3 ${
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

                {/* Cat Message */}
                {catMessage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`absolute top-4 left-20 transform max-w-[200px] p-3 rounded-none border-3 ${
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
                    <div className={`absolute -left-2 top-4 w-3 h-3 rotate-45 ${
                      isDark ? 'bg-slate-800 border-l-3 border-b-3 border-amber-400' : 'bg-white border-l-3 border-b-3 border-orange-400'
                    }`} />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* ========== COLUMN 2: About + Tech ========== */}
          
          {/* ✅ Changed from QUEST LOG to ABOUT ME */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <div className={`h-full p-5 rounded-none border-4 ${
              isDark ? 'bg-slate-800/90 border-fuchsia-500' : 'bg-white/90 border-orange-500'
            } backdrop-blur-sm`}
            style={{
              boxShadow: isDark 
                ? '6px 6px 0px rgba(232, 121, 249, 0.5)' 
                : '6px 6px 0px rgba(255, 152, 0, 0.4)',
            }}
            >
              <div className="flex items-center gap-2 mb-3">
                <ScrollText className={`w-6 h-6 ${isDark ? 'text-fuchsia-300' : 'text-orange-600'}`} />
                <h3 className={`font-mono text-lg font-bold ${isDark ? 'text-fuchsia-200' : 'text-orange-700'}`}>
                  ABOUT ME
                </h3>
              </div>
              
              <p className={`font-mono text-sm ${isDark ? 'text-violet-100' : 'text-gray-700'} leading-relaxed mb-4`}>
                Hi, I'm Komal - a web developer passionate about crafting smooth, 
                interactive, and visually engaging web experiences. 
                I enjoy blending design and development to create interfaces that feel intuitive and alive. 
                Currently focusing on React, Framer Motion, and accessibility to bring creative ideas to life.
              </p>

              {/* Interactive Icons */}
              <div className="flex gap-4 pt-3 border-t-2" style={{
                borderColor: isDark ? 'rgba(232, 121, 249, 0.3)' : 'rgba(255, 152, 0, 0.3)'
              }}>
                {questIcons.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -2 }}
                      className="relative cursor-pointer group"
                      onMouseEnter={() => setIconHover(item.message)}
                      onMouseLeave={() => setIconHover(null)}
                    >
                      <IconComponent className={`w-6 h-6 ${item.color}`} />
                      {iconHover === item.message && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
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
          </motion.div>

          {/* ✅ Changed from EQUIPMENT to TECH SETUP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <div className={`h-full p-5 rounded-none border-4 ${
              isDark ? 'bg-slate-800/90 border-cyan-400' : 'bg-white/90 border-cyan-500'
            } backdrop-blur-sm`}
            style={{
              boxShadow: isDark 
                ? '6px 6px 0px rgba(34, 211, 238, 0.4)' 
                : '6px 6px 0px rgba(6, 182, 212, 0.3)',
            }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className={`w-6 h-6 ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`} />
                <h3 className={`font-mono text-lg font-bold ${isDark ? 'text-cyan-200' : 'text-cyan-800'}`}>
                  TECH SETUP
                </h3>
              </div>
              
              <div className="space-y-3">
                {equipment.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 p-2 rounded-none border-2"
                      style={{
                        borderColor: isDark ? 'rgba(34, 211, 238, 0.3)' : 'rgba(6, 182, 212, 0.3)',
                        backgroundColor: isDark ? 'rgba(30, 41, 59, 0.3)' : 'rgba(236, 254, 255, 0.5)'
                      }}
                    >
                      <IconComponent className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`} />
                      <div>
                        <div className={`font-mono text-sm font-bold ${isDark ? 'text-cyan-200' : 'text-cyan-800'}`}>
                          {item.name}
                        </div>
                        <div className={`font-mono text-xs ${isDark ? 'text-cyan-300/80' : 'text-cyan-600/80'}`}>
                          {item.description}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ========== COLUMN 3: Details + Traits ========== */}
          
          {/* ✅ Changed from STATS to PROFILE DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <div className={`h-full p-5 rounded-none border-4 ${
              isDark ? 'bg-slate-800/90 border-violet-400' : 'bg-white/90 border-purple-500'
            } backdrop-blur-sm`}
            style={{
              boxShadow: isDark 
                ? '6px 6px 0px rgba(167, 139, 250, 0.4)' 
                : '6px 6px 0px rgba(168, 85, 247, 0.3)',
            }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap className={`w-6 h-6 ${isDark ? 'text-violet-300' : 'text-purple-600'}`} />
                <h3 className={`font-mono text-lg font-bold ${isDark ? 'text-violet-200' : 'text-purple-700'}`}>
                  PROFILE DETAILS
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className={`font-mono text-xs ${isDark ? 'text-violet-300' : 'text-purple-600'} mb-1`}>
                    NAME
                  </div>
                  <div className={`font-mono font-bold ${isDark ? 'text-violet-100' : 'text-gray-800'}`}>
                    Komal Kaur Dhillon
                  </div>
                </div>
                
                {/* ✅ Changed from CLASS to ROLE */}
                <div>
                  <div className={`font-mono text-xs ${isDark ? 'text-violet-300' : 'text-purple-600'} mb-1`}>
                    ROLE
                  </div>
                  <div className={`font-mono font-bold ${isDark ? 'text-violet-100' : 'text-gray-800'}`}>
                    Web Developer <Sparkles className="inline w-4 h-4 ml-1" />
                  </div>
                </div>
                
                {/* ✅ Changed from LEVEL to EDUCATION */}
                <div>
                  <div className={`font-mono text-xs ${isDark ? 'text-violet-300' : 'text-purple-600'} mb-1`}>
                    EDUCATION
                  </div>
                  <div className={`font-mono font-bold ${isDark ? 'text-violet-100' : 'text-gray-800'}`}>
                    Undergraduate, 4th Semester
                  </div>
                </div>

                {/* Location Section */}
                <div className="pt-3 border-t-2" style={{
                  borderColor: isDark ? 'rgba(167, 139, 250, 0.3)' : 'rgba(168, 85, 247, 0.3)'
                }}>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className={`w-5 h-5 ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`} />
                    <div className={`font-mono text-xs ${isDark ? 'text-violet-300' : 'text-purple-600'}`}>
                      LOCATION
                    </div>
                  </div>
                  <div className={`font-mono font-bold ${isDark ? 'text-violet-100' : 'text-gray-800'}`}>
                    India 🇮🇳
                  </div>
                  <div className={`font-mono text-xs mt-1 ${isDark ? 'text-violet-300/80' : 'text-purple-600/80'}`}>
                    Web Developer based in India
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ✅ Changed from TRAITS to STRENGTHS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <div className={`h-full p-5 rounded-none border-4 ${
              isDark ? 'bg-slate-800/90 border-pink-400' : 'bg-white/90 border-pink-500'
            } backdrop-blur-sm`}
            style={{
              boxShadow: isDark 
                ? '6px 6px 0px rgba(244, 114, 182, 0.4)' 
                : '6px 6px 0px rgba(236, 72, 153, 0.3)',
            }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Brain className={`w-6 h-6 ${isDark ? 'text-pink-300' : 'text-pink-600'}`} />
                <h3 className={`font-mono text-lg font-bold ${isDark ? 'text-pink-200' : 'text-pink-700'}`}>
                  STRENGTHS
                </h3>
              </div>
              
              <div className="space-y-3">
                {traits.map((trait, idx) => (
                  <div key={trait.name} className="group relative">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className={`font-mono text-sm font-medium ${isDark ? 'text-pink-100' : 'text-gray-800'}`}>
                        {trait.name}
                      </span>
                      <span className={`font-mono text-sm font-bold ${isDark ? 'text-pink-300' : 'text-pink-600'}`}>
                        {trait.value}%
                      </span>
                    </div>
                    
                    <div className={`h-2.5 rounded-none border ${
                      isDark ? 'bg-slate-900 border-slate-700' : 'bg-gray-200 border-gray-400'
                    } overflow-hidden`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${trait.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: idx * 0.1 }}
                        className={`h-full bg-gradient-to-r ${trait.color}`}
                      />
                    </div>
                    
                    {/* Debug Patience Tooltip - Updated wording */}
                    {trait.name === "Debug Patience" && (
                      <div className={`
                        absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 font-mono text-xs rounded-none border-2
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap
                        ${isDark 
                          ? "bg-slate-800 border-pink-400 text-pink-200" 
                          : "bg-white border-pink-500 text-pink-700"
                        }
                      `}>
                        Debugging requires patience and systematic problem-solving
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}