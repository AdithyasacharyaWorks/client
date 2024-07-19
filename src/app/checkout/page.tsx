'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CheckoutPage = () => {
  const [bookingInfo, setBookingInfo] = useState({
    room: 'Room Name/Number',
    arriveDate: '2024-07-15', // Example arrive date
    departureDate: '2024-07-18', // Example departure date
  });

  const [foodItems, setFoodItems] = useState([
    { id: 1, name: 'Biryani', price: 12 },
    { id: 2, name: 'Paneer Butter Masala', price: 10 },
    // Add more food items as needed
  ]);

  const [payments, setPayments] = useState([
    { id: 1, description: 'Initial deposit', amount: 100 },
    { id: 2, description: 'Additional charges', amount: 50 },
  ]);

  // Calculate total paid amount
  const totalPaid = payments.reduce((acc, payment) => acc + payment.amount, 0);

  // Calculate total amount for food items
  const foodTotal = foodItems.reduce((acc, item) => acc + item.price, 0);

  // Calculate total amount (room + food)
  const totalAmount = foodTotal; // Add room charges if applicable

  // Calculate remaining amount to be paid
  const remainingAmount = totalAmount - totalPaid;

  return (
    <div className="px-4 py-6 max-w-screen-sm mx-auto bg-gray-100 rounded-lg shadow-lg min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900">Checkout</h1>

      {/* Order Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
        <div className="border border-gray-300 p-4 rounded-md mb-4">
          <p className="text-gray-700">Selected Room: {bookingInfo.room}</p>
          <p className="text-gray-700">Arrive Date: {bookingInfo.arriveDate}</p>
          <p className="text-gray-700">Departure Date: {bookingInfo.departureDate}</p>
        </div>
        
        {/* Food Order Summary */}
        <div className="border border-gray-300 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Food Order Summary</h3>
          {foodItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <p className="text-gray-700">{item.name}</p>
              <p className="text-gray-700">₹{item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Payments Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Payments Summary</h2>
        <div className="border border-gray-300 p-4 rounded-md">
          {payments.map(payment => (
            <div key={payment.id} className="flex justify-between items-center mb-2 text-black">
              <p className="text-gray-700">{payment.description}</p>
              <p className="text-gray-700">₹{payment.amount.toFixed(2)}</p>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4 text-black">
            <p className="text-lg font-semibold">Remaining Amount:</p>
            <p className="text-lg font-semibold">₹{remainingAmount.toFixed(2)}</p>
          </div>
        </div>
      </section>

      {/* Submit Button */}
      {/* <button
        type="button"
        onClick={() => alert('Booking/Order confirmed!')}
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 inline-block"
      >
        Confirm Booking/Order
      </button> */}
      <Button onClick={() => alert('Booking/Order confirmed!')} > Confirm Booking/Order</Button>

      {/* Link back to home */}
      <div className="mt-6 text-center">
        <Link href="/" passHref>
          <span className="text-blue-500 hover:text-blue-700">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
