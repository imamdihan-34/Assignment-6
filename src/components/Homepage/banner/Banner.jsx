import React from "react";
import bannerImg from "../../../assets/products/banner.png";
const Banner = () => (
  <div className="grid md:grid-cols-2 p-10 bg-gray-100">
    <div>
      <div class="inline-flex items-center gap-3 px-6 py-2 bg-indigo-50 border border-indigo-100 rounded-full">
        <div class="relative flex items-center justify-center">
          <div class="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
          <div class="absolute w-2 h-2 bg-purple-600 rounded-full"></div>
        </div>

        <span class="text-lg font-medium text-purple-700">
          New: AI-Powered Tools Available
        </span>
      </div>
     <div>
       <h1 className="text-6xl font-bold">
        Supercharge Your <br /> Digital Workflow
      </h1>
     </div>
      <p className="my-4 text-[#627382] gap-1">
        Access premium AI tools, design assets, templates, and productivity{" "}
        <br></br>
        software—all in one place. Start creating faster today.<br></br>
        Explore Products
      </p>
      <div className="flex gap-2">
        <button className="bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white px-5 py-2 rounded-full text-xl">
          Explore Products
        </button>
        <button class="flex items-center gap-2 px-6 py-3 border-2 border-purple-600 rounded-full text-purple-600 font-semibold hover:bg-purple-50 transition-colors group">
          <svg
            xmlns="/src/assets/Play.png"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>

          <span>Watch Demo</span>
        </button>
      </div>
    </div>
<img src={bannerImg} alt="banner" />
  </div>
);
export default Banner;
