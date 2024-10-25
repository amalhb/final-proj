import React, { useEffect } from 'react';
import localImage from '../../../Images/plate4.png'; 
import './hero.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-between bg-cover bg-center" style={{ backgroundImage: `url('https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div data-aos="fade-right" className="relative z-10 text-white text-left pl-12">
        <h1 className="text-5xl font-bold mb-4 animate-slideInLeft">Enjoy Our Delicious Meals</h1>
        <p className="text-lg mb-8 animate-slideInUp">Discover the magic behind every meal. Fresh, flavorful, and prepared with care, <br /> our dishes are designed to wow your senses.</p>
        <a href="#menu" className="px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-700 transition duration-300 bounce-button">
          Get Started
        </a>
      </div>

      <div className="relative z-10 pr-12">
        <img src={localImage} alt="Rotating Dish" className="rotating-image w-70 h-70 rounded-full object-cover" />
      </div>
    </div>
  );
}

export default Hero;
