"use client";
import { motion } from "framer-motion";

export function FadeDown() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
    className=" h-screen bg-[#225c8b] items-center flex flex-col justify-center "
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] text-black "
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Bienvenue à l'UHT
      </motion.h1>
      <motion.p
        className="mt-6 text-center md:text-2xl text-black"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Apprendre pour entreprendre
      </motion.p>
      <motion.div
        className="mx-auto mt-6 flex items-center justify-center space-x-5 text-black"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        If you&apos;re seeing this, thank you for trying my project out! - C.J.A
      </motion.div>
    </motion.div>
  );
}