import React from 'react';
import loginBg from '../../../Images/tunisian.jpg'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      {/* Card container */}
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <form className="space-y-4">
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
                className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
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
                className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Buttons Container */}
          <div className="flex justify-between">
            {/* Submit Button */}
            <button
              type="submit"
              className="py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 transition duration-300 w-1/2 mr-1"
            >
              Login
            </button>
            {/* Redirect to Sign Up */}
            <button
              type="button"
              onClick={() => navigate('/')} // Redirect to signup page when clicked
              className="py-3 bg-gray-600 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 transition duration-300 w-1/2 ml-1"
            >
              Cancel
            </button>
          </div>
          
          {/* Question about account */}
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{' '}
            <span 
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
