import React from "react";
import userIcon from "../assets/products/rocket.png";
import packageIcon from "../assets/products/package.png";
import icon from "../assets/products/user.png";
const Steps = () => {
  const Steps = [
    {
      id: 1,
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: icon,
    },
    {
      id: 2,
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: packageIcon,
    },
    {
      id: 3,
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: userIcon,
    },
  ];
  return (
    <section className="py-24 bg-white px-6 md:px-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Get Started In 3 Steps</h2>
        <p className="text-slate-500">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {Steps.map((step) => (
          <div
            key={step.id}
            className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm relative text-center group hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-8 right-8 bg-[#7C3AED] text-white text-[10px] font-bold w-10 h-10 flex items-center justify-center rounded-full">
              {step.id}
            </div>

            <div className="flex justify-center mb-10 mt-6">
              <div className="w-[120px] h-[120px] bg-[#F1E8FF] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

          
            <h3 className="text-3xl font-bold text-[#111827] mb-6 leading-tight">
              {step.title}
            </h3>

            <p className="text-[15px] text-[#6B7280] leading-[1.6] max-w:[280px] mx-auto">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
