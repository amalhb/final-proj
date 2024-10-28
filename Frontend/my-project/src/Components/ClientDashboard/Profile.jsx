import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhone, FaUserCircle } from 'react-icons/fa';

function Profile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    imageUrl: ''
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser({
        name: storedUser.name,
        email: storedUser.email,
        phone: storedUser.phone || 'Not provided',  
        // imageUrl: storedUser.imageUrl || avatar, 
      });
    }
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 transition-transform transform hover:scale-105 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Hello and welcome! 😊 We’re excited for you to join us!</h2>
      <div className="flex flex-col items-center mb-6">
        <img
          src={user.imageUrl}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-orange-500 mb-4 transition-transform duration-300 transform hover:scale-110"
        />
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-gray-800 text-center">
            <FaUserCircle className="inline mr-2 text-orange-500" />
            {user.name}
          </h3>
          <p className="text-gray-600 flex items-center">
            <FaEnvelope className="mr-2 text-orange-500" />
            {user.email}
          </p>
          <p className="text-gray-600 flex items-center">
            <FaPhone className="mr-2 text-orange-500" />
            {user.phone}
          </p>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => alert('Change Profile Image functionality to be implemented')}
          className="bg-orange-500 text-white py-2 px-6 rounded-md shadow hover:bg-orange-600 transition duration-300 transform hover:scale-105"
        >
          Change Image
        </button>
        <button
          onClick={() => alert('Change Profile Image functionality to be implemented')}
          className="bg-orange-500 text-white py-2 px-6 rounded-md shadow hover:bg-orange-600 transition duration-300 transform hover:scale-105"
        >
          Make an order
        </button>
      </div>
    </div>
  );
}

export default Profile;
