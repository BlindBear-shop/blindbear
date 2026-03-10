import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import model1 from "@/assets/model-1.png";
import model2 from "@/assets/model-2.png";
import heroBanner from "@/assets/hero-banner.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const OurStoryPage = () => (
  <div className="pb-16 sm:pb-0">
    {/* Hero */}
    <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
      <img src={heroBanner} alt="Our Story" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative h-full container flex flex-col justify-end pb-10 sm:pb-16">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-px bg-background/50" />
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-background/60">Est. 2024</p>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-background leading-[0.9]">
            Our <span className="italic font-light">Story</span>
          </h1>
        </motion.div>
      </div>
    </section>

    {/* Origin */}
    <section className="container py-16 sm:py-24 lg:py-32">
      <div className="grid md:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="font-body text-[9px] tracking-[0.25em] uppercase text-muted-foreground/40 mb-3">The Beginning</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-6">
            Born from a desire for
            <br />
            <span className="italic font-light">honest clothing</span>
          </h2>
          <div className="space-y-4 font-body text-sm text-foreground/45 leading-relaxed">
            <p>
              BLINDBEAR was born in 2024 in the heart of India — from a simple frustration: why does premium
              fashion have to mean loud logos and inflated prices? We believed there was a better way.
            </p>
            <p>
              Two friends, one shared obsession — create clothing that speaks through its fabric, its cut,
              its feel against your skin. Not through a name stitched on the outside. We started with a
              single linen shirt, sewn in a small atelier in Mumbai, and the response was overwhelming.
            </p>
            <p>
              Today, every BLINDBEAR piece is still designed in India with the same philosophy: less noise,
              more substance. We work directly with artisan workshops, cutting out the middlemen, so you
              get exceptional quality without the luxury markup.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[3/4] overflow-hidden"
        >
          <img src={model2} alt="BLINDBEAR Origins" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 glass px-4 py-3">
            <p className="font-display text-lg sm:text-xl text-foreground">Designed in India</p>
            <p className="font-body text-[9px] tracking-wider text-foreground/40 uppercase">Mumbai · Delhi · Jaipur</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-foreground text-background py-16 sm:py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="font-body text-[9px] tracking-[0.25em] uppercase text-background/35 mb-2">What We Stand For</p>
          <h2 className="font-display text-3xl sm:text-5xl">Our Values</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
          {[
            {
              num: "01",
              title: "Radical Simplicity",
              desc: "We strip away the unnecessary. Every seam, every button, every thread has a purpose. What remains is pure, intentional design that transcends trends.",
            },
            {
              num: "02",
              title: "Honest Craft",
              desc: "We partner with India's finest artisan workshops. No mass production. Each piece is crafted with care — because quality you can feel doesn't need a billboard.",
            },
            {
              num: "03",
              title: "Conscious Luxury",
              desc: "Premium doesn't mean wasteful. We use sustainable fabrics, ethical production, and transparent pricing. Luxury that respects both people and planet.",
            },
          ].map((value, i) => (
            <motion.div
              key={value.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="border-t border-background/10 pt-6"
            >
              <span className="font-display text-3xl sm:text-4xl text-background/15 mb-3 block">{value.num}</span>
              <h3 className="font-display text-xl sm:text-2xl mb-3">{value.title}</h3>
              <p className="font-body text-xs text-background/35 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Craft Process */}
    <section className="container py-16 sm:py-24 lg:py-32">
      <div className="grid md:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] overflow-hidden order-2 md:order-1"
        >
          <img src={model1} alt="BLINDBEAR Craft" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="order-1 md:order-2"
        >
          <p className="font-body text-[9px] tracking-[0.25em] uppercase text-muted-foreground/40 mb-3">The Process</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-6">
            From sketch to
            <br />
            <span className="italic font-light">your wardrobe</span>
          </h2>
          <div className="space-y-6">
            {[
              { step: "Design", detail: "Every piece begins as a sketch in our Mumbai studio, inspired by the effortless elegance of Indian living." },
              { step: "Source", detail: "We hand-select fabrics from trusted mills — premium linens, organic cottons, and sustainable blends." },
              { step: "Craft", detail: "Small-batch production in artisan workshops ensures every stitch meets our exacting standards." },
              { step: "Deliver", detail: "Thoughtfully packaged and shipped directly to you — no retail markup, no waste." },
            ].map((item, i) => (
              <div key={item.step} className="flex gap-4">
                <span className="font-display text-2xl text-foreground/15 w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">{item.step}</h4>
                  <p className="font-body text-xs text-foreground/40 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="container pb-16 sm:pb-24">
      <div className="text-center">
        <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-4">
          Ready to <span className="italic font-light">experience</span> BLINDBEAR?
        </h2>
        <p className="font-body text-sm text-foreground/35 mb-8 max-w-md mx-auto">
          Discover clothing that lets you be seen — not your labels.
        </p>
        <Link
          to="/products"
          className="group inline-flex items-center gap-2.5 bg-foreground text-background px-8 py-4 font-body text-xs tracking-[0.15em] uppercase hover:bg-foreground/90 transition-all"
        >
          Shop the Collection
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  </div>
);

export default OurStoryPage;
