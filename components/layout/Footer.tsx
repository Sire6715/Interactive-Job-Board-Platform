import React from "react";
import { League_Spartan } from "next/font/google";

const league_spartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className={`${league_spartan.className} bg-[#56b8b5] text-white py-6 mt-10`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-lg">JobBoard</h1>
          <p className="text-sm">Connecting fresh talent to global opportunities</p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>

      <div className="text-center text-xs mt-4 opacity-75">
        © {new Date().getFullYear()} JobBoard. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
