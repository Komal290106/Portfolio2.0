import { motion } from 'framer-motion';
import ChristmasBg from '../assets/christmas_bg.png'; // 🎅 Replace with your festive image

type ChristmasProps = { onClose: () => void };

const CHRISTMAS_MESSAGES = [
  "🎁 QUEST COMPLETED: Gift of Productivity Unlocked!",
  "You gained +100 Holiday Spirit XP! ✨",
  "Santa approves your code! 🎅💻",
  "New title unlocked: The Jolly Developer ❄️",
  "Bonus reward: +1 Hot Chocolate & +5 Motivation ☕",
];

export default function Christmas({ onClose }: ChristmasProps) {
  const message =
    CHRISTMAS_MESSAGES[Math.floor(Math.random() * CHRISTMAS_MESSAGES.length)];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-md w-full rounded-none border-4 border-red-700 bg-[#1a1d2e]/90 backdrop-blur-sm p-6 overflow-hidden"
        style={{ boxShadow: '6px 6px 0px rgba(220,38,38,0.6)' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-400 font-mono text-lg"
        >
          ✖
        </button>

        {/* Snowy Grid Background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(#4ADE80 2px, transparent 2px),
              linear-gradient(90deg, #4ADE80 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Floating Snowflakes / Sparkles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: ['#4ADE80', '#EF4444', '#FFF'][Math.floor(Math.random() * 3)],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -25 - Math.random() * 20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 1, 0.3],
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
        <div className="relative z-10 text-center font-mono text-green-100">
          {/* Floating Santa / Christmas Image */}
          <motion.img
            src={ChristmasBg}
            alt="Christmas"
            className="mx-auto mb-4 w-40 h-40 object-cover border-2 border-red-600 rounded-none"
            style={{ boxShadow: '4px 4px 0px rgba(220,38,38,0.4)' }}
            animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Title */}
          <motion.h2
            className="text-3xl font-bold mb-2"
            style={{
              color: '#4ADE80',
              textShadow: '3px 3px 12px rgba(74,222,128,0.7)',
            }}
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            🎄 MERRY CHRISTMAS! 🎄
          </motion.h2>

          {/* Message */}
          <p className="font-mono text-sm text-green-200 mb-4">{message}</p>

          {/* Continue Button */}
          <motion.button
            onClick={onClose}
            className="mt-2 px-4 py-2 border-2 border-green-500 text-green-200 font-mono rounded-none hover:bg-green-600/30"
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
