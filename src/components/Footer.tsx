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
      <div className="container py-20 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* BRAND */}
        <div className="flex flex-col gap-6 max-w-sm">
          <img src={logo} alt="BlindBear" className="w-28 opacity-90" />

          <p
            className={`text-sm leading-relaxed ${
              isCortex ? "text-white/60" : "text-background/60"
            }`}
          >
            Modern clothing designed for comfort and individuality.
            Minimal style for everyday expression.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4 mt-2">
            {/* empty for now (fixed crash) */}
          </div>
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
            className={`text-xs tracking-[0.25em] mb-6 uppercase ${
              isCortex ? "text-white/40" : "text-background/40"
            }`}
          >
            Support
          </h4>

          <div className="flex flex-col gap-4 text-sm">
            <Link className="hover:opacity-70 transition" to="/pages/ContactsPage">
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
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p
          className={`${
            isCortex ? "text-white/40" : "text-background/40"
          }`}
        >
          © 2026 BlindBear. All rights reserved.
        </p>

        <div className="flex gap-6">
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
