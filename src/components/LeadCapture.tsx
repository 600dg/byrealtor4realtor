import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Gift, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    goals: ''
  });

  const benefits = [
    "Exclusive market analysis report ($500 value)",
    "Personal consultation with top producer",
    "Access to our lead generation system",
    "Free marketing materials package",
    "30-day success guarantee"
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float delay-1000"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Value Proposition */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-secondary/30">
              <Gift className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-semibold">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to <span className="bg-gradient-secondary bg-clip-text text-transparent">10X Your Income?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join over 2,500 successful realtors who've transformed their careers with Rising Star Realty. Get started today with our exclusive welcome package.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background"></div>
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1 text-secondary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span>Trusted by 2,500+ realtors</span>
              </div>
            </div>
          </div>

          {/* Right Side - Lead Capture Form */}
          <Card className="shadow-luxury bg-gradient-card backdrop-blur-sm border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">
                Start Your Success Journey
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out this form to get instant access to our exclusive resources and a personal consultation.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input 
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Real Estate Experience</Label>
                <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New to Real Estate</SelectItem>
                    <SelectItem value="1-2">1-2 Years Experience</SelectItem>
                    <SelectItem value="3-5">3-5 Years Experience</SelectItem>
                    <SelectItem value="5+">5+ Years Experience</SelectItem>
                    <SelectItem value="veteran">Veteran (10+ Years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">What are your income goals?</Label>
                <Textarea 
                  id="goals"
                  placeholder="Tell us about your goals and what success looks like to you..."
                  value={formData.goals}
                  onChange={(e) => setFormData({...formData, goals: e.target.value})}
                  className="min-h-[100px]"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full group">
                Get My Success Package Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to receive communications from Rising Star Realty. 
                We respect your privacy and will never spam you.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;