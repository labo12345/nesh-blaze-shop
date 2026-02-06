import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Send, Flame } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully!', {
      description: 'We\'ll get back to you as soon as possible.',
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <Flame className="h-12 w-12 text-primary mx-auto mb-4" />
              <h1 className="font-display text-5xl md:text-6xl text-foreground mb-4">
                GET IN <span className="text-primary">TOUCH</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                Got questions? We're here to help. Drop us a message and we'll hit you back ASAP.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-6 animate-slide-up">
                <div className="card-glow p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-accent">EMAIL</h3>
                      <p className="text-muted-foreground">support@neshonline.shop</p>
                      <p className="text-muted-foreground">sales@neshonline.shop</p>
                    </div>
                  </div>
                </div>

                <div className="card-glow p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-accent">PHONE</h3>
                      <p className="text-muted-foreground">+254 712 345 678</p>
                      <p className="text-muted-foreground">+254 798 765 432</p>
                    </div>
                  </div>
                </div>

                <div className="card-glow p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-accent">LOCATION</h3>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                      <p className="text-muted-foreground">Shipping Worldwide</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="card-glow p-6">
                  <h3 className="font-display text-lg text-accent mb-4">FOLLOW US</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="bg-secondary p-3 rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-foreground" />
                    </a>
                    <a
                      href="#"
                      className="bg-secondary p-3 rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-foreground" />
                    </a>
                    <a
                      href="#"
                      className="bg-secondary p-3 rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-foreground" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 animate-fade-in">
                <div className="card-glow p-8">
                  <h3 className="font-display text-2xl text-accent mb-6">SEND A MESSAGE</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1 bg-muted border-border"
                          placeholder="Your name"
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
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="mt-1 bg-muted border-border"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1 bg-muted border-border min-h-[150px]"
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full btn-gold text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    🔥 This is a demo store — messages are simulated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
