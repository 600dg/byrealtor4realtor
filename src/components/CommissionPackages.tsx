import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import { RocketLaunchIcon, BanknotesIcon } from "@heroicons/react/24/outline";

const CommissionPackages = () => {
  const packages = [
    {
      icon: BanknotesIcon,
      title: "Standard Commission",
      description: "Perfect for agents looking to maximize their earnings with full support.",
      features: [
        "100% Commission on All Deals",
        "Full Brokerage Support",
        "Access to All Training Resources",
        "Marketing Tools & Templates"
      ],
      cta: "Choose Standard Plan"
    },
    {
      icon: RocketLaunchIcon,
      title: "Rising Star Package",
      description: "Ideal for high-performing agents ready to scale their business.",
      features: [
        "Enhanced Commission Structure",
        "Priority Mentorship Access",
        "Exclusive Lead Generation",
        "Premium Marketing Solutions"
      ],
      cta: "Become a Rising Star"
    }
  ];

  return (
    <section id="commission" className="py-20" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(164,52,52,0.15) 100%)'}}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
            <ClipboardDocumentListIcon className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Flexible Commission Options</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose <span className="text-[#b69532]">Your Path</span> to <span className="text-[#a43434]">Success</span>
          </h2>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 backdrop-blur-sm" style={{fontFamily: 'Inter, Arial, sans-serif', color: '#000'}}>
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <pkg.icon className="w-7 h-7 text-[#b69532] group-hover:text-[#b69532]" />
                </div>
                <CardTitle className="text-xl font-bold text-black group-hover:text-[#b69532] transition-colors" style={{fontFamily: 'Playfair Display, serif'}}>
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-black leading-relaxed">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-black">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group font-bold" style={{fontFamily: 'Playfair Display, serif'}}>
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommissionPackages;
