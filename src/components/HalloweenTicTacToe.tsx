import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Zap, Trophy } from 'lucide-react';
import pumpkinImage from '../assets/pumpkin.png';
import ghostImage from '../assets/ghost.png';
import batImage from '../assets/bat.png';
import bgMusic from '../assets/halloween_bg_music.mp3';

interface GameState {
  board: (null | 'player' | 'computer')[];
  currentPlayer: 'player' | 'computer';
  winner: null | 'player' | 'computer' | 'tie';
  scores: { player: number; computer: number; ties: number };
  gameMode: null | 'pvp' | 'pvc';
  isComputerThinking: boolean;
  streak: number;
  maxStreak: number;
}

const HalloweenTicTacToe = ({ onClose }: { onClose: () => void }) => {
  const [gameState, setGameState] = useState<GameState>({
    board: Array(9).fill(null),
    currentPlayer: 'player',
    winner: null,
    scores: { player: 0, computer: 0, ties: 0 },
    gameMode: null,
    isComputerThinking: false,
    streak: 0,
    maxStreak: 0,
  });
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    if (
      gameState.gameMode === 'pvc' &&
      gameState.currentPlayer === 'computer' &&
      !gameState.winner &&
      !gameState.isComputerThinking
    ) {
      const timer = setTimeout(() => computerMove(), 600);
      return () => clearTimeout(timer);
    }
  }, [gameState.currentPlayer, gameState.gameMode, gameState.winner, gameState.isComputerThinking]);

  const checkWinner = (board: (null | 'player' | 'computer')[]): null | 'player' | 'computer' | 'tie' => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.includes(null) ? null : 'tie';
  };

  const getAvailableMoves = (board: (null | 'player' | 'computer')[]): number[] => {
    return board.map((cell, idx) => (cell === null ? idx : null)).filter((idx): idx is number => idx !== null);
  };

  const minimax = (board: (null | 'player' | 'computer')[], depth: number, isMaximizing: boolean): number => {
    const winner = checkWinner(board);
    if (winner === 'computer') return 10 - depth;
    if (winner === 'player') return depth - 10;
    if (winner === 'tie') return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (const move of getAvailableMoves(board)) {
        board[move] = 'computer';
        const score = minimax(board, depth + 1, false);
        board[move] = null;
        bestScore = Math.max(score, bestScore);
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (const move of getAvailableMoves(board)) {
        board[move] = 'player';
        const score = minimax(board, depth + 1, true);
        board[move] = null;
        bestScore = Math.min(score, bestScore);
      }
      return bestScore;
    }
  };

  const computerMove = () => {
    setGameState((prev) => ({ ...prev, isComputerThinking: true }));

    setTimeout(() => {
      setGameState((prev) => {
        if (prev.winner || !prev.board.includes(null)) return prev;

        const availableMoves = getAvailableMoves(prev.board);
        let bestMove = availableMoves[0];
        let bestScore = -Infinity;

        for (const move of availableMoves) {
          const testBoard = [...prev.board];
          testBoard[move] = 'computer';
          const score = minimax(testBoard, 0, false);
          if (score > bestScore) {
            bestScore = score;
            bestMove = move;
          }
        }

        const newBoard = [...prev.board];
        newBoard[bestMove] = 'computer';
        const winner = checkWinner(newBoard);

        const newScores = { ...prev.scores };
        let newStreak = prev.streak;
        let newMaxStreak = prev.maxStreak;

        if (winner === 'computer') {
          newScores.computer++;
          newStreak = 0;
        } else if (winner === 'player') {
          newScores.player++;
        } else if (winner === 'tie') {
          newScores.ties++;
          newStreak = 0;
        }

        if (newStreak > newMaxStreak) newMaxStreak = newStreak;

        return {
          ...prev,
          board: newBoard,
          currentPlayer: 'player',
          winner,
          scores: newScores,
          streak: newStreak,
          maxStreak: newMaxStreak,
          isComputerThinking: false,
        };
      });
    }, 500);
  };

  const handleCellClick = (index: number) => {
    if (
      gameState.board[index] ||
      gameState.winner ||
      !gameState.gameMode ||
      (gameState.gameMode === 'pvc' && gameState.currentPlayer === 'computer') ||
      gameState.isComputerThinking
    ) {
      return;
    }

    const newBoard = [...gameState.board];
    newBoard[index] = 'player';
    const winner = checkWinner(newBoard);

    const newScores = { ...gameState.scores };
    let newStreak = gameState.streak;
    let newMaxStreak = gameState.maxStreak;

    if (winner === 'player') {
      newScores.player++;
      newStreak += 1;
      if (newStreak > newMaxStreak) newMaxStreak = newStreak;
    } else if (winner === 'computer') {
      newScores.computer++;
      newStreak = 0;
    } else if (winner === 'tie') {
      newScores.ties++;
      newStreak = 0;
    }

    setGameState({
      ...gameState,
      board: newBoard,
      currentPlayer: gameState.gameMode === 'pvp' ? (gameState.currentPlayer === 'player' ? 'computer' : 'player') : 'computer',
      winner,
      scores: newScores,
      streak: newStreak,
      maxStreak: newMaxStreak,
    });
  };

  const resetGame = () => {
    setGameState((prev) => ({
      ...prev,
      board: Array(9).fill(null),
      winner: null,
      currentPlayer: 'player',
      isComputerThinking: false,
    }));
  };

  const setGameMode = (mode: 'pvp' | 'pvc') => {
    setGameState({
      board: Array(9).fill(null),
      currentPlayer: 'player',
      winner: null,
      scores: { player: 0, computer: 0, ties: 0 },
      gameMode: mode,
      isComputerThinking: false,
      streak: 0,
      maxStreak: 0,
    });
  };

  return (
    <AnimatePresence>
      <audio ref={audioRef} src={bgMusic} loop />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[99999] overflow-y-auto flex justify-center items-start md:items-center bg-black py-4 md:py-0"
      >
        {/* Floating Bats Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 10 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              <img src={batImage} alt="bat" className="w-6 h-6 md:w-10 md:h-10 opacity-70" />
            </motion.div>
          ))}
        </div>

        {/* Halloween Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(#FF8C00 1px, transparent 1px),
              linear-gradient(90deg, #FF8C00 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold z-[10000] hover:text-[#FF8C00] transition-colors"
        >
          ✖
        </motion.button>

        {/* Main Container */}
        <div className="relative w-full max-w-2xl flex flex-col items-center gap-4 md:gap-6 p-4 md:p-8 z-10">
          <AnimatePresence mode="wait">
            {!gameState.gameMode ? (
              // Main Menu
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center w-full gap-6 md:gap-8"
              >
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-center"
                >
                  <div className="font-mono text-xs md:text-sm text-[#FF8C00] mb-2 md:mb-4 tracking-widest font-bold">
                    HALLOWEEN SPECIAL
                  </div>
                  <motion.h1
                    className="font-mono text-5xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight"
                    style={{
                      color: '#FF8C00',
                      textShadow: '4px 4px 0px #000000, 6px 6px 0px rgba(255,255,255,0.3)',
                    }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    TIC TAC TOE
                  </motion.h1>
                  <div className="font-mono text-white text-base md:text-lg" style={{ textShadow: '2px 2px 0px rgba(255,255,255,0.3)' }}>
                    Choose Your Battle
                  </div>
                </motion.div>

                {/* Game Mode Selection */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-full max-w-xs space-y-4 md:space-y-5"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, x: 8 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setGameMode('pvp')}
                    className="w-full px-6 py-5 md:py-6 bg-black border-4 border-[#FF8C00] text-white font-mono font-bold text-base md:text-lg rounded-none hover:bg-[#FF8C00] hover:text-black transition-all duration-300 flex items-center justify-between group"
                    style={{ boxShadow: '6px 6px 0px #000000' }}
                  >
                    <div className="flex items-center gap-3">
                      <img src={pumpkinImage} alt="Pumpkin" className="w-7 h-7 md:w-8 md:h-8" />
                      <span>PLAYER VS PLAYER</span>
                    </div>
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, x: 8 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setGameMode('pvc')}
                    className="w-full px-6 py-5 md:py-6 bg-[#FF8C00] border-4 border-black text-black font-mono font-bold text-base md:text-lg rounded-none hover:bg-black hover:text-[#FF8C00] transition-all duration-300 flex items-center justify-between group"
                    style={{ boxShadow: '6px 6px 0px #000000' }}
                  >
                    <div className="flex items-center gap-3">
                      <img src={ghostImage} alt="Ghost" className="w-7 h-7 md:w-8 md:h-8" />
                      <span>PLAYER VS GHOST</span>
                    </div>
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </motion.div>
              </motion.div>
            ) : (
              // Game Screen
              <motion.div
                key="game"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col w-full gap-3 md:gap-4"
              >
                {/* Header */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-center"
                >
                  <h2 
                    className="font-mono text-3xl md:text-4xl font-bold"
                    style={{
                      color: '#FF8C00',
                      textShadow: '3px 3px 0px #000000, 4px 4px 0px rgba(255,255,255,0.3)',
                    }}
                  >
                    HALLOWEEN BATTLE
                  </h2>
                </motion.div>

                {/* Score Display */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="bg-black border-3 border-[#FF8C00] p-3 md:p-4"
                  style={{ boxShadow: '4px 4px 0px #000000' }}
                >
                  <div className="font-mono text-xs md:text-sm text-[#FF8C00] mb-3 font-bold text-center">SCORE BOARD</div>
                  <div className="flex justify-between items-center gap-2 md:gap-3">
                    <div className="flex-1 text-center">
                      <img src={pumpkinImage} alt="player" className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2" />
                      <div className="font-mono font-bold text-white text-xl md:text-2xl" style={{ textShadow: '2px 2px 0px rgba(255,255,255,0.3)' }}>
                        {gameState.scores.player}
                      </div>
                      <div className="font-mono text-xs text-[#FF8C00] mt-1">PUMPKIN</div>
                    </div>
                    
                    <div className="flex-1 text-center">
                      <div className="font-mono text-[#FF8C00] text-xs mb-2 font-bold">TIES</div>
                      <div className="font-mono font-bold text-white text-xl md:text-2xl" style={{ textShadow: '2px 2px 0px rgba(255,255,255,0.3)' }}>
                        {gameState.scores.ties}
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center">
                      <img src={ghostImage} alt="computer" className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2" />
                      <div className="font-mono font-bold text-white text-xl md:text-2xl" style={{ textShadow: '2px 2px 0px rgba(255,255,255,0.3)' }}>
                        {gameState.scores.computer}
                      </div>
                      <div className="font-mono text-xs text-[#FF8C00] mt-1">GHOST</div>
                    </div>
                  </div>

                  {/* Streak Display */}
                  {gameState.gameMode === 'pvc' && gameState.maxStreak > 0 && (
                    <div className="mt-3 pt-3 border-t border-[#FF8C00]/50 flex justify-around items-center">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Zap className="w-4 h-4 text-[#FF8C00]" />
                          <span className="font-mono text-xs text-[#FF8C00] font-bold">CURRENT</span>
                        </div>
                        <div className="font-mono text-lg font-bold text-white">{gameState.streak}</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Trophy className="w-4 h-4 text-[#FF8C00]" />
                          <span className="font-mono text-xs text-[#FF8C00] font-bold">BEST</span>
                        </div>
                        <div className="font-mono text-lg font-bold text-white">{gameState.maxStreak}</div>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Game Board */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center justify-center"
                >
                  <div 
                    className="grid grid-cols-3 gap-2 md:gap-3 bg-black p-3 md:p-4 border-3 border-[#FF8C00]"
                    style={{ boxShadow: '6px 6px 0px #000000' }}
                  >
                    {gameState.board.map((cell, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleCellClick(index)}
                        whileHover={!cell && !gameState.winner ? { scale: 1.08, backgroundColor: '#1a1a1a' } : {}}
                        whileTap={!cell && !gameState.winner ? { scale: 0.92 } : {}}
                        disabled={!!cell || !!gameState.winner}
                        className="w-16 h-16 md:w-20 md:h-20 bg-black border-2 md:border-3 border-[#FF8C00] hover:border-white transition-all duration-200 flex items-center justify-center"
                        style={{
                          boxShadow: cell ? '0 0 15px rgba(255, 140, 0, 0.6)' : 'none',
                          borderWidth: '1.5px',
                        }}
                      >
                        <motion.div
                          initial={cell ? { scale: 0, rotate: -180 } : {}}
                          animate={cell ? { scale: 1, rotate: 0 } : {}}
                          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        >
                          {cell === 'player' && (
                            <img src={pumpkinImage} alt="pumpkin" className="w-11 h-11 md:w-14 md:h-14" />
                          )}
                          {cell === 'computer' && (
                            <img src={ghostImage} alt="ghost" className="w-11 h-11 md:w-14 md:h-14" />
                          )}
                        </motion.div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Status */}
                <div className="text-center min-h-12 flex items-center justify-center">
                  {gameState.isComputerThinking && (
                    <motion.div 
                      className="font-mono text-sm md:text-base text-[#FF8C00] font-bold flex items-center gap-2"
                      style={{ textShadow: '2px 2px 0px rgba(255,255,255,0.3)' }}
                    >
                      <motion.img
                        src={ghostImage}
                        alt="Ghost thinking"
                        className="w-5 h-5"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      THINKING...
                      <motion.img
                        src={ghostImage}
                        alt="Ghost thinking"
                        className="w-5 h-5"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      />
                    </motion.div>
                  )}
                  {gameState.winner && (
                    <motion.div 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }} 
                      className="text-center"
                    >
                      <div 
                        className="font-mono font-bold text-xl md:text-2xl"
                        style={{
                          color: '#FF8C00',
                          textShadow: '3px 3px 0px #000000, 4px 4px 0px rgba(255,255,255,0.3)',
                        }}
                      >
                        {gameState.winner === 'player'
                          ? 'PUMPKIN WINS! 🎃'
                          : gameState.winner === 'computer'
                            ? 'GHOST WINS! 👻'
                            : 'TIE GAME! 🤝'}
                      </div>
                    </motion.div>
                  )}
                  {!gameState.winner &&
                    !gameState.isComputerThinking &&
                    gameState.board.includes(null) && (
                      <motion.div 
                        key={`turn-${gameState.currentPlayer}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-mono text-sm md:text-base text-white font-bold flex items-center gap-2"
                        style={{ textShadow: '2px 2px 0px rgba(255,255,255,0.3)' }}
                      >
                        {gameState.currentPlayer === 'player' ? (
                          <img src={pumpkinImage} alt="pumpkin turn" className="w-5 h-5" />
                        ) : (
                          <img src={ghostImage} alt="ghost turn" className="w-5 h-5" />
                        )}
                        {gameState.gameMode === 'pvp'
                          ? `${gameState.currentPlayer === 'player' ? 'PUMPKIN' : 'GHOST'}'S TURN`
                          : gameState.currentPlayer === 'player'
                            ? "YOUR TURN!"
                            : "GHOST'S TURN"}
                      </motion.div>
                    )}
                </div>

                {/* Buttons */}
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="flex gap-3 md:gap-4 w-full"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetGame}
                    className="flex-1 px-4 py-3 md:py-4 bg-black border-2 md:border-3 border-[#FF8C00] text-white font-mono font-bold text-sm md:text-base rounded-none hover:bg-[#FF8C00] hover:text-black transition-all duration-300"
                    style={{ boxShadow: '3px 3px 0px #000000' }}
                  >
                    NEW ROUND
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setGameState({
                      board: Array(9).fill(null),
                      currentPlayer: 'player',
                      winner: null,
                      scores: { player: 0, computer: 0, ties: 0 },
                      gameMode: null,
                      isComputerThinking: false,
                      streak: 0,
                      maxStreak: 0,
                    })}
                    className="flex-1 px-4 py-3 md:py-4 bg-[#FF8C00] border-2 md:border-3 border-black text-black font-mono font-bold text-sm md:text-base rounded-none hover:bg-black hover:text-[#FF8C00] transition-all duration-300"
                    style={{ boxShadow: '3px 3px 0px #000000' }}
                  >
                    MAIN MENU
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HalloweenTicTacToe;