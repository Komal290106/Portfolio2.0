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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New message from ${formData.name}`,
        }),
      });

      if (!response.ok) throw new Error('Failed');

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  const handleChange = (e:any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactInfo = [
    { name: 'Email', value: 'dhillonkoma@gmail.com', icon: Mail, color: 'bg-emerald-500' },
    { name: 'Location', value: 'Punjab, India', icon: MapPin, color: 'bg-pink-500' },
    { name: 'Response Time', value: 'Typically within 1–2 business days', icon: Clock, color: 'bg-amber-500' },
  ];

  const socials = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Komal290106', color: 'bg-emerald-500' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/komal-kaur-dhillon-59149a330/', color: 'bg-pink-500' },
  ];

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden 
      ${isDark ? 'bg-[#1a1330]' : 'bg-[#FFFDE7]'}`}
    >
      {/* Grid Background */}
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

      <div className="max-w-5xl w-full relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2
  className={`font-mono text-4xl md:text-5xl lg:text-6xl mb-6 font-bold tracking-wider ${
    isDark ? 'text-fuchsia-400' : 'text-purple-700'
  }`}
  style={{
    textShadow: isDark
      ? '2px 2px 0px rgba(255,255,255,0.85)'  // 💡 White shadow in dark mode
      : '2px 2px 0px rgba(255,152,0,0.7)',  // Warm shadow in light mode
  }}
>
  GET IN TOUCH
</h2>


          <p className={`font-mono text-lg max-w-xl mx-auto 
            ${isDark ? 'text-violet-200' : 'text-gray-700'}`}>
            Have an idea, collaboration or project? Let’s create something meaningful together.
          </p>
        </motion.div>

        {/* GRID LAYOUT FIXED */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12">
          
          {/* CONTACT INFO - Bigger + better */}
          <div className="space-y-10">
            <h3 className={`font-mono text-3xl font-bold tracking-wider 
              ${isDark ? 'text-fuchsia-400' : 'text-orange-600'}`}>
              Contact Info
            </h3>

            <div className="space-y-8">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className={`${info.color} w-14 h-14 rounded-lg flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div>
                      <p className={`font-mono font-bold text-lg 
                        ${isDark ? 'text-fuchsia-300' : 'text-purple-700'}`}>
                        {info.name}
                      </p>

                      <p className={`font-mono text-base mt-1 
                        ${isDark ? 'text-violet-200' : 'text-gray-700'}`}>
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* SOCIALS */}
            <div className="pt-6 border-t border-fuchsia-400/30">
              <p className={`font-mono text-xl font-bold mb-3 
                ${isDark ? 'text-fuchsia-300' : 'text-orange-600'}`}>
                Connect with me
              </p>
              <div className="flex gap-4">
                {socials.map(s => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      whileHover={{ scale: 1.12, y: -3 }}
                      className={`${s.color} w-14 h-14 rounded-lg flex items-center justify-center`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* FORM - Compact now */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`p-6 md:p-8 rounded-lg border-4 
              ${isDark ? 'bg-slate-800 border-fuchsia-400' : 'bg-white border-orange-400'}`}
          >
            {submitted ? (
              <div className="text-center p-6 border-2 rounded-lg bg-green-900/30 border-green-400">
                <p className="font-mono text-xl text-green-200">Message Sent!</p>
                <p className="font-mono text-sm text-green-100">I'll reply soon ❤️</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* NAME */}
                <div>
                  <label className={`block font-mono font-bold mb-1 
                    ${isDark ? 'text-fuchsia-300' : 'text-purple-700'}`}>
                    Your Name
                  </label>
                  <input
  type="text"
  id="name"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter your full name"
  required
  className={`w-full px-4 py-3 rounded-none border-2 font-mono text-base transition-all ${
    isDark
      ? 'bg-slate-900 border-fuchsia-400 text-violet-200'
      : 'bg-orange-50 border-orange-400 text-gray-800'
  } focus:outline-none`}
/>

                </div>

                {/* EMAIL */}
                <div>
                  <label className={`block font-mono font-bold mb-1 
                    ${isDark ? 'text-fuchsia-300' : 'text-purple-700'}`}>
                    Email Address
                  </label>
                  <input
  type="email"
  id="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Enter your email"
  required
  className={`w-full px-4 py-3 rounded-none border-2 font-mono text-base transition-all ${
    isDark
      ? 'bg-slate-900 border-fuchsia-400 text-violet-200'
      : 'bg-orange-50 border-orange-400 text-gray-800'
  } focus:outline-none`}
/>

                </div>

                {/* MESSAGE */}
                <div>
                  <label className={`block font-mono font-bold mb-1 
                    ${isDark ? 'text-fuchsia-300' : 'text-purple-700'}`}>
                    Message
                  </label>
                  <textarea
  id="message"
  name="message"
  rows={5}
  value={formData.message}
  onChange={handleChange}
  placeholder="Write your message here..."
  required
  className={`w-full px-4 py-3 rounded-none border-2 font-mono text-base transition-all resize-none ${
    isDark
      ? 'bg-slate-900 border-fuchsia-400 text-violet-200'
      : 'bg-orange-50 border-orange-400 text-gray-800'
  } focus:outline-none`}
/>

                </div>

                {/* SUBMIT BTN */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 font-mono font-bold text-lg border-2 
                    ${isDark ? 'bg-fuchsia-500 text-white border-fuchsia-700' : 'bg-green-600 text-white border-green-800'}`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
