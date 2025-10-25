import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { Coffee, Bug, Sparkles, Trophy, Star, Shield, Zap, X, Code, Award } from 'lucide-react';
import { useState } from 'react';
import BugImage from '../assets/bug.png';
import CoffeeImage from '../assets/coffee.png';
import Cat from '../assets/cat.png';
import Tutedude from '../assets/tutedude.png';
import Freecodecamp from '../assets/freecodecamp_certificate.jpeg';
import Hackthemountain from '../assets/htm.png';
import CSS from '../assets/css.png';
import Git from '../assets/git.png';
import JavaScript from '../assets/javascript.png';


type BadgeCategory = 'all' | 'official' | 'fun';

interface Badge {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  category: 'official' | 'fun';
  issuer: string;
  date: string;
  skills: string[];
  certImage?: string;
}

export function Badges() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [filter, setFilter] = useState<BadgeCategory>('all');
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);
const badges: Badge[] = [
  {
    id: '1',
    name: 'Responsive Web Design',
    icon: <Star className="w-8 h-8" />,
    description: 'Demonstrated proficiency in creating adaptive and responsive web interfaces.',
    category: 'official',
    issuer: 'freeCodeCamp',
    date: 'Mar 2025',
    skills: ['HTML', 'CSS', 'Responsive Design'],
    certImage: Freecodecamp
  },
  {
    id: '2',
    name: 'Hack The Mountain 5.0',
    icon: <Trophy className="w-8 h-8" />,
    description: 'Participated in a national-level hackathon and collaborated on innovative web solutions.',
    category: 'official',
    issuer: 'United Latino Students Association',
    date: 'Aug 2024',
    skills: ['Teamwork', 'Problem Solving'],
    certImage: Hackthemountain
  },
  {
    id: '3',
    name: 'CSS (Basic)',
    icon: <Shield className="w-8 h-8" />,
    description: 'Certified in fundamental CSS concepts and styling best practices.',
    category: 'official',
    issuer: 'HackerRank',
    date: '2024',
    skills: ['CSS', 'Styling'],
    certImage: CSS
  },
  {
    id: '4',
    name: 'Git & GitHub',
    icon: <Zap className="w-8 h-8" />,
    description: 'Completed training in version control and collaborative software development workflows.',
    category: 'official',
    issuer: 'Open Source Chandigarh',
    date: '2024',
    skills: ['Git', 'GitHub', 'Collaboration'],
    certImage: Git
  },
  {
    id: '5',
    name: 'Web Development Hackathon',
    icon: <Code className="w-8 h-8" />,
    description: 'Built and presented full-stack web solutions in competitive development events.',
    category: 'official',
    issuer: 'TuteDude',
    date: '2024',
    skills: ['Web Development', 'Hackathon', 'Problem Solving'],
    certImage: Tutedude
  },
  {
    id: '6',
    name: 'JavaScript (Basic)',
    icon: <Zap className="w-8 h-8" />,
    description: 'Certified in core JavaScript principles and ES6+ syntax.',
    category: 'official',
    issuer: 'HackerRank',
    date: '2024',
    skills: ['JavaScript'],
    certImage: JavaScript
  },
  {
    id: '7',
    name: 'Coffee Powered',
    icon: <Coffee className="w-8 h-8" />,
    description: 'Driven by curiosity, creativity — and a fair amount of caffeine.',
    category: 'fun',
    issuer: 'Personal Achievement',
    date: 'Always',
    skills: ['Focus', 'Consistency'],
    certImage: CoffeeImage
  },
  {
    id: '8',
    name: 'Bug Hunter',
    icon: <Bug className="w-8 h-8" />,
    description: 'Consistently identifies and resolves issues across frontend projects.',
    category: 'fun',
    issuer: 'Personal Achievement',
    date: 'Ongoing',
    skills: ['Debugging', 'Problem Solving'],
    certImage: BugImage
  },
  {
    id: '9',
    name: 'Cat Enthusiast',
    icon: <Sparkles className="w-8 h-8" />,
    description: 'Believes every great developer deserves a cat assistant.',
    category: 'fun',
    issuer: 'Cats Worldwide',
    date: 'Forever',
    skills: ['Empathy', 'Patience'],
    certImage: Cat
  },
];

  const filteredBadges = badges.filter(
    (badge) => filter === 'all' || badge.category === filter
  );

  return (
    <section
      id="badges"
      className={`py-20 px-4 relative overflow-hidden ${
        isDark ? 'bg-[#1a1330]' : 'bg-[#FFFDE7]'
      }`}
    >
      {/* Grid background */}
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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className={`font-mono text-3xl md:text-5xl text-center mb-2 font-bold tracking-wider ${
    isDark ? 'text-fuchsia-400' : 'text-purple-700'
  }`}
  style={{
    // Only apply shadow on md+ screens
    textShadow: window.innerWidth >= 768
      ? isDark
        ? '2px 2px 0px #FFFFFF' // white shadow in dark mode
        : '2px 2px 0px #FF9800' // orange shadow in light mode
      : 'none', // no shadow on small screens
  }}
>
  ★ CERTIFICATIONS ★
</motion.h2>


        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-center font-mono text-sm mb-12 ${
            isDark ? 'text-violet-300' : 'text-orange-700'
          }`}
        >
          Click any badge to view the full credential
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {(['all', 'official', 'fun'] as BadgeCategory[]).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 font-mono font-bold text-sm rounded-none border-4 transition-all uppercase tracking-wider ${
                filter === category
                  ? isDark
                    ? 'bg-fuchsia-500 text-white border-fuchsia-700'
                    : 'bg-orange-500 text-white border-orange-700'
                  : isDark
                  ? 'bg-slate-700 text-fuchsia-300 border-fuchsia-400 hover:bg-slate-600'
                  : 'bg-orange-100 text-orange-700 border-orange-400 hover:bg-orange-200'
              }`}
            >
              {category === 'all' && '◆ All'}
              {category === 'official' && '★ Official'}
              {category === 'fun' && '♪ Fun'}
            </motion.button>
          ))}
        </motion.div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBadges.map((badge, idx) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.5, rotateZ: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.15, rotateZ: 5 }}
              onClick={() => setSelectedBadge(badge)}
              className={`relative p-6 rounded-none border-4 cursor-pointer transition-all ${
                badge.category === 'official'
                  ? isDark
                    ? 'bg-slate-900 border-yellow-400 hover:shadow-lg hover:shadow-yellow-400'
                    : 'bg-yellow-50 border-yellow-500 hover:shadow-lg hover:shadow-yellow-400'
                  : isDark
                  ? 'bg-slate-900 border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-400'
                  : 'bg-purple-50 border-purple-400 hover:shadow-lg hover:shadow-purple-400'
              }`}
              onHoverStart={() => setHoveredBadge(badge.id)}
              onHoverEnd={() => setHoveredBadge(null)}
            >
              {/* Badge Icon */}
              <div
                className={`mb-3 flex justify-center ${
                  badge.category === 'official'
                    ? isDark
                      ? 'text-yellow-400'
                      : 'text-yellow-600'
                    : isDark
                    ? 'text-fuchsia-400'
                    : 'text-purple-500'
                }`}
              >
                {badge.icon}
              </div>

              {/* Badge Name */}
              <p
                className={`text-xs text-center font-mono font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {badge.name}
              </p>

              {/* Hover Tooltip */}
              {hoveredBadge === badge.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 rounded-none border-4 ${
                    badge.category === 'official'
                      ? isDark
                        ? 'bg-slate-900 border-yellow-400 text-yellow-100'
                        : 'bg-yellow-50 border-yellow-500 text-gray-800'
                      : isDark
                      ? 'bg-slate-900 border-fuchsia-400 text-fuchsia-100'
                      : 'bg-purple-50 border-purple-400 text-gray-800'
                  } text-xs font-mono z-50 shadow-xl`}
                >
                  <p className="font-bold mb-1">{badge.name}</p>
                  <p className="text-xs opacity-80">{badge.issuer}</p>
                  <p className="text-xs opacity-60 mt-1">Click to view certificate</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Certificate */}
      {selectedBadge && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedBadge(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, rotateZ: -5 }}
            animate={{ scale: 1, rotateZ: 0 }}
            className={`relative max-w-4xl w-full p-6 rounded-none border-4 ${
              selectedBadge.category === 'official'
                ? isDark
                  ? 'bg-slate-800 border-yellow-400'
                  : 'bg-white border-yellow-500'
                : isDark
                ? 'bg-slate-800 border-fuchsia-400'
                : 'bg-white border-fuchsia-500'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedBadge(null)}
              className={`absolute top-4 right-4 p-2 border-2 rounded-none ${
                isDark ? 'border-white text-white' : 'border-gray-800 text-gray-800'
              }`}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Certificate Image - Left Side */}
              <div className="flex flex-col items-center">
                {selectedBadge.certImage ? (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={selectedBadge.certImage}
                    alt={selectedBadge.name}
                    className="w-full max-w-md rounded-none border-2"
                  />
                ) : (
                  <div className={`w-full max-w-md p-12 rounded-none border-2 text-center ${
                    isDark ? 'bg-slate-700 border-slate-600' : 'bg-gray-100 border-gray-300'
                  }`}>
                    <div className={`text-6xl mb-4 ${
                      selectedBadge.category === 'official' ? 'text-yellow-500' : 'text-fuchsia-500'
                    }`}>
                      {selectedBadge.icon}
                    </div>
                    <p className={`font-mono text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Certificate image coming soon
                    </p>
                  </div>
                )}
              </div>

              {/* Details - Right Side */}
              <div className="space-y-4">
                {/* Badge Header */}
                <div className="text-center lg:text-left">
                  <div className={`text-4xl mb-3 flex justify-center lg:justify-start ${
                    selectedBadge.category === 'official'
                      ? 'text-yellow-500'
                      : 'text-fuchsia-500'
                  }`}>
                    {selectedBadge.icon}
                  </div>
                  <h3 className={`font-mono font-bold text-xl ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {selectedBadge.name}
                  </h3>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className={`font-mono text-xs opacity-60 mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      ISSUER
                    </p>
                    <p className={`font-mono font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {selectedBadge.issuer}
                    </p>
                  </div>
                  <div>
                    <p className={`font-mono text-xs opacity-60 mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      DATE
                    </p>
                    <p className={`font-mono font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {selectedBadge.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className={`font-mono text-xs opacity-60 mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    DESCRIPTION
                  </p>
                  <p className={`font-mono text-sm ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    {selectedBadge.description}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <p className={`font-mono text-xs opacity-60 mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    SKILLS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedBadge.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 font-mono text-xs border-2 rounded-none ${
                          selectedBadge.category === 'official'
                            ? isDark
                              ? 'bg-yellow-900 border-yellow-400 text-yellow-200'
                              : 'bg-yellow-100 border-yellow-500 text-yellow-800'
                            : isDark
                            ? 'bg-fuchsia-900 border-fuchsia-400 text-fuchsia-200'
                            : 'bg-purple-100 border-purple-500 text-purple-800'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}