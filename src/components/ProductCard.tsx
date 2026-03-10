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
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group relative"
    >
      {/* Image */}
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden aspect-[4/5] bg-muted/20 flex items-center justify-center"
      >
        {/* FIRST IMAGE */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 m-auto max-h-[90%] max-w-[90%] object-contain transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
        />

        {/* SECOND IMAGE */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 m-auto max-h-[90%] max-w-[90%] object-contain opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
          />
        )}

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-foreground/85 backdrop-blur-sm text-background text-[8px] sm:text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 font-body">
              New
            </span>
          )}

          {product.isSale && product.originalPrice && (
            <span className="bg-sale/85 backdrop-blur-sm text-sale-foreground text-[8px] sm:text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 font-body">
              {Math.round((1 - product.price / product.originalPrice) * 100)}%
              Off
            </span>
          )}
        </div>

        {/* Quick View */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden sm:block">
          <div className="bg-foreground/85 backdrop-blur-sm text-background text-center py-2.5 text-[10px] font-body tracking-[0.15em] uppercase">
            Quick View
          </div>
        </div>
      </Link>

      {/* Wishlist */}
      <button
        onClick={() => toggleItem(product.id)}
        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-background/50 backdrop-blur-md hover:bg-background/80 transition-all"
        aria-label="Add to wishlist"
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

      {/* Info */}
      <div className="mt-2.5 space-y-0.5">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-body text-[11px] sm:text-xs text-foreground/80 hover:text-foreground transition-colors line-clamp-1 tracking-wide">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1.5">
          <span className="font-body text-[11px] sm:text-xs font-medium text-foreground">
            ₹{product.price.toLocaleString()}
          </span>

          {product.originalPrice && (
            <span className="font-body text-[9px] sm:text-[10px] text-muted-foreground/40 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
