import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header
      className="fixed top-0 w-full z-50 border-b border-border/10"
      style={{
        background: "rgba(30, 20, 20, 0.85)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div
          className="flex flex-col md:flex-row items-center justify-between w-full"
          style={{ fontFamily: "Inter, Arial, sans-serif" }}
        >
          {/* Logo */}
          <div className="flex items-center justify-start w-full md:w-auto">
            <a href="#">
              <img
                src="/5 (1) (1).png"
                alt="Main Logo"
                className="h-20 w-auto max-w-none object-contain"
              />
            </a>
          </div>
          {/* Navigation and phone number */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 w-full md:w-auto justify-end">
            <nav className="flex items-center space-x-6 text-lg md:text-xl font-bold">
              <a
                href="#services"
                className="text-[#b69532] hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#commission"
                className="text-[#b69532] hover:text-white transition-colors"
              >
                Commission Packages
              </a>
              <a
                href="#testimonials"
                className="text-[#b69532] hover:text-white transition-colors"
              >
                Success Stories
              </a>
            </nav>
            <div
              className="flex items-center text-lg md:text-xl font-bold text-white"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span>905-793-0075</span>
            </div>
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg font-bold hover:bg-[#a43434] transition-colors"
            >
              Join Rising Star
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden mt-2">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;