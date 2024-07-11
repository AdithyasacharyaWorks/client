'use client'
import { useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { BsCalendar, BsFillPersonFill, BsCreditCard } from 'react-icons/bs'; // Importing additional icon for today's date
import { useState } from 'react';

// Define RoomData type
type RoomData = {
  roomNumber: number;
  date: string;
  type: string;
  capacity: number;
  status: 'occupied' | 'vacant';
  guestName?: string;
  guestContact?: string;
  arrivalDate?: string;
  departureDate?: string;
};

// Define RoomDetail component
const RoomDetail = () => {
  const router = useRouter();

  // Example room data (replace with actual data fetching or static data)
  const initialRoomData: RoomData = {
    roomNumber: 101,
    date: '2024-07-15',
    type: 'Deluxe',
    capacity: 2,
    status: 'occupied',
    guestName: 'John Doe',
    guestContact: '+1234567890',
    arrivalDate: '2024-07-14',
    departureDate: '2024-07-16',
  };

  // State to manage room data and departure date editing
  const [roomData, setRoomData] = useState<RoomData>(initialRoomData);
  const [isEditingDeparture, setIsEditingDeparture] = useState(false);

  // Function to handle navigation back to previous page
  const handleRouteBack = () => {
    router.push('/');
  };

  // Function to toggle departure date editing
  const toggleEditDeparture = () => {
    setIsEditingDeparture(!isEditingDeparture);
  };

  // Function to handle departure date change
  const handleDepartureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomData({
      ...roomData,
      departureDate: e.target.value,
    });
  };

  // Function to save departure date
  const saveDepartureDate = () => {
    // Add logic here to save departure date (e.g., API call)
    console.log('Saving departure date:', roomData.departureDate);
    setIsEditingDeparture(false); // Hide edit mode after saving
  };

  // Placeholder for room services and amenities
  const roomAmenities = ['Free Wi-Fi', 'TV', 'Mini-bar'];

  return (
    <div className="px-6 py-4 bg-gray-100 text-black min-h-screen">
      {/* Header with back button and room number */}
      <div className="flex items-center justify-between">
        <div onClick={handleRouteBack} className="cursor-pointer flex items-center text-primary">
          <IoMdArrowRoundBack size={30} />
          <span className="ml-2">Back to Home</span>
        </div>
        <div className="text-2xl font-semibold">Room {roomData.roomNumber}</div>
      </div>

      {/* Date chip or information */}
      <div className="mt-4 flex items-center">
        <span className="bg-primary text-black px-3 py-1 rounded flex items-center">
          <BsCalendar size={20} />
          <span>{roomData.date}</span>
        </span>
      </div>

      {/* Main content section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Room details section */}
        <div className="block bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition duration-300">
          <h2 className="text-lg font-semibold text-primary mb-2">Room Details</h2>
          <span className="inline-block bg-blue-500 rounded-full p-2 text-white mb-3">
            <BsCalendar size={24} />
          </span>
          <div>
            <p>Type: {roomData.type}</p>
            <p>Capacity: {roomData.capacity}</p>
          </div>
          {/* Add more details as needed */}
        </div>

        {/* Guest information section if occupied */}
        {roomData.status === 'occupied' && (
          <div className="block bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition duration-300">
            <h2 className="text-lg font-semibold text-primary mb-2">Guest Information</h2>
            <span className="inline-block bg-blue-500 rounded-full p-2 text-white mb-3">
              <BsFillPersonFill size={24} />
            </span>
            <div>
              <p>Name: {roomData.guestName}</p>
              <p>Contact: {roomData.guestContact}</p>
              <p>Arrival Date: {roomData.arrivalDate}</p>
              <p>Departure Date: 
                {isEditingDeparture ? (
                  <>
                    <input
                      type="date"
                      value={roomData.departureDate}
                      onChange={handleDepartureChange}
                      className="border border-gray-300 rounded-md px-3 py-2 ml-2"
                    />
                    <div className='flex gap-5 items-center justify-center'>
                      <button onClick={saveDepartureDate}
                        className="bg-black mt-5 cursor-pointer text-white font-bold py-2 px-4 rounded sm:py-3 sm:px-6"
                      >
                        Save
                      </button>
                      <button onClick={()=>{}}
                        className="bg-black mt-5 cursor-pointer text-white font-bold py-2 px-4 rounded sm:py-3 sm:px-6"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <span className="text-primary cursor-pointer" onClick={toggleEditDeparture}>
                    {roomData.departureDate}
                    <span className="ml-1 text-sm text-gray-500">(Click to edit)</span>
                  </span>
                )}
              </p>
            </div>
            {/* Add payment status and any pending amounts */}
          </div>
        )}

        {/* Room services and amenities section */}
        <div className="block bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition duration-300">
          <h2 className="text-lg font-semibold text-primary mb-2">Room Services & Amenities</h2>
          <span className="inline-block bg-blue-500 rounded-full p-2 text-white mb-3">
            <BsCreditCard size={24} />
          </span>
          <ul className="list-disc list-inside text-primary">
            {roomAmenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          {/* Offer options to order additional services */}
          <button 
            className="bg-black mt-5 cursor-pointer text-white font-bold py-2 px-4 rounded sm:py-3 sm:px-6"
          >
            Order Room Service
          </button>
        </div>

        {/* Navigation or related links section */}
        <div className="flex justify-between">
          <button
            onClick={() => router.push('/orderFood')}
            className="bg-black cursor-pointer text-white font-bold py-2 px-4 rounded sm:py-3 sm:px-6"
          >
            Order Food
          </button>
          <button
            onClick={() => router.push('/helpSupport')}
            className="bg-black cursor-pointer text-white font-bold py-2 px-4 rounded sm:py-3 sm:px-6"
          >
            Help & Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
