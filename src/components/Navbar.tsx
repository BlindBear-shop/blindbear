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

  const isHome = location.pathname === "/";

  const navBg =
    scrolled || !isHome
      ? "bg-background/90 backdrop-blur-xl border-b border-foreground/[0.05]"
      : "bg-transparent";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">

        {/* Announcement */}
        <div className="bg-foreground text-background text-center text-[9px] sm:text-[10px] py-1.5 tracking-[0.18em] uppercase">
          Free shipping above ₹1999 · Made in India · Easy Returns
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
              <img
                src={logoLight}
                alt="BLINDBEAR"
                className="h-10 sm:h-12"
              />
            </Link>

            {/* DESKTOP NAV */}
            <ul className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[12px] uppercase tracking-[0.14em] text-foreground/60 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-1">

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2"
              >
                <Search size={18} />
              </button>

              <Link
                to="/wishlist"
                className="relative p-2 hidden sm:flex"
              >
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

              <Link
                to="/login"
                className="hidden sm:flex p-2"
              >
                <User size={18} />
              </Link>

            </div>
          </div>
        </nav>

        {/* SEARCH */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="bg-background border-b border-foreground/[0.05]"
            >
              <div className="container py-3">
                <input
                  placeholder="Search products..."
                  className="w-full border-b border-foreground/20 bg-transparent py-2 outline-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35 }}
              className="fixed inset-0 bg-background z-40 lg:hidden"
            >
              <div className="pt-24 px-6">

                <ul className="flex flex-col gap-8">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-3xl font-display"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* MOBILE BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-background/95 backdrop-blur-xl border-t border-foreground/[0.05] z-50">

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