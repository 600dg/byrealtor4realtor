import React from "react";

const Footer = () => (
  <footer className="w-full mt-8 border-t border-white/40 py-6">
    <div className="container mx-auto px-4">
      <div
        className="flex flex-col md:flex-row items-start justify-between gap-4 text-xs sm:text-sm md:text-base text-black text-left"
        style={{ fontFamily: "Inter, Arial, sans-serif" }}
      >
        {/* Logo + contact info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2">
            <img
              src="/5 (1) (1).png"
              alt="By Realtors For Realtors"
              className="h-6 inline-block align-middle -mt-1"
            />
            <img
              src="/Rising Star Golden 2 (3) (1).png"
              alt="Rising Star Realty"
              className="h-6 inline-block align-middle"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-x-2">
            <a
              href="https://www.google.com/maps/search/2131+Williams+Parkway,+Brampton+ON+L6S+6B8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#b69532] transition-colors"
            >
              2131 Williams Parkway, Brampton ON L6S 6B8
            </a>
            <span className="hidden sm:inline text-black">|</span>
            <a
              href="mailto:info@risingstarrealty.ca"
              className="text-black hover:text-[#b69532] transition-colors"
            >
              info@risingstarrealty.ca
            </a>
            <span className="hidden sm:inline text-black">|</span>
            <a
              href="tel:9057930075"
              className="text-black hover:text-[#b69532] transition-colors"
            >
              905 793 0075
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center md:justify-end space-x-4">
          <a
            href="https://www.facebook.com/risingstarrealtyltd"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img
              src="/facebook.svg"
              alt="Facebook"
              className="h-5 w-5 filter invert brightness-200"
            />
          </a>
          <a
            href="https://www.instagram.com/risingstarrealtyltd"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img
              src="/instagram.svg"
              alt="Instagram"
              className="h-5 w-5 filter invert brightness-200"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
