import { useState } from "react";
import { products as initialProducts, Product } from "@/data/products";
import { Package, ShoppingCart, Users, BarChart3, Plus, Pencil, Trash2 } from "lucide-react";

const sidebarItems = [
  { icon: Package, label: "Products", key: "products" },
  { icon: ShoppingCart, label: "Orders", key: "orders" },
  { icon: Users, label: "Customers", key: "customers" },
  { icon: BarChart3, label: "Analytics", key: "analytics" },
];

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [productsList, setProductsList] = useState<Product[]>(initialProducts);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [form, setForm] = useState({
    name: "", price: "", category: "", description: "",
  });

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSave = () => {
    if (editingProduct) {
      setProductsList((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id
            ? { ...p, name: form.name, price: Number(form.price), category: form.category, description: form.description }
            : p
        )
      );
    } else {
      const newProduct: Product = {
        id: String(Date.now()),
        name: form.name,
        price: Number(form.price),
        images: ["https://images.unsplash.com/photo-1521572163474?w=600&h=800&fit=crop"],
        category: form.category,
        sizes: ["S", "M", "L", "XL"],
        colors: [{ name: "Black", hex: "#1a1a1a" }],
        description: form.description,
        rating: 0,
        reviews: 0,
        isNew: true,
        inStock: true,
        gender: "unisex",
      };
      setProductsList((prev) => [...prev, newProduct]);
    }
    setShowForm(false);
    setEditingProduct(null);
    setForm({ name: "", price: "", category: "", description: "" });
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setForm({ name: product.name, price: String(product.price), category: product.category, description: product.description });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setProductsList((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="flex min-h-[80vh]">
      {/* Sidebar */}
      <aside className="w-60 bg-muted border-r border-border p-6 hidden md:block">
        <h2 className="font-display text-xl mb-8">Admin</h2>
        <nav className="space-y-1">
          {sidebarItems.map(({ icon: Icon, label, key }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 font-body text-sm transition-colors ${
                activeTab === key ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-8">
        {activeTab === "products" && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h1 className="font-display text-3xl">Products</h1>
              <button
                onClick={() => { setShowForm(true); setEditingProduct(null); setForm({ name: "", price: "", category: "", description: "" }); }}
                className="flex items-center gap-2 bg-foreground text-background px-4 py-2.5 font-body text-sm tracking-wider hover:bg-foreground/90 transition-colors"
              >
                <Plus size={16} /> Add Product
              </button>
            </div>

            {showForm && (
              <div className="bg-muted p-6 mb-8 space-y-4">
                <h3 className="font-display text-xl">{editingProduct ? "Edit Product" : "Add Product"}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1 block">Name</label>
                    <input value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full border border-border bg-transparent px-3 py-2 font-body text-sm outline-none focus:border-foreground" />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1 block">Price (₹)</label>
                    <input type="number" value={form.price} onChange={(e) => update("price", e.target.value)} className="w-full border border-border bg-transparent px-3 py-2 font-body text-sm outline-none focus:border-foreground" />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1 block">Category</label>
                    <input value={form.category} onChange={(e) => update("category", e.target.value)} className="w-full border border-border bg-transparent px-3 py-2 font-body text-sm outline-none focus:border-foreground" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1 block">Description</label>
                    <textarea value={form.description} onChange={(e) => update("description", e.target.value)} rows={3} className="w-full border border-border bg-transparent px-3 py-2 font-body text-sm outline-none focus:border-foreground resize-none" />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={handleSave} className="bg-foreground text-background px-6 py-2 font-body text-sm tracking-wider hover:bg-foreground/90 transition-colors">
                    {editingProduct ? "Update" : "Save"}
                  </button>
                  <button onClick={() => { setShowForm(false); setEditingProduct(null); }} className="border border-border px-6 py-2 font-body text-sm hover:bg-muted transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-body text-xs tracking-widest uppercase text-muted-foreground">Product</th>
                    <th className="text-left py-3 font-body text-xs tracking-widest uppercase text-muted-foreground">Category</th>
                    <th className="text-left py-3 font-body text-xs tracking-widest uppercase text-muted-foreground">Price</th>
                    <th className="text-left py-3 font-body text-xs tracking-widest uppercase text-muted-foreground">Stock</th>
                    <th className="text-right py-3 font-body text-xs tracking-widest uppercase text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {productsList.map((product) => (
                    <tr key={product.id} className="border-b border-border">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-12 bg-muted overflow-hidden flex-shrink-0">
                            <img src={product.images[0]} alt="" className="w-full h-full object-cover" />
                          </div>
                          <span className="font-body text-sm">{product.name}</span>
                        </div>
                      </td>
                      <td className="py-4 font-body text-sm text-muted-foreground">{product.category}</td>
                      <td className="py-4 font-body text-sm">₹{product.price.toLocaleString()}</td>
                      <td className="py-4">
                        <span className={`font-body text-xs px-2 py-1 ${product.inStock ? "bg-success/10 text-success" : "bg-sale/10 text-sale"}`}>
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => handleEdit(product)} className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
                            <Pencil size={14} />
                          </button>
                          <button onClick={() => handleDelete(product.id)} className="p-1.5 text-muted-foreground hover:text-sale transition-colors">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="text-center py-20">
            <ShoppingCart size={48} className="mx-auto text-muted-foreground mb-4" />
            <h2 className="font-display text-2xl mb-2">Orders</h2>
            <p className="font-body text-sm text-muted-foreground">No orders yet. Orders will appear here.</p>
          </div>
        )}

        {activeTab === "customers" && (
          <div className="text-center py-20">
            <Users size={48} className="mx-auto text-muted-foreground mb-4" />
            <h2 className="font-display text-2xl mb-2">Customers</h2>
            <p className="font-body text-sm text-muted-foreground">Customer data will appear here.</p>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="text-center py-20">
            <BarChart3 size={48} className="mx-auto text-muted-foreground mb-4" />
            <h2 className="font-display text-2xl mb-2">Analytics</h2>
            <p className="font-body text-sm text-muted-foreground">Analytics dashboard coming soon.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPage;
