import { Link } from "react-router-dom";
import { Instagram, Mail, Twitter } from "lucide-react";
import logo from "@/assets/logo-light.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-32">

      {/* MAIN FOOTER */}
      <div className="container py-20 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* BRAND */}
        <div>
          <img src={logo} alt="BlindBear" className="w-12 mb-5 opacity-90" />

          <h3 className="font-display text-3xl tracking-wide mb-3">
            BLINDBEAR
          </h3>

          <p className="text-sm text-background/60 leading-relaxed max-w-xs">
            Modern clothing designed for comfort and individuality.
            Minimal style for everyday expression.
          </p>
        </div>


        {/* SHOP */}
        <div>
          <h4 className="text-xs tracking-[0.2em] text-background/40 mb-6 uppercase">
            Shop
          </h4>

          <div className="flex flex-col gap-3 text-sm">

            <Link to="/products?gender=men" className="hover:text-background/80">
              Men
            </Link>

            <Link to="/products?gender=women" className="hover:text-background/80">
              Women
            </Link>

            <Link to="/products?filter=new" className="hover:text-background/80">
              New Arrivals
            </Link>

            <Link to="/products?filter=sale" className="hover:text-background/80">
              Sale
            </Link>

          </div>
        </div>


        {/* COMPANY */}
        <div>
          <h4 className="text-xs tracking-[0.2em] text-background/40 mb-6 uppercase">
            Company
          </h4>

          <div className="flex flex-col gap-3 text-sm">

            <Link to="/our-story" className="hover:text-background/80">
              Our Story
            </Link>

            <Link to="/contact" className="hover:text-background/80">
              Contact
            </Link>

            <Link to="/shipping" className="hover:text-background/80">
              Shipping
            </Link>

            <Link to="/returns" className="hover:text-background/80">
              Returns
            </Link>

          </div>
        </div>


        {/* NEWSLETTER */}
        <div>
          <h4 className="text-xs tracking-[0.2em] text-background/40 mb-6 uppercase">
            Newsletter
          </h4>

          <p className="text-sm text-background/60 mb-6">
            Subscribe for updates on new drops and offers.
          </p>

          <div className="flex border border-background/20 rounded-md overflow-hidden">

            <input
              placeholder="Email address"
              className="bg-transparent px-4 py-2 text-sm w-full outline-none"
            />

            <button className="px-5 bg-background text-foreground text-sm hover:bg-background/90 transition">
              Join
            </button>

          </div>
        </div>

      </div>


      {/* BOTTOM BAR */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-sm text-background/40">
            © 2026 BLINDBEAR
          </p>

          <div className="flex items-center gap-6 text-background/60">

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