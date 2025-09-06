import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, Shield, Trophy, ArrowRight, Users, BarChart3, HeadphonesIcon } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Exclusive Lead Generation",
      description: "Access our proprietary lead generation system that delivers 50+ qualified leads monthly. Our AI-powered matching connects you with ready-to-buy clients.",
      features: ["Pre-qualified buyers", "Seller leads", "Investment opportunities", "24/7 lead flow"],
      cta: "Get Your Leads"
    },
    {
      icon: Zap,
      title: "Premium Marketing Tools",
      description: "Professional marketing suite including branded websites, social media automation, email campaigns, and luxury presentation materials.",
      features: ["Custom branded website", "Social media automation", "Professional photography", "Video marketing"],
      cta: "Boost Your Brand"
    },
    {
      icon: Shield,
      title: "Transaction Support",
      description: "Complete transaction management with legal support, contract review, and dedicated coordinators to ensure smooth closings every time.",
      features: ["Legal protection", "Contract management", "Closing coordination", "Risk mitigation"],
      cta: "Secure Your Deals"
    },
    {
      icon: Trophy,
      title: "Success Coaching",
      description: "One-on-one mentorship with top producers, weekly training sessions, and proven sales systems that guarantee results.",
      features: ["Personal mentor", "Weekly training", "Sales systems", "Performance tracking"],
      cta: "Accelerate Growth"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time market insights, performance tracking, and predictive analytics to help you make data-driven decisions.",
      features: ["Market intelligence", "Performance dashboards", "Trend analysis", "ROI tracking"],
      cta: "See The Data"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support Network",
      description: "Round-the-clock support from our expert team, plus access to our exclusive realtor community and resources.",
      features: ["24/7 tech support", "Community network", "Resource library", "Emergency assistance"],
      cta: "Join The Network"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Complete Real Estate Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Dominate Your Market</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools, leads, and support you need to become a top-producing realtor in your area.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group">
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" className="group">
            Get Started With All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;