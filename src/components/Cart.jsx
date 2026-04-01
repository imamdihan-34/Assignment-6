import React from "react";

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  if (cartItems.length === 0)
    return (
      <div className="py-20 text-gray-400 border-2 border-dashed rounded-xl justify-center ">
       
        Your cart is empty! Start shopping.
        
      </div>
      
    );

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-sm border">
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-xl"
          >
            <div className="flex items-center gap-4 text-left">
           <img
  src={item.iconUrl}
  alt={item.title}
  className="w-10 h-10 object-contain"
/>
              <div>
                <h4 className="font-bold text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className="text-red-500 text-xs font-bold hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-4 border-t flex justify-between items-center">
        <h4 className="font-bold">Total: ${total}</h4>
        <button
          onClick={onCheckout}
          className="bg-violet-600 text-white px-8 py-2.5 rounded-xl font-bold"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
export default Cart;
