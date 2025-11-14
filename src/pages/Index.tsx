import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LeadCapture from "@/components/LeadCapture";
import Testimonials from "@/components/Testimonials";
import TopBanner from "@/components/TopBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />
      <Hero />
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(164,52,52,0.08) 0%, rgba(164,52,52,0.2) 50%, rgba(164,52,52,0.3) 100%)",
        }}
      >
        <Services />
        <Testimonials />
        <LeadCapture />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
