import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Product } from "@/data/products";
import { useWishlist } from "@/contexts/WishlistContext";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { toggleItem, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group relative"
    >
      {/* Product Image */}
      <Link
        to={`/product/${product.id}`}
        className="block aspect-[4/5] bg-muted/20 flex items-center justify-center overflow-hidden"
      >
        {/* First Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="max-h-[85%] object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
        />

        {/* Second Image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            loading="lazy"
            className="absolute max-h-[85%] object-contain opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
          />
        )}

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-foreground text-background text-[9px] px-2 py-0.5 uppercase tracking-wider">
              New
            </span>
          )}

          {product.isSale && product.originalPrice && (
            <span className="bg-sale text-sale-foreground text-[9px] px-2 py-0.5 uppercase tracking-wider">
              {Math.round((1 - product.price / product.originalPrice) * 100)}%
              Off
            </span>
          )}
        </div>
      </Link>

      {/* Wishlist */}
      <button
        onClick={() => toggleItem(product.id)}
        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white/70 backdrop-blur hover:bg-white transition"
      >
        <Heart
          size={14}
          className={wishlisted ? "fill-black text-black" : "text-black/60"}
        />
      </button>

      {/* Product Info */}
      <div className="mt-3 space-y-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xs text-foreground/80 hover:text-foreground transition line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xs font-medium">
            ₹{product.price.toLocaleString()}
          </span>

          {product.originalPrice && (
            <span className="text-[10px] text-muted-foreground line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;