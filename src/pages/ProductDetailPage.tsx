import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Truck, RotateCcw, Ruler, ChevronDown, ChevronUp } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import ImageGallery from "@/components/ImageGallery";
import SizeSelector from "@/components/SizeSelector";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const { toggleItem, isWishlisted } = useWishlist();
  const { toast } = useToast();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name || "");
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState<string | null>("description");

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-3xl mb-4">Product Not Found</h1>
        <Link to="/products" className="font-body text-xs underline text-muted-foreground">Back to shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({ title: "Please select a size", variant: "destructive" });
      return;
    }
    addItem(product, selectedSize, selectedColor, quantity);
    toast({ title: "Added to cart", description: `${product.name} — Size ${selectedSize}` });
  };

  const relatedProducts = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="pb-14 sm:pb-0">
      {/* Breadcrumb */}
      <div className="container py-3 sm:py-4">
        <nav className="font-body text-[10px] sm:text-xs text-muted-foreground/50">
          <Link to="/" className="hover:text-foreground/70">Home</Link>
          <span className="mx-1.5">/</span>
          <Link to="/products" className="hover:text-foreground/70">Shop</Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground/70">{product.name}</span>
        </nav>
      </div>

      <div className="container pb-8">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-12">
          {/* Images */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <ImageGallery images={product.images} productName={product.name} />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="space-y-4 sm:space-y-5"
          >
            <div>
              {product.isNew && (
                <span className="font-body text-[9px] tracking-widest uppercase bg-foreground/90 text-background px-2 py-0.5 mb-2 inline-block">
                  New Arrival
                </span>
              )}
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mt-1">{product.name}</h1>
            </div>

            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-2xl sm:text-3xl text-foreground">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <>
                  <span className="font-body text-sm text-muted-foreground/40 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="font-body text-[10px] tracking-wider text-sale uppercase font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                  </span>
                </>
              )}
            </div>

            <p className="font-body text-xs sm:text-sm text-foreground/50 leading-relaxed">{product.description}</p>

            {/* Color */}
            <div>
              <p className="font-body text-[10px] tracking-[0.12em] uppercase text-muted-foreground/50 mb-2">
                Color — <span className="text-foreground/70">{selectedColor}</span>
              </p>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 border-2 transition-all ${
                      selectedColor === c.name ? "border-foreground scale-110" : "border-foreground/10"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="font-body text-[10px] tracking-[0.12em] uppercase text-muted-foreground/50">Size</p>
                <button className="font-body text-[10px] underline text-muted-foreground/40 hover:text-foreground/60">
                  Size Guide
                </button>
              </div>
              <SizeSelector sizes={product.sizes} selected={selectedSize} onSelect={setSelectedSize} />
            </div>

            {/* Quantity */}
            <div>
              <p className="font-body text-[10px] tracking-[0.12em] uppercase text-muted-foreground/50 mb-2">Quantity</p>
              <div className="flex items-center border border-foreground/10 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center font-body text-foreground/60 hover:bg-muted/50 transition-colors"
                >−</button>
                <span className="w-10 text-center font-body text-xs">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center font-body text-foreground/60 hover:bg-muted/50 transition-colors"
                >+</button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-1">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-foreground text-background py-3.5 sm:py-4 font-body text-[11px] sm:text-xs tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={() => toggleItem(product.id)}
                className={`w-12 h-12 sm:w-14 sm:h-14 border flex items-center justify-center transition-colors flex-shrink-0 ${
                  isWishlisted(product.id)
                    ? "bg-foreground text-background border-foreground"
                    : "border-foreground/15 text-foreground/50 hover:border-foreground/40"
                }`}
              >
                <Heart size={18} className={isWishlisted(product.id) ? "fill-current" : ""} />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full border border-foreground/15 text-foreground/70 py-3.5 font-body text-[11px] tracking-[0.15em] uppercase hover:bg-foreground hover:text-background hover:border-foreground transition-all"
            >
              Buy Now
            </button>

            {/* Trust info */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-body text-foreground/35">
                <Truck size={14} /> Free shipping above ₹1999
              </div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-body text-foreground/35">
                <RotateCcw size={14} /> 15-day easy returns
              </div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-body text-foreground/35">
                <Ruler size={14} /> True to size
              </div>
            </div>
          </motion.div>
        </div>

        {/* Accordion sections - Zara style */}
        <div className="mt-10 sm:mt-16 max-w-3xl">
          {[
            { key: "description", title: "Product Details", content: `${product.description} Crafted with care in India, this piece embodies BLINDBEAR's commitment to premium quality and minimalist design.` },
            { key: "size", title: "Size & Fit", content: "Model is 6'0\" and wears size M. True to size. For a relaxed fit, we recommend sizing up." },
            { key: "shipping", title: "Shipping & Returns", content: "Free shipping on orders above ₹1999. Standard delivery in 4-6 business days. Easy 15-day returns on all orders." },
          ].map((section) => (
            <div key={section.key} className="border-b border-foreground/[0.06]">
              <button
                onClick={() => toggleSection(section.key)}
                className="w-full flex items-center justify-between py-4 font-body text-xs sm:text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors"
              >
                <span className="uppercase tracking-[0.1em]">{section.title}</span>
                {expandedSection === section.key ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {expandedSection === section.key && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="pb-4"
                >
                  <p className="font-body text-xs sm:text-sm text-foreground/40 leading-relaxed">{section.content}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section className="container py-10 sm:py-12">
          <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-5 sm:mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 sm:gap-x-3 lg:gap-x-4 gap-y-5 sm:gap-y-8">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;
