import { ThemeProvider, useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Badges } from './components/Badges';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { KonamiMode } from './components/KonamiMode';
import { Footer } from './components/Footer';
import { Loader } from './components/loader';
// import FloatingPumpkin from './components/FloatingPumpkin'; // ✅ floating pumpkin portal
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function AppContent() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Fallback: hide loader after 6 seconds
    const fallbackTimer = setTimeout(() => setIsLoading(false), 6000);
    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen transition-colors duration-300">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loader setIsLoading={setIsLoading} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Header />
              <Hero />

              {/* 🎃 Floating Halloween Pumpkin Portal */}
              {/* <FloatingPumpkin /> */}

              <About />
              <Badges />
              <Skills />
              <Projects />
              <Contact />
              <KonamiMode />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
