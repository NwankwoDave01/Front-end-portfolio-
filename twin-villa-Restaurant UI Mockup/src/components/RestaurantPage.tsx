import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Instagram, Facebook, MapPin, Clock, Star, ChefHat, Heart } from "lucide-react";
import jollofRiceChicken from "@/assets/jollof-rice-chicken.jpg";
import friedRiceTurkey from "@/assets/fried-rice-turkey.jpg";
import coconutRiceBeef from "@/assets/coconut-rice-beef.jpg";

const RestaurantPage = () => {
  const featuredDishes = [
    {
      name: "Jollof Rice & Chicken",
      image: jollofRiceChicken,
      description: "Our signature Nigerian jollof rice with perfectly seasoned grilled chicken",
      price: "From ₦3,500"
    },
    {
      name: "Fried Rice & Turkey",
      image: friedRiceTurkey,
      description: "Colorful fried rice served with tender roasted turkey pieces",
      price: "From ₦4,200"
    },
    {
      name: "Coconut Rice & Beef",
      image: coconutRiceBeef,
      description: "Aromatic coconut-infused rice paired with succulent beef",
      price: "From ₦4,500"
    }
  ];

  const handleCallUs = () => {
    window.location.href = "tel:09041318167";
  };

  const handleOrderNow = () => {
    window.open("https://wa.me/2349041318167?text=Hello! I'd like to place an order from Twin Villa Restaurant & Bar.", "_blank");
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          { <iframe
            src="https://www.youtube.com/embed/GxHyTMZ1bsI?autoplay=1&mute=1&loop=1&playlist=GxHyTMZ1bsI&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
            className="w-full h-full object-cover scale-150"
            style={{ border: 'none', pointerEvents: 'none' }}
            allow="autoplay; encrypted-media"
          /> }
          
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <ChefHat className="w-16 h-16 text-brand-yellow mr-4" />
            <div>
              <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-2">Twin Villa</h1>
              <p className="text-2xl md:text-3xl font-playfair font-medium text-brand-yellow">Restaurant & Bar</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-brand-yellow">
              "Twice as Nice"
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Welcome to Twin Villa Restaurant & Bar – your home of delicious meals and fine dining in Sangotedo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="brand-primary" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={handleOrderNow}
            >
              <Heart className="w-5 h-5 mr-2" />
              Order Now
            </Button>
            <Button 
              variant="brand-secondary" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={handleCallUs}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us: 09041318167
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-yellow/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-orange/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-brand-orange mr-2" />
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-brand-brown">
                Our Signature Dishes
              </h3>
              <Star className="w-8 h-8 text-brand-orange ml-2" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the authentic flavors that make Twin Villa special. Each dish is crafted with love and the finest ingredients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <Card key={index} className="group overflow-hidden bg-white border-0 shadow-card hover:shadow-brand transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-2xl font-playfair font-bold">{dish.price}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-playfair font-bold mb-3 text-brand-brown group-hover:text-brand-orange transition-colors duration-300">
                    {dish.name}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">{dish.description}</p>
                  <Button variant="brand-outline" className="w-full">
                    Add to Order
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-yellow/10 to-brand-orange/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-brand-brown mb-6">
              Visit Us Today
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the Twin Villa difference. We're conveniently located in the heart of Sangotedo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h4 className="text-2xl font-playfair font-bold text-brand-brown mb-6">Contact Information</h4>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-brand-yellow to-brand-orange p-3 rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-brand-brown mb-1">Phone Number</h5>
                      <p className="text-lg font-medium text-brand-orange">09041318167</p>
                      <p className="text-sm text-muted-foreground">Available daily for orders and reservations</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-brand-yellow to-brand-orange p-3 rounded-full">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-brand-brown mb-1">Opening Hours</h5>
                      <p className="text-muted-foreground">Monday - Sunday</p>
                      <p className="text-lg font-medium text-brand-orange">11:00 AM - 11:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-brand-yellow to-brand-orange p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-brand-brown mb-1">Location</h5>
                      <p className="text-muted-foreground">Majek Bus Stop</p>
                      <p className="text-lg font-medium text-brand-orange">Sangotedo, Lagos State</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  variant="brand-primary" 
                  size="lg" 
                  className="h-16 text-lg"
                  onClick={handleOrderNow}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Order Now
                </Button>
                
                <Button 
                  variant="brand-secondary" 
                  size="lg" 
                  className="h-16 text-lg"
                  onClick={handleCallUs}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Map & Social Media */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h4 className="text-2xl font-playfair font-bold text-brand-brown mb-6">Find Us</h4>
                <div className="bg-gradient-to-br from-brand-yellow/20 to-brand-orange/20 rounded-xl p-8 text-center">
                  <MapPin className="w-16 h-16 text-brand-orange mx-auto mb-4" />
                  <h5 className="text-xl font-playfair font-bold mb-2 text-brand-brown">Twin Villa Restaurant & Bar</h5>
                  <p className="text-muted-foreground mb-4">Majek Bus Stop, Sangotedo, Lagos State</p>
                  <Button 
                    variant="brand-outline" 
                    onClick={() => window.open("https://maps.google.com/?q=Majek+Bus+Stop+Sangotedo+Lagos", "_blank")}
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h4 className="text-2xl font-playfair font-bold text-brand-brown mb-6 text-center">Follow Us</h4>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://instagram.com/twinvillarestaurant" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-brand-yellow to-brand-orange p-4 rounded-full hover:shadow-brand transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-8 h-8 text-white" />
                  </a>
                  <a 
                    href="https://facebook.com/twinvillarestaurant" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-brand-yellow to-brand-orange p-4 rounded-full hover:shadow-brand transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-8 h-8 text-white" />
                  </a>
                </div>
                <p className="text-center text-muted-foreground mt-4">
                  @twinvillarestaurant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-brown text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <ChefHat className="w-12 h-12 text-brand-yellow mr-3" />
            <div>
              <h4 className="text-3xl font-playfair font-bold">Twin Villa</h4>
              <p className="text-brand-yellow font-playfair">Restaurant & Bar</p>
            </div>
          </div>
          <p className="text-2xl font-playfair font-medium text-brand-yellow mb-4">"Twice as Nice"</p>
          <p className="text-sm opacity-75 mb-4">Majek Bus Stop, Sangotedo, Lagos State | 09041318167</p>
          <p className="text-sm opacity-60">© 2024 Twin Villa Restaurant & Bar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantPage;