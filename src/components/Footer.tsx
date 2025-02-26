import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-transparent py-8 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Navigation Links */}
          <motion.div 
            className="flex items-center gap-8 flex-wrap justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a>
            <a href="#toys" className="text-gray-400 hover:text-yellow-400 transition-colors">Toys</a>
            <a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">Collection</a>
            <a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/Aayush518"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors bg-yellow-400/10 p-3 rounded-full hover:bg-yellow-400/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/Aayush518"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors bg-yellow-400/10 p-3 rounded-full hover:bg-yellow-400/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
      </div>
    </footer>
  );
}