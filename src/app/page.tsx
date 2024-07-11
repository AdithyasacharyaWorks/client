import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { BsHouseDoorFill, BsCardChecklist, BsPeopleFill, BsCreditCard } from 'react-icons/bs'; // Example icons, import the specific icons you need

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Hotel Management App</title>
        <meta
          name="description"
          content="Welcome to our hotel management app."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to Our Hotel Management App
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Your one-stop solution for managing rooms, ordering food, and more!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/roomDetail">
            <span className="block bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition duration-300">
              <span className="flex items-center justify-center text-4xl text-blue-500 mb-2">
                <BsHouseDoorFill />
              </span>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Room Details
              </h2>
              <p className="text-gray-600">
                View and manage room details. You can change the departure time
                here.
              </p>
            </span>
          </Link>

          <Link href="/orderFood">
            <span className="block bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition duration-300">
              <span className="flex items-center justify-center text-4xl text-blue-500 mb-2">
                <BsCardChecklist />
              </span>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Order Food
              </h2>
              <p className="text-gray-600">
                Explore our delicious food options and place an order.
              </p>
            </span>
          </Link>

          <Link href="/helpSupport">
            <span className="block bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition duration-300">
              <span className="flex items-center justify-center text-4xl text-blue-500 mb-2">
                <BsPeopleFill />
              </span>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Help and Support
              </h2>
              <p className="text-gray-600">
                Need assistance? Get help from our support team.
              </p>
            </span>
          </Link>
          
          <Link href="/checkout">
            <span className="block bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition duration-300">
              <span className="flex items-center justify-center text-4xl text-blue-500 mb-2">
                <BsCreditCard />
              </span>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Checkout
              </h2>
              <p className="text-gray-600">
                Confirm your booking and manage payments.
              </p>
            </span>
          </Link>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Featured Services
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Express checkout for a hassle-free departure.</li>
            <li>24/7 room service for your convenience.</li>
            <li>Complimentary Wi-Fi for all guests.</li>
          </ul>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Hotel Management App. All rights reserved.</p>
      </footer>
    </div>
  );
}
