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


// PRODUCT DATA
export const products: Product[] = [

  // MEN
  {
    id: "1",
    name: "Blue Linen Shirt",
    price: 2499,
    images: [m1, m2, m3, m4],
    category: "Shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Blue", hex: "#5A7CA8" }],
    description: "Premium relaxed fit linen shirt designed for everyday comfort.",
    rating: 4.5,
    reviews: 0,
    inStock: true,
    gender: "men",
  },

  {
    id: "2",
    name: "Classic Casual Shirt",
    price: 2199,
    images: [m5, m6, m7, m8, m9],
    category: "Shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Sky Blue", hex: "#87CEEB" }],
    description: "Modern casual shirt crafted from breathable cotton.",
    rating: 4.6,
    reviews: 0,
    inStock: true,
    gender: "men",
  },


  // WOMEN
  {
    id: "3",
    name: "Tiered Maxi Skirt",
    price: 3299,
    images: [w1, w2, w3, w4, w5, w6],
    category: "Skirts",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Black", hex: "#000000" }],
    description: "Elegant tiered maxi skirt designed for graceful movement.",
    rating: 4.8,
    reviews: 0,
    inStock: true,
    gender: "women",
  },

  {
    id: "4",
    name: "Knit Ribbed Skirt",
    price: 2899,
    images: [w7, w8, w9, w10],
    category: "Skirts",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Green", hex: "#2E4F3E" }],
    description: "Comfortable ribbed knit skirt perfect for minimal outfits.",
    rating: 4.7,
    reviews: 0,
    inStock: true,
    gender: "women",
  },

  {
    id: "5",
    name: "Cotton Tiered Dress",
    price: 3599,
    images: [w11, w12, w13, w14],
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Blue", hex: "#6F8FAF" }],
    description: "Lightweight cotton tiered dress ideal for summer wear.",
    rating: 4.8,
    reviews: 0,
    inStock: true,
    gender: "women",
  },

  {
    id: "6",
    name: "Cornflower Blue Loungewear",
    price: 3999,
    images: [w15, w16, w17],
    category: "Loungewear",
    sizes: ["S", "M", "L"],
    colors: [{ name: "Cornflower Blue", hex: "#6495ED" }],
    description: "Relaxed fit lounge set designed for all-day comfort.",
    rating: 4.6,
    reviews: 0,
    inStock: true,
    gender: "women",
  },

  {
    id: "7",
    name: "Floral Printed Kurta Set",
    price: 4299,
    images: [w18, w19, w20],
    category: "Ethnic",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Mint Green", hex: "#A8E6CF" }],
    description: "Elegant floral printed kurta set with a modern ethnic design.",
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
export const sizeOptions = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
];
