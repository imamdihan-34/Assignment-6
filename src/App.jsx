import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

import Navbar from './components/navbar/Navbar'
import Banner from './components/Homepage/banner/Banner'
import Stats from './components/Stats'
import Products from './components/Products'
import Cart from './components/Cart'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  // 1. States setup
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products'); // Products default thakbe

  // 2. Fetch data from public/data.json
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error loading products:", err));
  }, []);

  // 3. Cart Functions
  const addToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (isExist) {
      toast.info("Ager thekei cart-e ache!");
    } else {
      setCart([...cart, product]);
      toast.success(`${product.name} add hoyeche!`);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Cart theke remove kora hoyeche");
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Checkout successful!");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />
      
      {/* Navbar-e cart count pathiye daw */}
      <Navbar cartCount={cart.length} />
      
      <Banner />
      <Stats />

      {/* Main Section with Toggling */}
      <main className="py-20 px-4 md:px-10 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-8">Premium Digital Tools</h2>
        
        {/* Toggle Buttons */}
        <div className="inline-flex p-1 bg-white border rounded-full shadow-sm mb-12">
          <button 
            onClick={() => setActiveTab('products')} 
            className={`px-8 py-2 rounded-full transition ${activeTab === 'products' ? 'bg-violet-600 text-white' : 'text-gray-500'}`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveTab('cart')} 
            className={`px-8 py-2 rounded-full transition ${activeTab === 'cart' ? 'bg-violet-600 text-white' : 'text-gray-500'}`}
          >
            Cart ({cart.length})
          </button>
        </div>

        {/* Dynamic Display: Product or Cart */}
        {activeTab === 'products' ? (
          <Products products={products} onAdd={addToCart} />
        ) : (
          <Cart cartItems={cart} onRemove={removeFromCart} onCheckout={clearCart} />
        )}
      </main>

      {/* Baki Sections */}
      <Steps />
      <Pricing />
      <Footer />
    </>
  )
}

export default App
