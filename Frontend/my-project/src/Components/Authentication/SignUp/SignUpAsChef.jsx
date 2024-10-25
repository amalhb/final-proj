import React from 'react';
import chefBg from '../../../Images/chef3.jpg'; // Import the background image
import { useNavigate } from 'react-router-dom';

function SignUpAsChef() {
  const navigate = useNavigate(); 

  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${chefBg})` }}
    >
      {/* Card container */}
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Sign Up as a Chef
        </h2>
        <form className="space-y-4">
          {/* Name Field with Icon */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <div className="flex items-center">
              <i className="fas fa-user text-gray-400 absolute left-3"></i>
              <input
                type="text"
                id="name"
                className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Email Field with Icon */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center">
              <i className="fas fa-envelope text-gray-400 absolute left-3"></i>
              <input
                type="email"
                id="email"
                className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Phone Field with Icon */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
              Phone
            </label>
            <div className="flex items-center">
              <i className="fas fa-phone-alt text-gray-400 absolute left-3"></i>
              <input
                type="tel"
                id="phone"
                className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Password Field with Icon */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center">
              <i className="fas fa-lock text-gray-400 absolute left-3"></i>
              <input
                type="password"
                id="password"
                className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Confirm Password Field with Icon */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <div className="flex items-center">
              <i className="fas fa-lock text-gray-400 absolute left-3"></i>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-between space-x-4">
            <button
              type="submit"
              className="w-full py-3 bg-orange-600 text-white font-semibold rounded-md shadow-md hover:bg-orange-700 transition duration-300"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => navigate('/')} // Redirect to home when clicked
              className="w-full py-3 bg-gray-600 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpAsChef;
