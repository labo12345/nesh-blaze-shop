import { Layout } from '@/components/layout/Layout';
import { Flame, Target, Zap, Shield } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-20 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <Flame className="h-16 w-16 text-primary mx-auto mb-6 animate-glow-pulse" />
              <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
                OUR <span className="text-primary">STORY</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Born from the streets, built for the bold. Nesh isn't just a brand — it's a movement.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                  THE <span className="text-accent">HUSTLE</span> IS REAL
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We started with nothing but a vision: to create premium street-luxury that doesn't break the bank. 
                  Every piece in our collection represents the grind, the late nights, and the relentless pursuit of excellence.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  From fire sneakers to statement accessories, we curate products that speak to the hustlers, 
                  the dreamers, and everyone who refuses to blend in. When you wear Nesh, you're not just wearing clothes — 
                  you're making a statement.
                </p>
              </div>
              <div className="card-glow p-8 animate-slide-up">
                <h3 className="font-display text-3xl text-primary mb-6">OUR MISSION</h3>
                <p className="text-foreground text-xl leading-relaxed">
                  "Delivering hot products with speed and trust. We're here to fuel your style, 
                  match your energy, and keep you ahead of the game."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl text-center text-foreground mb-12">
              WHAT WE <span className="text-primary">STAND FOR</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-glow p-8 text-center hover-lift">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl text-accent mb-3">BOLDNESS</h3>
                <p className="text-muted-foreground">
                  We don't do average. Every product is designed to turn heads and make statements.
                </p>
              </div>
              <div className="card-glow p-8 text-center hover-lift">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl text-accent mb-3">SPEED</h3>
                <p className="text-muted-foreground">
                  Fast delivery, quick responses, and always ahead of trends. We move with urgency.
                </p>
              </div>
              <div className="card-glow p-8 text-center hover-lift">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl text-accent mb-3">RELIABILITY</h3>
                <p className="text-muted-foreground">
                  Quality guaranteed. We stand behind every product with our reputation on the line.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Notice */}
        <section className="py-12 bg-primary/10 border-y border-primary/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg text-foreground">
              🔥 <span className="font-bold">DEMO STORE</span> — This is a demonstration e-commerce store. 
              All products and checkout flows are simulated.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
