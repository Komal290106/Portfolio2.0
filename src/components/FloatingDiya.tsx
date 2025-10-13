import { motion } from 'framer-motion';
import { useState } from 'react';
import Diwali from './Diwali';
import DiyaImg from '../assets/dia.png';

export default function FloatingDiya() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Diya */}
      <motion.img
        src={DiyaImg}
        alt="Floating Diya"
        className="fixed w-16 h-16 bottom-6 right-6 cursor-pointer z-50"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.2 }}
        onClick={() => setOpen(true)}
      />

      {/* Diwali Modal */}
      {open && <Diwali onClose={() => setOpen(false)} />}
    </>
  );
}
