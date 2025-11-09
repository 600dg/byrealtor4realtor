import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// Smooth scroll function with header offset
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerHeight = 120; // Updated for floating header with top margin
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

const Header = () => {
  return (
    <header
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl shadow-2xl border border-border/20"
      style={{
        background: "rgba(30, 20, 20, 0.9)",
        backdropFilter: "blur(12px)",
        width: "calc(100% - 2rem)",
        maxWidth: "1200px",
      }}
    >
      <div className="px-8 py-4">
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
          
          {/* Centered Navigation */}
          <nav className="flex items-center space-x-10 text-lg md:text-xl font-bold">
            <button
              onClick={() => smoothScrollTo('services')}
              className="text-[#b69532] hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => smoothScrollTo('testimonials')}
              className="text-[#b69532] hover:text-white transition-colors cursor-pointer"
            >
              Success Stories
            </button>
          </nav>
          
          {/* Right-aligned phone and button */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-10 w-full md:w-auto justify-end">
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
              onClick={() => smoothScrollTo('lead-capture')}
            >
              BE THE BOSS
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
