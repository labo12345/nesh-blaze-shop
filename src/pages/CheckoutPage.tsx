import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CreditCard, Smartphone, Truck, ArrowLeft, Lock } from 'lucide-react';
import { toast } from 'sonner';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  if (items.length === 0) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="font-display text-4xl text-foreground mb-4">No Items to Checkout</h1>
            <Link to="/products">
              <Button className="btn-fire">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Shopping
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const orderId = 'NESH-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    
    clearCart();
    setIsProcessing(false);
    
    navigate('/order-confirmation', { 
      state: { 
        orderId,
        paymentMethod,
        total: subtotal,
        items: items.length,
      } 
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <Link
            to="/cart"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Link>

          <h1 className="font-display text-5xl text-foreground mb-8">
            <span className="text-primary">CHECKOUT</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Customer Details */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Info */}
                <div className="card-glow p-6">
                  <h3 className="font-display text-2xl text-accent mb-6">CONTACT INFORMATION</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 bg-muted border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 bg-muted border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 bg-muted border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+254..."
                        className="mt-1 bg-muted border-border"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="card-glow p-6">
                  <h3 className="font-display text-2xl text-accent mb-6">SHIPPING ADDRESS</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="mt-1 bg-muted border-border"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="mt-1 bg-muted border-border"
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="mt-1 bg-muted border-border"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="card-glow p-6">
                  <h3 className="font-display text-2xl text-accent mb-6">PAYMENT METHOD (DEMO)</h3>
                  <p className="text-xs text-muted-foreground mb-4 border border-primary/30 rounded px-3 py-2 inline-block">
                    🔥 This is a demo - no real payment will be processed
                  </p>
                  
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="space-y-3">
                      <label
                        className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                          paymentMethod === 'mpesa'
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-muted-foreground'
                        }`}
                      >
                        <RadioGroupItem value="mpesa" id="mpesa" />
                        <Smartphone className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold">M-Pesa (Demo)</p>
                          <p className="text-sm text-muted-foreground">Pay with mobile money</p>
                        </div>
                      </label>

                      <label
                        className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                          paymentMethod === 'card'
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-muted-foreground'
                        }`}
                      >
                        <RadioGroupItem value="card" id="card" />
                        <CreditCard className="h-6 w-6 text-accent" />
                        <div>
                          <p className="font-semibold">Card Payment (Demo)</p>
                          <p className="text-sm text-muted-foreground">Credit or debit card</p>
                        </div>
                      </label>

                      <label
                        className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                          paymentMethod === 'cod'
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-muted-foreground'
                        }`}
                      >
                        <RadioGroupItem value="cod" id="cod" />
                        <Truck className="h-6 w-6 text-foreground" />
                        <div>
                          <p className="font-semibold">Cash on Delivery (Demo)</p>
                          <p className="text-sm text-muted-foreground">Pay when you receive</p>
                        </div>
                      </label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="card-glow p-6 sticky top-24">
                  <h3 className="font-display text-2xl text-accent mb-6">ORDER SUMMARY</h3>

                  <div className="space-y-4 max-h-64 overflow-y-auto mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-accent font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 border-t border-border pt-4 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span className="text-primary">FREE</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold pt-2 border-t border-border">
                      <span>Total</span>
                      <span className="price-gold">${subtotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-gold text-lg py-6"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full mr-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="h-5 w-5 mr-2" />
                        Place Order (Demo)
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    <Lock className="h-3 w-3 inline mr-1" />
                    Demo checkout - no real payment
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
