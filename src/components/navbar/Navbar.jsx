import React from "react";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white sticky top-0 z-50 shadow-sm container mx-auto">
      <div className="bg-gradient-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-3xl font-bold">
        DigiTools
      </div>

      <div className="hidden md:flex gap-8 font-medium">
        <a href="#" className="hover:text-[#4F39F6] transition">
          Products
        </a>
        <a href="#" className="hover:text-[#4F39F6] transition">
          Features
        </a>
        <a href="#" className="hover:text-[#4F39F6] transition">
          Pricing
        </a>
        <a href="#" className="hover:text-[#4F39F6] transition">
          Testimonials
        </a>
        <a href="#" className="hover:text-[#4F39F6] transition">
          FAQ
        </a>
      </div>

      <div className="flex items-center gap-6">
        <span className="material-symbols-outlined cursor-pointer hover:text-[#4F39F6]">
          login
        </span>

        <div className="relative cursor-pointer">
          <span className="material-symbols-outlined text-2xl text-slate-700">
            <FaCartShopping />
          </span>

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#9514FA] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              {cartCount}
            </span>
          )}
        </div>

        <button className="bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white px-6 py-2 rounded-full font-bold shadow-md hover:opacity-90 transition active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
