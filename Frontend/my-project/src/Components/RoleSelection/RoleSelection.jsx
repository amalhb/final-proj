import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import chef from "../../Images/chef.jpg";
import client from "../../Images/client.jpg";
import delivery from "../../Images/delivery.jpg";
import "./roleselection.css";

function RoleSelection() {
  return (
    <div className="flex h-screen">
      {/* Client Section */}
      <div
        className="w-1/3 bg-cover bg-center flex justify-center items-center section hover:shadow-2xl"
        style={{ backgroundImage: `url(${client})` }}
      >
        <div className="text-center bg-white bg-opacity-70 p-6 rounded-lg shadow-lg animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-800">
            Sign Up as Client
          </h2>
          <p className="mt-4 text-gray-700">
            Join us as a customer and enjoy amazing meals!
          </p>
          <Link to="/SignUpAsClient">
            <button className="mt-6 px-6 py-2 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 hover:shadow-lg transition-all duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Chef Section */}
      <div
        className="w-1/3 bg-cover bg-center flex justify-center items-center section hover:shadow-2xl"
        style={{ backgroundImage: `url(${chef})` }}
      >
        <div className="text-center bg-white bg-opacity-70 p-6 rounded-lg shadow-lg animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-800">Sign Up as Chef</h2>
          <p className="mt-4 text-gray-700">
            Become a chef partner and cook delicious meals!
          </p>
          <Link to="/SignUpAsChef">
            <button className="mt-6 px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 hover:shadow-lg transition-all duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Delivery Boy Section */}
      <div
        className="w-1/3 bg-cover bg-center flex justify-center items-center section hover:shadow-2xl"
        style={{ backgroundImage: `url(${delivery})` }}
      >
        <div className="text-center bg-white bg-opacity-70 p-6 rounded-lg shadow-lg animate-fadeIn">
          <h2 className="text-3xl font-bold text-gray-800">
            Sign Up as Delivery Boy
          </h2>
          <p className="mt-4 text-gray-700">
            Deliver food and earn on your own schedule!
          </p>
          <Link to="/SignUpAsdeliveryBoy">
            <button className="mt-6 px-6 py-2 bg-orange-800 text-white font-semibold rounded-lg shadow-md hover:bg-orange-900 hover:shadow-lg transition-all duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;
