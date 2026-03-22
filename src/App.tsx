import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import HomePage from "@/pages/HomePage";
import ProductsPage from "@/pages/ProductsPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import LoginPage from "@/pages/LoginPage";
import AdminPage from "@/pages/AdminPage";
import OurStoryPage from "@/pages/OurStoryPage";
import ContactsPage from "@/pages/ContactsPage";
// import CortexWeavePage from "@/pages/CortexWeavePage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();


// ✅ SCROLL TO TOP FIX
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};


// PAGE LAYOUT
const PageLayout = () => {
  const location = useLocation();
  const isCortex = location.pathname === "/cortexweave";

  return (
    <div
      className={`min-h-screen ${
        isCortex ? "bg-[#070812] text-white" : "bg-background"
      }`}
    >
      <Navbar />

      <main> {/* ✅ FIX: content below navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/contact" element={<ContactsPage />} />
          {/* <Route path="/cortexweave" element={<CortexWeavePage />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>

            {/* ✅ GLOBAL SCROLL */}
            <ScrollToTop />

            <PageLayout />

          </BrowserRouter>

          <Toaster />
          <Sonner />
          <Analytics />

        </WishlistProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
