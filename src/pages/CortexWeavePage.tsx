import { motion, Variants } from "framer-motion";
import cortexDiagram from "@/assets/cortex-diagram.png";

const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(20px)", y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
    },
  }),
};

const CortexWeavePage = () => {
  return (
    <div className="bg-[#070812] text-white min-h-screen overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="fixed inset-0 -z-10 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>


      {/* HERO */}
      <section className="container pt-28 sm:pt-32 pb-20 sm:pb-28">

        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={blurReveal}
          className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-[#7C6CFF] mb-6"
        >
          BlindBear × CortexWeave
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={blurReveal}
          className="text-4xl sm:text-6xl lg:text-7xl font-light leading-tight max-w-4xl"
        >
          Premium Indian fashion.
          <br />
          Now with a story
          <br />
          no one else can tell.
        </motion.h1>

      </section>



      {/* STORY + TECH SECTION */}
      <section className="container grid lg:grid-cols-2 gap-12 lg:gap-16 pb-20 lg:pb-28">

        {/* TEXT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6 text-white/70 leading-relaxed max-w-xl"
        >

          <p className="text-sm sm:text-base">
            BlindBear was built on a single belief:{" "}
            <b className="text-white">Indian fashion deserves to be world-class.</b>
            Not aspirationally world-class. Actually world-class —
            in quality, in design, and now in innovation.
          </p>

          <p className="text-sm sm:text-base">
            CortexWeave is not a collaboration or a licensed technology.
            It is BlindBear’s own invention — a fabric developed from the
            ground up, built on molecularly imprinted polymer chemistry
            never before applied to wearable clothing.
          </p>

          <p className="text-sm sm:text-base">
            This is not smart clothing. Smart clothing has batteries.
            This is something older and more interesting:
            <b className="text-white"> fabric that behaves like biology.</b>
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="border-l-4 border-[#7C6CFF] pl-5 mt-6 italic text-lg sm:text-xl text-white"
          >
            "Every other brand puts technology inside clothes.
            We made the fabric itself the technology."
          </motion.div>

        </motion.div>


        {/* TECH CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <TechCard
            title="India"
            subtitle="Designed and made in India"
            label="Founding"
          />

          <TechCard
            title="MIP Fiber"
            subtitle="World first in apparel"
            label="Technology"
          />

          <TechCard
            title="Lyocell"
            subtitle="Biodegradable, skin-safe"
            label="Base Material"
          />

          <TechCard
            title="Zero"
            subtitle="Pure passive chemistry"
            label="Electronics"
          />

          <div className="sm:col-span-2">
            <TechCard
              title="Vagus nerve • Deep pressure • Thermoregulation"
              subtitle="3 independent peer-reviewed mechanisms"
              label="Clinical Pathways"
            />
          </div>

        </div>

      </section>



      {/* DIAGRAM SECTION */}
      <section className="container py-16 sm:py-24 text-center">

        <h3 className="text-2xl sm:text-3xl font-light mb-10">
          Stress-response zones
        </h3>

        <motion.img
          src={cortexDiagram}
          className="mx-auto w-full max-w-[320px] sm:max-w-md lg:max-w-xl opacity-90"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </section>



      {/* SCIENCE SECTION */}
      <section className="container py-20 lg:py-28">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#7C6CFF] mb-6"
        >
          Clinical Backing
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-light mb-8"
        >
          Three pathways. All proven.
        </motion.h2>

        <p className="text-white/60 max-w-xl mb-14 text-sm sm:text-base">
          Each mechanism is backed by independent peer-reviewed research.
          CortexWeave does not ask you to trust us. It asks you to trust
          the science.
        </p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

          <ScienceCard
            number="01"
            title="Vagus nerve decompression"
            text="When the CortexWeave collar loosens the parasympathetic system activates. Heart rate drops. Cortisol production slows."
          />

          <ScienceCard
            number="02"
            title="Deep pressure stimulation"
            text="5–8 mmHg of even pressure activates Meissner's corpuscles triggering serotonin and dopamine release."
          />

          <ScienceCard
            number="03"
            title="Skin thermoregulation"
            text="When the chest weave opens skin temperature drops 1–2°C reducing cortisol production."
          />

        </div>

      </section>

    </div>
  );
};

export default CortexWeavePage;



const TechCard = ({ title, subtitle, label }: any) => (
  <motion.div
    whileHover={{ scale: 1.04, borderColor: "#7C6CFF" }}
    className="bg-[#0d0f1f] border border-white/5 rounded-xl p-6 sm:p-8 transition"
  >

    <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-3">
      {label}
    </p>

    <h3 className="text-lg sm:text-xl mb-1">{title}</h3>

    <p className="text-white/50 text-sm">{subtitle}</p>

  </motion.div>
);



const ScienceCard = ({ number, title, text }: any) => (
  <motion.div
    whileHover={{ scale: 1.04, borderColor: "#7C6CFF" }}
    className="bg-[#0d0f1f] border border-white/5 rounded-xl p-6 sm:p-8 transition"
  >

    <div className="text-2xl sm:text-3xl mb-4 text-[#7C6CFF] opacity-70">
      {number}
    </div>

    <h3 className="text-lg sm:text-xl mb-3">{title}</h3>

    <p className="text-white/60 text-sm leading-relaxed">
      {text}
    </p>

  </motion.div>
);