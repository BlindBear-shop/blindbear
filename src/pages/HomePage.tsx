import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Truck, RotateCcw, Shield, Volume2, VolumeX } from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import video_homepage from "@/assets/video_homepage.mp4";

import { useRef, useState } from "react";

/* BASIC FADE ANIMATION */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
    },
  }),
};

/* PREMIUM BLUR REVEAL */
const blurReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(20px)",
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

const HomePage = () => {
  const featuredProducts = products.slice(0, 8);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) audioRef.current.pause();
    else {
      audioRef.current.volume = 0.2;
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* MUSIC */}
      <audio ref={audioRef} loop>
        <source src="/music/fashion.mp3" type="audio/mp3" />
      </audio>

      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-28 sm:bottom-10 right-5 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      {/* HERO */}
      <section className="relative h-[85vh] sm:h-screen overflow-hidden w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video_homepage} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative h-full flex items-end sm:items-center pb-16 sm:pb-0 px-6 sm:px-12 lg:px-20">

          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-md sm:max-w-xl text-white"
          >
            {/* HEADLINE */}
            <motion.h1
              variants={blurReveal}
              className="font-[Playfair_Display] text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-10"
            >
              <motion.span variants={blurReveal} custom={1} className="block">
                BlindBear
              </motion.span>

              <motion.span
                variants={blurReveal}
                custom={2}
                className="block italic text-white/90 text-2xl sm:text-3xl lg:text-4xl"
              >
                High Quality, Minimalistic Clothing
              </motion.span>
            </motion.h1>

            {/* BUTTONS (BIGGER + PREMIUM) */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-col items-start gap-5"
            >
              <Link
                to="/products?gender=men"
                className="backdrop-blur-md bg-white/20 border border-white/30
                text-white px-10 py-4 text-sm uppercase tracking-[0.2em]
                hover:bg-white/30 transition"
              >
                Men Clothing
              </Link>

              <Link
                to="/products?gender=women"
                className="bg-transparent border border-white/50
                text-white px-10 py-4 text-sm uppercase tracking-[0.2em]
                hover:bg-white/10 transition"
              >
                Explore Women Clothing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container py-14 sm:py-16">
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/40 mb-1">
            BlindBear Clothing
          </p>
      <p>BlindBear is a Gen Z clothing brand built on bold everyday style and honest pricing. Real fits, real people, real affordable.</p>
          <h2 className="text-2xl sm:text-3xl font-light">
            Our Collections
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
