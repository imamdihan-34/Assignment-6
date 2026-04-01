import React from "react";
import Products from "./Products";
import packageImg from "../assets/products/package.png";

const ProductCard = ({ product, onAdd }) => (

  <div className="bg-white p-8 rounded-2xl border text-left relative shadow-sm hover:shadow-md transition">
    <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-[10px] px-2 py-1 rounded-full font-bold">
      {product.badge}
    </div>
    <div className="text-4xl mb-4 p-2 bg-gray-50 w-fit rounded-lg">
      <img
  src={product.iconUrl === "package.png" ? packageImg : product.iconUrl}
  alt={product.title}
  className="w-12 h-12"
/>
    </div>
    <h3 className="text-lg font-bold">{product.title}</h3>
    <p className="text-gray-400 text-sm mb-4">{product.description}</p>
    <div className="text-xl font-bold mb-4">
      ${product.price}
      <span className="text-sm font-normal text-gray-400">
        /{product.period}
      </span>
    </div>
    <ul className="mb-6 space-y-2">
      {product.features.map((f) => (
        <li key={f} className="text-xs text-gray-500 flex items-center gap-2">
          ✅ {f}
        </li>
      ))}
    </ul>
    <button
      onClick={() => onAdd(product)}
      className="w-full bg-violet-600 text-white py-2.5 rounded-lg font-semibold hover:bg-violet-700 transition"
    >
      Buy Now
    </button>
  </div>
);
export default ProductCard;
