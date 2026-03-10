import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Truck,
  RotateCcw,
  Shield,
  Volume2,
  VolumeX,
} from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import video_homepage from "@/assets/video_homepage.mp4";

import { useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const HomePage = () => {
  const featuredProducts = products.slice(0, 8);
  const trendingProducts = products.filter((p) => p.rating >= 4.5);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.2;
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div>

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
      <section className="relative h-[85vh] sm:h-screen overflow-hidden">

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

        <div className="relative h-full flex items-end sm:items-center pb-16 sm:pb-0 container">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-md sm:max-w-xl text-white"
          >

            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-[10px] tracking-[0.25em] uppercase text-white/70 mb-3"
            >
              BLINDBEAR COLLECTION
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.05] mb-5"
            >
              BlindBear
              <br />
              <span className="italic">Quality Clothes</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-white/75 text-sm mb-8 max-w-sm"
            >
              Since 2026.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex gap-3 flex-wrap"
            >

              <Link
                to="/products?gender=men"
                className="inline-flex items-center gap-2 bg-white text-black px-7 py-3 text-xs uppercase tracking-wider hover:bg-white/90 transition"
              >
                Explore Men
                <ArrowRight size={14} />
              </Link>

              <Link
                to="/products?gender=women"
                className="border border-white/30 text-white px-7 py-3 text-xs uppercase tracking-wider hover:bg-white/10 transition"
              >
                Explore Women
              </Link>

            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-black/5">
        <div className="container py-6">

          <div className="grid grid-cols-3 gap-4 text-center">

            {[
              { icon: Truck, label: "Free Shipping" },
              { icon: RotateCcw, label: "Easy Returns" },
              { icon: Shield, label: "Secure Pay" },
            ].map(({ icon: Icon, label }) => (

              <div key={label} className="flex flex-col items-center gap-1">

                <Icon size={16} className="text-black/40" />

                <span className="text-[10px] uppercase tracking-wider text-black/50">
                  {label}
                </span>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container py-14 sm:py-16">

        <div className="mb-8">

          <p className="text-[10px] uppercase tracking-[0.25em] text-black/40 mb-1">
            Curated for You
          </p>

          <h2 className="text-2xl sm:text-3xl font-light">
            Featured Collection
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">

          {featuredProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
            />
          ))}

        </div>

      </section>

      {/* TRENDING */}
      <section className="pb-20">

        <div className="container mb-8">

          <p className="text-[10px] uppercase tracking-[0.25em] text-black/40 mb-1">
            Trending Now
          </p>

          <h2 className="text-2xl sm:text-3xl font-light">
            Popular Right Now
          </h2>

        </div>

        <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 pb-4 snap-x snap-mandatory">

          {trendingProducts.map((product, i) => (

            <div
              key={product.id}
              className="flex-shrink-0 w-[55vw] sm:w-56 md:w-64 snap-start"
            >

              <ProductCard
                product={product}
                index={i}
              />

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default HomePage;