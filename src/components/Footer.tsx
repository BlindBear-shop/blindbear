import { Link } from "react-router-dom";
import { Instagram, Twitter, Mail } from "lucide-react";
import logo from "@/assets/logo-light.png";

const Footer = () => (
  <footer className="bg-foreground text-background mt-24">

    {/* BRAND HEADER */}
    <div className="border-b border-background/10">
      <div className="container py-20 text-center">

        <img
          src={logo}
          alt="BlindBear"
          className="mx-auto w-16 mb-6 opacity-90"
        />

        <h2 className="font-display text-6xl sm:text-7xl tracking-wide">
          BLINDBEAR
        </h2>

        <p className="text-background/50 mt-4 text-sm">
          Wear Comfort. Express Yourself.
        </p>

      </div>
    </div>

    {/* SOCIAL + CONTACT */}
    <div className="container py-10 flex flex-col items-center justify-center gap-4">

      <div className="flex items-center gap-6">

        <a
          href="mailto:blindbear.web@gmail.com"
          className="text-background/50 hover:text-background transition"
        >
          <Mail size={20} />
        </a>

        <a
          href="https://www.instagram.com/blindbear26?igsh=MTkwb2g2dnB4ZmpsYw=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-background/50 hover:text-background transition"
        >
          <Instagram size={20} />
        </a>

      </div>

    </div>

    {/* COPYRIGHT */}
    <div className="border-t border-background/10">
      <div className="container py-8 text-center">

        <p className="text-base text-background/50 tracking-wide mb-2">
          © 2026 BLINDBEAR
        </p>

        <p className="text-sm text-background/40 flex items-center justify-center gap-2">
          <Mail size={16} />
          blindbear.web@gmail.com
        </p>

      </div>
    </div>

  </footer>
);

export default Footer;