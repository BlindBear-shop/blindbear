import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Home,
  Grid3X3,
} from "lucide-react";

import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

import { motion, AnimatePresence } from "framer-motion";
import logoLight from "@/assets/logo-light.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Men", to: "/products?gender=men" },
  { label: "Women", to: "/products?gender=women" },
  { label: "CortexWeave™", to: "/cortexweave" },
  { label: "New Arrivals", to: "/products?filter=new" },
  { label: "Our Story", to: "/our-story" },
  { label: "Sale", to: "/products?filter=sale" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { totalItems } = useCart();
  const { totalItems: wishlistCount } = useWishlist();

  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  /* Scroll page to top when navigating */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const isActive = (link: any) => {
    const currentUrl = location.pathname + location.search;

    if (link.to === "/") {
      return location.pathname === "/";
    }

    return currentUrl === link.to;
  };

  const isHome = location.pathname === "/";
  const isCortex = location.pathname === "/cortexweave";

  const navBg =
    isCortex
      ? "bg-[#070812] backdrop-blur-xl border-b border-white/5 text-white"
      : scrolled || !isHome
      ? "bg-background/90 backdrop-blur-xl border-b border-foreground/[0.05]"
      : "bg-transparent";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">

        {/* ANNOUNCEMENT */}
        <div className="bg-black text-white text-[10px] tracking-[0.2em] uppercase overflow-hidden">

          <div className="hidden sm:block text-center py-1.5">
            CortexWeave™ Bio-Adaptive Shirt ₹8,499 Introductory • Free shipping above ₹2,999
          </div>

          <div className="sm:hidden whitespace-nowrap animate-[marquee_18s_linear_infinite] py-1.5">
            &nbsp;&nbsp;CortexWeave™ Bio-Adaptive Shirt ₹8,499 • Free shipping above ₹2,999
          </div>

        </div>

        {/* NAVBAR */}
        <nav className={`transition-all duration-300 ${navBg}`}>
          <div className="container flex items-center justify-between h-14 sm:h-16">

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* LOGO */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0"
            >
              <img src={logoLight} alt="BLINDBEAR" className="h-10 sm:h-12" />
            </Link>

            {/* DESKTOP NAV */}
            <ul className="hidden lg:flex items-center gap-10">

              {navLinks.map((link) => {
                const active = isActive(link);

                return (
                  <li key={link.label} className="relative">

                    <Link
                      to={link.to}
                      className={`text-[12px] uppercase tracking-[0.14em] pb-1
                      ${
                        active
                          ? isCortex
                            ? "text-white"
                            : "text-foreground"
                          : isCortex
                          ? "text-white/60 hover:text-white"
                          : "text-foreground/60 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>

                    {active && (
                      <span
                        className={`absolute left-0 -bottom-1 w-full h-[2px] ${
                          isCortex ? "bg-white" : "bg-foreground"
                        }`}
                      />
                    )}

                  </li>
                );
              })}

            </ul>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-1">

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2"
              >
                <Search size={18} />
              </button>

              <Link to="/wishlist" className="relative p-2 hidden sm:flex">
                <Heart size={18} />
                {wishlistCount > 0 && (
                  <span className="absolute top-0 right-0 bg-foreground text-background text-[8px] rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link to="/cart" className="relative p-2">
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-foreground text-background text-[8px] rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

              <Link to="/login" className="hidden sm:flex p-2">
                <User size={18} />
              </Link>

            </div>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
              />

              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.25 }}
                className={`fixed top-0 left-0 bottom-0 w-[80%] z-40 lg:hidden pt-24 px-6 ${
                  isCortex ? "bg-[#070812] text-white" : "bg-white"
                }`}
              >

                <ul className="flex flex-col gap-8">

                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between text-xl font-medium"
                      >
                        {link.label}
                        <span className="opacity-50">›</span>
                      </Link>
                    </li>
                  ))}

                </ul>

              </motion.div>
            </>
          )}
        </AnimatePresence>

      </header>

      {/* MOBILE BOTTOM NAV */}
      <div
        className={`fixed bottom-0 left-0 right-0 sm:hidden backdrop-blur-xl border-t z-50 ${
          isCortex
            ? "bg-[#070812]/95 border-white/10 text-white"
            : "bg-background/95 border-foreground/[0.05]"
        }`}
      >

        <div className="grid grid-cols-5 h-[56px]">

          {[
            { icon: Home, label: "Home", to: "/" },
            { icon: Grid3X3, label: "Shop", to: "/products" },
            { icon: Heart, label: "Wishlist", to: "/wishlist", badge: wishlistCount },
            { icon: ShoppingBag, label: "Cart", to: "/cart", badge: totalItems },
            { icon: User, label: "Account", to: "/login" },
          ].map(({ icon: Icon, label, to, badge }) => (

            <Link
              key={label}
              to={to}
              className="flex flex-col items-center justify-center text-[10px]"
            >

              <div className="relative">
                <Icon size={20} />

                {badge > 0 && (
                  <span className="absolute -top-1 -right-2 bg-foreground text-background text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
                    {badge}
                  </span>
                )}

              </div>

              <span>{label}</span>

            </Link>

          ))}

        </div>
      </div>
    </>
  );
};

export default Navbar;
