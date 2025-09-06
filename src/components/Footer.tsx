import React from "react";

const Footer = () => (
  <footer className="w-full py-6 bg-transparent">
    <div className="container mx-auto px-4">
      <div className="text-center text-base flex items-center justify-center gap-2" style={{fontFamily: 'Inter, Arial, sans-serif'}}>
        <img src="/Rising Star Golden 2 (3) (1).png" alt="Rising Star Realty" className="h-6 inline-block align-middle" />
        <span className="text-black">
          &nbsp;|&nbsp; 
          <a 
            href="https://www.google.com/maps/search/2131+Williams+Parkway,+Brampton+ON+L6S+6B8" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-[#a43434] transition-colors"
          >
            2131 Williams Parkway, Brampton ON L6S 6B8
          </a> 
          &nbsp;|&nbsp; 
          <a 
            href="mailto:info@risingstarrealty.ca" 
            className="text-black hover:text-[#a43434] transition-colors"
          >
            info@risingstarrealty.ca
          </a> 
          &nbsp;|&nbsp; 
          <a 
            href="tel:9057930075" 
            className="text-black hover:text-[#a43434] transition-colors"
          >
            905 793 0075
          </a> 
          &nbsp;|&nbsp;
        </span>
        <div className="flex items-center space-x-3">
          <a 
            href="https://www.facebook.com/risingstarrealtyltd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#a43434] transition-colors"
          >
            <img src="/facebook.svg" alt="Facebook" className="h-5 w-5 hover:filter hover:invert-[41%] hover:sepia-[68%] hover:saturate-[1127%] hover:hue-rotate-[314deg] hover:brightness-[95%] hover:contrast-[101%] transition-all" />
          </a>
          <a 
            href="https://www.instagram.com/risingstarrealtyltd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#a43434] transition-colors"
          >
            <img src="/instagram.svg" alt="Instagram" className="h-5 w-5 hover:filter hover:invert-[41%] hover:sepia-[68%] hover:saturate-[1127%] hover:hue-rotate-[314deg] hover:brightness-[95%] hover:contrast-[101%] transition-all" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
