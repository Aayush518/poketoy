import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ToyGrid } from './components/ToyGrid';
import { Footer } from './components/Footer';
import { FloatingPokeballs } from './components/FloatingPokeballs.tsx';
import { PokemonStats } from './components/PokemonStats.tsx';
import { PokemonShowcase } from './components/PokemonShowcase';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-400/20 via-gray-900 to-black min-h-screen text-white relative">
      <FloatingPokeballs />
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-color-dodge">
        <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png')] bg-repeat bg-[length:400px]" />
        <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png')] bg-repeat bg-[length:500px] opacity-70" />
        <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png')] bg-repeat bg-[length:450px] opacity-80" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none" />
      <Header />
      <main className="relative z-10">
        <Hero />
        <PokemonStats />
        <PokemonShowcase />
        <ToyGrid />
        <Contact />
      </main>
      <Footer />
      
      {/* Fixed Elements */}
      <motion.div 
        className="fixed bottom-8 right-8 cursor-pointer group"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 via-yellow-400/20 to-red-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
        <motion.svg
          viewBox="0 0 100 100"
          className="w-16 h-16 drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]"
          animate={{
            y: [0, -10, 0],
            filter: ["drop-shadow(0 0 20px rgba(234,179,8,0.3))", "drop-shadow(0 0 40px rgba(234,179,8,0.5))", "drop-shadow(0 0 20px rgba(234,179,8,0.3))"],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Pikachu's Face Circle */}
          <path
            d="M50 5 A45 45 0 1 0 50 95 A45 45 0 1 0 50 5"
            className="fill-yellow-400"
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
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default App;