import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faConciergeBell, faShoppingCart, faHeadset } from '@fortawesome/free-solid-svg-icons';
import './services.css';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current);
    };
  }, []);

  return (
    <div className="py-16 bg-gray-100" ref={servicesRef}>
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold text-orange-500 ${isVisible ? 'animate-slide-in' : ''}`}>
          Our Services
        </h2>
        <p className={`text-lg mt-4 text-gray-700 font-light ${isVisible ? 'animate-fade-in' : ''}`}>
          We provide the best services to enhance your dining experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
        {/* Master Chefs Card */}
        <div className="service-card hover-animation bg-gradient-to-r from-white to-gray-50 shadow-lg hover:shadow-xl rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105">
          <FontAwesomeIcon icon={faUtensils} className="text-5xl text-teal-500 mb-4 bounce-icon" />
          <h3 className="text-2xl font-semibold mb-2">Master Chefs</h3>
          <p className="text-gray-600">Our master chefs prepare delicious dishes with a passion for perfection.</p>
        </div>

        {/* Quality Food Card */}
        <div className="service-card hover-animation bg-gradient-to-r from-white to-gray-50 shadow-lg hover:shadow-xl rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-115">
          <FontAwesomeIcon icon={faConciergeBell} className="text-5xl text-red-500 mb-4 bounce-icon" />
          <h3 className="text-2xl font-semibold mb-2">Quality Food</h3>
          <p className="text-gray-600">We use the finest ingredients to ensure every meal is of the highest quality.</p>
        </div>

        {/* Online Order Card */}
        <div className="service-card hover-animation bg-gradient-to-r from-white to-gray-50 shadow-lg hover:shadow-xl rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105">
          <FontAwesomeIcon icon={faShoppingCart} className="text-5xl text-green-500 mb-4 bounce-icon" />
          <h3 className="text-2xl font-semibold mb-2">Online Order</h3>
          <p className="text-gray-600">Order your favorite meals online with just a few clicks and get them delivered fast.</p>
        </div>

        {/* 24/7 Client Service Card */}
        <div className="service-card hover-animation bg-gradient-to-r from-white to-gray-50 shadow-lg hover:shadow-xl rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-110">
          <FontAwesomeIcon icon={faHeadset} className="text-5xl text-purple-500 mb-4 bounce-icon" />
          <h3 className="text-2xl font-semibold mb-2">24/7 Service</h3>
          <p className="text-gray-600">Our customer service is available 24/7 to assist you with any inquiries.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
