import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const WHATSAPP_NUMBER = "919083134498";

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { toggleItem, isWishlisted } = useWishlist();
  const { addItem } = useCart();

  const wishlisted = isWishlisted(product.id);

  const defaultSize = product.sizes?.[0] || "M";
  const defaultColor = product.colors?.[0]?.name || "Default";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group relative"
    >
      {/* IMAGE */}
      <Link
        to={`/product/${product.id}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="block relative overflow-hidden aspect-[4/5] bg-muted/20 flex items-center justify-center"
      >
        {/* First Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 m-auto max-h-[90%] max-w-[90%] object-contain transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
        />

        {/* Hover Image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 m-auto max-h-[90%] max-w-[90%] object-contain opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
          />
        )}

        {/* ACTION BAR */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition duration-300">
          <div className="bg-white/95 backdrop-blur-xl p-2 flex flex-col gap-2">

            {/* TOP ROW */}
            <div className="flex gap-2">
              {/* ADD TO CART */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem(product, defaultSize, defaultColor, 1);
                }}
                className="flex-1 flex items-center justify-center gap-1 text-[10px] border border-black py-2 hover:bg-black hover:text-white transition"
              >
                <ShoppingBag size={14} />
                CART
              </button>

              {/* BUY NOW */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem(product, defaultSize, defaultColor, 1);
                  window.location.href = "/checkout";
                }}
                className="flex-1 text-[10px] bg-black text-white py-2 hover:opacity-90 transition"
              >
                BUY
              </button>
            </div>

            {/* EXPRESS DELIVERY */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I want express delivery for ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-[10px] border border-green-600 text-green-600 py-2 tracking-wide hover:bg-green-600 hover:text-white transition"
            >
              ⚡ EXPRESS DELIVERY
            </a>

          </div>
        </div>
      </Link>

      {/* WISHLIST */}
      <button
        onClick={() => toggleItem(product.id)}
        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-background/50 backdrop-blur-md hover:bg-background/80 transition-all"
      >
        <Heart
          size={13}
          className={`transition-all ${
            wishlisted
              ? "fill-foreground text-foreground scale-110"
              : "text-foreground/60"
          }`}
        />
      </button>

      {/* PRODUCT INFO */}
      <div className="mt-2.5 space-y-1">
        <Link
          to={`/product/${product.id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <h3 className="font-body text-[11px] sm:text-xs text-foreground/80 hover:text-foreground transition-colors line-clamp-1 tracking-wide">
            {product.name}
          </h3>
        </Link>

        <span className="font-body text-[11px] sm:text-xs font-medium text-foreground">
          ₹{product.price.toLocaleString()}
        </span>
      </div>
    </motion.div>
  );
};

export default ProductCard;