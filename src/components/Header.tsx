import React from 'react';
import { Link } from './Link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full px-6 py-4 md:py-5 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 via-black/50 to-transparent backdrop-blur-sm border-b border-yellow-400/10">
      <div className="w-12 h-12 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-yellow-400 to-red-400 rounded-full opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-300" />
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(234,179,8,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(234,179,8,0.5)] transition-all duration-300"
        >
          {/* Pikachu's Face Circle */}
          <path
            d="M50 5 A45 45 0 1 0 50 95 A45 45 0 1 0 50 5"
            className="fill-yellow-400 group-hover:fill-yellow-300 transition-colors duration-300"
          />
          {/* Pikachu's Cheeks */}
          <path
            d="M25 55 A8 8 0 1 0 25 71 A8 8 0 1 0 25 55"
            className="fill-red-400/80"
          />
          <path
            d="M75 55 A8 8 0 1 0 75 71 A8 8 0 1 0 75 55"
            className="fill-red-400/80"
          />
          {/* Pikachu's Eyes */}
          <circle
            cx="35"
            cy="40"
            r="6"
            className="fill-black"
          />
          <circle
            cx="65"
            cy="40"
            r="6"
            className="fill-black"
          />
          {/* Pikachu's Nose */}
          <circle
            cx="50"
            cy="48"
            r="3"
            className="fill-black"
          />
          {/* Pikachu's Smile */}
          <path
            d="M40 60 Q50 70 60 60"
            className="stroke-black stroke-[3] fill-none"
          />
        </svg>
      </div>
      
      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden p-2 hover:bg-yellow-400/10 rounded-lg transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <div className="space-y-2">
          <motion.div 
            className="w-8 h-0.5 bg-yellow-400 rounded-full"
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
          />
          <motion.div 
            className="w-8 h-0.5 bg-yellow-400 rounded-full"
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
          />
          <motion.div 
            className="w-8 h-0.5 bg-yellow-400 rounded-full"
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
          />
        </div>
      </motion.button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 lg:gap-8">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#toys">Toys</Link></li>
          <li><Link href="#about">Ash's Collection</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <motion.nav
        className="absolute top-full left-0 w-full bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-md md:hidden border-b border-yellow-400/10"
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        style={{ overflow: 'hidden' }}
      >
        <ul className="py-6 px-8 space-y-6">
          <li><Link href="#home" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link href="#toys" onClick={() => setIsMenuOpen(false)}>Toys</Link></li>
          <li><Link href="#about" onClick={() => setIsMenuOpen(false)}>Ash's Collection</Link></li>
          <li><Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </motion.nav>
    </header>
  );
}