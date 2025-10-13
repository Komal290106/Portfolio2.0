import { motion } from 'framer-motion';
import HalloweenBg from '../assets/halloween_bg.png'; // 🎃 Replace with your spooky image

type HalloweenProps = { onClose: () => void };

const HALLOWEEN_MESSAGES = [
  "💀 QUEST UNLOCKED: Shadow Realm Entry 💀",
  "You gained +66 Spookiness XP! 🎃",
  "Monster defeated! 🍬 Loot: Candy + Courage!",
  "Beware... The full moon watches you 🌕✨",
  "New title earned: The Fearless Coder 🧙‍♀️",
];

export default function Halloween({ onClose }: HalloweenProps) {
  const message = HALLOWEEN_MESSAGES[Math.floor(Math.random() * HALLOWEEN_MESSAGES.length)];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-md w-full rounded-none border-4 border-orange-800 bg-gray-900/90 backdrop-blur-sm p-6 overflow-hidden"
        style={{ boxShadow: '6px 6px 0px rgba(255,87,34,0.6)' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-orange-500 font-mono text-lg"
        >
          ✖
        </button>

        {/* Grid Background with Pulse (Dark Orange) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(#FF6B1A 2px, transparent 2px),
              linear-gradient(90deg, #FF6B1A 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Sparkles / Floating Embers */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: ['#FF6B1A', '#FFA726', '#FFF'][Math.floor(Math.random() * 3)],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -20 - Math.random() * 20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.4, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 text-center font-mono text-orange-100">
          {/* Floating Pumpkin / Ghost Image */}
          <motion.img
            src={HalloweenBg}
            alt="Pumpkin"
            className="mx-auto mb-4 w-40 h-40 object-cover border-2 border-orange-600 rounded-none"
            style={{ boxShadow: '4px 4px 0px rgba(255,87,34,0.4)' }}
            animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Title with Fiery Glow & Wobble */}
          <motion.h2
            className="text-3xl font-bold mb-2"
            style={{
              color: '#FF6B1A',
              textShadow: '3px 3px 12px rgba(255,120,30,0.8)',
            }}
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            🎃 HAPPY HALLOWEEN! 🎃
          </motion.h2>

          {/* Game-style Message */}
          <p className="font-mono text-sm text-orange-200 mb-4">{message}</p>

          {/* Continue Button */}
          <motion.button
            onClick={onClose}
            className="mt-2 px-4 py-2 border-2 border-orange-700 text-orange-300 font-mono rounded-none hover:bg-orange-700/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTINUE QUEST
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
