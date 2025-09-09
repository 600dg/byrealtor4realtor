import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";
// Use public image for hero background

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/background main.png" 
          alt="Main Background" 
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Main Headline with red and gold */}
          {/* New tagline */}
          {/* Summary section */}
              {/* Main focus: for realtors, by realtors. */}
              <h2 className="text-6xl md:text-8xl font-extrabold text-primary mb-8 animate-slide-up text-center" style={{fontFamily: 'Playfair Display, serif'}}>
                <span>For Realtors,</span><br />
                <span>By Realtors.</span>
              </h2>
              <div className="mb-4 animate-slide-up text-center" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
                <h1 className="text-xl md:text-3xl font-bold text-white">
                  Transform Your Real Estate Career
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-10 text-center" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
                We turn 10+ years of industry know-how into your unfair advantage. Get templates, training, mentorship, and ready-to-use listings so you can focus on closing. Work with Rising Star Realty and plug into a complete growth system.
              </p>

          {/* Subheadline removed */}

          {/* CTA Button */}
          <div className="flex flex-col items-center justify-center mb-12 animate-slide-up delay-200">
            <Button 
              variant="cta" 
              size="xl" 
              className="group bg-primary text-white text-xl px-8 py-4 rounded-full shadow-lg hover:bg-secondary hover:text-white transition-all" 
              style={{fontFamily: 'Inter, sans-serif'}}
              onClick={() => smoothScrollTo('lead-capture')}
            >
              <span className="text-white">Join the team and grow</span>
            </Button>
          </div>

          {/* Social Proof Stats removed */}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float delay-1000"></div>
    </section>
  );
};

export default Hero;
