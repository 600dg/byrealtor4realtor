import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, DollarSign, Award } from "lucide-react";
import teamImage from "@/assets/team-realtors.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Top Producer",
      location: "Toronto, ON",
      image: "/api/placeholder/60/60",
      rating: 5,
      revenue: "$2.3M",
      increase: "420%",
      quote: "Rising Star Realty transformed my career completely. In just 18 months, I went from struggling with 3-4 deals per year to closing 45+ transactions. The lead generation system alone pays for itself 10x over.",
      badge: "Rookie of the Year"
    },
    {
      name: "Michael Rodriguez",
      title: "Team Leader",
      location: "Vancouver, BC",
      image: "/api/placeholder/60/60",
      rating: 5,
      revenue: "$4.1M",
      increase: "285%",
      quote: "The support and training at Rising Star is unmatched. I've built a team of 12 agents, and we're all consistently in the top 1% of our market. The systems just work.",
      badge: "Team Builder"
    },
    {
      name: "Jennifer Walsh",
      title: "Luxury Specialist",
      location: "Calgary, AB",
      image: "/api/placeholder/60/60",
      rating: 5,
      revenue: "$3.7M",
      increase: "350%",
      quote: "I was skeptical at first, but the results speak for themselves. The premium marketing tools and exclusive leads helped me break into the luxury market faster than I ever imagined possible.",
      badge: "Luxury Expert"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "300%", label: "Average Income Increase" },
    { icon: DollarSign, value: "$850M", label: "Total Sales Volume" },
    { icon: Award, value: "89%", label: "Top Producer Rate" },
    { icon: Star, value: "4.9/5", label: "Satisfaction Score" }
  ];

  return (
    <section id="testimonials" className="py-20" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(164,52,52,0.1) 50%, rgba(164,52,52,0.15) 100%)'}}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Results from 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Real Realtors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our platform has transformed the careers of thousands of real estate professionals across Canada.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-card rounded-2xl shadow-card border border-border/50">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-luxury transition-all duration-300 bg-gradient-card border-border/50">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover bg-gradient-primary"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.badge}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="bg-accent/10 rounded-lg px-3 py-2">
                    <span className="text-accent font-semibold">{testimonial.revenue}</span>
                    <span className="text-muted-foreground ml-1">revenue</span>
                  </div>
                  <div className="bg-secondary/10 rounded-lg px-3 py-2">
                    <span className="text-secondary font-semibold">+{testimonial.increase}</span>
                    <span className="text-muted-foreground ml-1">growth</span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-luxury">
          <img 
            src={teamImage} 
            alt="Successful real estate team collaborating in modern office"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80 flex items-center justify-center">
            <div className="text-center text-foreground">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Success Community
              </h3>
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
                Connect with thousands of top-performing realtors who share strategies, support each other, and celebrate wins together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
