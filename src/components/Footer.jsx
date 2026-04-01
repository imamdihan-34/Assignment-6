import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 pt-20 pb-10 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-6">DigiTools</h2>
          <p className="text-sm leading-relaxed mb-6">Premium digital products to boost your productivity and workflow in the modern era.</p>
          <div className="flex gap-4">
             {/* Social Icons Placeholder */}
             <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-violet-600 transition cursor-pointer"></div>
             <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-violet-600 transition cursor-pointer"></div>
             <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-violet-600 transition cursor-pointer"></div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Product</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">Writing AI</li>
            <li className="hover:text-white cursor-pointer transition">Design Assets</li>
            <li className="hover:text-white cursor-pointer transition">Pricing</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">About Us</li>
            <li className="hover:text-white cursor-pointer transition">Careers</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">Documentation</li>
            <li className="hover:text-white cursor-pointer transition">Help Center</li>
            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2026 DigiTools Inc. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;