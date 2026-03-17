import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const shipping = totalPrice >= 1999 ? 0 : 149;

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Order placed!",
      description: "Thank you for shopping with BLINDBEAR.",
    });

    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="container pt-[90px] lg:pt-[110px] py-6 sm:py-8 pb-20 sm:pb-12">
      <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 sm:mb-8">
        Checkout
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-3 gap-6 lg:gap-10"
      >
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* Shipping */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-display text-xl sm:text-2xl mb-4 sm:mb-5">
              Shipping Information
            </h3>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: "Full Name", key: "name", span: 2 },
                { label: "Address", key: "address", span: 2 },
                { label: "City", key: "city" },
                { label: "State", key: "state" },
                { label: "PIN Code", key: "zip" },
                { label: "Phone", key: "phone" },
              ].map(({ label, key, span }) => (
                <div
                  key={key}
                  className={span === 2 ? "sm:col-span-2" : ""}
                >
                  <label className="font-body text-[10px] tracking-[0.12em] uppercase text-foreground/30 mb-1.5 block">
                    {label}
                  </label>

                  <input
                    type="text"
                    required
                    value={form[key as keyof typeof form]}
                    onChange={(e) => update(key, e.target.value)}
                    className="w-full border border-foreground/10 bg-transparent px-3.5 py-3 font-body text-sm outline-none focus:border-foreground/30 transition-colors placeholder:text-foreground/15"
                    placeholder={label}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Payment */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            <h3 className="font-display text-xl sm:text-2xl mb-4 sm:mb-5">
              Payment Method
            </h3>

            <div className="space-y-2">
              {[
                {
                  value: "card",
                  label: "Credit / Debit Card",
                  sub: "Visa, Mastercard, RuPay",
                },
                {
                  value: "upi",
                  label: "UPI",
                  sub: "GPay, PhonePe, Paytm",
                },
                {
                  value: "cod",
                  label: "Cash on Delivery",
                  sub: "Pay when you receive",
                },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-3 border px-4 py-3.5 cursor-pointer transition-all ${
                    paymentMethod === opt.value
                      ? "border-foreground/30 bg-muted/30"
                      : "border-foreground/[0.06] hover:border-foreground/15"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={opt.value}
                    checked={paymentMethod === opt.value}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="accent-foreground"
                  />

                  <div>
                    <span className="font-body text-xs sm:text-sm text-foreground/80">
                      {opt.label}
                    </span>
                    <p className="font-body text-[10px] text-foreground/30">
                      {opt.sub}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Summary */}
        <div className="bg-muted/40 backdrop-blur-sm border border-foreground/[0.04] p-5 sm:p-6 lg:p-8 h-fit sticky top-24">
          <h3 className="font-display text-xl sm:text-2xl mb-4 sm:mb-5">
            Order Summary
          </h3>

          <div className="space-y-3 mb-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex gap-2.5"
              >
                <div className="w-12 h-16 bg-background overflow-hidden flex-shrink-0">
                  <img
                    src={item.product.images[0]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-body text-[11px] text-foreground/70 line-clamp-1">
                    {item.product.name}
                  </p>
                  <p className="font-body text-[9px] text-foreground/30">
                    {item.size} · Qty {item.quantity}
                  </p>
                </div>

                <span className="font-body text-[11px] text-foreground/60 flex-shrink-0">
                  ₹
                  {(
                    item.product.price * item.quantity
                  ).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-2 font-body text-xs border-t border-foreground/[0.06] pt-3">
            <div className="flex justify-between">
              <span className="text-foreground/40">Subtotal</span>
              <span className="text-foreground/70">
                ₹{totalPrice.toLocaleString()}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-foreground/40">Shipping</span>
              <span
                className={
                  shipping === 0
                    ? "text-green-600"
                    : "text-foreground/70"
                }
              >
                {shipping === 0 ? "Free" : `₹${shipping}`}
              </span>
            </div>

            <div className="border-t border-foreground/[0.06] pt-2 flex justify-between font-medium text-sm">
              <span>Total</span>
              <span>
                ₹{(totalPrice + shipping).toLocaleString()}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-foreground text-background py-3.5 mt-5 font-body text-[11px] tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
          >
            Place Order
          </button>

          <div className="flex items-center justify-center gap-1.5 mt-3">
            <Lock size={10} className="text-foreground/20" />
            <span className="font-body text-[9px] text-foreground/25">
              Secure checkout · 256-bit SSL encryption
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;