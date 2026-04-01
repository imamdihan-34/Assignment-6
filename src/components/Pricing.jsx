import React from 'react';

const Pricing = () => {
  return (
    <section className="py-24 bg-gray-50 px-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500">Choose the plan that fits your business needs best.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {/* Starter */}
        <div className="bg-white p-10 rounded-3xl shadow-sm border">
          <h3 className="text-xl font-bold mb-2">Starter</h3>
          <p className="text-sm text-gray-400 mb-6">Perfect for solo creators.</p>
          <div className="text-4xl font-bold mb-8">$0<span className="text-lg font-normal text-gray-400">/month</span></div>
          <ul className="space-y-4 mb-10 text-sm text-gray-600">
            <li>✅ Basic AI Writing</li>
            <li>✅ 5 Projects</li>
            <li>✅ Community Support</li>
          </ul>
          <button className="w-full py-3 rounded-xl border border-violet-600 text-violet-600 font-bold hover:bg-violet-50 transition">Get Started Free</button>
        </div>

        {/* Pro - Highlighted */}
        <div className="bg-violet-600 p-10 rounded-3xl shadow-xl text-white transform md:scale-105 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
          <h3 className="text-xl font-bold mb-2">Pro</h3>
          <p className="text-sm opacity-80 mb-6">For small teams.</p>
          <div className="text-4xl font-bold mb-8">$29<span className="text-lg font-normal opacity-60">/month</span></div>
          <ul className="space-y-4 mb-10 text-sm opacity-90">
            <li>✅ Advanced AI Tools</li>
            <li>✅ Unlimited Projects</li>
            <li>✅ Priority Support</li>
            <li>✅ API Access</li>
          </ul>
          <button className="w-full py-3 rounded-xl bg-white text-violet-600 font-bold hover:bg-gray-100 transition">Start Free Trial</button>
        </div>

        {/* Enterprise */}
        <div className="bg-white p-10 rounded-3xl shadow-sm border">
          <h3 className="text-xl font-bold mb-2">Enterprise</h3>
          <p className="text-sm text-gray-400 mb-6">For large businesses.</p>
          <div className="text-4xl font-bold mb-8">$99<span className="text-lg font-normal text-gray-400">/month</span></div>
          <ul className="space-y-4 mb-10 text-sm text-gray-600">
            <li>✅ Custom Solutions</li>
            <li>✅ 24/7 Phone Support</li>
            <li>✅ Dedicated Manager</li>
          </ul>
          <button className="w-full py-3 rounded-xl bg-violet-600 text-white font-bold hover:bg-violet-700 transition">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;