import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Heart,
  Truck,
  RotateCcw,
  Ruler,
  ChevronDown,
} from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import ImageGallery from "@/components/ImageGallery";
import SizeSelector from "@/components/SizeSelector";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "919083134498";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const { addItem } = useCart();
  const { toggleItem, isWishlisted } = useWishlist();
  const { toast } = useToast();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] =
    product?.colors[0]?.name || "";
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] =
    useState<string | null>("description");

  if (!product) {
    return (
      <div className="container pt-[90px] lg:pt-[110px] py-20 text-center">
        <h1 className="font-display text-3xl mb-4">
          Product Not Found
        </h1>
        <Link
          to="/products"
          className="font-body text-xs underline text-muted-foreground"
        >
          Back to shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }

    addItem(product, selectedSize, selectedColor, quantity);

    toast({
      title: "Added to cart",
      description: `${product.name} — Size ${selectedSize}`,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    window.location.href = "/checkout";
  };

  const relatedProducts = products
    .filter(
      (p) =>
        p.id !== product.id &&
        p.category === product.category
    )
    .slice(0, 4);

  const toggleSection = (section: string) => {
    setExpandedSection(
      expandedSection === section ? null : section
    );
  };

  // 🔥 SPLIT DESCRIPTION INTO SECTIONS
  const sections = product.description
    .split("\n")
    .reduce((acc: any, line) => {
      if (line.includes(":")) {
        const key = line.replace(":", "").trim();
        acc[key] = [];
        acc.current = key;
      } else if (line.trim() && acc.current) {
        acc[acc.current].push(line.trim());
      }
      return acc;
    }, { current: "" });

  return (
    <div className="pt-[90px] lg:pt-[110px] pb-14 sm:pb-0">
      {/* Breadcrumb */}
      <div className="container py-3 sm:py-4">
        <nav className="font-body text-[10px] sm:text-xs text-muted-foreground/50">
          <Link to="/">Home</Link>
          <span className="mx-1.5">/</span>
          <Link to="/products">Shop</Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground/70">
            {product.name}
          </span>
        </nav>
      </div>

      <div className="container pb-8">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-12">
          {/* Images */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ImageGallery
              images={product.images}
              productName={product.name}
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 sm:space-y-5"
          >
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl">
              {product.name}
            </h1>

            <span className="font-display text-2xl sm:text-3xl">
              ₹{product.price.toLocaleString()}
            </span>

            {/* Color */}
            <div>
              <p className="text-xs mb-2">
                Color — {selectedColor}
              </p>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-8 h-8 border ${
                      selectedColor === c.name
                        ? "border-black"
                        : "border-gray-200"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <SizeSelector
              sizes={product.sizes}
              selected={selectedSize}
              onSelect={setSelectedSize}
            />

            {/* Quantity */}
            <div className="flex items-center border w-fit">
              <button
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
                className="px-3"
              >
                −
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3"
              >
                +
              </button>
            </div>

            {/* Actions */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 uppercase"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="w-full border py-3 uppercase"
            >
              Buy Now
            </button>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want express delivery for ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 border border-green-600 text-green-600 uppercase text-xs hover:bg-green-600 hover:text-white transition"
            >
              ⚡ Express Delivery
            </a>

            {/* Wishlist */}
            <button
              onClick={() => toggleItem(product.id)}
              className="flex items-center gap-2 text-sm"
            >
              <Heart
                size={16}
                className={
                  isWishlisted(product.id) ? "fill-black" : ""
                }
              />
              Wishlist
            </button>

            {/* Info */}
            <div className="text-xs text-gray-500 space-y-1">
              <p>
                <Truck size={14} className="inline" /> Free shipping above ₹1999
              </p>
              <p>
                <RotateCcw size={14} className="inline" /> 15-day returns
              </p>
              <p>
                <Ruler size={14} className="inline" /> True to size
              </p>
            </div>
          </motion.div>
        </div>

        {/* 🔥 ACCORDION DESCRIPTION */}
        <div className="mt-8 border-t">
          {Object.keys(sections)
            .filter((key) => key !== "current")
            .map((key) => (
              <div key={key} className="border-b py-4">
                <button
                  onClick={() => toggleSection(key)}
                  className="w-full flex justify-between items-center"
                >
                  <span className="font-medium text-sm">
                    {key}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition ${
                      expandedSection === key
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {expandedSection === key && (
                  <div className="mt-3 text-sm text-gray-600 space-y-1">
                    {sections[key].map((item: string, i: number) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl mb-4">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
