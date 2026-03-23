// MEN PRODUCTS
import m1 from "../assets/products/men/p1/shirt1.png";
import m2 from "../assets/products/men/p1/shirt2.png";
import m3 from "../assets/products/men/p1/shirt3.png";
import m4 from "../assets/products/men/p1/shirt4.png";

import m5 from "../assets/products/men/p2/shirt5.png";
import m6 from "../assets/products/men/p2/shirt6.png";
import m7 from "../assets/products/men/p2/shirt7.png";
import m8 from "../assets/products/men/p2/shirt8.png";
import m9 from "../assets/products/men/p2/shirt9.png";

// WOMEN PRODUCTS
import w1 from "../assets/products/WOMEN/p1/skirt1.png";
import w2 from "../assets/products/WOMEN/p1/skirt2.png";
import w3 from "../assets/products/WOMEN/p1/skirt3.png";
import w4 from "../assets/products/WOMEN/p1/skirt4.png";
import w5 from "../assets/products/WOMEN/p1/skirt5.png";
import w6 from "../assets/products/WOMEN/p1/skirt6.png";

import w7 from "../assets/products/WOMEN/P2/skirt7.png";
import w8 from "../assets/products/WOMEN/P2/skirt8.png";
import w9 from "../assets/products/WOMEN/P2/skirt9.png";
import w10 from "../assets/products/WOMEN/P2/skirt10.png";

import w11 from "../assets/products/WOMEN/P3/skirt11.png";
import w12 from "../assets/products/WOMEN/P3/skirt12.png";
import w13 from "../assets/products/WOMEN/P3/skirt13.png";
import w14 from "../assets/products/WOMEN/P3/skirt14.png";

import w15 from "../assets/products/WOMEN/p4/skirt15.png";
import w16 from "../assets/products/WOMEN/p4/skirt16.png";
import w17 from "../assets/products/WOMEN/p4/skirt17.png";

import w18 from "../assets/products/WOMEN/p5/skirt18.png";
import w19 from "../assets/products/WOMEN/p5/skirt19.png";
import w20 from "../assets/products/WOMEN/p5/skirt20.png";

// PRODUCT TYPE
export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  gender: "men" | "women";
}

// WHATSAPP NUMBER
export const whatsappNumber = "919083134498";

// PRODUCT DATA
export const products: Product[] = [
  // MEN
  {
    id: "1",
    name: "Blue Linen Shirt",
    price: 999,
    images: [m1, m2, m3, m4],
    category: "Shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Blue", hex: "#5A7CA8" }],
    description: `
Details:
- Loose, oversized boxy silhouette
- Slightly short length, pairs well with wide bottoms

Fit:
- Oversized

Material:
- 100% Cotton

Wash Care:
- Machine wash cold
- Do not dry clean
- Do not tumble dry

Note:
- Images may include colors not available
    `,
    rating: 4.5,
    reviews: 0,
    inStock: true,
    gender: "men",
  },
  {
    id: "2",
    name: "Classic Casual Shirt",
    price: 899,
    images: [m5, m6, m7, m8, m9],
    category: "Shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Sky Blue", hex: "#87CEEB" }],
    description: `
Details:
- Clean casual silhouette for everyday wear
- Lightweight and breathable fabric

Fit:
- Regular Fit

Material:
- 100% Cotton

Wash Care:
- Machine wash cold
- Do not bleach
- Do not tumble dry

Note:
- Color may slightly vary due to lighting
    `,
    rating: 4.6,
    reviews: 0,
    inStock: true,
    gender: "men",
  },

  // WOMEN
  {
    id: "3",
    name: "Tiered Maxi Skirt",
    price: 1099,
    images: [w1, w2, w3, w4, w5, w6],
    category: "Skirts",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: `
Details:
- Flowing tiered design for elegant movement
- High-waist silhouette

Fit:
- Relaxed Fit

Material:
- 100% Cotton

Wash Care:
- Machine wash cold
- Do not bleach

Note:
- Perfect for casual and festive styling
    `,
    rating: 4.8,
    reviews: 0,
    inStock: true,
    gender: "women",
  },
  {
    id: "4",
    name: "Knit Ribbed Skirt",
    price: 999,
    images: [w7, w8, w9, w10],
    category: "Skirts",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Green", hex: "#2E4F3E" }],
    description: `
Details:
- Ribbed texture with stretch comfort
- Minimal clean design

Fit:
- Slim Fit

Material:
- Cotton Blend

Wash Care:
- Hand wash recommended
- Do not tumble dry

Note:
- Ideal for minimal outfits
    `,
    rating: 4.7,
    reviews: 0,
    inStock: true,
    gender: "women",
  },
  {
    id: "5",
    name: "Cotton Tiered Dress",
    price: 1099,
    images: [w11, w12, w13, w14],
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Blue", hex: "#6F8FAF" }],
    description: `
Details:
- Tiered structure with flowy silhouette
- Lightweight summer essential

Fit:
- Relaxed Fit

Material:
- 100% Cotton

Wash Care:
- Machine wash cold
- Do not bleach

Note:
- Best suited for warm weather
    `,
    rating: 4.8,
    reviews: 0,
    inStock: true,
    gender: "women",
  },
  {
    id: "6",
    name: "Cornflower Blue Loungewear",
    price: 899,
    images: [w15, w16, w17],
    category: "Loungewear",
    sizes: ["S", "M", "L"],
    colors: [{ name: "Cornflower Blue", hex: "#6495ED" }],
    description: `
Details:
- Soft and breathable lounge set
- Designed for all-day comfort

Fit:
- Relaxed Fit

Material:
- Cotton Blend

Wash Care:
- Machine wash cold
- Do not tumble dry

Note:
- Ideal for home and casual outings
    `,
    rating: 4.6,
    reviews: 0,
    inStock: true,
    gender: "women",
  },
  {
    id: "7",
    name: "Floral Printed Kurta Set",
    price: 1099,
    images: [w18, w19, w20],
    category: "Ethnic",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Mint Green", hex: "#A8E6CF" }],
    description: `
Details:
- Elegant floral print with modern ethnic touch
- Comfortable and breathable design

Fit:
- Regular Fit

Material:
- Cotton

Wash Care:
- Hand wash recommended
- Do not bleach

Note:
- Perfect for festive and daily wear
    `,
    rating: 4.9,
    reviews: 0,
    inStock: true,
    gender: "women",
  },
];

// CATEGORY FILTERS
export const categories = [
  "All",
  "Shirts",
  "Skirts",
  "Dresses",
  "Loungewear",
  "Ethnic",
];

// SIZE OPTIONS
export const sizeOptions = ["XS", "S", "M", "L", "XL"];
