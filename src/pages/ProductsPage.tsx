import { useState, useMemo } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Filter, X } from 'lucide-react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 400]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesPrice;
    });
  }, [selectedCategory, priceRange]);

  return (
    <Layout>
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
              ALL <span className="text-primary">PRODUCTS</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Browse our complete collection of street-luxury essentials
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              className="lg:hidden flex items-center gap-2 mb-4"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>

            {/* Filters Sidebar */}
            <aside className={`lg:w-64 space-y-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="card-glow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-xl text-accent">FILTERS</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory('All');
                      setPriceRange([0, 400]);
                    }}
                    className="text-xs text-muted-foreground hover:text-primary"
                  >
                    <X className="h-3 w-3 mr-1" />
                    Clear
                  </Button>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wide mb-3">
                    Category
                  </h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wide mb-3">
                    Price Range
                  </h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={400}
                    min={0}
                    step={10}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm">
                    <span className="text-accent">${priceRange[0]}</span>
                    <span className="text-accent">${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="text-foreground font-semibold">{filteredProducts.length}</span> products
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-2xl text-muted-foreground mb-4">No products found</p>
                  <Button
                    onClick={() => {
                      setSelectedCategory('All');
                      setPriceRange([0, 400]);
                    }}
                    className="btn-fire"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
