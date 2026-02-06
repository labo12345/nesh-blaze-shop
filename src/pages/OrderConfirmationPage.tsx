import { Link, useLocation } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Package, Flame } from 'lucide-react';

interface OrderState {
  orderId: string;
  paymentMethod: string;
  total: number;
  items: number;
}

const OrderConfirmationPage = () => {
  const location = useLocation();
  const orderState = location.state as OrderState | null;

  const orderId = orderState?.orderId || 'NESH-DEMO123';
  const paymentMethod = orderState?.paymentMethod || 'demo';
  const total = orderState?.total || 0;
  const itemCount = orderState?.items || 0;

  const paymentLabels: Record<string, string> = {
    mpesa: 'M-Pesa (Demo)',
    card: 'Card Payment (Demo)',
    cod: 'Cash on Delivery (Demo)',
    demo: 'Demo Payment',
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center animate-scale-in">
            {/* Success Icon */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative bg-gradient-to-br from-primary to-accent rounded-full p-6">
                <CheckCircle className="h-16 w-16 text-background" />
              </div>
            </div>

            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
              ORDER <span className="text-primary">CONFIRMED!</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              Thank you for your demo order! 🔥
            </p>

            {/* Order Details Card */}
            <div className="card-glow p-8 text-left mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Package className="h-6 w-6 text-primary" />
                <h3 className="font-display text-2xl text-accent">ORDER DETAILS</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Order ID</span>
                  <span className="font-mono text-accent font-bold">{orderId}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Items</span>
                  <span>{itemCount} product(s)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span>{paymentLabels[paymentMethod]}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-muted-foreground">Total Paid</span>
                  <span className="price-gold text-xl">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <Flame className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">This is a Demo Order</p>
                    <p className="text-sm text-muted-foreground">
                      No actual payment was processed. In a real store, you would receive a confirmation email with tracking information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button className="btn-gold text-lg px-8 py-6">
                  Continue Shopping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="text-lg px-8 py-6 border-border">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmationPage;
