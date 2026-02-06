import { Link } from 'react-router-dom';
import { Flame, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Flame className="h-8 w-8 text-primary" />
              <span className="font-display text-2xl tracking-wider">NESH</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Where style, speed, and power meet. Premium street-luxury for the bold.
            </p>
            <p className="text-xs text-muted-foreground/60 border border-primary/30 rounded px-2 py-1 inline-block">
              🔥 DEMO STORE - No real payments
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-display text-lg mb-4 text-accent">Support</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Free Shipping Over $100</li>
              <li>30-Day Returns</li>
              <li>24/7 Support</li>
              <li>Secure Checkout</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg mb-4 text-accent">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© 2024 Nesh Online Shop. All rights reserved.</p>
          <p className="text-xs mt-2">This is a demo store for demonstration purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
