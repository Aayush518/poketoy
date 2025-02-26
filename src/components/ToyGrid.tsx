import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const toys = [
  {
    id: 1,
    name: "Pikachu",
    price: "$29.99",
    description: "Ash's beloved partner Pokemon. This plush toy comes with light-up cheeks!",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    stock: 15
  },
  {
    id: 2,
    name: "Charizard",
    price: "$34.99",
    description: "The mighty fire dragon with articulated wings and flame effects",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    stock: 10
  },
  {
    id: 3,
    name: "Bulbasaur",
    price: "$24.99",
    description: "A cuddly grass-type starter with a real fabric bulb",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    stock: 20
  },
  {
    id: 11,
    name: "Alakazam",
    price: "$31.99",
    description: "Master of psychic powers with bendable spoons and glowing eyes",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    stock: 12
  },
  {
    id: 12,
    name: "Arcanine",
    price: "$33.99",
    description: "Majestic fire-type with soft fur and flame-tipped tail",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    stock: 8
  },
  {
    id: 13,
    name: "Vaporeon",
    price: "$28.99",
    description: "Water-type evolution with shimmering scales and fin details",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
    stock: 15
  },
  {
    id: 14,
    name: "Jolteon",
    price: "$28.99",
    description: "Electric evolution with spiky fur that actually stands up",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
    stock: 15
  },
  {
    id: 15,
    name: "Flareon",
    price: "$28.99",
    description: "Fire evolution with extra fluffy warm fur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
    stock: 15
  },
  {
    id: 16,
    name: "Espeon",
    price: "$28.99",
    description: "Psychic evolution with gem that glows in the dark",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png",
    stock: 15
  },
  {
    id: 17,
    name: "Umbreon",
    price: "$28.99",
    description: "Dark evolution with glow-in-the-dark rings",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png",
    stock: 15
  },
  {
    id: 18,
    name: "Leafeon",
    price: "$28.99",
    description: "Grass evolution with realistic leaf textures",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png",
    stock: 15
  },
  {
    id: 19,
    name: "Glaceon",
    price: "$28.99",
    description: "Ice evolution that feels cool to the touch",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png",
    stock: 15
  },
  {
    id: 20,
    name: "Sylveon",
    price: "$29.99",
    description: "Fairy evolution with silky ribbons and bows",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png",
    stock: 15
  },
  {
    id: 21,
    name: "Froslass",
    price: "$27.99",
    description: "Elegant ice-type with flowing kimono design",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png",
    stock: 10
  },
  {
    id: 22,
    name: "Mismagius",
    price: "$26.99",
    description: "Mystical ghost-type with real fabric cloak",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png",
    stock: 12
  },
  {
    id: 23,
    name: "Gardevoir",
    price: "$31.99",
    description: "Psychic fairy-type with flowing dress design",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png",
    stock: 15
  },
  {
    id: 24,
    name: "Absol",
    price: "$28.99",
    description: "Dark-type with soft fur and poseable scythe",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png",
    stock: 12
  },
  {
    id: 25,
    name: "Chandelure",
    price: "$28.99",
    description: "Ghost/Fire type with glowing flame effects",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png",
    stock: 10
  },
  {
    id: 26,
    name: "Mimikyu",
    price: "$27.99",
    description: "Ghost/Fairy type with removable disguise",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png",
    stock: 15
  },
  {
    id: 27,
    name: "Hatterene",
    price: "$29.99",
    description: "Psychic/Fairy type with elegant design",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/858.png",
    stock: 12
  },
  {
    id: 28,
    name: "Alolan Ninetales",
    price: "$32.99",
    description: "Ice/Fairy type with crystal fur details",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10094.png",
    stock: 10
  },
  {
    id: 29,
    name: "Zoroark",
    price: "$31.99",
    description: "Dark type with illusion effects",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png",
    stock: 12
  },
  {
    id: 30,
    name: "Weavile",
    price: "$28.99",
    description: "Dark/Ice type with sharp claws",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png",
    stock: 15
  },
  {
    id: 31,
    name: "Primarina",
    price: "$32.99",
    description: "Water/Fairy type with voice-activated effects",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png",
    stock: 10
  },
  {
    id: 32,
    name: "Spiritomb",
    price: "$29.99",
    description: "Ghost/Dark type with swirling effects",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png",
    stock: 8
  },
  {
    id: 33,
    name: "Togekiss",
    price: "$31.99",
    description: "Fairy/Flying type with soft wings",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png",
    stock: 12
  },
  {
    id: 34,
    name: "Glaceon",
    price: "$28.99",
    description: "Ice type with crystalline features",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png",
    stock: 15
  },
  {
    id: 35,
    name: "Dusknoir",
    price: "$33.99",
    description: "Ghost type with opening chest cavity",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png",
    stock: 10
  },
  {
    id: 36,
    name: "Grimmsnarl",
    price: "$32.99",
    description: "Dark/Fairy type with poseable hair",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/861.png",
    stock: 12
  },
  {
    id: 37,
    name: "Frosmoth",
    price: "$29.99",
    description: "Ice/Bug type with delicate wings",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/873.png",
    stock: 15
  },
  {
    id: 38,
    name: "Dragapult",
    price: "$34.99",
    description: "Dragon/Ghost type with launching Dreepy",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png",
    stock: 10
  },
  {
    id: 39,
    name: "Polteageist",
    price: "$27.99",
    description: "Ghost type with authentic tea set",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/855.png",
    stock: 12
  },
  {
    id: 40,
    name: "Alcremie",
    price: "$28.99",
    description: "Fairy type with swirling cream design",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/869.png",
    stock: 15
  },
  {
    id: 4,
    name: "Squirtle",
    price: "$24.99",
    description: "Water-type starter with a removable shell backpack",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    category: "starter",
    stock: 18
  },
  {
    id: 5,
    name: "Mewtwo",
    price: "$39.99",
    description: "Premium collector's edition with psychic effect stand",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    category: "legendary",
    stock: 5
  },
  {
    id: 6,
    name: "Gengar",
    price: "$27.99",
    description: "Glow-in-the-dark ghost type with haunting effects",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    category: "ghost",
    stock: 12
  },
  {
    id: 7,
    name: "Snorlax",
    price: "$44.99",
    description: "Giant sized cuddle buddy, perfect for naps",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    category: "normal",
    stock: 8
  },
  {
    id: 8,
    name: "Gyarados",
    price: "$32.99",
    description: "Articulated sea serpent with water effect details",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    category: "water",
    stock: 15
  },
  {
    id: 9,
    name: "Dragonite",
    price: "$36.99",
    description: "Huggable dragon with poseable wings and tail",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    category: "dragon",
    stock: 10
  },
  {
    id: 10,
    name: "Eevee",
    price: "$26.99",
    description: "Ultra-soft plush with all evolution charm accessories",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    category: "normal",
    stock: 25
  }
];

const categories = [
  { id: 'all', name: 'All Toys' },
  { id: 'starter', name: 'Starter Pokemon' },
  { id: 'fire', name: '🔥 Fire Type' },
  { id: 'water', name: '💧 Water Type' },
  { id: 'grass', name: '🌿 Grass Type' },
  { id: 'electric', name: '⚡ Electric Type' },
  { id: 'psychic', name: '🔮 Psychic Type' },
  { id: 'dragon', name: '🐉 Dragon Type' },
  { id: 'ghost', name: '👻 Ghost Type' },
  { id: 'normal', name: '⭐ Normal Type' },
  { id: 'fairy', name: '🎀 Fairy Type' },
  { id: 'dark', name: '🌙 Dark Type' },
  { id: 'ice', name: '❄️ Ice Type' }
];

const toyCategories = {
  1: ['electric', 'starter'],  // Pikachu
  2: ['fire', 'dragon', 'starter'],  // Charizard
  3: ['grass', 'starter'],  // Bulbasaur
  4: ['water', 'starter'],  // Squirtle
  5: ['psychic'],  // Mewtwo
  6: ['ghost'],  // Gengar
  7: ['normal'],  // Snorlax
  8: ['water', 'dragon'],  // Gyarados
  9: ['dragon'],  // Dragonite
  10: ['normal'],  // Eevee
  11: ['psychic'],  // Alakazam
  12: ['fire'],  // Arcanine
  13: ['water'],  // Vaporeon
  14: ['electric'],  // Jolteon
  15: ['fire'],  // Flareon
  16: ['psychic'],  // Espeon
  17: ['dark'],  // Umbreon
  18: ['grass'],  // Leafeon
  19: ['ice'],  // Glaceon
  20: ['fairy'],  // Sylveon
  21: ['ice', 'ghost'],  // Froslass
  22: ['ghost'],  // Mismagius
  23: ['psychic', 'fairy'],  // Gardevoir
  24: ['dark'],  // Absol
  25: ['ghost', 'fire'],  // Chandelure
  26: ['ghost', 'fairy'],  // Mimikyu
  27: ['psychic', 'fairy'],  // Hatterene
  28: ['ice', 'fairy'],  // Alolan Ninetales
  29: ['dark'],  // Zoroark
  30: ['dark', 'ice'],  // Weavile
  31: ['water', 'fairy'],  // Primarina
  32: ['ghost', 'dark'],  // Spiritomb
  33: ['fairy', 'flying'],  // Togekiss
  34: ['ice'],  // Glaceon
  35: ['ghost'],  // Dusknoir
  36: ['dark', 'fairy'],  // Grimmsnarl
  37: ['ice', 'bug'],  // Frosmoth
  38: ['dragon', 'ghost'],  // Dragapult
  39: ['ghost'],  // Polteageist
  40: ['fairy']  // Alcremie
};

export function ToyGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredToy, setHoveredToy] = useState<number | null>(null);

  const filteredToys = React.useMemo(() => {
    if (selectedCategory === 'all') return toys;
    return toys.filter(toy => {
      const categories = toyCategories[toy.id];
      return categories && categories.includes(selectedCategory);
    });
  }, [selectedCategory]);

  return (
    <section id="toys" className="min-h-screen py-20 bg-black/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/checkmk.svg')] opacity-5 bg-repeat"></div>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Pokemon Collection
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-400 text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Catch your favorite Pokemon toys!
        </motion.p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              className="relative"
            >
              <motion.button
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all relative ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)]'
                    : 'bg-yellow-400/10 text-gray-400 hover:bg-yellow-400/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
                {selectedCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-yellow-400/20"
                    layoutId="categoryHighlight"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
              {selectedCategory === category.id && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 w-1 h-1 bg-yellow-400 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ translateX: "-50%" }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-yellow-400/10 rounded-lg p-4 text-center">
              <motion.span whileHover={{ scale: 1.1 }} className="text-2xl">🌟</motion.span>
              <p className="mt-2 text-sm">Premium Quality</p>
            </div>
            <div className="bg-yellow-400/10 rounded-lg p-4 text-center">
              <motion.span whileHover={{ scale: 1.1 }} className="text-2xl">🚚</motion.span>
              <p className="mt-2 text-sm">Free Shipping</p>
            </div>
            <div className="bg-yellow-400/10 rounded-lg p-4 text-center">
              <motion.span whileHover={{ scale: 1.1 }} className="text-2xl">💫</motion.span>
              <p className="mt-2 text-sm">Limited Edition</p>
            </div>
            <div className="bg-yellow-400/10 rounded-lg p-4 text-center">
              <motion.span whileHover={{ scale: 1.1 }} className="text-2xl">🎁</motion.span>
              <p className="mt-2 text-sm">Gift Wrapping</p>
            </div>
          </div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredToys.length === 0 && (
              <motion.div 
                className="col-span-full text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-400 text-lg">No Pokemon found in this category.</p>
              </motion.div>
            )}
            {filteredToys.map((toy, index) => (
              <motion.div
                key={toy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredToy(toy.id)}
                onHoverEnd={() => setHoveredToy(null)}
                className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all cursor-pointer border border-white/10 backdrop-blur-sm relative group"
              >
                <div className="absolute -top-2 -right-2 bg-yellow-400/90 text-black text-xs px-2 py-1 rounded-full">
                  {toy.stock} left
                </div>
                <motion.div
                  className="aspect-square mb-4 bg-yellow-400/10 rounded-xl p-8 relative overflow-hidden"
                >
                  <motion.img 
                    src={toy.image} 
                    alt={toy.name} 
                    className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]"
                    animate={{
                      scale: hoveredToy === toy.id ? 1.1 : 1,
                      rotate: hoveredToy === toy.id ? [0, -5, 5, 0] : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/30 to-yellow-400/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 1 }}
                  />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{toy.name}</h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{toy.description}</p>
                <div className="flex items-center justify-between">
                  <motion.p 
                    className="text-yellow-400 font-bold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {toy.price}
                  </motion.p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}