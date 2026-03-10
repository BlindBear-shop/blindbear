import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Instagram, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="pb-16 sm:pb-0">
      {/* Header */}
      <section className="container pt-8 sm:pt-14 pb-8 sm:pb-12 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <p className="font-body text-[9px] tracking-[0.25em] uppercase text-muted-foreground/40 mb-2">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl sm:text-6xl text-foreground leading-[0.95] mb-3">
            Contact <span className="italic font-light">Us</span>
          </h1>
          <p className="font-body text-sm text-foreground/35 max-w-md mx-auto">
            Have a question, feedback, or just want to say hello? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      <div className="container pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-foreground/10 py-3 font-body text-sm outline-none placeholder:text-foreground/20 focus:border-foreground/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-body text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-foreground/10 py-3 font-body text-sm outline-none placeholder:text-foreground/20 focus:border-foreground/40 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-foreground/10 py-3 font-body text-sm outline-none placeholder:text-foreground/20 focus:border-foreground/40 transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="font-body text-[9px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-2 block">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-foreground/10 py-3 font-body text-sm outline-none placeholder:text-foreground/20 focus:border-foreground/40 transition-colors resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2.5 bg-foreground text-background px-8 py-3.5 font-body text-[11px] tracking-[0.15em] uppercase hover:bg-foreground/90 transition-all"
              >
                Send Message
                <Send size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-muted/30 p-6 sm:p-8 space-y-6">
              <h3 className="font-display text-xl sm:text-2xl text-foreground">Visit Us</h3>
              {[
                { icon: MapPin, label: "Studio", value: "42, Linking Road, Bandra West\nMumbai 400050, India" },
                { icon: Mail, label: "Email", value: "hello@blindbear.in" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: Clock, label: "Hours", value: "Mon–Sat: 10AM – 8PM\nSun: 11AM – 6PM" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3">
                  <Icon size={16} className="text-foreground/25 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-[9px] tracking-[0.2em] uppercase text-foreground/30 mb-0.5">{label}</p>
                    <p className="font-body text-xs text-foreground/60 whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-foreground text-background p-6 sm:p-8">
              <h3 className="font-display text-xl mb-3">Follow Us</h3>
              <p className="font-body text-xs text-background/35 mb-4 leading-relaxed">
                Stay connected. New drops, behind-the-scenes, and style inspiration — daily.
              </p>
              <div className="flex gap-3">
                <a href="#" className="flex items-center gap-2 bg-background/10 px-4 py-2.5 hover:bg-background/20 transition-colors">
                  <Instagram size={14} />
                  <span className="font-body text-[10px] tracking-wider uppercase">Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-2 bg-background/10 px-4 py-2.5 hover:bg-background/20 transition-colors">
                  <Twitter size={14} />
                  <span className="font-body text-[10px] tracking-wider uppercase">Twitter</span>
                </a>
              </div>
            </div>

            {/* FAQ teaser */}
            <div className="border border-foreground/[0.06] p-6 sm:p-8">
              <h3 className="font-display text-xl text-foreground mb-2">FAQ</h3>
              <p className="font-body text-xs text-foreground/35 mb-4 leading-relaxed">
                Quick answers to common questions about orders, shipping, returns, and sizing.
              </p>
              <div className="space-y-3">
                {[
                  { q: "What is your return policy?", a: "15-day easy returns on all orders. No questions asked." },
                  { q: "How long does shipping take?", a: "Standard delivery: 4-6 business days. Express: 1-2 days." },
                  { q: "Do you ship internationally?", a: "Currently India only. International shipping coming soon." },
                ].map((faq) => (
                  <details key={faq.q} className="group">
                    <summary className="font-body text-xs text-foreground/60 cursor-pointer hover:text-foreground transition-colors list-none flex items-center justify-between py-2 border-b border-foreground/[0.04]">
                      {faq.q}
                      <span className="text-foreground/20 group-open:rotate-45 transition-transform text-lg">+</span>
                    </summary>
                    <p className="font-body text-[11px] text-foreground/35 pt-2 pb-3 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
