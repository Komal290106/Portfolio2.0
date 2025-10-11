import { motion, AnimatePresence } from 'framer-motion';
import { useKonamiCode } from '../hooks/useKonamiCode';
import { Sparkles, Music, PartyPopper, Gamepad2, Crown, Zap, Heart, Star, Rocket, Palette, Cat, Coffee, Code, Sword, Shield, Trophy, Award, Target, Skull, Ghost, Camera, Video, Mic, Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect } from 'react';
import RickRollAudio from '../assets/Rick-Roll-Sound-Effect.mp3';

export function KonamiMode() {
  const isActive = useKonamiCode();
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Create audio element for Rick Roll
    const bgAudio = new Audio(RickRollAudio);
    bgAudio.loop = true;
    bgAudio.volume = volume;
    setAudio(bgAudio);

    return () => {
      if (bgAudio) {
        bgAudio.pause();
        bgAudio.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (isActive && audio) {
      audio.play().catch(console.error);
    } else if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isActive, audio]);

  const toggleMusic = () => {
    if (audio) {
      if (audio.paused) {
        audio.play().catch(console.error);
        setIsMuted(false);
      } else {
        audio.pause();
      }
    }
  };

  const toggleMute = () => {
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  const changeVolume = (newVolume: number) => {
    setVolume(newVolume);
    if (audio) {
      audio.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
      } else {
        setIsMuted(false);
      }
    }
  };

  // Floating icons for maximum chaos
  const floatingIcons = [
    { icon: Sparkles, size: 24, color: '#FFD700' },
    { icon: Star, size: 20, color: '#FF6B6B' },
    { icon: Heart, size: 22, color: '#FF1493' },
    { icon: Zap, size: 26, color: '#00FF00' },
    { icon: Cat, size: 28, color: '#FFA500' },
    { icon: Coffee, size: 24, color: '#8B4513' },
    { icon: Code, size: 22, color: '#00FFFF' },
    { icon: Sword, size: 30, color: '#C0C0C0' },
    { icon: Shield, size: 32, color: '#4169E1' },
    { icon: Rocket, size: 34, color: '#FF00FF' },
    { icon: Trophy, size: 28, color: '#FFD700' },
    { icon: Target, size: 26, color: '#FF4444' },
    { icon: Skull, size: 30, color: '#FFFFFF' },
    { icon: Ghost, size: 32, color: '#E6E6FA' },
    { icon: Camera, size: 24, color: '#FF69B4' },
    { icon: Video, size: 26, color: '#FF0000' },
  ];

  const achievementBadges = [
    { text: 'PRO GAMER', icon: Gamepad2, color: '#FF6B6B' },
    { text: 'LEGEND', icon: Crown, color: '#FFD700' },
    { text: 'ELITE', icon: Rocket, color: '#00FF00' },
    { text: 'MASTER', icon: Trophy, color: '#FF00FF' },
    { text: 'RICKROLLED', icon: Music, color: '#FF1493' },
    { text: 'HACKER', icon: Code, color: '#00FFFF' },
  ];

  return (
    <AnimatePresence>
      {isActive && (
        <>
          {/* Multiple Animated Background Layers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 pointer-events-none"
            style={{
              background: 'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #ff0080, #ff00ff, #00ff00, #ffff00, #ff0080)',
              backgroundSize: '400% 400%',
              animation: 'gradient 1.5s ease infinite',
            }}
          />

          {/* Rainbow Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="fixed inset-0 z-50 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #8000ff, #ff0080)',
              opacity: 0.3,
              mixBlendMode: 'overlay',
            }}
          />

          {/* Main Celebration Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className="text-center relative">
              {/* Central Animated Icon Cluster */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative mb-8"
              >
                <Crown className="w-40 h-40 text-yellow-400 mx-auto drop-shadow-2xl" />
                <motion.div
                  animate={{ rotate: [-360, 0], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <PartyPopper className="w-20 h-20 text-pink-400 absolute -top-6 -left-6" />
                </motion.div>
                <motion.div
                  animate={{ rotate: [0, 360], scale: [1.2, 0.8, 1.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <Gamepad2 className="w-18 h-18 text-green-400 absolute -top-6 -right-6" />
                </motion.div>
                <motion.div
                  animate={{ rotate: [180, -180], scale: [0.7, 1.3, 0.7] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <Music className="w-16 h-16 text-purple-400 absolute -bottom-6 -left-8" />
                </motion.div>
                <motion.div
                  animate={{ rotate: [-180, 180], scale: [1.3, 0.7, 1.3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <Rocket className="w-16 h-16 text-red-400 absolute -bottom-6 -right-8" />
                </motion.div>
              </motion.div>

              {/* Main Title */}
              <motion.h2
                animate={{
                  scale: [1, 1.15, 1],
                  y: [0, -15, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-mono text-6xl md:text-8xl font-bold mb-6"
                style={{
                  color: '#FFFFFF',
                  textShadow: `
                    0 0 20px #FF0080,
                    0 0 40px #FF0080,
                    0 0 60px #FF0080,
                    0 0 80px #FF00FF,
                    0 0 100px #FF00FF,
                    0 0 120px #FF00FF,
                    0 0 150px #FF00FF
                  `,
                  background: 'linear-gradient(45deg, #FF0080, #FF8C00, #FFFF00, #00FF00, #00FFFF, #0000FF, #FF00FF)',
                  backgroundSize: '400% 400%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradient 2s ease infinite',
                }}
              >
                RICK ROLL MODE!
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="font-mono text-3xl md:text-4xl text-white mb-8"
                style={{
                  textShadow: '0 0 20px rgba(255,255,255,0.9)',
                }}
              >
                Never gonna give you up! <Sparkles className="inline w-8 h-8 ml-2" />
              </motion.p>

              {/* Music Controls */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="flex items-center justify-center gap-6 mb-8 pointer-events-auto bg-black bg-opacity-50 rounded-2xl p-6 backdrop-blur-lg"
              >
                <motion.button
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMusic}
                  className="p-4 bg-white bg-opacity-20 rounded-full backdrop-blur-sm border-2 border-white border-opacity-30"
                >
                  <Music className="w-8 h-8 text-white" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMute}
                  className="p-4 bg-white bg-opacity-20 rounded-full backdrop-blur-sm border-2 border-white border-opacity-30"
                >
                  {isMuted ? (
                    <VolumeX className="w-8 h-8 text-white" />
                  ) : (
                    <Volume2 className="w-8 h-8 text-white" />
                  )}
                </motion.button>
                
                <motion.input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => changeVolume(parseFloat(e.target.value))}
                  className="w-48 accent-pink-500 pointer-events-auto"
                  style={{
                    background: 'linear-gradient(90deg, #ff0080, #ff8c00, #ffff00, #00ff00)',
                  }}
                />
              </motion.div>

              {/* Achievement Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto"
              >
                {achievementBadges.map((badge, index) => {
                  const IconComponent = badge.icon;
                  return (
                    <motion.div
                      key={badge.text}
                      initial={{ scale: 0, rotate: -180, y: 100 }}
                      animate={{ scale: 1, rotate: 0, y: 0 }}
                      transition={{ 
                        delay: 1 + index * 0.15, 
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="px-6 py-4 bg-white bg-opacity-20 rounded-xl backdrop-blur-lg border-2 border-white border-opacity-30 flex items-center gap-3"
                    >
                      <IconComponent className="w-6 h-6" style={{ color: badge.color }} />
                      <span className="text-white font-mono text-sm font-bold">{badge.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Crazy Floating Elements - Increased to 150 */}
          {[...Array(150)].map((_, i) => {
            const IconComponent = floatingIcons[i % floatingIcons.length].icon;
            return (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -100,
                  opacity: 0,
                  scale: 0,
                  rotate: Math.random() * 360,
                }}
                animate={{
                  y: window.innerHeight + 200,
                  x: Math.random() * window.innerWidth - 200,
                  opacity: [0, 1, 1, 0],
                  scale: [0, Math.random() * 1.5 + 0.5, 0],
                  rotate: Math.random() * 1440,
                }}
                transition={{
                  duration: Math.random() * 8 + 4,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                  ease: "linear",
                }}
                className="fixed z-50 pointer-events-none drop-shadow-2xl"
              >
                <IconComponent 
                  size={floatingIcons[i % floatingIcons.length].size}
                  color={floatingIcons[i % floatingIcons.length].color}
                  fill="currentColor"
                />
              </motion.div>
            );
          })}

          {/* Pulsing Circles - Increased to 30 */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`circle-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 2, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="fixed rounded-full border-4 border-white border-opacity-50 z-40 pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                borderColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
              }}
            />
          ))}

          {/* Matrix-style Falling Code - Increased to 100 */}
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`matrix-${i}`}
              initial={{
                x: Math.random() * window.innerWidth,
                y: -50,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                y: window.innerHeight + 50,
                x: Math.random() * window.innerWidth - 100,
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="fixed font-mono text-green-400 text-xl z-50 pointer-events-none font-bold"
              style={{
                textShadow: '0 0 20px #00FF00, 0 0 40px #00FF00',
                color: `hsl(${120 + Math.random() * 60}, 100%, ${50 + Math.random() * 30}%)`,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}

          {/* Exploding Particles - Increased to 300 */}
          {[...Array(300)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              initial={{
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                opacity: 1,
                scale: 0,
              }}
              animate={{
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 1500,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 1500,
                opacity: [1, 0],
                scale: [0, Math.random() * 2 + 1, 0],
                rotate: Math.random() * 720,
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 8,
              }}
              className="fixed rounded-full z-50 pointer-events-none"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                boxShadow: `0 0 20px currentColor, 0 0 40px currentColor`,
              }}
            />
          ))}

          {/* CSS Animations */}
          <style>{`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            
            @keyframes rickRoll {
              0% { transform: scale(1) rotate(0deg); }
              25% { transform: scale(1.1) rotate(5deg); }
              50% { transform: scale(1.05) rotate(-5deg); }
              75% { transform: scale(1.1) rotate(5deg); }
              100% { transform: scale(1) rotate(0deg); }
            }
            
            .rick-roll {
              animation: rickRoll 2s ease-in-out infinite;
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}