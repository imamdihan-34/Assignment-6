import React from 'react';

const Steps = () => {
  const steps = [
    { id: 1, title: "Create Account", desc: "Sign up for free in seconds. Fast and easy registration.", icon: "👤" },
    { id: 2, title: "Choose Products", desc: "Select from our premium list of digital assets.", icon: "📦" },
    { id: 3, title: "Start Creating", desc: "Download and start your creative journey instantly.", icon: "🚀" }
  ];

  return (
    <section className="py-20 bg-white px-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Get Started In 3 Steps</h2>
        <p className="text-gray-500">Run lucky premium digital tools in minutes, not hours.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="bg-gray-50 p-10 rounded-3xl text-center relative border border-transparent hover:border-violet-200 transition">
             <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 text-violet-600">
                {step.icon}
             </div>
             <h3 className="text-xl font-bold mb-3">{step.title}</h3>
             <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
             <span className="absolute top-6 right-8 text-violet-100 text-5xl font-black">0{step.id}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;