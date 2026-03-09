import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

const sortOptions = [
  { label: "New Arrivals", value: "new" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Selling", value: "rating" },
];

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("new");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const genderFilter = searchParams.get("gender");
  const filterType = searchParams.get("filter");

  const filtered = useMemo(() => {
    let result = [...products];
    if (genderFilter) result = result.filter((p) => p.gender === genderFilter || p.gender === "unisex");
    if (filterType === "new") result = result.filter((p) => p.isNew);
    if (filterType === "sale") result = result.filter((p) => p.isSale);
    if (selectedCategory !== "All") result = result.filter((p) => p.category === selectedCategory);
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (selectedSizes.length > 0)
      result = result.filter((p) => p.sizes.some((s) => selectedSizes.includes(s)));

    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      default: result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }
    return result;
  }, [genderFilter, filterType, selectedCategory, sortBy, priceRange, selectedSizes]);

  const title = genderFilter
    ? `${genderFilter.charAt(0).toUpperCase() + genderFilter.slice(1)}'s Collection`
    : filterType === "new"
    ? "New Arrivals"
    : filterType === "sale"
    ? "Sale"
    : "All Products";

  const toggleSize = (size: string) =>
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );

  const activeFilters = (selectedCategory !== "All" ? 1 : 0) + selectedSizes.length;

  return (
    <div className="pb-14 sm:pb-0">
      {/* Header */}
      <div className="container pt-6 sm:pt-8 pb-4 sm:pb-6">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground">{title}</h1>
        <p className="font-body text-xs text-muted-foreground/60 mt-1">{filtered.length} products</p>
      </div>

      {/* Mobile category chips - Souled Store style */}
      <div className="sm:hidden overflow-x-auto scrollbar-hide px-4 pb-3">
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-shrink-0 px-3 py-1.5 text-[11px] font-body tracking-wide border transition-colors ${
                selectedCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground/60 border-foreground/10 hover:border-foreground/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Toolbar */}
      <div className="container">
        <div className="flex items-center justify-between py-3 border-y border-foreground/[0.04]">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-1.5 font-body text-[11px] tracking-[0.1em] uppercase text-foreground/60 hover:text-foreground transition-colors lg:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters
            {activeFilters > 0 && (
              <span className="bg-foreground text-background text-[9px] w-4 h-4 flex items-center justify-center rounded-full">{activeFilters}</span>
            )}
          </button>
          <div className="hidden lg:block" />
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-body text-[11px] tracking-wide bg-transparent border border-foreground/10 px-3 py-2 pr-7 outline-none text-foreground/70 appearance-none cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="container py-6 sm:py-8">
        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0 space-y-8">
            <FilterPanel
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedSizes={selectedSizes}
              toggleSize={toggleSize}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </aside>

          {/* Mobile filters - bottom sheet style */}
          <AnimatePresence>
            {filtersOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm lg:hidden"
                  onClick={() => setFiltersOpen(false)}
                />
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="fixed inset-x-0 bottom-0 z-50 bg-background/95 backdrop-blur-2xl rounded-t-2xl max-h-[70vh] overflow-y-auto lg:hidden"
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display text-xl">Filters</h3>
                      <button onClick={() => setFiltersOpen(false)} className="p-1 text-foreground/50">
                        <X size={20} />
                      </button>
                    </div>
                    <FilterPanel
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                      selectedSizes={selectedSizes}
                      toggleSize={toggleSize}
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                    />
                    <button
                      onClick={() => setFiltersOpen(false)}
                      className="w-full bg-foreground text-background py-3.5 mt-6 font-body text-xs tracking-widest uppercase"
                    >
                      Show {filtered.length} Products
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Product grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 sm:gap-x-3 lg:gap-x-4 gap-y-5 sm:gap-y-8">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center py-16">
                <p className="font-display text-xl text-muted-foreground/50">No products found</p>
                <p className="font-body text-xs text-muted-foreground/40 mt-2">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface FilterPanelProps {
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  selectedSizes: string[];
  toggleSize: (s: string) => void;
  priceRange: [number, number];
  setPriceRange: (r: [number, number]) => void;
}

const FilterPanel = ({
  selectedCategory,
  setSelectedCategory,
  selectedSizes,
  toggleSize,
}: FilterPanelProps) => {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-body text-[10px] tracking-[0.15em] uppercase mb-3 text-muted-foreground/50">Category</h4>
        <ul className="space-y-1.5">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`font-body text-sm transition-colors py-0.5 ${
                  selectedCategory === cat ? "text-foreground font-medium" : "text-foreground/40 hover:text-foreground/70"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-body text-[10px] tracking-[0.15em] uppercase mb-3 text-muted-foreground/50">Size</h4>
        <div className="flex flex-wrap gap-1.5">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`min-w-[34px] h-8 px-2 border text-[11px] font-body transition-all ${
                selectedSizes.includes(size)
                  ? "bg-foreground text-background border-foreground"
                  : "border-foreground/10 text-foreground/50 hover:border-foreground/30"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
