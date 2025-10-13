import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pumpkinImage from '../assets/pumpkin.png';
import batImage from '../assets/bat.png';
import HalloweenTicTacToe from './HalloweenTicTacToe';

const FloatingPumpkin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBats, setShowBats] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/halloween_bg_music.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => console.log('Audio play failed'));
    }

    setShowBats(true);
    setIsOpen(true);
    setTimeout(() => setShowBats(false), 3000);
  };

  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      {/* Floating pumpkin button */}
      <motion.div
        className="fixed bottom-4 right-4 w-16 h-16 cursor-pointer z-50"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={handleClick}
      >
        <img src={pumpkinImage} alt="Pumpkin Portal" className="w-full h-full" />
      </motion.div>

      {/* Flying bats */}
      <AnimatePresence>
        {showBats &&
          [...Array(5)].map((_, i) => (
            <motion.img
              key={i}
              src={batImage}
              alt="Bat"
              className="absolute w-8 h-8"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ x: Math.random() * -300, y: Math.random() * -300, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 + Math.random(), repeat: 0 }}
              style={{ left: '90%', bottom: '10%' }}
            />
          ))}
      </AnimatePresence>

      {/* Fullscreen Tic Tac Toe modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex justify-center items-center bg-black/90"
          >
            <div
              ref={modalRef}
              className="relative w-full h-full flex justify-center items-center"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
              >
                ✖
              </button>
              <div className="w-full h-full">
                <HalloweenTicTacToe onClose={function (): void {
                                  throw new Error('Function not implemented.');
                              } } />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingPumpkin;
