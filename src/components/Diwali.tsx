import { motion } from 'framer-motion';
import DiwaliBg from '../assets/diwali_bg.png';

type DiwaliProps = { onClose: () => void };

const DIWALI_MESSAGES = [
  "✨ QUEST COMPLETE: Light Victory! ✨",
  "You unlocked +100 Happiness XP! 💥",
  "Darkness defeated! 🌟 Keep shining, Player 1!",
  "Loot Collected: Laughter, Sparkles, Joy! 🎁",
];

export default function Diwali({ onClose }: DiwaliProps) {
  const message = DIWALI_MESSAGES[Math.floor(Math.random() * DIWALI_MESSAGES.length)];

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
        className="relative max-w-md w-full rounded-none border-4 border-orange-500 bg-white/90 backdrop-blur-sm p-6 overflow-hidden"
        style={{ boxShadow: '6px 6px 0px rgba(255,152,0,0.5)' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-orange-700 font-mono text-lg"
        >
          ✖
        </button>

        {/* Pulsing Grid Background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(#FF9800 2px, transparent 2px),
              linear-gradient(90deg, #FF9800 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Sparkles / Fireworks */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: ['#FFEB3B', '#FF9800', '#FFFFFF'][Math.floor(Math.random() * 3)],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20 - Math.random() * 20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
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
        <div className="relative z-10 text-center font-mono">
          {/* Floating Diya Image */}
          <motion.img
            src={DiwaliBg}
            alt="Diya"
            className="mx-auto mb-4 w-40 h-40 object-cover rounded-none border-2 border-orange-500"
            style={{ boxShadow: '4px 4px 0px rgba(255,152,0,0.5)' }}
            animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Title with Pixel Shadow & Jiggle */}
          <motion.h2
  className="text-3xl font-bold mb-2"
  style={{ 
    color: '#9b59b6',          // Purple text
    textShadow: '3px 3px 0px #FF9800' // Orange shadow
  }}
  animate={{ rotate: [0, 2, -2, 0] }}
  transition={{ duration: 0.6, repeat: Infinity }}
>
  🎆 HAPPY DIWALI! 🎆
</motion.h2>


          {/* Game-style Message */}
          <p className="font-mono text-sm text-gray-800 mb-4">{message}</p>

          {/* Continue Button with Hover Pulse */}
          <motion.button
            onClick={onClose}
            className="mt-2 px-4 py-2 border-2 border-orange-500 text-orange-700 font-mono rounded-none hover:bg-orange-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTINUE ADVENTURE
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
