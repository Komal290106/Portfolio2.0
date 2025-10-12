import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { Mail, Linkedin, Github, Send, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/meorrvbr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Quest from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // You can add error handling UI here if needed
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      name: 'Guild Scroll',
      value: 'dhillonkoma@gmail.com',
      icon: Mail,
      bgColor: isDark ? 'bg-emerald-500' : 'bg-emerald-400',
    },
    {
      name: 'Current Quest Status',
      value: 'Open to New Collaborations (Side & Main Quests)',
      icon: MapPin,
      bgColor: isDark ? 'bg-pink-500' : 'bg-pink-400',
    },
    {
      name: 'Response Time',
      value: 'Standard Quest-Time: 1-2 Business Cycles (Days)',
      icon: Clock,
      bgColor: isDark ? 'bg-amber-500' : 'bg-amber-400',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Komal290106',
      bgColor: isDark ? 'bg-emerald-500' : 'bg-emerald-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/komal-kaur-dhillon-59149a330/',
      bgColor: isDark ? 'bg-pink-500' : 'bg-pink-400',
    },
  ];

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden ${
        isDark ? 'bg-[#1a1330]' : 'bg-[#FFFDE7]'
      }`}
    >
      {/* Static Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(${isDark ? '#d946ef' : '#FF9800'} 2px, transparent 2px),
            linear-gradient(90deg, ${isDark ? '#d946ef' : '#FF9800'} 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
  className={`font-mono text-4xl md:text-5xl lg:text-6xl mb-6 font-bold tracking-wider ${
    isDark ? 'text-fuchsia-400' : 'text-purple-700'
  }`}
  style={{
    // Apply shadows only for md+ screens
    textShadow: window.innerWidth >= 768
      ? isDark
        ? '2px 2px 0px #FFFFFF' // White shadow in dark mode
        : '2px 2px 0px rgba(255,152,0,0.8)' // Orange shadow in light mode
      : 'none', // No shadow on mobile
  }}
>
  ⚔️ START A NEW QUEST
</h2>

          <p
            className={`font-mono text-lg md:text-xl max-w-2xl mx-auto ${
              isDark ? 'text-violet-200' : 'text-green-600'
            }`}
          >
            Got an idea brewing in your realm? Send a raven — let's forge something legendary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information - Moved left with larger text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:ml-8"
          >
            <div className="mb-8">
              <h3
                className={`font-mono text-2xl lg:text-3xl font-bold mb-8 tracking-wider ${
                  isDark ? 'text-fuchsia-400' : 'text-orange-600'
                }`}
              >
                CONTACT GUILD MASTER
              </h3>
            </div>

            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className={`${info.bgColor} p-3 rounded-lg flex-shrink-0 flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p
                      className={`font-mono font-bold text-base lg:text-lg ${
                        isDark ? 'text-fuchsia-300' : 'text-purple-700'
                      }`}
                    >
                      {info.name}
                    </p>
                    <p
                      className={`font-mono text-sm lg:text-base mt-2 ${
                        isDark ? 'text-violet-200' : 'text-gray-700'
                      }`}
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8 border-t-2 border-dashed"
              style={{
                borderColor: isDark ? 'rgba(232, 121, 249, 0.3)' : 'rgba(255, 152, 0, 0.3)',
              }}
            >
              <p
                className={`font-mono font-bold text-base lg:text-lg mb-4 ${
                  isDark ? 'text-fuchsia-300' : 'text-orange-600'
                }`}
              >
                JOIN AT PARTY
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${link.bgColor} p-3 rounded-lg flex items-center justify-center transition-all`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Larger for laptops */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`lg:col-span-2 p-8 rounded-lg border-4 relative ${
              isDark
                ? 'bg-slate-800 border-fuchsia-400'
                : 'bg-white border-orange-400'
            } sm:[box-shadow:6px_6px_0px_rgba(232,121,249,0.2)] ${
              !isDark && 'sm:[box-shadow:6px_6px_0px_rgba(255,152,0,0.1)]'
            }`}
          >
            {/* Success Banner */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={`mb-8 p-6 rounded-lg border-2 text-center ${
                  isDark
                    ? 'bg-green-900 border-green-400 text-green-200'
                    : 'bg-green-100 border-green-500 text-green-800'
                }`}
                style={{
                  boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)',
                }}
              >
                <h3 className="font-mono text-xl font-bold tracking-wider mb-2">
                  TRANSMISSION SUCCESSFUL!
                </h3>
                <p className="font-mono text-base">
                  Guild Master Komal is reviewing your quest details.
                </p>
              </motion.div>
            )}

            {!submitted && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block font-mono font-bold text-base lg:text-lg mb-3 ${
                      isDark ? 'text-fuchsia-300' : 'text-purple-700'
                    }`}
                  >
                    ADVENTURER NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="State your name, brave traveler..."
                    required
                    className={`w-full px-4 py-3 rounded-none border-2 font-mono text-base transition-all ${
                      isDark
                        ? 'bg-slate-900 border-fuchsia-400 text-violet-200 focus:border-fuchsia-300'
                        : 'bg-orange-50 border-orange-400 text-gray-800 focus:border-orange-500'
                    } focus:outline-none`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block font-mono font-bold text-base lg:text-lg mb-3 ${
                      isDark ? 'text-fuchsia-300' : 'text-purple-700'
                    }`}
                  >
                    CONTACT SIGNAL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Raven-Mail Address..."
                    required
                    className={`w-full px-4 py-3 rounded-none border-2 font-mono text-base transition-all ${
                      isDark
                        ? 'bg-slate-900 border-fuchsia-400 text-violet-200 focus:border-fuchsia-300'
                        : 'bg-orange-50 border-orange-400 text-gray-800 focus:border-orange-500'
                    } focus:outline-none`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block font-mono font-bold text-base lg:text-lg mb-3 ${
                      isDark ? 'text-fuchsia-300' : 'text-purple-700'
                    }`}
                  >
                    YOUR RESEARCH
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your Quest / Mission Details..."
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-none border-2 font-mono text-base transition-all resize-none ${
                      isDark
                        ? 'bg-slate-900 border-fuchsia-400 text-violet-200 focus:border-fuchsia-300'
                        : 'bg-orange-50 border-orange-400 text-gray-800 focus:border-orange-500'
                    } focus:outline-none`}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: isLoading ? 1 : 1.02, y: isLoading ? 0 : -2 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 rounded-none font-mono font-bold text-lg flex items-center justify-center gap-3 transition-all border-3 uppercase tracking-wider ${
                    isLoading
                      ? 'bg-gray-400 text-white border-gray-600 cursor-not-allowed'
                      : isDark
                      ? 'bg-fuchsia-500 text-white border-fuchsia-700 hover:bg-fuchsia-400'
                      : 'bg-green-600 text-white border-green-800 hover:bg-green-500'
                  } sm:[box-shadow:3px_3px_0px_rgba(232,121,249,0.3)] ${
                    !isDark && !isLoading && 'sm:[box-shadow:3px_3px_0px_rgba(16,185,129,0.3)]'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SEND QUEST SCROLL
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}