import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu, X, Home, Grid3X3 } from "lucide-react";
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
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const navBg = scrolled || !isHome
    ? "bg-background/80 backdrop-blur-2xl border-b border-foreground/[0.05] shadow-[0_1px_20px_-4px_hsl(var(--foreground)/0.04)]"
    : "bg-transparent";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Announcement bar */}
        <div className="bg-foreground text-background text-center text-[9px] sm:text-[10px] py-1.5 font-body tracking-[0.18em] uppercase">
          Free shipping above ₹1999 · <span className="hidden sm:inline">Made in India · </span>Easy Returns
        </div>

        {/* Main nav */}
        <nav className={`transition-all duration-300 ${navBg}`}>
          <div className="container flex items-center justify-between h-14 sm:h-16">
            {/* Mobile menu */}
            <button
              className="lg:hidden p-2 -ml-2 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0">
              <img
                src={logoLight}
                alt="BLINDBEAR"
                className="h-10 sm:h-12 md:h-14 w-auto transition-all"
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="relative text-[12px] font-body tracking-[0.14em] uppercase text-foreground/60 hover:text-foreground transition-colors group py-1"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right icons */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-foreground/50 hover:text-foreground transition-colors"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <Link
                to="/wishlist"
                className="p-2 text-foreground/50 hover:text-foreground transition-colors relative hidden sm:flex"
                aria-label="Wishlist"
              >
                <Heart size={18} />
                {wishlistCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 bg-foreground text-background text-[7px] min-w-[14px] h-[14px] flex items-center justify-center rounded-full font-body font-medium px-0.5">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link
                to="/cart"
                className="p-2 text-foreground/50 hover:text-foreground transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute top-0.5 right-0.5 bg-foreground text-background text-[7px] min-w-[14px] h-[14px] flex items-center justify-center rounded-full font-body font-medium px-0.5">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Link
                to="/login"
                className="p-2 text-foreground/50 hover:text-foreground transition-colors hidden sm:flex"
                aria-label="Account"
              >
                <User size={18} />
              </Link>
            </div>
          </div>
        </nav>

        {/* Search */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-background/90 backdrop-blur-2xl border-b border-foreground/[0.05] overflow-hidden"
            >
              <div className="container py-3 sm:py-4">
                <div className="relative">
                  <Search size={15} className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground/40" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-transparent pl-7 border-b border-foreground/10 py-2 text-sm font-body outline-none placeholder:text-muted-foreground/40 focus:border-foreground/30 transition-colors"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu — fullscreen */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 top-[calc(3.5rem+24px)] z-50 bg-background/95 backdrop-blur-3xl lg:hidden"
            >
              <div className="container">
                <ul className="flex flex-col py-8 gap-0">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.to}
                        className="block py-4 text-2xl font-display text-foreground/80 hover:text-foreground transition-colors border-b border-foreground/[0.04]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                  >
                    <Link
                      to="/login"
                      className="block py-4 text-2xl font-display text-foreground/80 hover:text-foreground transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      Account
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-[calc(3.5rem+24px)] sm:h-[calc(4rem+24px)]" />

      {/* Mobile bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-background/85 backdrop-blur-2xl border-t border-foreground/[0.06] safe-area-bottom">
        <div className="grid grid-cols-5 h-[52px]">
          {[
            { icon: Home, label: "Home", to: "/", match: "/" },
            { icon: Grid3X3, label: "Shop", to: "/products", match: "/products" },
            { icon: Heart, label: "Wishlist", to: "/wishlist", match: "/wishlist", badge: wishlistCount },
            { icon: ShoppingBag, label: "Cart", to: "/cart", match: "/cart", badge: totalItems },
            { icon: User, label: "Account", to: "/login", match: "/login" },
          ].map(({ icon: Icon, label, to, match, badge }) => (
            <Link
              key={label}
              to={to}
              className={`flex flex-col items-center justify-center gap-0.5 relative transition-colors ${
                location.pathname === match ? "text-foreground" : "text-foreground/35"
              }`}
            >
              <Icon size={17} strokeWidth={location.pathname === match ? 2 : 1.5} />
              <span className="text-[8px] font-body tracking-wider">{label}</span>
              {badge && badge > 0 && (
                <span className="absolute top-1.5 right-1/2 translate-x-3 bg-foreground text-background text-[6px] min-w-[12px] h-[12px] flex items-center justify-center rounded-full font-body">
                  {badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
