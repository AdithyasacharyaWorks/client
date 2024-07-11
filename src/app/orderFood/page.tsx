'use client'
import { useState } from 'react';
import Link from 'next/link';
import OrderComponent from '@/app/orderFood/OrderComponent';
import CartPage from '@/app/orderFood/Cart';
import { IoMdArrowRoundBack } from 'react-icons/io';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  // Function to toggle cart visibility
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="px-4 py-6 max-w-screen-sm mx-auto bg-gray-200 min-h-screen text-black">
      {/* Back to Home link */}
      <div onClick={()=>{}} className="cursor-pointer flex items-center text-black mb-2">
        <Link href={"/"}>
          <IoMdArrowRoundBack size={30} />
        </Link>
        <span className="ml-2">Back to Home</span>
      </div>

      {/* Navigation */}
      <nav className="mb-6 flex justify-center">
        <ul className="flex space-x-4">
          <li className={`text-white p-2 rounded-lg bg-black cursor-pointer ${!showCart ? 'font-bold' : ''}`} onClick={() => setShowCart(false)}>
            Order Food
          </li>
          <li className={`text-white p-2 rounded-lg bg-black cursor-pointer ${showCart ? 'font-bold' : ''}`} onClick={toggleCart}>
            View Cart
          </li>
        </ul>
      </nav>

      {/* Conditional rendering based on showCart state */}
      {!showCart ? (
        <OrderComponent />
      ) : (
        <CartPage />
      )}
    </div>
  );
};

export default App;
