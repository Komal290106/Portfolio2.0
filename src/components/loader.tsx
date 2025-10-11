import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoaderProps {
  setIsLoading: (loading: boolean) => void;
}

export function Loader({ setIsLoading }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const loadingMessages = [
    'Initializing Adventure System...',
    'Loading Player Profile...',
    'Compiling Spell Book...',
    'Generating Quest Log...',
    'Calibrating Magic Compass...',
    'Syncing Guild Database...',
    'Preparing Battle Arena...',
    'Polishing Artifacts...',
    'Activating Shield Spells...',
    'Unlocking Portal Gates...',
  ];

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let messageInterval: NodeJS.Timeout;

    // Faster, more synchronized progress
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          return 100;
        }
        // Faster progress increments (5-15% per step)
        const increment = Math.random() * 10 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 400); // Faster interval

    // Sync messages with progress
    messageInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        const next = prev + 1;
        return next >= loadingMessages.length ? loadingMessages.length - 1 : next;
      });
    }, 600);

    // Auto-complete after 3-4 seconds max
    const timeout = setTimeout(() => {
      setProgress(100);
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearTimeout(timeout);
    };
  }, []);

  // Hide loader when progress reaches 100% and notify parent
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [progress, setIsLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      }}
      className="fixed inset-0 z-50 bg-[#1a1330] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(#d946ef 2px, transparent 2px),
            linear-gradient(90deg, #d946ef 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating Pixels */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-fuchsia-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 1.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl">
        {/* Booting Text */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-sm mb-2 text-fuchsia-300"
        >
          {'>'} System Boot Sequence
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-5xl md:text-6xl font-bold mb-2 text-fuchsia-400 tracking-wider"
          style={{
            textShadow: '3px 3px 0px #e879f9, 6px 6px 15px rgba(232, 121, 249, 0.5)',
          }}
        >
          KOMAL.EXE
        </motion.h1>

        {/* Version Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-violet-300 mb-12 text-sm"
        >
          v1.0.0 - The Quest Awaits
        </motion.p>

        {/* Current Loading Message */}
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 h-6"
        >
          <p className="font-mono text-violet-200 text-sm">
            {loadingMessages[currentMessage]}
          </p>
        </motion.div>

        {/* Progress Bar Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-72 md:w-80 mb-6"
        >
          {/* Bar Background */}
          <div className="border-2 border-fuchsia-400 p-1.5 bg-slate-800 mb-3">
            <div className="w-full bg-slate-900 h-6 relative overflow-hidden border border-fuchsia-300">
              {/* Animated Fill */}
              <motion.div
                className="h-full bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  boxShadow: '0 0 15px rgba(232, 121, 249, 0.8), inset 0 0 8px rgba(232, 121, 249, 0.4)',
                }}
              />

              {/* Animated Scanlines */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-15"
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>

          {/* Progress Percentage */}
          <div className="flex justify-between items-center">
            <motion.p
              className="font-mono text-fuchsia-300 text-base font-bold"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              {Math.round(progress)}%
            </motion.p>
            <p className="font-mono text-fuchsia-300 text-xs">
              [{'='.repeat(Math.round(progress / 5))}{' '.repeat(20 - Math.round(progress / 5))}]
            </p>
          </div>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-1"
        >
          <div className="font-mono text-xs text-violet-300">
            <motion.p
              animate={{ opacity: [0.6, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              {progress < 100 ? '▶ LOADING ADVENTURE...' : '✓ READY FOR QUEST'}
            </motion.p>
          </div>
        </motion.div>

        {/* Blinking Cursor */}
        <motion.div
          className="mt-8 inline-block"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <span className="font-mono text-fuchsia-400 text-xl">_</span>
        </motion.div>
      </div>

      {/* Pixel Corner Elements */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-fuchsia-500" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-fuchsia-500" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-fuchsia-500" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-fuchsia-500" />
    </motion.div>
  );
}