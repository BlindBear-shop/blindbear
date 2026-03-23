import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { motion } from "framer-motion";

const sortOptions = [
  { label: "New Arrivals", value: "new" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Selling", value: "rating" },
];

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("new");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const genderFilter = searchParams.get("gender");

  const filtered = useMemo(() => {
    let result: any[] = [...products];

    if (genderFilter)
      result = result.filter((p) => p.gender === genderFilter);

    if (selectedCategory !== "All")
      result = result.filter((p) => p.category === selectedCategory);

    if (selectedSizes.length > 0)
      result = result.filter((p) =>
        p.sizes.some((s: string) => selectedSizes.includes(s))
      );

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [genderFilter, selectedCategory, sortBy, selectedSizes]);

  const toggleSize = (size: string) =>
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );

  return (
    <div className="pt-[90px] lg:pt-[110px] pb-14">
      
      {/* Header */}
      <div className="container mb-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-display">
          All Products
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          {filtered.length} products
        </p>
      </div>

      {/* 🔥 Sticky Toolbar */}
      <div className="sticky top-[70px] lg:top-[90px] z-20 bg-white border-b">
        <div className="container py-3 flex items-center justify-between gap-3">

          {/* Categories (SCROLL FIXED) */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs whitespace-nowrap border rounded-full transition ${
                  selectedCategory === cat
                    ? "bg-black text-white"
                    : "border-gray-200 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative shrink-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border px-3 py-2 text-xs appearance-none pr-6 rounded-md"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={12}
              className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>

        {/* Size Filter */}
        <div className="container pb-3 flex gap-2 flex-wrap">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-3 py-1 text-xs border rounded-full transition ${
                selectedSizes.includes(size)
                  ? "bg-black text-white"
                  : "border-gray-200 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mt-5">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No products found
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <ProductCard product={product} index={i} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
