import { Link } from "react-router-dom";
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

const CartPage = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const shipping = totalPrice >= 1999 ? 0 : 149;

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center pb-20 sm:pb-0">
        <ShoppingBag size={48} className="mx-auto text-foreground/15 mb-4" />
        <h1 className="font-display text-3xl sm:text-4xl mb-3">Your Cart is Empty</h1>
        <p className="font-body text-xs text-muted-foreground/50 mb-8">Looks like you haven't added anything yet.</p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3.5 font-body text-[11px] tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-6 sm:py-8 pb-20 sm:pb-8">
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 sm:mb-8">
        Cart <span className="text-foreground/30 text-2xl sm:text-3xl">({items.length})</span>
      </h1>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-0">
          {items.map((item, i) => (
            <motion.div
              key={`${item.product.id}-${item.size}-${item.color}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="flex gap-3 sm:gap-4 py-4 sm:py-5 border-b border-foreground/[0.04]"
            >
              <Link to={`/product/${item.product.id}`} className="w-20 h-[6.5rem] sm:w-24 sm:h-32 bg-muted flex-shrink-0 overflow-hidden">
                <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
              </Link>
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <Link to={`/product/${item.product.id}`} className="font-body text-xs sm:text-sm text-foreground/80 hover:text-foreground line-clamp-1">
                    {item.product.name}
                  </Link>
                  <p className="font-body text-[10px] text-foreground/30 mt-0.5">
                    Size: {item.size} · {item.color}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center border border-foreground/10">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-body text-xs text-foreground/50 hover:bg-muted/50 transition-colors"
                    >−</button>
                    <span className="w-7 sm:w-8 text-center font-body text-[11px]">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                      className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-body text-xs text-foreground/50 hover:bg-muted/50 transition-colors"
                    >+</button>
                  </div>
                  <span className="font-body text-xs sm:text-sm font-medium">₹{(item.product.price * item.quantity).toLocaleString()}</span>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.product.id, item.size, item.color)}
                className="self-start p-1 text-foreground/20 hover:text-foreground/60 transition-colors"
              >
                <Trash2 size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Summary - glassmorphism */}
        <div className="bg-muted/40 backdrop-blur-sm border border-foreground/[0.04] p-5 sm:p-6 lg:p-8 h-fit sticky top-24">
          <h3 className="font-display text-xl sm:text-2xl mb-5">Order Summary</h3>
          <div className="space-y-2.5 font-body text-xs sm:text-sm">
            <div className="flex justify-between">
              <span className="text-foreground/40">Subtotal</span>
              <span className="text-foreground/80">₹{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground/40">Shipping</span>
              <span className={shipping === 0 ? "text-success" : "text-foreground/80"}>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
            </div>
            {shipping > 0 && (
              <p className="text-[10px] text-foreground/30">Add ₹{(1999 - totalPrice).toLocaleString()} more for free shipping</p>
            )}
            <div className="border-t border-foreground/[0.06] pt-2.5 flex justify-between font-medium text-sm sm:text-base">
              <span>Total</span>
              <span>₹{(totalPrice + shipping).toLocaleString()}</span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="block w-full bg-foreground text-background text-center py-3.5 mt-5 font-body text-[11px] tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
          >
            Checkout
          </Link>
          <Link
            to="/products"
            className="flex items-center justify-center gap-1.5 mt-3 font-body text-[10px] text-foreground/30 hover:text-foreground/60 transition-colors"
          >
            <ArrowLeft size={12} /> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
