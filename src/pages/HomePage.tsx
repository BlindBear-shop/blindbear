import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Truck, RotateCcw, Shield, Volume2, VolumeX } from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import video_homepage from "@/assets/video_homepage.mp4";

import { useRef, useState, useEffect } from "react";

/* ANIMATIONS */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const blurReveal: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(20px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay: i * 0.15, ease: "easeOut" },
  }),
};

const HomePage = () => {
  const featuredProducts = products.slice(0, 8);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  // 🔥 SEO TITLE FIX
  useEffect(() => {
    document.title =
      "BlindBear";
  }, []);

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
      {/* AUDIO */}
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

        <div className="relative h-full flex items-center pt-20 px-6 sm:px-12 lg:px-20">
          <motion.div initial="hidden" animate="visible" className="max-w-xl text-white">

            {/* ✅ H1 (VERY IMPORTANT FOR SEO) */}
            <motion.h1
              variants={blurReveal}
              className="font-[Playfair_Display] text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-8"
            >
              BlindBear
              <span className="block italic text-white/90 text-2xl sm:text-3xl lg:text-4xl mt-2">
                Streetwear Brand in India
              </span>
            </motion.h1>

            <motion.div variants={fadeUp} custom={4} className="flex flex-col gap-4">
              <Link
                to="/products?gender=men"
                className="bg-white/20 border border-white/30 text-white px-7 py-3 text-xs uppercase tracking-[0.2em]"
              >
                Men Clothing
              </Link>

              <Link
                to="/products?gender=women"
                className="border border-white/50 text-white px-7 py-3 text-xs uppercase tracking-[0.2em]"
              >
                Women Clothing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ✅ SEO CONTENT (CRITICAL FIX) */}
      <section className="container py-10">
        <p className="text-sm text-gray-700 max-w-3xl">
          BlindBear is a modern streetwear brand in India focused on oversized t-shirts, hoodies, and everyday fashion. 
          Designed for Gen Z, our collections combine comfort, minimalism, and bold identity. 
          Explore high-quality clothing made for real people and real style.
        </p>
      </section>

      {/* FEATURED */}
      <section className="container py-14">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-light">
            Our Collections
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
