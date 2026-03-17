import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919083134498";
const EMAIL = "blindbear.web@gmail.com";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hi, I'm ${form.name}%0AEmail: ${form.email}%0A${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="pt-[90px] lg:pt-[110px] pb-20">

      {/* HEADER */}
      <div className="container mb-12 text-center">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl">
          Contact Us
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          We'd love to hear from you
        </p>
      </div>

      <div className="container grid lg:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-display text-xl mb-4">Get in Touch</h2>
            <p className="text-sm text-foreground/60 leading-relaxed">
              For any queries, orders, or support, reach out to us anytime.
              We usually respond within a few hours.
            </p>
          </div>

          <div className="space-y-4 text-sm">

            <div className="flex items-center gap-3">
              <Mail size={16} />
              <span>{EMAIL}</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} />
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp Support
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} />
              <span>India</span>
            </div>

          </div>

          {/* WHATSAPP CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 border border-green-600 text-green-600 px-6 py-3 text-xs tracking-widest uppercase hover:bg-green-600 hover:text-white transition"
          >
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-5"
        >
          <div>
            <label className="text-xs uppercase text-foreground/40">
              Name
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="w-full border border-foreground/10 px-4 py-3 mt-1 outline-none focus:border-foreground/40"
            />
          </div>

          <div>
            <label className="text-xs uppercase text-foreground/40">
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full border border-foreground/10 px-4 py-3 mt-1 outline-none focus:border-foreground/40"
            />
          </div>

          <div>
            <label className="text-xs uppercase text-foreground/40">
              Message
            </label>
            <textarea
              rows={5}
              required
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="w-full border border-foreground/10 px-4 py-3 mt-1 outline-none focus:border-foreground/40"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-foreground text-background py-3.5 text-xs tracking-[0.15em] uppercase hover:bg-foreground/90 transition"
          >
            Send Message
          </button>

          <p className="text-[10px] text-foreground/30 text-center">
            Your message will be sent via WhatsApp
          </p>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactPage;