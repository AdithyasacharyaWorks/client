'use client'
import React from 'react';
import Link from 'next/link';

// Demo cart items data
const cartItems = [
  {
    id: 1,
    name: 'Eggs Benedict',
    description: 'Two poached eggs, Canadian bacon, and hollandaise sauce on an English muffin.',
    price: 12.99,
    quantity: 2, // example quantity
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Romaine lettuce, Caesar dressing, croutons, and parmesan cheese.',
    price: 8.99,
    quantity: 1, // example quantity
  },
];

const CartPage = ({ removeFromCart, updateCartItemQuantity }:any) => {
  // Function to calculate total amount
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-300">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center py-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateCartItemQuantity(item.id, parseInt(e.target.value))}
                    className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-16 sm:text-sm border rounded-md mr-2 px-2"
                  />
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 ml-2 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total amount */}
          <div className="mt-4">
            <p className="text-xl font-semibold">Total: ${calculateTotal().toFixed(2)}</p>
          </div>
        </>
      )}

      {/* Link back to order food */}
      <Link href="/orderFood">
        <span className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300 inline-block">
          Back to Order Food
        </span>
      </Link>
    </div>
  );
};

export default CartPage;
