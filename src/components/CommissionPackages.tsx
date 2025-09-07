import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RocketLaunchIcon, BanknotesIcon , SparklesIcon} from "@heroicons/react/24/outline";
import {ClipboardDocumentListIcon} from "@heroicons/react/24/solid";  

const CommissionPackages = () => {
  const packages = [
    {
      icon: BanknotesIcon,
      title: "Standard Commission",
      description: "Perfect for agents who want maximum take-home with pro tools included.",
      features: [
        "90/10 Split on All Deals",
        "Social Media Templates Library (Seasonal & Evergreen)",
        "Fundamentals Video Library (Offers, CMAs, Contracts, Workflows",
        "Trusted Partner Network",
        "Free Advertising Resources (Business Cards, Boards, Flyers)"
      ]
    },
    {
      icon: SparklesIcon,
      title: "Rising Star Package",
      description: "Built for new agents who want hands-on support and more deal flow.",
      features: [
        "Everything in the Standard Commission Package +",
        "80/20 Split on All Deals",
        "Work Live Deals With an Experienced Realtor",
        "Access to Brokerage-Supplied Listings",
        "Lead-Generation Training (Scripts, Funnels, Follow-Up Framework)",
      ]
    }
  ];

  return (
    <section id="commission" className="py-20" style={{background: 'linear-gradient(180deg, rgba(164,52,52,0.1) 0%, rgba(164,52,52,0.15) 50%, rgba(255,255,255,0.7) 100%)'}}>
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
          <p className="text-lg text-black max-w-3xl mx-auto text-center mb-8" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
            We don't believe in rinsing realtors with monthly desk fees.<br />
            Pay a minimal desk fee once a year and get access to the full system.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 backdrop-blur-sm" style={{fontFamily: 'Inter, Arial, sans-serif', color: '#000'}}>
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4">
                    <pkg.icon className="w-7 h-7 text-[#b69532]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-black" style={{fontFamily: 'Playfair Display, serif'}}>
                    {pkg.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-lg text-black leading-relaxed">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {pkg.features.map((feature, featureIndex) => {
                    // Special styling for Rising Star package first feature
                    const isRisingStarFirstFeature = pkg.title === "Rising Star Package" && featureIndex === 0;
                    
                    return (
                      <li key={featureIndex} className={`flex items-center text-sm text-black ${isRisingStarFirstFeature ? 'text-base font-semibold' : ''}`}>
                        {!isRisingStarFirstFeature && (
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        )}
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Optional Add Ons */}
        <div className="max-w-5xl mx-auto mt-8">
          <h3 className="text-xl font-semibold text-black mb-4 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
            Optional Add Ons
          </h3>
          <Card className="bg-gradient-card border-border/50 backdrop-blur-sm" style={{fontFamily: 'Inter, Arial, sans-serif', color: '#000'}}>
            <CardHeader className="pb-4">
              <CardDescription className="text-base text-black leading-relaxed" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
                <span className="text-[#b69532] font-semibold">Social Media Management:</span> Keep your channels consistent without the hassle. Monthly content calendar, post design, reels edits scheduling and basic ad setup for $3000/year.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommissionPackages;
