import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Truck, RotateCcw, Shield, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { products } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";
import categorySale from "@/assets/category-sale.jpg";
import model1 from "@/assets/model-1.png";
import model2 from "@/assets/model-2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const HomePage = () => {
  const featuredProducts = products.slice(0, 8);
  const trendingProducts = products.filter((p) => p.isNew || p.rating >= 4.5);

  return (
    <div className="pb-16 sm:pb-0">
      {/* Hero — Full-bleed cinematic */}
      <section className="relative h-[85vh] sm:h-[90vh] lg:h-screen overflow-hidden hero-overlap">
        <img
          src={heroBanner}
          alt="BLINDBEAR New Season Collection"
          className="absolute inset-0 w-full h-full object-cover object-top scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/20 to-transparent" />

        <div className="relative h-full container flex flex-col justify-end pb-10 sm:pb-16 lg:pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-xl"
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-3">
              <div className="w-8 h-px bg-background/50" />
              <p className="font-body text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-background/70">
                Spring / Summer 2026
              </p>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-background leading-[0.9] mb-4 sm:mb-6"
            >
              Effortless
              <br />
              <span className="italic font-light">Elegance</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="font-body text-[11px] sm:text-sm text-background/50 mb-6 sm:mb-8 max-w-sm leading-relaxed"
            >
              Premium minimalist clothing designed in India. Crafted for the modern individual.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2.5 bg-background text-foreground px-7 sm:px-9 py-3.5 sm:py-4 font-body text-[11px] sm:text-xs tracking-[0.15em] uppercase hover:bg-background/90 transition-all"
              >
                Explore Collection
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products?filter=new"
                className="inline-flex items-center gap-2 glass text-background px-7 sm:px-9 py-3.5 sm:py-4 font-body text-[11px] sm:text-xs tracking-[0.15em] uppercase hover:bg-background/20 transition-all border-background/20"
              >
                New In
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="font-body text-[9px] tracking-[0.2em] uppercase text-background/40">Scroll</span>
          <div className="w-px h-8 bg-background/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-full h-1/2 bg-background/60"
            />
          </div>
        </motion.div>
      </section>

      {/* Trust Strip */}
      <section className="border-b border-foreground/[0.05]">
        <div className="container py-5 sm:py-6">
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Truck, label: "Free Shipping" },
              { icon: RotateCcw, label: "Easy Returns" },
              { icon: Shield, label: "Secure Pay" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2">
                <Icon size={14} className="text-foreground/30" />
                <span className="font-body text-[9px] sm:text-[11px] text-foreground/40 tracking-[0.1em] uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Statement — Elevated */}
      <section className="container py-16 sm:py-24 lg:py-32 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-foreground/15" />
            <Sparkles size={14} className="text-foreground/25" />
            <div className="w-12 h-px bg-foreground/15" />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.1] mb-4">
            Where Minimalism
            <br />
            <span className="italic font-light">Meets Craft</span>
          </h2>
          <p className="font-body text-xs sm:text-sm text-muted-foreground/50 leading-relaxed max-w-md mx-auto">
            Every piece is a statement of restraint. Designed in India with premium fabrics and an obsessive eye for detail.
          </p>
        </motion.div>
      </section>

      {/* Categories — Asymmetric Grid */}
      <section className="container pb-12 sm:pb-20">
        <div className="flex items-end justify-between mb-6 sm:mb-10">
          <div>
            <p className="font-body text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-muted-foreground/40 mb-1">
              Browse
            </p>
            <h2 className="font-display text-2xl sm:text-4xl text-foreground">Shop by Category</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          <CategoryCard title="Men" image={categoryMen} link="/products?gender=men" index={0} />
          <CategoryCard title="Women" image={categoryWomen} link="/products?gender=women" index={1} />
          <CategoryCard title="Accessories" image={categoryAccessories} link="/products?category=accessories" index={2} />
          <CategoryCard title="Sale" image={categorySale} link="/products?filter=sale" index={3} />
        </div>
      </section>

      {/* Featured Products */}
      <section className="container pb-12 sm:pb-20">
        <div className="flex items-end justify-between mb-6 sm:mb-10">
          <div>
            <p className="font-body text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-muted-foreground/40 mb-1">
              Curated for You
            </p>
            <h2 className="font-display text-2xl sm:text-4xl text-foreground">Featured Collection</h2>
          </div>
          <Link
            to="/products"
            className="hidden md:inline-flex items-center gap-2 font-body text-[11px] tracking-[0.1em] uppercase text-foreground/40 hover:text-foreground transition-colors group"
          >
            View All
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 sm:gap-x-4 gap-y-6 sm:gap-y-10">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <Link
          to="/products"
          className="md:hidden flex items-center justify-center gap-2 mt-8 font-body text-[11px] tracking-[0.1em] uppercase text-foreground/40 hover:text-foreground transition-colors"
        >
          View All Products <ArrowRight size={13} />
        </Link>
      </section>

      {/* Editorial Split — Cinematic */}
      <section className="container pb-12 sm:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group"
          >
            <img
              src={model1}
              alt="BLINDBEAR Women's Edit"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <p className="font-body text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-background/60 mb-1">
                Women's Edit
              </p>
              <Link
                to="/products?gender=women"
                className="group/link inline-flex items-center gap-2 font-display text-xl sm:text-3xl text-background"
              >
                Explore
                <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group"
          >
            <img
              src={model2}
              alt="BLINDBEAR Essentials"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <p className="font-body text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-background/60 mb-1">
                Essentials
              </p>
              <Link
                to="/products"
                className="group/link inline-flex items-center gap-2 font-display text-xl sm:text-3xl text-background"
              >
                Shop All
                <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending — Horizontal Scroll */}
      <section className="pb-12 sm:pb-20">
        <div className="container mb-6 sm:mb-10">
          <p className="font-body text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-muted-foreground/40 mb-1">
            What's Hot
          </p>
          <h2 className="font-display text-2xl sm:text-4xl text-foreground">Trending Now</h2>
        </div>
        <div className="flex gap-3 sm:gap-4 overflow-x-auto px-4 sm:px-6 pb-4 scrollbar-hide snap-x snap-mandatory">
          {trendingProducts.map((product, i) => (
            <div key={product.id} className="flex-shrink-0 w-[44vw] sm:w-56 md:w-64 snap-start">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Teaser */}
      <section className="container pb-12 sm:pb-20">
        <div className="bg-muted/20 p-8 sm:p-14 lg:p-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="font-body text-[9px] tracking-[0.25em] uppercase text-muted-foreground/40 mb-2">
              Behind the Brand
            </p>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-4">
              Our <span className="italic font-light">Story</span>
            </h2>
            <p className="font-body text-xs sm:text-sm text-foreground/35 leading-relaxed mb-6 max-w-md">
              Born in India from a belief that premium fashion should whisper, not shout. 
              We craft honest clothing — where fabric speaks louder than logos.
            </p>
            <Link
              to="/our-story"
              className="group inline-flex items-center gap-2 font-body text-[11px] tracking-[0.12em] uppercase text-foreground/60 hover:text-foreground transition-colors"
            >
              Read Our Story
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full md:w-80 lg:w-96 aspect-[4/5] overflow-hidden flex-shrink-0"
          >
            <img src={model2} alt="BLINDBEAR Story" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container pb-12 sm:pb-20">
        <div className="relative overflow-hidden bg-foreground text-background p-8 sm:p-14 lg:p-20">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
            <div className="font-display text-[20rem] leading-none -mt-16 -mr-16">B</div>
          </div>
          <div className="relative max-w-md">
            <p className="font-body text-[9px] tracking-[0.25em] uppercase text-background/40 mb-2">
              Join the Club
            </p>
            <h3 className="font-display text-2xl sm:text-4xl mb-3">
              Get Early Access
            </h3>
            <p className="font-body text-xs text-background/40 mb-6 leading-relaxed">
              Be the first to shop new drops, exclusive offers, and member-only styles.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-0"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-background/10 border border-background/15 px-4 py-3 text-xs font-body outline-none placeholder:text-background/25 focus:border-background/40 transition-colors"
              />
              <button
                type="submit"
                className="bg-background text-foreground px-5 py-3 text-[10px] font-body tracking-[0.15em] uppercase hover:bg-background/90 transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
