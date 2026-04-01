import React from 'react';

const Stats = () => {
 return (
    <section className="bg-[#8b2cf5] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around text-white">
        
       
        <div className="flex flex-col items-center flex-1 py-6 md:py-0">
          <h2 className="text-5xl font-bold mb-2">50K+</h2>
          <p className="text-gray-200 text-lg font-light  tracking-wide">
            Active Users
          </p>
        </div>

        <div className="hidden md:block h-16 w-[1px] bg-white/20"></div>

        
        <div className="flex flex-col items-center flex-1 py-6 md:py-0">
          <h2 className="text-5xl font-bold mb-2">200+</h2>
          <p className="text-gray-200 text-lg font-light  tracking-wide">
            Premium Tools
          </p>
        </div>

       
        <div className="hidden md:block h-16 w-[1px] bg-white/20"></div>

     
        <div className="flex flex-col items-center flex-1 py-6 md:py-0">
          <h2 className="text-5xl font-bold mb-2">4.9</h2>
          <p className="text-gray-200 text-lg font-light  tracking-wide">
            Rating
          </p>
        </div>

      </div>
    </section>
  );
  
};

export default Stats;