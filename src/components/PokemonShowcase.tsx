import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: [0.4, 1, 0.4],
    scale: [1, 1.2, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pokemons = [
  {
    id: 249,
    name: "Lugia",
    type: "Psychic/Flying",
    description: "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm.",
    color: "from-blue-300 to-purple-500",
    stats: { attack: 90, defense: 130, speed: 110 }
  },
  {
    id: 250,
    name: "Ho-Oh",
    type: "Fire/Flying",
    description: "A legendary Pokémon that can resurrect the dead. A rainbow appears wherever it flies.",
    color: "from-red-400 to-yellow-500",
    stats: { attack: 130, defense: 90, speed: 90 }
  },
  {
    id: 384,
    name: "Rayquaza",
    type: "Dragon/Flying",
    description: "It lives in the ozone layer far above the clouds. It is said to have lived for hundreds of millions of years.",
    color: "from-green-400 to-emerald-600",
    stats: { attack: 150, defense: 90, speed: 95 }
  },
  {
    id: 483,
    name: "Dialga",
    type: "Steel/Dragon",
    description: "A Pokémon spoken of in legend. It is said that time began moving when Dialga was born.",
    color: "from-blue-500 to-indigo-600",
    stats: { attack: 120, defense: 120, speed: 90 }
  },
  {
    id: 484,
    name: "Palkia",
    type: "Water/Dragon",
    description: "It has the ability to distort space. It is described as a deity in Sinnoh-region mythology.",
    color: "from-pink-400 to-purple-600",
    stats: { attack: 120, defense: 100, speed: 100 }
  },
  {
    id: 487,
    name: "Giratina",
    type: "Ghost/Dragon",
    description: "This Pokémon is said to live in a world on the reverse side of ours, where common knowledge is distorted.",
    color: "from-yellow-900 to-gray-700",
    stats: { attack: 100, defense: 120, speed: 90 }
  },
  {
    id: 144,
    name: "Articuno",
    type: "Ice/Flying",
    description: "A legendary bird Pokémon that can control ice. Its wings are said to be made of ice.",
    color: "from-blue-400 to-cyan-500",
    stats: { attack: 85, defense: 100, speed: 85 }
  },
  {
    id: 145,
    name: "Zapdos",
    type: "Electric/Flying",
    description: "A legendary bird Pokémon that can control lightning. It lives in thunderclouds.",
    color: "from-yellow-300 to-yellow-500",
    stats: { attack: 90, defense: 85, speed: 100 }
  },
  {
    id: 146,
    name: "Moltres",
    type: "Fire/Flying",
    description: "A legendary bird Pokémon that can control fire. Its appearance signals the coming of spring.",
    color: "from-orange-400 to-red-500",
    stats: { attack: 100, defense: 90, speed: 90 }
  },
  {
    id: 150,
    name: "Mewtwo",
    type: "Psychic",
    description: "A genetically engineered Pokémon that has powerful psychic abilities.",
    color: "from-yellow-400 to-red-500",
    stats: { attack: 110, defense: 90, speed: 130 }
  },
  {
    id: 151,
    name: "Mew",
    type: "Psychic",
    description: "A Pokémon of South America that was thought to have been extinct. It is very intelligent and learns any move.",
    color: "from-pink-400 to-purple-500",
    stats: { attack: 100, defense: 100, speed: 100 }
  },
  {
    id: 243,
    name: "Raikou",
    type: "Electric",
    description: "The embodiment of thunder and lightning. It can travel faster than lightning itself.",
    color: "from-yellow-400 to-amber-500",
    stats: { attack: 85, defense: 75, speed: 115 }
  },
  {
    id: 244,
    name: "Entei",
    type: "Fire",
    description: "A Pokémon that races across the land. It is said to have been born in the eruption of a volcano.",
    color: "from-red-400 to-orange-500",
    stats: { attack: 115, defense: 85, speed: 100 }
  },
  {
    id: 245,
    name: "Suicune",
    type: "Water",
    description: "Said to be the reincarnation of north winds, it can instantly purify filthy, murky water.",
    color: "from-blue-400 to-indigo-500",
    stats: { attack: 75, defense: 115, speed: 85 }
  }
];

export function PokemonShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPokemon = pokemons[currentIndex];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden px-4 md:px-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      <div className="container mx-auto px-6 relative">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Legendary Collection
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPokemon.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="flex flex-col lg:flex-row items-center justify-between gap-16"
            >
              <div className="flex-1">
                <motion.div 
                  className="text-xl text-yellow-400 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{ textShadow: '0 0 20px rgba(234,179,8,0.5)' }}>
                  #{currentPokemon.id}
                </motion.div>
                <motion.h3
                  className={`text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${currentPokemon.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{ textShadow: '0 0 30px rgba(234,179,8,0.3)' }}>
                  {currentPokemon.name}
                </motion.h3>
                <motion.div 
                  className="inline-block px-4 py-2 rounded-full bg-yellow-400/20 text-yellow-400 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentPokemon.type}
                </motion.div>
                
                {/* Enhanced Stats Display */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(currentPokemon.stats).map(([stat, value]) => (
                    <motion.div
                      key={stat}
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-center bg-yellow-400/5 rounded-xl p-3 border border-yellow-400/10">
                        <motion.div
                          className={`w-full h-2 bg-gradient-to-r ${currentPokemon.color} rounded-full mb-2`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: value / 150 }}
                          transition={{ 
                            delay: 0.5, 
                            duration: 0.8,
                            ease: "easeOut"
                          }}
                          style={{ boxShadow: '0 0 10px rgba(234,179,8,0.3)' }}
                        />
                        <div className="text-2xl font-bold">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{stat}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.p 
                  className="text-xl text-gray-400 mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {currentPokemon.description}
                </motion.p>
                <motion.button
                  className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
              
              <motion.div 
                className="flex-1 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemon.id}.png`}
                  alt={currentPokemon.name}
                  className="w-full h-[300px] lg:h-[600px] object-contain filter drop-shadow-[0_0_50px_rgba(234,179,8,0.5)]"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0"
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  style={{
                    background: `radial-gradient(circle at center, ${currentPokemon.color.split(' ')[1].replace('to-', '')}33, transparent 70%)`
                  }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {pokemons.map((pokemon, index) => (
            <motion.button
              key={pokemon.id}
              className={`group flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all text-sm sm:text-base ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold shadow-lg' 
                  : 'bg-yellow-400/10 text-gray-400 hover:bg-yellow-400/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentIndex(index)}
            >
              <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={pokemon.name}
                className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform"
              />
              <span>{pokemon.name}</span>
            </motion.button>
          ))}
        </div>
        <motion.p 
          className="text-center text-gray-400 mt-8 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Discover the power of legendary Pokémon from across different regions
        </motion.p>
      </div>
    </section>
  );
}