import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Zap, Shield, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-animated overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-center gap-3">
              <Flame className="h-12 w-12 text-primary animate-glow-pulse" />
              <span className="font-display text-6xl md:text-8xl tracking-widest text-glow">
                NESH
              </span>
              <Flame className="h-12 w-12 text-primary animate-glow-pulse" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wide text-foreground">
              ONLINE SHOP
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Where <span className="text-primary font-semibold">style</span>, <span className="text-accent font-semibold">speed</span>, and <span className="text-foreground font-semibold">power</span> meet
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/products">
                <Button size="lg" className="btn-gold text-lg px-8 py-6">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Our Story
                </Button>
              </Link>
            </div>

            <p className="text-xs text-muted-foreground/60 border border-primary/30 rounded-full px-4 py-2 inline-block mt-8">
              🔥 DEMO STORE - Fully functional, no real payments
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-secondary py-8 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-4 p-4">
              <Zap className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-display text-xl text-accent">HOT DEALS</h3>
                <p className="text-sm text-muted-foreground">Exclusive drops daily</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-4">
              <Truck className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-display text-xl text-accent">FAST DELIVERY</h3>
                <p className="text-sm text-muted-foreground">Free shipping over $100</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-4">
              <Shield className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-display text-xl text-accent">LIMITED STOCK</h3>
                <p className="text-sm text-muted-foreground">Exclusive collections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              <span className="text-primary">FEATURED</span> PRODUCTS
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Hand-picked heat for the streets. Premium quality, bold designs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="btn-fire text-lg px-8">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            JOIN THE <span className="text-primary">FIRE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Be the first to know about new drops, exclusive deals, and limited-time offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="btn-gold px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
