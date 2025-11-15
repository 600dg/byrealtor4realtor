import React from "react";

const Footer = () => (
  <footer className="w-full mt-6 border-t border-white/40 py-3">
    <div className="container mx-auto px-4">
      <div
        className="flex flex-col items-center justify-center gap-1 text-[10px] sm:text-xs text-black text-center"
        style={{ fontFamily: "Inter, Arial, sans-serif" }}
      >
        <div className="flex items-center justify-center gap-2">
          <span>Powered by: RISING STAR Realty Ltd.</span>
          <img
            src="/5 (1) (1).png"
            alt="By Realtors For Realtors"
            className="h-4 inline-block align-middle"
          />
        </div>
        <span className="text-black/70">All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
