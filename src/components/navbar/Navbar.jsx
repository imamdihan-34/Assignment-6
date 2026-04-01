import React from 'react';

const Navbar = () => {
    
  return (
  <nav className="flex justify-between items-center px-10 py-5 bg-white sticky top-0 z-50 shadow-sm container mx-auto">
        <div className="bg-gradient-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-3xl font-bold">DigiTools</div>
        <div className="flex gap-8 font-medium">
          <a href="#">Products</a><a href="#">Features</a><a href="#">Pricing</a><a href="#">Testimonials</a><a href="#">FAQ</a>
        </div>
        <div className="flex items-center gap-4">
          
      <span className="material-symbols-outlined">
        Log in
          </span>
     
         
          <button className="bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white px-5 py-2 rounded-full font-bold">Get Started</button>
        </div>
      </nav>
  );
};
  

export default Navbar;