import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { ExternalLink, Github, X, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';
import nimbusImage from '../assets/nimbus.png';
import ghibliImage from '../assets/ghibli.png';
import masalaTalesImage from '../assets/masala_tales.png';
import uamoreImage from '../assets/uamore.png';
import videoSrc from '../assets/video.mp4';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  isFeatured?: boolean;
  difficulty?: number;
  hasVideo?: boolean;
}

export function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Uamore Perfume Store',
      description: 'Minimalist e-commerce site showcasing luxury perfumes with soft pastels and smooth animations. A beautifully crafted shopping experience for premium fragrances.',
      category: 'frontend',
      tags: ['React', 'TypeScript', 'Tailwind','Framer Motion'],
      image: uamoreImage,
      liveUrl: 'https://uamore-phi.vercel.app/',
      githubUrl: 'https://github.com/Komal290106/Uamore',
      isFeatured: true,
      difficulty: 4,
      hasVideo: true
    },
    {
      id: 2,
      title: 'Nimbus Keyboards',
      description: 'Premium landing page for mechanical keyboards with cutting-edge 3D interactions and smooth animations.',
      category: 'experiments',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'GSAP', 'Three.js'],
      image: nimbusImage,
      liveUrl: 'https://nimbus-keyboard.vercel.app/',
      githubUrl: 'https://github.com/Komal290106/nimbus-keyboard',
      difficulty: 5
    },
    {
      id: 3,
      title: 'Ghibli Fanpage',
      description: 'A fan-made website celebrating Studio Ghibli movies, timelines, and the magic behind Miyazaki\'s creations.',
      category: 'frontend',
      tags: ['HTML', 'CSS'],
      image: ghibliImage,
      liveUrl: 'https://ghibli-jet.vercel.app/',
      githubUrl: 'https://github.com/Komal290106/Ghibli',
      difficulty: 3
    },
    {
      id: 4,
      title: 'Masala Tales',
      description: 'Frontend website for a restaurant with interactive menu and booking features. A delightful culinary experience online.',
      category: 'frontend',
      tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      image: masalaTalesImage,
      liveUrl: 'https://masala-tales.vercel.app/',
      githubUrl: 'https://github.com/Komal290106/masala_tales',
      difficulty: 4
    },
  ];

  const mainQuest = projects.find(p => p.isFeatured) || projects[0];
  const sideQuests = projects.filter(p => !p.isFeatured);

  return (
    <section
      id="quests"
      className={`py-16 px-4 relative overflow-hidden ${
        isDark ? 'bg-[#1a1330]' : 'bg-[#FFFDE7]'
      }`}
    >
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title - Made more compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`font-mono text-xs mb-2 ${
              isDark ? 'text-fuchsia-300' : 'text-purple-700'
            }`}
          >
            {'>'} Loading quest data...
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`font-mono text-3xl md:text-4xl text-center mb-8 tracking-wider font-bold ${
  isDark 
    ? 'text-fuchsia-400 sm:[text-shadow:3px_3px_0px_rgba(255,255,255,0.8),8px_8px_20px_rgba(232,121,249,0.5)]'
    : 'text-purple-700 sm:[text-shadow:3px_3px_0px_rgba(255,152,0,0.8),8px_8px_20px_rgba(255,152,0,0.4)]'
}`}

          >
            QUEST LOG
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`font-mono text-xs ${
              isDark ? 'text-violet-300' : 'text-purple-600'
            }`}
          >
            {'<'} Complete your journey through my projects {'/>'} 
          </motion.p>
        </motion.div>

        {/* MAIN QUEST - Made more compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            className={`font-mono text-xs mb-3 font-bold tracking-widest flex items-center gap-2 ${
              isDark ? 'text-fuchsia-300' : 'text-orange-600'
            }`}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-3 h-3" />
            ★★★ MAIN QUEST ★★★
            <Sparkles className="w-3 h-3" />
          </motion.div>

          <motion.div
            whileHover={{ 
              boxShadow: isDark 
                ? '0 0 30px rgba(232, 121, 249, 0.6)' 
                : '0 0 30px rgba(255, 152, 0, 0.6)'
            }}
            className={`rounded-none border-3 ${
              isDark 
                ? 'bg-slate-800/90 border-fuchsia-500' 
                : 'bg-white/90 border-orange-500'
            } backdrop-blur-sm sm:[box-shadow:6px_6px_0px_rgba(232,121,249,0.5)] ${
              !isDark && 'sm:[box-shadow:6px_6px_0px_rgba(255,152,0,0.4)]'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Video/Image Section - Made more compact */}
              <motion.div
                className="relative overflow-hidden bg-black"
                whileHover={{ scale: 1.02 }}
              >
                {mainQuest.hasVideo ? (
                  <div className="relative aspect-video w-full">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover absolute top-0 left-0"
                    >
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className="relative aspect-video w-full">
                    <img
                      src={mainQuest.image}
                      alt={mainQuest.title}
                      className="w-full h-full object-cover absolute top-0 left-0"
                    />
                  </div>
                )}
                
                <div className="absolute top-3 right-3 z-10">
                  <Sparkles className={`w-6 h-6 ${isDark ? 'text-amber-400' : 'text-orange-500'} animate-pulse`} />
                </div>
                <div className="absolute bottom-3 left-3 flex gap-1 z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < (mainQuest.difficulty || 3)
                          ? isDark ? 'text-amber-400 fill-amber-400' : 'text-orange-500 fill-orange-500'
                          : isDark ? 'text-slate-600' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Content - Made more compact */}
              <div className="p-4 md:p-6 flex flex-col justify-between">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-3"
                  >
                    <p className={`font-mono text-xs mb-1 tracking-wider ${
                      isDark ? 'text-amber-400' : 'text-orange-600'
                    }`}>
                      REWARD: LEGENDARY
                    </p>
                    <h3 className={`font-mono text-lg md:text-xl font-bold mb-1 tracking-wider ${
                      isDark ? 'text-fuchsia-400' : 'text-purple-700'
                    }`}>
                      {mainQuest.title}
                    </h3>
                    <p className={`font-mono text-xs tracking-wide mb-2 ${
                      isDark ? 'text-violet-300' : 'text-purple-600'
                    }`}>
                      [Primary Objective]
                    </p>
                  </motion.div>

                  <p className={`font-mono text-xs leading-relaxed mb-3 ${
                    isDark ? 'text-violet-200' : 'text-gray-700'
                  }`}>
                    {mainQuest.description}
                  </p>

                  {/* Tags - Made more compact */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {mainQuest.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className={`px-2 py-1 border text-xs font-mono font-bold rounded-none tracking-wider ${
                          isDark
                            ? 'bg-slate-800 border-fuchsia-400 text-fuchsia-300'
                            : 'bg-orange-100 border-orange-500 text-orange-600'
                        }`}
                      >
                        [{tag}]
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons - Side by side and more compact */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <motion.a
                    href={mainQuest.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: isDark 
                        ? '0 0 15px rgba(232, 121, 249, 0.8)' 
                        : '0 0 15px rgba(255, 152, 0, 0.6)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 px-4 py-2 font-mono font-bold text-sm rounded-none border-3 ${
                      isDark
                        ? 'bg-fuchsia-500 text-white border-fuchsia-700 hover:bg-fuchsia-400'
                        : 'bg-green-600 text-white border-green-800 hover:bg-green-500'
                    } flex items-center justify-center gap-1 transition-all uppercase tracking-wider sm:[box-shadow:2px_2px_0px_rgba(232,121,249,0.3)] ${
                      !isDark && 'sm:[box-shadow:2px_2px_0px_rgba(16,185,129,0.3)]'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Play Now
                  </motion.a>
                  <motion.a
  href={mainQuest.githubUrl}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ 
    scale: 1.05,
    boxShadow: isDark 
      ? '0 0 15px rgba(234, 179, 8, 0.8)' 
      : '0 0 15px rgba(234, 179, 8, 0.6)'
  }}
  whileTap={{ scale: 0.95 }}
  className={`flex-1 px-4 py-2 font-mono font-bold text-sm rounded-none border-4 ${
    isDark
      ? 'border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-gray-900'
      : 'border-yellow-500 text-yellow-600 bg-transparent hover:bg-yellow-500 hover:text-white'
  } flex items-center justify-center gap-1 transition-all uppercase tracking-wider`}
>
  <Github className="w-4 h-4" />
  Source Code
</motion.a>

                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* SIDE QUESTS - Made more compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={`font-mono text-xs mb-6 font-bold tracking-widest flex items-center gap-2 ${
              isDark ? 'text-fuchsia-300' : 'text-orange-600'
            }`}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ★★ SIDE QUESTS ★★
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sideQuests.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ 
                  boxShadow: isDark 
                    ? '0 0 20px rgba(232, 121, 249, 0.5)' 
                    : '0 0 20px rgba(255, 152, 0, 0.4)'
                }}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer rounded-none border-3 backdrop-blur-sm transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-800/90 border-purple-500 hover:border-fuchsia-400'
                    : 'bg-white/90 border-orange-500 hover:border-orange-600'
                } sm:[box-shadow:4px_4px_0px_rgba(167,139,250,0.4)] ${
                  !isDark && 'sm:[box-shadow:4px_4px_0px_rgba(255,152,0,0.3)]'
                }`}
              >
                {/* Image Container - Made more compact */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 right-2 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < (project.difficulty || 3)
                            ? isDark ? 'text-amber-400 fill-amber-400' : 'text-orange-500 fill-orange-500'
                            : isDark ? 'text-slate-600' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="absolute top-3 left-3">
                    <p className={`font-mono text-xs tracking-wider ${
                      isDark ? 'text-amber-400' : 'text-orange-600'
                    }`}>
                      [QUEST ID: {String(project.id).padStart(3, '0')}]
                    </p>
                  </div>
                </div>

                {/* Content - Made more compact */}
                <div className="p-4">
                  <h3 className={`font-mono text-base font-bold mb-2 tracking-wider ${
                    isDark ? 'text-fuchsia-400' : 'text-purple-700'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`font-mono text-xs mb-3 leading-snug ${
                    isDark ? 'text-violet-300' : 'text-purple-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tags - Made more compact */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className={`px-1 py-0.5 border text-xs font-mono rounded-none ${
                          isDark
                            ? 'bg-slate-800 border-purple-400 text-purple-300'
                            : 'bg-orange-100 border-orange-400 text-orange-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className={`px-1 py-0.5 text-xs font-mono ${
                        isDark ? 'text-purple-400' : 'text-orange-600'
                      }`}>
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Quick View Button - Made more compact */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full px-3 py-1.5 font-mono text-xs font-bold rounded-none border-2 uppercase tracking-wider transition-all ${
                      isDark
                        ? 'bg-purple-600 text-white border-purple-400 hover:bg-purple-500'
                        : 'bg-orange-500 text-white border-orange-400 hover:bg-orange-600'
                    } sm:[box-shadow:1px_1px_0px_rgba(167,139,250,0.3)] ${
                      !isDark && 'sm:[box-shadow:1px_1px_0px_rgba(255,152,0,0.3)]'
                    }`}
                  >
                    Quick View
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick View Modal - Made more compact */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-md w-full rounded-none border-3 overflow-hidden ${
                isDark 
                  ? 'bg-slate-900 border-fuchsia-500' 
                  : 'bg-white border-orange-500'
              } sm:[box-shadow:0_0_30px_rgba(232,121,249,0.6)] ${
                !isDark && 'sm:[box-shadow:0_0_30px_rgba(255,152,0,0.6)]'
              }`}
            >
              {/* Modal Image - Made more compact */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className={`absolute top-3 right-3 p-1.5 rounded-none ${
                    isDark
                      ? 'bg-fuchsia-500 text-white hover:bg-fuchsia-600'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  } transition-all`}
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Modal Content - Made more compact */}
              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className={`font-mono text-xs mb-1 tracking-wider ${
                    isDark ? 'text-amber-400' : 'text-orange-600'
                  }`}>
                    [QUEST DETAILS]
                  </p>
                  <h2 className={`font-mono text-xl font-bold mb-3 tracking-wider ${
                    isDark ? 'text-fuchsia-400' : 'text-purple-700'
                  }`}>
                    {selectedProject.title}
                  </h2>

                  <p className={`font-mono text-xs leading-relaxed mb-4 ${
                    isDark ? 'text-violet-200' : 'text-gray-700'
                  }`}>
                    {selectedProject.description}
                  </p>

                  {/* All Tags - Made more compact */}
                  <div className="mb-4">
                    <p className={`font-mono text-xs mb-2 tracking-wider ${
                      isDark ? 'text-fuchsia-300' : 'text-purple-600'
                    }`}>
                      TOOLS EQUIPPED:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 border text-xs font-mono rounded-none tracking-wider ${
                            isDark
                              ? 'bg-slate-800 border-fuchsia-400 text-fuchsia-300'
                              : 'bg-orange-100 border-orange-500 text-orange-600'
                          }`}
                        >
                          [{tag}]
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Side by side and more compact */}
                  <div className="flex gap-2 flex-wrap">
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 px-4 py-2 font-mono font-bold rounded-none border-3 flex items-center justify-center gap-1 uppercase tracking-wider text-xs transition-all ${
                        isDark
                          ? 'bg-fuchsia-500 text-white border-fuchsia-700 hover:bg-fuchsia-400'
                          : 'bg-green-600 text-white border-green-800 hover:bg-green-500'
                      } sm:[box-shadow:1px_1px_0px_rgba(232,121,249,0.3)] ${
                        !isDark && 'sm:[box-shadow:1px_1px_0px_rgba(16,185,129,0.3)]'
                      }`}
                    >
                      <ExternalLink className="w-3 h-3" />
                      Visit Live
                    </motion.a>
                    <motion.a
  href={selectedProject.githubUrl}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className={`flex-1 px-4 py-2 font-mono font-bold rounded-none border-4 flex items-center justify-center gap-1 uppercase tracking-wider text-xs transition-all ${
    isDark
      ? 'bg-transparent text-amber-400 border-amber-400 hover:bg-amber-400 hover:text-zinc-900'
      : 'bg-transparent text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white'
  } sm:[box-shadow:1px_1px_0px_rgba(245,158,11,0.3)] ${
    !isDark && 'sm:[box-shadow:1px_1px_0px_rgba(168,85,247,0.3)]'
  }`}
>
  <Github className="w-3 h-3" />
  View Code
</motion.a>

                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
