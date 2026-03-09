import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background hidden sm:block">
    {/* Links */}
    <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="col-span-2 md:col-span-1">
        <h4 className="font-display text-xl mb-3">BLINDBEAR</h4>
        <p className="text-background/25 text-[11px] font-body leading-relaxed max-w-[200px]">
          A modern Indian fashion brand focused on premium minimalist clothing. Designed in India.
        </p>
      </div>
      <div>
          <h5 className="font-body text-[9px] tracking-[0.2em] uppercase mb-4 text-background/40">Shop</h5>
          <ul className="space-y-2 text-[11px] font-body text-background/30">
            <li><Link to="/products?gender=men" className="hover:text-background/60 transition-colors">Men</Link></li>
            <li><Link to="/products?gender=women" className="hover:text-background/60 transition-colors">Women</Link></li>
            <li><Link to="/products?filter=new" className="hover:text-background/60 transition-colors">New Arrivals</Link></li>
            <li><Link to="/products?filter=sale" className="hover:text-background/60 transition-colors">Sale</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-body text-[9px] tracking-[0.2em] uppercase mb-4 text-background/40">Company</h5>
          <ul className="space-y-2 text-[11px] font-body text-background/30">
            <li><Link to="/our-story" className="hover:text-background/60 transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-background/60 transition-colors">Contact Us</Link></li>
            <li><span className="hover:text-background/60 transition-colors cursor-pointer">Shipping & Returns</span></li>
            <li><span className="hover:text-background/60 transition-colors cursor-pointer">Size Guide</span></li>
          </ul>
        </div>
      <div>
        <h5 className="font-body text-[9px] tracking-[0.2em] uppercase mb-4 text-background/40">Follow</h5>
        <div className="flex gap-3">
          <a href="#" className="text-background/25 hover:text-background/50 transition-colors"><Instagram size={16} /></a>
          <a href="#" className="text-background/25 hover:text-background/50 transition-colors"><Twitter size={16} /></a>
        </div>
      </div>
    </div>
    <div className="container py-5 border-t border-background/[0.06] flex items-center justify-between">
      <p className="text-[9px] font-body text-background/15 tracking-wide">© 2026 BLINDBEAR India</p>
      <p className="text-[9px] font-body text-background/15 tracking-wide">Designed in India</p>
    </div>
  </footer>
);

export default Footer;
