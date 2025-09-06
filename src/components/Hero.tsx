import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury modern home with premium architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-secondary/30 animate-fade-in">
            <Star className="w-5 h-5 text-secondary fill-current" />
            <span className="text-secondary font-semibold">#1 Real Estate Growth Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            Transform Your 
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> Real Estate Career</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-100">
            Join Canada's fastest-growing real estate network. Get exclusive leads, premium tools, and the support you need to close more deals than ever before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-slide-up delay-200">
            <Button variant="hero" size="xl" className="group">
              Start Your Success Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="premium" size="xl">
              Watch Demo (2 min)
            </Button>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up delay-300">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-secondary mr-2" />
                <span className="text-3xl font-bold text-foreground">300%</span>
              </div>
              <p className="text-muted-foreground">Average Income Increase</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-secondary mr-2" />
                <span className="text-3xl font-bold text-foreground">2,500+</span>
              </div>
              <p className="text-muted-foreground">Successful Realtors</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-secondary mr-2 fill-current" />
                <span className="text-3xl font-bold text-foreground">4.9/5</span>
              </div>
              <p className="text-muted-foreground">Success Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float delay-1000"></div>
    </section>
  );
};

export default Hero;