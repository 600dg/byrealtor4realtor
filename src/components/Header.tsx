import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu } from "lucide-react";

const Header = () => {
  return (
dhruv/dev
  <header className="fixed top-0 w-full z-50 border-b border-border/10" style={{background: 'rgba(30, 20, 20, 0.85)', backdropFilter: 'blur(8px)'}}>
  <div className="container mx-auto px-0 md:px-0 py-2">
  <div className="flex flex-col md:flex-row items-center justify-between w-full" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
    {/* On small screens, logo and join button side by side */}
    <div className="flex w-full md:w-auto items-center justify-between">
  <a href="#"><img src="/5 (1) (1).png" alt="Main Logo" className="h-20 w-auto max-w-none object-contain" /></a>
      <div className="flex md:hidden items-center ml-4">
  <Button variant="cta" size="lg" className="text-lg font-bold hover:bg-primary hover:text-white" style={{fontFamily: 'Inter, Arial, sans-serif'}}>Join Rising Star</Button>
      </div>
    </div>
    {/* Navigation and phone number right-aligned, responsive */}
  <div className="hidden md:flex flex-row items-center space-x-8 w-full md:w-auto justify-start">
      <nav className="flex items-center space-x-6 text-lg md:text-xl font-bold" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
        <a href="#services" className="text-secondary hover:text-secondary transition-colors">Services</a>
  <a href="#commission" className="text-secondary hover:text-secondary transition-colors">Commission Packages</a>
        <a href="#testimonials" className="text-secondary hover:text-secondary transition-colors">Success Stories</a>
      </nav>
      <div className="flex items-center text-xl font-bold" style={{color: '#fff', fontFamily: 'Inter, Arial, sans-serif'}}>
        <span>905-793-0075</span>
      </div>
  <Button variant="cta" size="lg" className="text-lg font-bold hover:bg-primary hover:text-white" style={{fontFamily: 'Inter, Arial, sans-serif'}}>Join Rising Star</Button>
    </div>

    <header className="fixed top-0 w-full z-50 glass border-b border-border/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Logo left-justified and responsive */}
          <div className="flex items-center justify-start w-full md:w-auto">
            <img src="/5 (1) (1).png" alt="Main Logo" className="h-20 w-auto max-w-none object-contain" />
          </div>
          {/* Navigation and phone number right-aligned, responsive */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 w-full md:w-auto justify-end">
            <nav className="flex items-center space-x-6 text-lg md:text-xl font-bold">
              <a href="#services" className="text-primary/80 hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-primary/80 hover:text-primary transition-colors">About</a>
              <a href="#testimonials" className="text-primary/80 hover:text-primary transition-colors">Success Stories</a>
              <a href="#contact" className="text-primary/80 hover:text-primary transition-colors">Contact</a>
            </nav>
            {/* Phone number in gold, larger */}
            <div className="flex items-center space-x-2 text-xl font-bold" style={{color: '#b69532'}}>
              <Phone className="w-5 h-5" />
              <span>905-793-0075</span>
            </div>
            <Button variant="cta" size="lg" className="text-lg font-bold">Join Rising Star</Button>
          </div>
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden mt-2">
            <Menu className="w-6 h-6" />
          </Button>
main
        </div>
      </div>
    </header>
  );
};

export default Header;