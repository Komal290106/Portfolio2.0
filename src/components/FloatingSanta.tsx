import { motion } from 'framer-motion';
import { useState } from 'react';
import Christmas from './Christmas';
import SantaImg from '../assets/santa.png';

export default function FloatingSanta() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Santa */}
      <motion.img
        src={SantaImg}
        alt="Floating Santa"
        className="fixed bottom-6 right-6 cursor-pointer z-50"
        style={{ width: "180px", height: "120px" }}
        
        // 1. Set the initial state (optional, but good for clarity)
        initial={{ y: 0 }}
        
        // 2. Animate ONLY to the top position
        animate={{ y: -20 }} 
        
        // 3. Use "reverse" to make it go back down smoothly
        transition={{
          duration: 2,         // 2 seconds up, 2 seconds down
          repeat: Infinity,    // Loop forever
          repeatType: "reverse", // This creates the smooth yo-yo effect
          ease: "easeInOut"    // Starts slow, speeds up, slows down (natural float)
        }}

        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }} // Added a tap effect for better feel
        onClick={() => setOpen(true)}
      />

      {/* Christmas Modal */}
      {open && <Christmas onClose={() => setOpen(false)} />}
    </>
  );
}