import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// Smooth scroll function with header offset
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerHeight = 120;
    const elementPosition = element.offsetTop - headerHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
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
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <img
                src="/By.png"
                alt="Main Logo"
                className="h-12 md:h-20 w-auto max-w-none object-contain"
              />
            </a>
            {/* Mobile-only primary action */}
            <Button 
              variant="default" 
              size="sm" 
              className="ml-3 text-base font-bold bg-[#a43434] hover:bg-[#b69532] text-white transition-colors md:hidden"
              onClick={() => smoothScrollTo('lead-capture')}
            >
              BE THE BOSS
            </Button>
          </div>
          
          {/* Navigation + Right-side actions */}
          <div className="hidden md:flex items-center justify-end space-x-10 w-full md:w-auto">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-10 justify-end">
              <div
                className="flex items-center text-lg md:text-xl font-bold text-white"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span>905-793-0075</span>
              </div>
              <Button 
                variant="default" 
                size="lg" 
                className="text-lg font-bold bg-[#a43434] hover:bg-[#b69532] text-white transition-colors"
                onClick={() => smoothScrollTo('lead-capture')}
              >
                BE THE BOSS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
