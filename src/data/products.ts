import shirt1a from "@/assets/products/shirt-1a.jpg";
import shirt1b from "@/assets/products/shirt-1b.jpg";
import trousers2a from "@/assets/products/trousers-2a.jpg";
import trousers2b from "@/assets/products/trousers-2b.jpg";
import tee3a from "@/assets/products/tee-3a.jpg";
import tee3b from "@/assets/products/tee-3b.jpg";
import blazer4a from "@/assets/products/blazer-4a.jpg";
import blazer4b from "@/assets/products/blazer-4b.jpg";
import knit5a from "@/assets/products/knit-5a.jpg";
import knit5b from "@/assets/products/knit-5b.jpg";
import joggers6a from "@/assets/products/joggers-6a.jpg";
import joggers6b from "@/assets/products/joggers-6b.jpg";
import dress7a from "@/assets/products/dress-7a.jpg";
import dress7b from "@/assets/products/dress-7b.jpg";
import polo8a from "@/assets/products/polo-8a.jpg";
import polo8b from "@/assets/products/polo-8b.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  description: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
  inStock: boolean;
  gender: "men" | "women" | "unisex";
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Oversized Linen Shirt",
    price: 2999,
    originalPrice: 3999,
    images: [shirt1a, shirt1b],
    category: "Shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Cream", hex: "#F5F0E8" }, { name: "Black", hex: "#1a1a1a" }],
    description: "Crafted from premium linen, this oversized shirt offers effortless elegance for the modern individual. Perfect for both casual outings and semi-formal occasions.",
    rating: 4.5,
    reviews: 0,
    isNew: true,
    inStock: true,
    gender: "men",
  },
  {
    id: "2",
    name: "Tailored Wide-Leg Trousers",
    price: 3499,
    images: [trousers2a, trousers2b],
    category: "Trousers",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [{ name: "Beige", hex: "#C8B89A" }, { name: "Charcoal", hex: "#36454F" }],
    description: "These wide-leg trousers combine comfort with sophistication. Tailored from breathable fabric, perfect for the Indian climate.",
    rating: 4.7,
    reviews: 0,
    inStock: true,
    gender: "women",
  },
  {
    id: "3",
    name: "Minimal Cotton Tee",
    price: 1499,
    originalPrice: 1999,
    images: [tee3a, tee3b],
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "White", hex: "#FFFFFF" }, { name: "Sage", hex: "#9CAF88" }],
    description: "The perfect everyday essential. Made from 100% organic cotton with a relaxed fit.",
    rating: 4.3,
    reviews: 0,
    isSale: true,
    inStock: true,
    gender: "unisex",
  },
  {
    id: "4",
    name: "Structured Blazer",
    price: 5999,
    images: [blazer4a, blazer4b],
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Navy", hex: "#1B2A4A" }, { name: "Tan", hex: "#D2B48C" }],
    description: "A structured blazer that transitions seamlessly from boardroom to evening. Designed in India with premium fabric.",
    rating: 4.8,
    reviews: 0,
    isNew: true,
    inStock: true,
    gender: "men",
  },
  {
    id: "5",
    name: "Ribbed Knit Top",
    price: 1999,
    images: [knit5a, knit5b],
    category: "Tops",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Cream", hex: "#F5F0E8" }, { name: "Camel", hex: "#C19A6B" }],
    description: "Soft ribbed knit top with a flattering silhouette. Pairs beautifully with high-waisted trousers.",
    rating: 4.6,
    reviews: 0,
    inStock: true,
    gender: "women",
  },
  {
    id: "6",
    name: "Premium Joggers",
    price: 2499,
    originalPrice: 2999,
    images: [joggers6a, joggers6b],
    category: "Trousers",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Grey", hex: "#808080" }, { name: "Black", hex: "#1a1a1a" }],
    description: "Elevated joggers crafted from premium terry cotton. The perfect blend of comfort and style.",
    rating: 4.4,
    reviews: 0,
    isSale: true,
    inStock: true,
    gender: "unisex",
  },
  {
    id: "7",
    name: "Draped Midi Dress",
    price: 4499,
    images: [dress7a, dress7b],
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Olive", hex: "#556B2F" }, { name: "Black", hex: "#1a1a1a" }],
    description: "An elegant draped midi dress that moves with you. Crafted for timeless style.",
    rating: 4.9,
    reviews: 0,
    isNew: true,
    inStock: true,
    gender: "women",
  },
  {
    id: "8",
    name: "Classic Polo",
    price: 1799,
    images: [polo8a, polo8b],
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "White", hex: "#FFFFFF" }, { name: "Navy", hex: "#1B2A4A" }],
    description: "The reimagined polo. Minimal branding, maximum quality. Pima cotton for lasting comfort.",
    rating: 4.5,
    reviews: 0,
    inStock: true,
    gender: "men",
  },
];

export const categories = ["All", "Shirts", "T-Shirts", "Trousers", "Tops", "Outerwear", "Dresses"];
export const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL", "28", "30", "32", "34", "36"];
