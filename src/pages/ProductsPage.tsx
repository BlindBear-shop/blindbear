import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
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
      <div className="container mb-6">
        <h1 className="text-3xl sm:text-4xl font-display">
          All Products
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          {filtered.length} products
        </p>
      </div>

      {/* Toolbar */}
      <div className="container mb-6 flex justify-between items-center">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs border ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "border-gray-200 text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border px-3 py-2 text-xs appearance-none"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={12}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* Size Filter */}
      <div className="container mb-6 flex gap-2 flex-wrap">
        {["XS", "S", "M", "L", "XL"].map((size) => (
          <button
            key={size}
            onClick={() => toggleSize(size)}
            className={`px-3 py-1 text-xs border ${
              selectedSizes.includes(size)
                ? "bg-black text-white"
                : "border-gray-200 text-gray-600"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;