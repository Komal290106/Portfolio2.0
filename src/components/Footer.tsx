import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { Mail, Linkedin, Github, Heart, Zap, Scroll, Gamepad2, Sparkles } from 'lucide-react';

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Badges', href: '#badges' },
    { name: 'Skills', href: '#skills' },
    { name: 'Quests', href: '#quests' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:dhillonkomal59@gmail.com',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Komal290106',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/komal-kaur-dhillon-59149a330/',
    },
  ];

  return (
    <footer
      className={`relative overflow-hidden ${
        isDark ? 'bg-gradient-to-b from-slate-900 to-purple-900' : 'bg-gradient-to-b from-gray-900 to-amber-900'
      } py-12 px-4`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-3"
          >
            <Scroll className={`w-8 h-8 ${isDark ? 'text-fuchsia-400' : 'text-amber-400'}`} />
          </motion.div>
          
          <h2
            className={`font-mono text-2xl md:text-3xl font-bold mb-3 tracking-wider ${
              isDark ? 'text-fuchsia-400' : 'text-amber-400'
            }`}
          >
            QUEST COMPLETED
          </h2>
          
          <p
            className={`font-mono text-sm ${
              isDark ? 'text-violet-200' : 'text-amber-100'
            }`}
          >
            The adventure ends here... for now.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
          {/* Brand - Increased text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left max-w-xs"
          >
            <h3
              className={`font-mono text-xl font-bold mb-3 tracking-wider ${
                isDark ? 'text-fuchsia-400' : 'text-amber-400'
              }`}
            >
              KOMAL
            </h3>
            <p
              className={`font-mono text-sm leading-relaxed ${
                isDark ? 'text-violet-200' : 'text-amber-100'
              }`}
            >
              Web developer crafting immersive digital experiences with modern technologies and creative solutions.
            </p>
          </motion.div>

          {/* Quick Links - Added breathing space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4
              className={`font-mono font-bold mb-4 tracking-wider text-sm ${
                isDark ? 'text-fuchsia-300' : 'text-amber-300'
              }`}
            >
              CONTINUE JOURNEY
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`font-mono text-xs px-4 py-2 rounded transition-all ${
                    isDark 
                      ? 'text-violet-200 hover:text-fuchsia-400 bg-purple-900/30 hover:bg-purple-800/50' 
                      : 'text-amber-100 hover:text-amber-400 bg-amber-900/30 hover:bg-amber-800/50'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social - Moved social icons below */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-right"
          >
            <h4
              className={`font-mono font-bold mb-3 tracking-wider text-sm ${
                isDark ? 'text-fuchsia-300' : 'text-amber-300'
              }`}
            >
              CONTACT
            </h4>
            <p
              className={`font-mono text-xs mb-4 ${
                isDark ? 'text-violet-200' : 'text-amber-100'
              }`}
            >
              dhillonkomal59@gmail.com
            </p>
            
            {/* Social Links moved here */}
            <div className="flex justify-center lg:justify-end gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-lg transition-all ${
                      isDark 
                        ? 'text-violet-200 hover:text-fuchsia-400 bg-purple-900/30' 
                        : 'text-amber-100 hover:text-amber-400 bg-amber-900/30'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Konami Code Hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 mb-6"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className={`font-mono text-xs ${
              isDark ? 'text-violet-400' : 'text-amber-400'
            } opacity-70 hover:opacity-100 transition-opacity inline-flex items-center gap-2 cursor-help px-4 py-2 rounded-lg ${
              isDark ? 'bg-purple-900/30' : 'bg-amber-900/30'
            }`}
            title="The classic cheat code unlocks something special!"
          >
            <Gamepad2 className="w-3 h-3" />
            <span>Easter egg: ↑↑↓↓← → ← → BA</span>
            <Sparkles className="w-3 h-3" />
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t"
          style={{
            borderColor: isDark ? 'rgba(192, 132, 252, 0.2)' : 'rgba(251, 191, 36, 0.2)',
          }}
        >
          <p
            className={`font-mono text-xs ${
              isDark ? 'text-violet-400' : 'text-amber-300'
            }`}
          >
            © 2025 KOMAL KAUR DHILLON
          </p>

          <motion.div
            className="flex items-center gap-2 font-mono text-xs"
          >
            <span className={isDark ? 'text-violet-400' : 'text-amber-300'}>
              Made with
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart
                className={`w-3 h-3 ${
                  isDark ? 'text-pink-400' : 'text-red-400'
                } fill-current`}
              />
            </motion.div>
            <span className={isDark ? 'text-violet-400' : 'text-amber-300'}>
              &
            </span>
            <Zap
              className={`w-3 h-3 ${
                isDark ? 'text-yellow-400' : 'text-yellow-300'
              }`}
            />
          </motion.div>

          <p
            className={`font-mono text-xs ${
              isDark ? 'text-violet-400' : 'text-amber-300'
            }`}
          >
            May your code be bug-free
          </p>
        </motion.div>
      </div>
    </footer>
  );
}