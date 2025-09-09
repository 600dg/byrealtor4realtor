import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, Shield, Trophy, ArrowRight, Users, BarChart3, HeadphonesIcon, Megaphone, MegaphoneOffIcon } from "lucide-react";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import { MegaphoneIcon, RocketLaunchIcon, Squares2X2Icon} from "@heroicons/react/24/outline";

const Services = () => {
  const services = [
    {
      icon: MegaphoneIcon,
      title: "Marketing Power Pack",
      description: "Everything you need to look polished and start attracting attention.",
      features: ["Seasonal Template Library + Brand Assets", "Social Media Management", "Listing, Open House & Testimonial Sets", "Flyers, Signs & Cards"],
      cta: "Activate My Marketing"
    },
    {
      icon: RocketLaunchIcon,
      title: "Deal Acceleration",
      description: "Hands on support to move real transactions from offer to close, faster.",
      features: ["Mentorship on Live Deals", "Access to Brokerage Supplied Listings", "Feedback, Closing Checklists & Compliance Guidance", "Trusted Partners Network"],
      cta: "Start Closing Faster"
    },
    {
      icon: Squares2X2Icon,
      title: "Full-Stack Agent OS",
      description: "Your end-to-end growth system combining training, lead gen, marketing & mentorship.",
      features: ["Lead Generation Training", "Free Fundamentals Training Library", "Advertising, Landing Pages & Follow-up", "Prospecting & Time Management"],
      cta: "Get the Complete System"
    }
  ];

  return (
  <section id="services" className="py-20" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 50%, rgba(164,52,52,0.1) 100%)'}}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
            <HomeModernIcon className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Complete Real Estate Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to 
            <span className="text-primary"> Dominate Your Market</span>
          </h2>
            <p className="text-xl text-black max-w-3xl mx-auto text-center" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
              Our comprehensive platform provides all the tools<br />
              you need to become a <span className="text-secondary font-semibold">top producing realtor</span> in your area.
            </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 backdrop-blur-sm" style={{fontFamily: 'Inter, Arial, sans-serif', color: '#000'}}>
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-[#b69532] group-hover:text-[#b69532]" />
                </div>
                <CardTitle className="text-xl font-bold text-black group-hover:text-[#b69532] transition-colors" style={{fontFamily: 'Playfair Display, serif'}}>
                  {service.title}
                </CardTitle>
                <CardDescription className="text-black leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-black">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group font-bold" 
                  style={{fontFamily: 'Playfair Display, serif'}}
                  onClick={() => {
                    const element = document.getElementById('lead-capture');
                    if (element) {
                      const headerHeight = 120;
                      const elementPosition = element.offsetTop - headerHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

  {/* Bottom CTA removed as requested */}
      </div>
    </section>
  );
};

export default Services;