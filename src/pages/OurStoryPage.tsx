import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import model1 from "@/assets/model-1.png";
import model2 from "@/assets/model-2.png";
import heroBanner from "@/assets/hero-banner.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const OurStoryPage = () => {
  return (
    <div className="pb-16 sm:pb-0">

      {/* HERO */}
      <section className="relative h-[55vh] sm:h-[65vh] overflow-hidden">
        <img
          src={heroBanner}
          alt="BlindBear Story"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative h-full container flex flex-col justify-end pb-12 sm:pb-16">

          <motion.div initial="hidden" animate="visible" variants={fadeUp}>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-white/40" />
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/70">
                Est. 2026
              </p>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-[0.9]">
              Our <span className="italic font-light">Story</span>
            </h1>

            <p className="text-white/70 mt-4 max-w-lg text-sm sm:text-base">
              Wear Comfort. Express Yourself.
            </p>

          </motion.div>
        </div>
      </section>


      {/* BRAND STORY */}
      <section className="container py-20 sm:py-28 lg:py-32">

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >

            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
              The Beginning
            </p>

            <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-8">
              Clothing that
              <br />
              <span className="italic font-light">feels like you</span>
            </h2>

            <div className="space-y-5 text-sm text-foreground/60 leading-relaxed">

              <p>
                BlindBear was born from a simple belief — clothing should feel like you.
              </p>

              <p>
                In a world where fashion constantly tries to define identity,
                BlindBear believes clothing should do the opposite. It should
                create space for individuality, comfort, and quiet confidence.
                No labels. No boundaries.
              </p>

              <p>
                Every piece we create is designed to move with you through
                everyday life — minimal, thoughtful, and gender-neutral.
                Because style isn’t about fitting into categories.
                It’s about feeling comfortable in your own skin.
              </p>

              <p>
                BlindBear is more than clothing. It’s a space where softness
                meets strength, and where everyone belongs.
              </p>

            </div>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[3/4] overflow-hidden rounded-sm"
          >

            <img
              src={model2}
              alt="BlindBear Fashion"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-5 py-4">

              <p className="font-display text-lg">
                Designed in India
              </p>

              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Minimal · Gender Neutral · Timeless
              </p>

            </div>

          </motion.div>

        </div>
      </section>


      {/* VALUES */}
      <section className="bg-black text-white py-20 sm:py-28">

        <div className="container">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >

            <p className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-3">
              Our Philosophy
            </p>

            <h2 className="font-display text-4xl sm:text-5xl">
              What We Stand For
            </h2>

          </motion.div>


          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                num: "01",
                title: "Comfort First",
                desc: "Clothing should move with you. Every BlindBear piece is designed with comfort, softness, and ease at its core."
              },
              {
                num: "02",
                title: "Quiet Confidence",
                desc: "True style doesn’t shout. We believe in subtle design, minimal aesthetics, and timeless pieces."
              },
              {
                num: "03",
                title: "Freedom of Expression",
                desc: "Fashion shouldn’t define who you are. Our gender-neutral designs allow everyone to express themselves freely."
              }
            ].map((value, i) => (

              <motion.div
                key={value.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="border-t border-white/10 pt-6"
              >

                <span className="text-4xl text-white/20 block mb-3">
                  {value.num}
                </span>

                <h3 className="text-xl mb-2">
                  {value.title}
                </h3>

                <p className="text-sm text-white/60">
                  {value.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* CRAFT SECTION */}
      <section className="container py-20 sm:py-28">

        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img
              src={model1}
              alt="BlindBear Craft"
              className="w-full h-full object-cover"
            />
          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >

            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Our Process
            </p>

            <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-6">
              Thoughtfully
              <br />
              <span className="italic font-light">crafted</span>
            </h2>

            <p className="text-sm text-foreground/60 leading-relaxed mb-6">
              Every BlindBear piece is designed with care — from fabric
              selection to the final stitch. We focus on timeless designs
              that remain relevant beyond trends.
            </p>

            <p className="text-sm text-foreground/60 leading-relaxed">
              Our goal is simple: create clothing that feels effortless,
              comfortable, and authentic — every single day.
            </p>

          </motion.div>

        </div>

      </section>


      {/* CONTACT */}
      <section className="bg-muted py-20">

        <div className="container text-center">

          <h2 className="font-display text-4xl sm:text-5xl mb-6">
            Get in Touch
          </h2>

          <p className="text-foreground/60 max-w-lg mx-auto mb-8 text-sm">
            Have questions, feedback, or collaboration ideas?
            We'd love to hear from you.
          </p>

          <a
            href="mailto:blindbear.web@gmail.com"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-xs tracking-[0.15em] uppercase hover:bg-black/90 transition"
          >
            <Mail size={16} />
            blindbear.web@gmail.com
          </a>

        </div>

      </section>


      {/* CTA */}
      <section className="container py-16 text-center">

        <h2 className="font-display text-4xl sm:text-5xl mb-4">
          Discover BlindBear
        </h2>

        <p className="text-foreground/60 mb-8">
          Clothing that lets you be yourself.
        </p>

        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-xs tracking-[0.15em] uppercase hover:bg-black/90 transition"
        >
          Shop Collection
          <ArrowRight size={14} />
        </Link>

      </section>

    </div>
  );
};

export default OurStoryPage;