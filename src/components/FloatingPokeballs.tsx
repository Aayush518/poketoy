import { motion } from 'framer-motion';

export function FloatingPokeballs() {
  const pokeballs = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-20 blur-[1px] mix-blend-screen">
      {pokeballs.map((ball) => (
        <motion.div
          key={ball.id}
          className="absolute w-8 h-8"
          initial={{ x: `${ball.x}vw`, y: `${ball.y}vh`, scale: ball.scale }}
          animate={{
            y: [`${ball.y}vh`, `${ball.y + 10}vh`, `${ball.y}vh`],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + ball.id % 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-white relative shadow-[0_0_15px_rgba(234,179,8,0.5)]">
            <div className="absolute inset-x-0 top-1/2 h-[2px] bg-black" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-black" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}