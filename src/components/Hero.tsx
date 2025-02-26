import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const POKEMON_SPRITES = [25, 6, 150, 384, 249];

const getRandomPosition = () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  scale: Math.random() * 0.4 + 0.2,
  rotation: Math.random() * 360,
});

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [activePokemon, setActivePokemon] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePokemon((prev) => (prev + 1) % POKEMON_SPRITES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <section className="min-h-screen flex items-center pt-20 sm:pt-24 lg:pt-0 relative overflow-hidden" ref={containerRef}>
      {/* Animated Background Pokemon */}
      {POKEMON_SPRITES.map((id, index) => {
        const pos = getRandomPosition();
        return (
          <motion.img
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            className="absolute w-32 h-32 object-contain opacity-5"
            initial={pos}
            animate={{
              x: `${pos.x}vw`,
              y: [`${pos.y}vh`, `${pos.y + 20}vh`, `${pos.y}vh`],
              rotate: [pos.rotation, pos.rotation + 360],
              scale: pos.scale,
            }}
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
      })}

      {/* Dynamic Gradient Background */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1)_0%,rgba(0,0,0,0)_70%)]"
      />

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-full"
            style={{ top: `${i * 10}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-24">
          <div className="w-full max-w-2xl text-center lg:text-left relative">
            {/* Animated Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-lg blur-3xl opacity-5"
              animate={{ opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full inline-block mb-6 sm:mb-8 text-sm md:text-base font-bold tracking-wide backdrop-blur-sm border border-yellow-400/20 shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all"
            >
              <motion.span 
                className="inline-block mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
              Welcome to Pokemon Center
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 leading-[1.1] tracking-tight drop-shadow-[0_0_10px_rgba(234,179,8,0.2)]"
            >
              Pokemon Toys
            </motion.h1>

            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed relative z-10 font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 font-bold">"Gotta Catch 'Em All!"</span> Join Ash Ketchum on his journey to become a Pokemon Master.
            </motion.p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full font-extrabold group text-base sm:text-lg tracking-wide shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:shadow-[0_0_50px_rgba(234,179,8,0.6)] transition-all uppercase"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <span className="relative z-10">Start Your Journey</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500"
                initial={{ x: "100%" }}
                animate={isHovered ? { x: "0%" } : { x: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          <motion.div
            className="w-full h-[280px] sm:h-[400px] lg:h-[600px] relative group"
            style={{ perspective: "1000px" }}
          >
            {/* 3D Rotating Pokemon Display */}
            <motion.div 
              className="relative w-full h-full flex items-center justify-center transform-gpu"
              animate={{ rotateY: [0, 360] }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {POKEMON_SPRITES.map((id, index) => (
                <motion.img
                  key={id}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                  alt={`Pokemon ${id}`}
                  className="absolute w-full h-full object-contain transform-gpu will-change-transform"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activePokemon === index ? 1 : 0,
                    scale: activePokemon === index ? 1 : 0.8,
                    rotate: activePokemon === index ? [0, 5, -5, 0] : 0,
                    y: activePokemon === index ? [0, -10, 0] : 0
                  }}
                  transition={{
                    duration: 0.5,
                    rotate: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "mirror"
                    },
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "mirror"
                    }
                  }}
                />
              ))}

              {/* Animated Energy Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border-2 border-yellow-400/30"
                  style={{
                    width: `${90 + i * 15}%`,
                    height: `${90 + i * 15}%`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [0.9, 1, 0.9],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "mirror"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}