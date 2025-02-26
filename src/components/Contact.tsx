import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Large Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24 relative"
          >
            <div className="flex justify-center items-end gap-4 md:gap-8">
              <motion.img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png"
                alt="Jessie's Wobbuffet"
                className="w-32 h-32 md:w-48 md:h-48 object-contain"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              />
              <motion.img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
                alt="Meowth"
                className="w-40 h-40 md:w-56 md:h-56 object-contain"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -10 }}
              />
              <motion.img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
                alt="James's Weezing"
                className="w-32 h-32 md:w-48 md:h-48 object-contain"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
            </div>
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xl md:text-2xl font-bold text-yellow-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Team Rocket
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-24 text-center bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 text-transparent bg-clip-text"
          >
            Prepare for trouble!
          </motion.h2>

          {/* Email Form */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="mb-32"
          >
            <div className="relative max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-white/40 transition-colors pr-12"
              />
              <motion.button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent animate-pulse" />
      </div>
    </section>
  );
}