import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/11.png";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const isCortex = location.pathname === "/cortexweave";

  return (
    <footer
      className={`mt-12 ${
        isCortex ? "bg-[#070812] text-white" : "bg-foreground text-background"
      }`}
    >
      {/* MAIN FOOTER */}
      <div className="container py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

        {/* BRAND */}
        <div className="flex flex-col gap-5 max-w-sm">
          <img src={logo} alt="BlindBear" className="w-24 sm:w-28 opacity-90" />

          {/* TAGLINE */}
          <p className="text-sm font-medium tracking-wide">
            Wear Comfort & Express Yourself
          </p>

          <p
            className={`text-sm leading-relaxed ${
              isCortex ? "text-white/60" : "text-background/60"
            }`}
          >
            Modern clothing designed for comfort and individuality.
            Minimal style for everyday expression.
          </p>

          {/* SOCIALS */}
          <div className="flex flex-col gap-3 mt-2">
            
            <a
              href="https://www.instagram.com/blindbear.official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:opacity-70 transition"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/share/18fcdKwktj/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:opacity-70 transition"
            >
              <Facebook size={18} />
              <span>Facebook</span>
            </a>

            <a
              href="https://www.linkedin.com/in/blind-bear-9857a03b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:opacity-70 transition"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>

          </div>
        </div>

        {/* SHOP */}
        <div>
          <h4
            className={`text-xs tracking-[0.25em] mb-5 uppercase ${
              isCortex ? "text-white/40" : "text-background/40"
            }`}
          >
            Shop
          </h4>

          <div className="flex flex-col gap-3 text-sm">
            <Link className="hover:opacity-70 transition" to="/products?gender=men">
              Men
            </Link>
            <Link className="hover:opacity-70 transition" to="/products?gender=women">
              Women
            </Link>
            <Link className="hover:opacity-70 transition" to="/products?filter=new">
              New Arrivals
            </Link>
          </div>
        </div>

        {/* SUPPORT */}
        <div>
          <h4
            className={`text-xs tracking-[0.25em] mb-5 uppercase ${
              isCortex ? "text-white/40" : "text-background/40"
            }`}
          >
            Support
          </h4>

          <div className="flex flex-col gap-3 text-sm">
            <Link className="hover:opacity-70 transition" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* DIVIDER LINE */}
      <div
        className={`border-t ${
          isCortex ? "border-white/10" : "border-background/10"
        }`}
      />

      {/* BOTTOM BAR */}
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        <p
          className={`text-center md:text-left ${
            isCortex ? "text-white/40" : "text-background/40"
          }`}
        >
          © 2026 BlindBear. All rights reserved.
        </p>

        <div className="flex gap-5">
          <Link className="hover:opacity-70 transition" to="#">
            Privacy
          </Link>
          <Link className="hover:opacity-70 transition" to="#">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
