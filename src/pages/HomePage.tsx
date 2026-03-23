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
        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.8]"
        >
          <source src={video_homepage} type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />

        {/* CONTENT */}
        <div className="relative h-full flex items-center px-6 sm:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-md sm:max-w-xl text-white"
          >
            {/* HEADLINE */}
            <motion.h1
              variants={blurReveal}
              className="font-[Playfair_Display] text-4xl sm:text-5xl lg:text-6xl leading-[1.2] mb-6"
            >
              <motion.span variants={blurReveal} custom={1} className="block">
                BlindBear
              </motion.span>

              <motion.span
                variants={blurReveal}
                custom={2}
                className="block italic text-white/80 text-lg sm:text-xl lg:text-2xl mt-2"
              >
                Minimal Streetwear for Everyday Expression
              </motion.span>
            </motion.h1>

            {/* BUTTONS */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex gap-4 mt-4"
            >
              <Link
                to="/products?gender=men"
                className="bg-white text-black px-6 py-3 text-xs uppercase tracking-[0.2em]
                hover:bg-white/90 transition"
              >
                Shop Men
              </Link>

              <Link
                to="/products?gender=women"
                className="border border-white text-white px-6 py-3 text-xs uppercase tracking-[0.2em]
                hover:bg-white hover:text-black transition"
              >
                Shop Women
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container py-14 sm:py-16">
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-black/40 mb-1">
            BlindBear
          </p>

          <h2 className="text-2xl sm:text-3xl font-light">
            Our Collections
          </h2>

          <p className="text-sm text-black/60 max-w-lg mt-2">
            Explore Men & Women collections with oversized t-shirts, hoodies and graphic tees. Designed for everyday comfort and style.
          </p>
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
