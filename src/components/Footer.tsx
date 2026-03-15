import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/11.png";

const Footer = () => {
  const location = useLocation();
  const isCortex = location.pathname === "/cortexweave";

  return (
    <footer
      className={`mt-32 ${
        isCortex ? "bg-[#070812] text-white" : "bg-foreground text-background"
      }`}
    >
      {/* MAIN FOOTER */}
      <div className="container py-20 grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* BRAND */}
        <div className="flex items-start gap-6 max-w-xl">

          {/* LOGO */}
          <img
            src={logo}
            alt="BlindBear"
            className="w-32 opacity-90"
          />

          {/* TEXT */}
          <p
            className={`text-sm leading-relaxed mt-2 ${
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
            className={`text-xs tracking-[0.25em] mb-6 uppercase ${
              isCortex ? "text-white/40" : "text-background/40"
            }`}
          >
            Shop
          </h4>

          <div className="flex flex-col gap-4 text-sm">
            <Link to="/products?gender=men">Men</Link>
            <Link to="/products?gender=women">Women</Link>
            <Link to="/products?filter=new">New Arrivals</Link>
            <Link to="/products?filter=sale">Sale</Link>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div
        className={`border-t ${
          isCortex ? "border-white/10" : "border-background/10"
        }`}
      >
        <div className="container py-6 text-center">
          <p
            className={`text-sm ${
              isCortex ? "text-white/40" : "text-background/40"
            }`}
          >
            © 2026 BlindBear
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;