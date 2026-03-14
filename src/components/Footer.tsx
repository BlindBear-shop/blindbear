import { Link, useLocation } from "react-router-dom";
import { Instagram, Mail, Twitter } from "lucide-react";
import logo from "@/assets/logo-light.png";

const Footer = () => {

  const location = useLocation();
  const isCortex = location.pathname === "/cortexweave";

  return (
    <footer
      className={`mt-32 ${
        isCortex
          ? "bg-[#070812] text-white"
          : "bg-foreground text-background"
      }`}
    >

      {/* MAIN FOOTER */}
      <div className="container py-20 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* BRAND */}
        <div>
          <img src={logo} alt="BlindBear" className="w-12 mb-5 opacity-90" />

          <h3 className="font-display text-3xl tracking-wide mb-3">
            BLINDBEAR
          </h3>

          <p
            className={`text-sm leading-relaxed max-w-xs ${
              isCortex ? "text-white/60" : "text-background/60"
            }`}
          >
            Modern clothing designed for comfort and individuality.
            Minimal style for everyday expression.
          </p>
        </div>


        {/* SHOP */}
        <div>
          <h4
            className={`text-xs tracking-[0.2em] mb-6 uppercase ${
              isCortex ? "text-white/40" : "text-background/40"
            }`}
          >
            Shop
          </h4>

          <div className="flex flex-col gap-3 text-sm">

            <Link to="/products?gender=men">Men</Link>
            <Link to="/products?gender=women">Women</Link>
            <Link to="/products?filter=new">New Arrivals</Link>
            <Link to="/products?filter=sale">Sale</Link>

          </div>
        </div>


        {/* COMPANY */}
        <div>
          <h4
            className={`text-xs tracking-[0.2em] mb-6 uppercase ${
              isCortex ? "text-white/40" : "text-background/40"
            }`}
          >
            Company
          </h4>

          <div className="flex flex-col gap-3 text-sm">

            <Link to="/our-story">Our Story</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/returns">Returns</Link>

          </div>
        </div>


        {/* NEWSLETTER */}
        <div>
          <h4
            className={`text-xs tracking-[0.2em] mb-6 uppercase ${
              isCortex ? "text-white/40" : "text-background/40"
            }`}
          >
            Newsletter
          </h4>

          <p
            className={`text-sm mb-6 ${
              isCortex ? "text-white/60" : "text-background/60"
            }`}
          >
            Subscribe for updates on new drops and offers.
          </p>

          <div
            className={`flex border rounded-md overflow-hidden ${
              isCortex ? "border-white/20" : "border-background/20"
            }`}
          >

            <input
              placeholder="Email address"
              className="bg-transparent px-4 py-2 text-sm w-full outline-none"
            />

            <button
              className={`px-5 text-sm transition ${
                isCortex
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-background text-foreground hover:bg-background/90"
              }`}
            >
              Join
            </button>

          </div>
        </div>

      </div>


      {/* BOTTOM BAR */}
      <div
        className={`border-t ${
          isCortex ? "border-white/10" : "border-background/10"
        }`}
      >
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <p
            className={`text-sm ${
              isCortex ? "text-white/40" : "text-background/40"
            }`}
          >
            © 2026 BLINDBEAR
          </p>

          <div
            className={`flex items-center gap-6 ${
              isCortex ? "text-white/60" : "text-background/60"
            }`}
          >

            <a href="mailto:blindbear.web@gmail.com">
              <Mail size={18} />
            </a>

            <a
              href="https://www.instagram.com/blindbear26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
            </a>

            <a href="#">
              <Twitter size={18} />
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;