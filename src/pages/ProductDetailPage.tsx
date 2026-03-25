import { useState, useEffect } from "react";
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

  // ✅ FIX ID MATCH
  const product = products.find(
    (p) => p.id.toString() === id
  );

  const { addItem } = useCart();
  const { toggleItem, isWishlisted } = useWishlist();
  const { toast } = useToast();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] =
    product?.colors?.[0]?.name || "";
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] =
    useState<string | null>("description");

  // 🔥 SEO MAGIC (MOST IMPORTANT PART)
  useEffect(() => {
    if (!product) return;

    // Title (keep BlindBear but add context)
    document.title = `${product.name} | BlindBear`;

    // Meta description
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        `${product.name} – Buy premium streetwear from BlindBear. High quality oversized clothing available in India.`
      );
    }

    // Canonical
    let link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute(
        "href",
        `https://blindbear.shop/product/${product.id}`
      );
    }

    // 🔥 PRODUCT SCHEMA (HUGE BOOST)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: product.name,
      image: product.images,
      description: product.description,
      brand: {
        "@type": "Brand",
        name: "BlindBear",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: product.price,
        availability: "https://schema.org/InStock",
        url: `https://blindbear.shop/product/${product.id}`,
      },
    });

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [product]);

  if (!product) {
    return (
      <div className="container pt-[90px] py-20 text-center">
        <h1 className="text-3xl mb-4">Product Not Found</h1>
        <Link to="/products" className="underline">
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

  return (
    <div className="pt-[90px] pb-14">

      {/* 🔥 BREADCRUMB (SEO BOOST) */}
      <div className="container py-3 text-xs text-gray-500">
        <Link to="/">Home</Link> /{" "}
        <Link to="/products">Shop</Link> /{" "}
        <span>{product.name}</span>
      </div>

      <div className="container pb-8 grid md:grid-cols-2 gap-6">

        <ImageGallery
          images={product.images}
          productName={product.name}
        />

        <div>
          {/* 🔥 H1 */}
          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p className="text-2xl mt-2">
            ₹{product.price}
          </p>

          {/* 🔥 SEO TEXT */}
          <p className="text-sm text-gray-600 mt-3">
            Buy {product.name} from BlindBear – premium oversized streetwear designed for comfort and style in India.
          </p>

          {/* Size */}
          <SizeSelector
            sizes={product.sizes}
            selected={selectedSize}
            onSelect={setSelectedSize}
          />

          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-3 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* 🔥 RELATED (WITH LINKS FIXED) */}
      <div className="container mt-10">
        <h2 className="text-xl mb-4">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((p, i) => (
            <Link to={`/product/${p.id}`} key={p.id}>
              <ProductCard product={p} index={i} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
