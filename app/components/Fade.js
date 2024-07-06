"use client";
import { motion } from "framer-motion";

export function FadeDown() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div>
    <motion.div
    className=" h-screen  items-center flex flex-col justify-center "
    style={{ backgroundImage: "url('/etudiants.jpg')" }}
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#225c8b" fill-opacity="1" d="M0,128L60,154.7C120,181,240,235,360,261.3C480,288,600,288,720,266.7C840,245,960,203,1080,202.7C1200,203,1320,245,1380,266.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </div>
  );
}