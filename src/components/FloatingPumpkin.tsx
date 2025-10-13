import { motion } from 'framer-motion';
import { useState } from 'react';
import Halloween from './Halloween';
import PumpkinImg from '../assets/pumpkin.png'; // 👻 replace with your pumpkin image path

export default function FloatingPumpkin() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Pumpkin */}
      <motion.img
        src={PumpkinImg}
        alt="Floating Pumpkin"
        className="fixed w-16 h-16 bottom-6 right-6 cursor-pointer z-50"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.2, rotate: 5 }}
        onClick={() => setOpen(true)}
      />

      {/* Halloween Modal */}
      {open && <Halloween onClose={() => setOpen(false)} />}
    </>
  );
}
