import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

import {
  Coffee,
  Bug,
  Sparkles,
  Trophy,
  Star,
  X,
  Code2,
  Award,
  Layout,
  Palette,
  Atom,
  MountainSnow,
  ShieldCheck,
  GitBranch,
  Lightbulb,
  Database,
  Cat,
  Rocket,
  Presentation,
  Brain,
  ClipboardList,
  Cloud,
  Boxes,
  Table2,
  Server,
} from 'lucide-react';

import { useState } from 'react';
import BugImage from '../assets/bug.png';
import CoffeeImage from '../assets/coffee.png';
import CatImage from '../assets/cat.png';
import Tutedude from '../assets/tutedude.png';
import Freecodecamp from '../assets/freecodecamp_certificate.jpeg';
import Hackthemountain from '../assets/htm.png';
import CSS from '../assets/css.png';
import Git from '../assets/git.png';
import JavaScript from '../assets/javascript.png';
import VaultHeist from '../assets/vaultheist.png';
import TataCrucible from '../assets/tatacrucible.png';
import PromptLab from '../assets/promptlab.png';
import Vibeathon from '../assets/vibeathon.png';
import CredsVideo from '../assets/creds-responsive.mp4';
import ClaudeCode from '../assets/Claude_Code.jpg';
import EliteHack from '../assets/Elite_hack.jpg';
import EY1 from '../assets/EY1.jpg';
import EY2 from '../assets/EY2.jpg';

import EliteHer from '../assets/elite_her.png';
import PromptWars from '../assets/promptwars.png';

import AWSGenAI from '../assets/aws_genai.png';
import IBMGenAI from '../assets/ibm_genai.png';
import MongoDBBasics from '../assets/mongodb_basics.png';

import SQLBasic from '../assets/sql_basic.png';
import SQLIntermediate from '../assets/sql_intermediate.png';
import SQLAdvanced from '../assets/sql_advanced.png';

import RedHatSystemAdminI from '../assets/redhat_system_admin_1.png';
import RedHatSystemAdminII from '../assets/redhat_system_admin_2.png';

type BadgeCategory =
  | 'courses'
  | 'hackathons'
  | 'events'
  | 'fun';

interface Badge {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  category: BadgeCategory;
  issuer: string;
  date: string;
  skills: string[];
  certImage?: string;
  credsVideo?: string;
  featured?: boolean;
}

export function Badges() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [filter, setFilter] = useState<
    'featured' | BadgeCategory
  >('featured');

  const [selectedBadge, setSelectedBadge] =
    useState<Badge | null>(null);

  const [hoveredBadge, setHoveredBadge] =
    useState<string | null>(null);

  const [showVideo, setShowVideo] = useState(false);

  const badges: Badge[] = [

    {
      id: '1',
      name: 'Responsive Web Design',
      icon: <Layout className="w-8 h-8" />,
      description:
        'Mastered responsive layouts, accessibility, and modern web design practices.',
      category: 'courses',
      issuer: 'freeCodeCamp',
      date: 'Mar 2025',
      skills: ['HTML', 'CSS', 'Responsive Design'],
      certImage: Freecodecamp,
      credsVideo: CredsVideo,
      featured: true,
    },

    {
      id: '2',
      name: 'CSS (Basic)',
      icon: <Palette className="w-8 h-8" />,
      description:
        'Certified in essential CSS styling techniques and fundamentals.',
      category: 'courses',
      issuer: 'HackerRank',
      date: 'Sep 2025',
      skills: ['CSS', 'Styling'],
      certImage: CSS,
    },

    {
      id: '3',
      name: 'JavaScript (Basic)',
      icon: <Atom className="w-8 h-8" />,
      description:
        'Completed foundational JavaScript certification covering core programming concepts.',
      category: 'courses',
      issuer: 'HackerRank',
      date: 'Oct 2025',
      skills: ['JavaScript', 'Programming'],
      certImage: JavaScript,
    },

    {
      id: '4',
      name: 'SQL (Basic)',
      icon: <Database className="w-8 h-8" />,
      description:
        'Completed foundational SQL certification covering database fundamentals and queries.',
      category: 'courses',
      issuer: 'HackerRank',
      date: 'Oct 2025',
      skills: ['SQL', 'Databases'],
      certImage: SQLBasic,
    },

    {
      id: '5',
      name: 'SQL (Intermediate)',
      icon: <Table2 className="w-8 h-8" />,
      description:
        'Demonstrated intermediate SQL skills including more advanced querying and database operations.',
      category: 'courses',
      issuer: 'HackerRank',
      date: '2025',
      skills: ['SQL', 'Databases', 'Querying'],
      certImage: SQLIntermediate,
    },

    {
      id: '6',
      name: 'SQL (Advanced)',
      icon: <Server className="w-8 h-8" />,
      description:
        'Demonstrated advanced SQL proficiency through HackerRank certification.',
      category: 'courses',
      issuer: 'HackerRank',
      date: '2025',
      skills: ['SQL', 'Advanced SQL', 'Databases'],
      certImage: SQLAdvanced,
      featured: true,
    },

    {
      id: '7',
      name: 'AWS Educate: Introduction to Generative AI',
      icon: <Cloud className="w-8 h-8" />,
      description:
        'Completed AWS Educate training focused on the fundamentals of Generative AI.',
      category: 'courses',
      issuer: 'AWS Educate',
      date: 'Jul 25, 2026',
      skills: ['Generative AI', 'AWS', 'AI Fundamentals'],
      certImage: AWSGenAI,
      featured: true,
    },

    {
      id: '8',
      name: 'Generative AI Essentials',
      icon: <Sparkles className="w-8 h-8" />,
      description:
        'Completed Generative AI Essentials covering foundational concepts and applications of generative AI.',
      category: 'courses',
      issuer: 'IBM / Coursera',
      date: 'Mar 18, 2026',
      skills: ['Generative AI', 'AI', 'Prompt Engineering'],
      certImage: IBMGenAI,
      featured: true,
    },

    {
      id: '9',
      name: 'MongoDB Basics for Students',
      icon: <Boxes className="w-8 h-8" />,
      description:
        'Completed MongoDB fundamentals focused on working with document databases.',
      category: 'courses',
      issuer: 'MongoDB',
      date: 'Oct 14, 2025',
      skills: ['MongoDB', 'NoSQL', 'Databases'],
      certImage: MongoDBBasics,
    },

    {
      id: '10',
      name: 'Red Hat System Administration I',
      icon: <ShieldCheck className="w-8 h-8" />,
      description:
        'Completed Red Hat System Administration I training.',
      category: 'courses',
      issuer: 'Red Hat',
      date: 'Mar 23, 2026',
      skills: ['Linux', 'System Administration', 'Red Hat'],
      certImage: RedHatSystemAdminI,
    },

    {
      id: '11',
      name: 'Red Hat System Administration II',
      icon: <ShieldCheck className="w-8 h-8" />,
      description:
        'Completed Red Hat System Administration II training.',
      category: 'courses',
      issuer: 'Red Hat',
      date: 'Mar 18, 2026',
      skills: ['Linux', 'System Administration', 'Red Hat'],
      certImage: RedHatSystemAdminII,
    },

    {
      id: '12',
      name: 'Elite Her Hackathon — 2nd Rank',
      icon: <Trophy className="w-8 h-8" />,
      description:
        'Secured 2nd Rank as a member of Team CodeNova at the Elite Her Hackathon.',
      category: 'hackathons',
      issuer: 'Elite Coders',
      date: 'May 2026',
      skills: [
        'Problem Solving',
        'Innovation',
        'Teamwork',
        'Technology',
      ],
      certImage: EliteHer,
      featured: true,
    },

    {
      id: '13',
      name: 'PromptWars Virtual — Challenge 2',
      icon: <Brain className="w-8 h-8" />,
      description:
        'Successfully submitted a verified Generative AI solution for Challenge 2 during PromptWars Virtual.',
      category: 'hackathons',
      issuer: 'Google for Developers / H2S',
      date: 'Aug 11, 2026',
      skills: [
        'Generative AI',
        'Prompt Engineering',
        'AI Applications',
        'Problem Solving',
      ],
      certImage: PromptWars,
      featured: true,
    },

    {
      id: '14',
      name: 'Hack The Mountain 5.0',
      icon: <MountainSnow className="w-8 h-8" />,
      description:
        'Collaborated on real-world problem solving in a national hackathon.',
      category: 'hackathons',
      issuer: 'Hack The Mountain',
      date: 'Sep 2024',
      skills: ['Teamwork', 'Problem Solving'],
      certImage: Hackthemountain,
    },

    {
      id: '15',
      name: 'Web Development Hackathon',
      icon: <Code2 className="w-8 h-8" />,
      description:
        'Built and presented a prototype at a competitive development hackathon.',
      category: 'hackathons',
      issuer: 'TuteDude',
      date: 'Jul 2025',
      skills: [
        'Web Development',
        'Hackathon',
        'Problem Solving',
      ],
      certImage: Tutedude,
    },

    {
      id: '16',
      name: 'VaultHeist Hackathon',
      icon: <ShieldCheck className="w-8 h-8" />,
      description:
        'Participated in the VaultHeist Hackathon organized by CGC University Mohali.',
      category: 'hackathons',
      issuer: 'Unstop / CGC University Mohali',
      date: 'Oct 2025',
      skills: ['Teamwork', 'Innovation'],
      certImage: VaultHeist,
    },

    {
      id: '17',
      name: 'Vibeathon',
      icon: <Rocket className="w-8 h-8" />,
      description:
        'Designed and pitched a creative project in a fast-paced, innovation-focused hackathon.',
      category: 'hackathons',
      issuer: 'Nerds Room',
      date: 'Dec 2025',
      skills: ['Creativity', 'Ideation', 'Presentation'],
      certImage: Vibeathon,
    },

    {
      id: '18',
      name: 'The Claude Challenge',
      icon: <Brain className="w-8 h-8" />,
      description:
        'Participated in The Claude Challenge, solving real-world problems using Claude AI.',
      category: 'hackathons',
      issuer: 'GGSIPU',
      date: '2025',
      skills: ['AI', 'Problem Solving', 'Innovation'],
      certImage: ClaudeCode,
    },

    {
      id: '19',
      name: 'Elite Hacks 1.0',
      icon: <Trophy className="w-8 h-8" />,
      description:
        'Competed in Elite Hacks 1.0, building innovative solutions under time constraints.',
      category: 'hackathons',
      issuer: 'Elite Hacks',
      date: '2025',
      skills: [
        'Hackathon',
        'Teamwork',
        'Rapid Prototyping',
      ],
      certImage: EliteHack,
    },

    {
      id: '20',
      name: 'Git & GitHub Workshop',
      icon: <GitBranch className="w-8 h-8" />,
      description:
        'Hands-on workshop covering Git essentials and GitHub workflows.',
      category: 'events',
      issuer: 'Open Source Chandigarh',
      date: 'Oct 2024',
      skills: ['Git', 'GitHub', 'Collaboration'],
      certImage: Git,
    },

    {
      id: '21',
      name: 'TATA Crucible Campus Quiz 2025',
      icon: <Lightbulb className="w-8 h-8" />,
      description:
        'Participated in the national-level TATA Crucible Campus Quiz.',
      category: 'events',
      issuer: 'Tata Group / Unstop',
      date: '2025',
      skills: ['Quiz', 'Critical Thinking'],
      certImage: TataCrucible,
    },

    {
      id: '22',
      name: 'The Prompt Lab - Innovation Event',
      icon: <Sparkles className="w-8 h-8" />,
      featured: true,
      description:
        'Explored prompt engineering and creativity in an AI-focused workshop.',
      category: 'events',
      issuer: 'Chitkara University',
      date: 'Nov 2025',
      skills: ['AI Innovation', 'Prompt Design'],
      certImage: PromptLab,
    },

    {
      id: '23',
      name: 'EY Techathon 6.0 - Round 1',
      icon: <ClipboardList className="w-8 h-8" />,
      description:
        'Successfully submitted an executive summary for EY Techathon 6.0.',
      category: 'events',
      issuer: 'EY',
      date: '2025',
      skills: [
        'Strategic Thinking',
        'Executive Summary',
        'Business Acumen',
      ],
      certImage: EY1,
    },

    {
      id: '24',
      name: 'EY Techathon 6.0 - Round 2',
      icon: <Presentation className="w-8 h-8" />,
      featured: true,
      description:
        'Advanced to Round 2 with a detailed presentation submission and solution blueprint.',
      category: 'events',
      issuer: 'EY',
      date: '2025',
      skills: [
        'Presentation',
        'Solution Architecture',
        'Technical Documentation',
      ],
      certImage: EY2,
    },

    {
      id: '25',
      name: 'Coffee Powered',
      icon: <Coffee className="w-8 h-8" />,
      description:
        'Runs entirely on caffeine, code, and questionable sleep schedules.',
      category: 'fun',
      issuer: 'Personal Achievement',
      date: 'Always',
      skills: ['Focus', 'Consistency'],
      certImage: CoffeeImage,
    },

    {
      id: '26',
      name: 'Bug Hunter',
      icon: <Bug className="w-8 h-8" />,
      description:
        'Knows how to find bugs faster than they appear.',
      category: 'fun',
      issuer: 'Personal Achievement',
      date: 'Ongoing',
      skills: ['Debugging', 'Problem Solving'],
      certImage: BugImage,
    },

    {
      id: '27',
      name: 'Cat Enthusiast',
      icon: <Cat className="w-8 h-8" />,
      description:
        'Believes every great developer deserves a cat assistant.',
      category: 'fun',
      issuer: 'Cats Worldwide',
      date: 'Forever',
      skills: ['Empathy', 'Patience'],
      certImage: CatImage,
    },
  ];

  const filteredBadges =
    filter === 'featured'
      ? badges.filter((badge) => badge.featured)
      : badges.filter((badge) => badge.category === filter);

  return (
    <section
      id="badges"
      className={`py-20 px-4 relative overflow-hidden ${
        isDark ? 'bg-[#1a1330]' : 'bg-[#FFFDE7]'
      }`}
    >
      {}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(
              ${isDark ? '#d946ef' : '#FF9800'} 2px,
              transparent 2px
            ),
            linear-gradient(
              90deg,
              ${isDark ? '#d946ef' : '#FF9800'} 2px,
              transparent 2px
            )
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`font-mono text-3xl md:text-5xl text-center mb-2 font-bold tracking-wider ${
            isDark ? 'text-fuchsia-400' : 'text-purple-700'
          }`}
          style={{
            textShadow:
              typeof window !== 'undefined' &&
              window.innerWidth >= 768
                ? isDark
                  ? '2px 2px 0px #FFFFFF'
                  : '2px 2px 0px #FF9800'
                : 'none',
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

        {}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {[
            {
              key: 'featured',
              label: 'Featured',
              icon: Star,
            },
            {
              key: 'courses',
              label: 'Courses',
              icon: Award,
            },
            {
              key: 'hackathons',
              label: 'Hackathons',
              icon: Trophy,
            },
            {
              key: 'events',
              label: 'Events',
              icon: Sparkles,
            },
            {
              key: 'fun',
              label: 'Fun',
              icon: Coffee,
            },
          ].map(({ key, label, icon: Icon }) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setFilter(
                  key as 'featured' | BadgeCategory
                )
              }
              className={`px-6 py-2 font-mono font-bold text-sm rounded-none border-4 transition-all uppercase tracking-wider ${
                filter === key
                  ? isDark
                    ? 'bg-fuchsia-500 text-white border-fuchsia-700'
                    : 'bg-orange-500 text-white border-orange-700'
                  : isDark
                    ? 'bg-slate-700 text-fuchsia-300 border-fuchsia-400 hover:bg-slate-600'
                    : 'bg-orange-100 text-orange-700 border-orange-400 hover:bg-orange-200'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {}
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredBadges.map((badge, idx) => (
            <motion.div
              key={badge.id}
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.25,
                delay: idx * 0.05,
                ease: 'easeOut',
              }}
              whileHover={{
                scale: 1.05,
                y: -6,
                boxShadow:
                  '0px 6px 20px rgba(0,0,0,0.25)',
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setSelectedBadge(badge);
                setShowVideo(false);
              }}
              onHoverStart={() =>
                setHoveredBadge(badge.id)
              }
              onHoverEnd={() =>
                setHoveredBadge(null)
              }
              className={`relative p-6 rounded-none border-4 cursor-pointer transition-all ${
                badge.category === 'courses'
                  ? isDark
                    ? 'bg-slate-900 border-yellow-400 hover:shadow-lg hover:shadow-yellow-400'
                    : 'bg-yellow-50 border-yellow-500 hover:shadow-lg hover:shadow-yellow-400'
                  : badge.category === 'hackathons'
                    ? isDark
                      ? 'bg-slate-900 border-green-400 hover:shadow-lg hover:shadow-green-400'
                      : 'bg-green-50 border-green-500 hover:shadow-lg hover:shadow-green-400'
                    : badge.category === 'events'
                      ? isDark
                        ? 'bg-slate-900 border-cyan-400 hover:shadow-lg hover:shadow-cyan-400'
                        : 'bg-cyan-50 border-cyan-500 hover:shadow-lg hover:shadow-cyan-400'
                      : isDark
                        ? 'bg-slate-900 border-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-400'
                        : 'bg-purple-50 border-purple-400 hover:shadow-lg hover:shadow-purple-400'
              }`}
            >
              {}
              <div
                className={`mb-3 flex justify-center ${
                  badge.category === 'courses'
                    ? isDark
                      ? 'text-yellow-400'
                      : 'text-yellow-600'
                    : badge.category === 'hackathons'
                      ? isDark
                        ? 'text-green-400'
                        : 'text-green-600'
                      : badge.category === 'events'
                        ? isDark
                          ? 'text-cyan-400'
                          : 'text-cyan-600'
                        : isDark
                          ? 'text-fuchsia-400'
                          : 'text-purple-500'
                }`}
              >
                {badge.icon}
              </div>

              {}
              <p
                className={`text-xs text-center font-mono font-bold ${
                  isDark
                    ? 'text-white'
                    : 'text-gray-900'
                }`}
              >
                {badge.name}
              </p>

              {}
              {hoveredBadge === badge.id && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 rounded-none border-4 ${
                    badge.category === 'courses'
                      ? isDark
                        ? 'bg-slate-900 border-yellow-400 text-yellow-100'
                        : 'bg-yellow-50 border-yellow-500 text-gray-800'
                      : badge.category === 'hackathons'
                        ? isDark
                          ? 'bg-slate-900 border-green-400 text-green-100'
                          : 'bg-green-50 border-green-500 text-gray-800'
                        : badge.category === 'events'
                          ? isDark
                            ? 'bg-slate-900 border-cyan-400 text-cyan-100'
                            : 'bg-cyan-50 border-cyan-400 text-gray-800'
                          : isDark
                            ? 'bg-slate-900 border-fuchsia-400 text-fuchsia-100'
                            : 'bg-purple-50 border-purple-400 text-gray-800'
                  } text-xs font-mono z-50 shadow-xl`}
                >
                  <p className="font-bold mb-1">
                    {badge.name}
                  </p>

                  <p className="opacity-80">
                    {badge.issuer}
                  </p>

                  <p className="opacity-60 mt-1">
                    Click to view certificate
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {}

        {selectedBadge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => {
              setSelectedBadge(null);
              setShowVideo(false);
            }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{
                scale: 0.8,
                rotateZ: -5,
              }}
              animate={{
                scale: 1,
                rotateZ: 0,
              }}
              className={`relative max-w-4xl w-full p-6 rounded-none border-4 ${
                selectedBadge.category === 'courses'
                  ? isDark
                    ? 'bg-slate-800 border-yellow-400'
                    : 'bg-white border-yellow-500'
                  : selectedBadge.category ===
                      'hackathons'
                    ? isDark
                      ? 'bg-slate-800 border-green-400'
                      : 'bg-white border-green-500'
                    : selectedBadge.category ===
                        'events'
                      ? isDark
                        ? 'bg-slate-800 border-cyan-400'
                        : 'bg-white border-cyan-400'
                      : isDark
                        ? 'bg-slate-800 border-fuchsia-400'
                        : 'bg-white border-fuchsia-500'
              }`}
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              {}
              <motion.button
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setSelectedBadge(null);
                  setShowVideo(false);
                }}
                className={`absolute top-4 right-4 p-2 border-2 rounded-none ${
                  isDark
                    ? 'border-white text-white'
                    : 'border-gray-800 text-gray-800'
                }`}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {}
                <div className="flex flex-col items-center gap-4 relative">

                  {selectedBadge.credsVideo && (
                    <button
                      onClick={() =>
                        setShowVideo(!showVideo)
                      }
                      className={`absolute top-1/2 -right-6 -translate-y-1/2 px-2 py-1 border-2 font-mono text-xs ${
                        isDark
                          ? 'bg-slate-800 text-white border-yellow-400 hover:bg-yellow-600'
                          : 'bg-white text-gray-900 border-yellow-500 hover:bg-yellow-100'
                      } transition-colors`}
                    >
                      {showVideo
                        ? 'CERT →'
                        : 'VIDEO →'}
                    </button>
                  )}

                  {!showVideo &&
                    selectedBadge.certImage && (
                      <div className="w-full max-w-md">
                        <motion.img
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          src={
                            selectedBadge.certImage
                          }
                          alt={
                            selectedBadge.name
                          }
                          className="w-full rounded-none border-2"
                        />
                      </div>
                    )}

                  {showVideo &&
                    selectedBadge.credsVideo && (
                      <div className="w-full max-w-md">
                        <div
                          className={`border-2 p-2 ${
                            isDark
                              ? 'border-yellow-400'
                              : 'border-yellow-500'
                          }`}
                        >
                          <h4 className="font-mono text-sm font-bold text-gray-300 tracking-wide text-center mb-2">
                            ✦ CREDs MODEL PREVIEW ✦
                          </h4>

                          <video
                            controls
                            autoPlay
                            loop
                            muted
                            className="w-full"
                          >
                            <source
                              src={
                                selectedBadge.credsVideo
                              }
                              type="video/mp4"
                            />

                            Your browser does not support the video tag.
                          </video>

                          <p
                            className={`text-center font-mono text-xs mt-2 ${
                              isDark
                                ? 'text-gray-300'
                                : 'text-gray-600'
                            }`}
                          >
                            3D Creds Model —
                            Personalized Digital
                            Credential
                          </p>
                        </div>
                      </div>
                    )}

                  {!showVideo &&
                    !selectedBadge.certImage && (
                      <div
                        className={`w-full max-w-md p-12 rounded-none border-2 text-center ${
                          isDark
                            ? 'bg-slate-700 border-slate-600'
                            : 'bg-gray-100 border-gray-300'
                        }`}
                      >
                        <div className="text-6xl mb-4">
                          {selectedBadge.icon}
                        </div>

                        <p
                          className={`font-mono text-sm ${
                            isDark
                              ? 'text-gray-300'
                              : 'text-gray-600'
                          }`}
                        >
                          Certificate image unavailable
                        </p>
                      </div>
                    )}
                </div>

                {}
                <div className="space-y-4">

                  <div className="text-center lg:text-left">

                    <div
                      className={`text-4xl mb-3 flex justify-center lg:justify-start ${
                        selectedBadge.category ===
                        'courses'
                          ? 'text-yellow-500'
                          : selectedBadge.category ===
                              'hackathons'
                            ? 'text-green-500'
                            : selectedBadge.category ===
                                'events'
                              ? 'text-cyan-500'
                              : 'text-fuchsia-500'
                      }`}
                    >
                      {selectedBadge.icon}
                    </div>

                    <h3
                      className={`font-mono font-bold text-xl ${
                        isDark
                          ? 'text-white'
                          : 'text-gray-900'
                      }`}
                    >
                      {selectedBadge.name}
                    </h3>
                  </div>

                  {}
                  <div className="grid grid-cols-2 gap-4">

                    <div>
                      <p
                        className={`font-mono text-xs mb-1 ${
                          isDark
                            ? 'text-gray-300'
                            : 'text-gray-600'
                        }`}
                      >
                        ISSUER
                      </p>

                      <p
                        className={`font-mono font-bold ${
                          isDark
                            ? 'text-white'
                            : 'text-gray-900'
                        }`}
                      >
                        {selectedBadge.issuer}
                      </p>
                    </div>

                    <div>
                      <p
                        className={`font-mono text-xs mb-1 ${
                          isDark
                            ? 'text-gray-300'
                            : 'text-gray-600'
                        }`}
                      >
                        DATE
                      </p>

                      <p
                        className={`font-mono font-bold ${
                          isDark
                            ? 'text-white'
                            : 'text-gray-900'
                        }`}
                      >
                        {selectedBadge.date}
                      </p>
                    </div>

                  </div>

                  {}
                  <div>
                    <p
                      className={`font-mono text-xs mb-2 ${
                        isDark
                          ? 'text-gray-300'
                          : 'text-gray-600'
                      }`}
                    >
                      DESCRIPTION
                    </p>

                    <p
                      className={`font-mono text-sm ${
                        isDark
                          ? 'text-gray-200'
                          : 'text-gray-700'
                      }`}
                    >
                      {selectedBadge.description}
                    </p>
                  </div>

                  {}
                  <div>
                    <p
                      className={`font-mono text-xs mb-2 ${
                        isDark
                          ? 'text-gray-300'
                          : 'text-gray-600'
                      }`}
                    >
                      SKILLS
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {selectedBadge.skills.map(
                        (skill, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 font-mono text-xs border-2 rounded-none ${
                              selectedBadge.category ===
                              'courses'
                                ? isDark
                                  ? 'bg-yellow-900 border-yellow-400 text-yellow-200'
                                  : 'bg-yellow-100 border-yellow-500 text-yellow-800'
                                : selectedBadge.category ===
                                    'hackathons'
                                  ? isDark
                                    ? 'bg-green-900 border-green-400 text-green-200'
                                    : 'bg-green-100 border-green-500 text-green-800'
                                  : selectedBadge.category ===
                                      'events'
                                    ? isDark
                                      ? 'bg-cyan-900 border-cyan-400 text-cyan-200'
                                      : 'bg-cyan-100 border-cyan-400 text-cyan-800'
                                    : isDark
                                      ? 'bg-fuchsia-900 border-fuchsia-400 text-fuchsia-200'
                                      : 'bg-purple-100 border-purple-500 text-purple-800'
                            }`}
                          >
                            {skill}
                          </span>
                        )
                      )}

                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}