import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 30px -10px rgba(234,179,8,0.3)",
  }
};

const stats = [
  { label: 'Rare Pokemon', value: 'Legendary', color: 'from-yellow-400 to-yellow-600', icon: '⭐' },
  { label: 'Collection', value: 'Limited', color: 'from-yellow-300 to-yellow-500', icon: '✨' },
  { label: 'Trainers', value: 'Elite', color: 'from-yellow-200 to-yellow-400', icon: '🏆' },
  { label: 'Experience', value: 'Master', color: 'from-yellow-500 to-yellow-700', icon: '🌟' },
];

export function PokemonStats() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="text-center relative bg-gradient-to-b from-yellow-400/10 to-transparent p-3 sm:p-4 lg:p-6 rounded-2xl border border-yellow-400/20 backdrop-blur-sm"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <motion.span 
                  className="absolute -top-2 -right-2 text-xl sm:text-2xl lg:text-3xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.icon}
                </motion.span>
                <motion.h3
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text break-words`}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-400 text-xs sm:text-sm lg:text-base break-words">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}