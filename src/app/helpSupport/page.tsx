'use client'
// HelpAndSupportPage.js
import React from 'react';
import Link from 'next/link';
import { IoMdArrowRoundBack } from 'react-icons/io';

const HelpAndSupportPage = () => {
  // Function to handle form submission
  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., send request to backend)
    console.log('Form submitted!');
  };

  return (
    <div className="px-4 py-6 max-w-screen-sm mx-auto bg-gray-100 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <div onClick={()=>{}} className="cursor-pointer flex items-center text-black mb-2">
          <Link href={"/"}>
          <IoMdArrowRoundBack size={30} />
          </Link>
          <span className="ml-2">Back to Home</span>
        </div>
        <div className="text-2xl font-semibold">Room</div>
      </div>

      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900">Help and Support</h1>

      {/* Overview of Support Services */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Overview of Support Services</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
          Integer aliquam ex nec odio cursus, nec venenatis mauris vehicula.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h2>
        <p className="text-gray-700 leading-relaxed">
          For assistance, please contact our customer support team:
          <br />
          Phone: <a href="tel:+123456789" className="text-blue-500 hover:underline">+1 234 567 89</a>
          <br />
          Email: <a href="mailto:support@example.com" className="text-blue-500 hover:underline">support@example.com</a>
        </p>
      </section>

      {/* FAQs Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Frequently Asked Questions (FAQs)</h2>
        <div className="divide-y divide-gray-300">
          <div className="py-4">
            <h3 className="font-semibold text-gray-900">Question 1?</h3>
            <p className="text-gray-700 leading-relaxed">Answer to question 1.</p>
          </div>
          <div className="py-4">
            <h3 className="font-semibold text-gray-900">Question 2?</h3>
            <p className="text-gray-700 leading-relaxed">Answer to question 2.</p>
          </div>
          {/* Add more FAQ items as needed */}
        </div>
      </section>

      {/* Request Form */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Request Assistance</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800">Name</label>
            <input type="text" id="name" name="name" required className="border-gray-300 focus:ring-blue-500 text-black focus:border-blue-500 block w-full sm:text-sm border rounded-md px-3 py-2" />
          </div>
          <div>
            <label htmlFor="roomNumber" className="block text-sm font-medium text-gray-800">Room Number</label>
            <input type="text" id="roomNumber" name="roomNumber" required className="border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border rounded-md px-3 py-2" />
          </div>
          <div>
            <label htmlFor="requestDetails" className="block text-sm font-medium text-gray-800">Request Details</label>
            <textarea id="requestDetails" name="requestDetails"  required className="border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-black block w-full sm:text-sm border rounded-md px-3 py-2"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 inline-block">Submit Request</button>
        </form>
      </section>
    </div>
  );
};

export default HelpAndSupportPage;
