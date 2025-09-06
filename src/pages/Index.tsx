import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LeadCapture from "@/components/LeadCapture";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <LeadCapture />
      <Footer />
    </div>
  );
};

export default Index;
