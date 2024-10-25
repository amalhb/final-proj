import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUtensils, faHamburger } from '@fortawesome/free-solid-svg-icons';
import './foodmenu.css';
import pancakeImage from '../../../Images/pancakes.avif';
import omelettes from "../../../Images/omelette-piquante.jpeg"
import FruitSalad from "../../../Images/fruit.jpg"
import Smoothies from "../../../Images/Smoothies.avif"
import Couscous from "../../../Images/couscous.jpg"
import djej from "../../../Images/djej.jpg"
import pasta from "../../../Images/ma9rouna.png"
import sandwich from "../../../Images/sandwich.jpg" 
import hout from "../../../Images/7OUT.jpg"
import burger from "../../../Images/burger.jpg"
import chakchouka from "../../../Images/chakchouka.webp"
import steak from "../../../Images/STEAK.jpg"

function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState('breakfast');

  const menuItems = {
    breakfast: [
      { id: 1, name: 'Pancakes', description: 'Fluffy pancakes served with syrup.', price: '7 DT', img: pancakeImage  },
      { id: 2, name: 'Omelettes', description: 'Egg omelette with veggies.', price: '3 DT', img: omelettes },
      { id: 3, name: 'Fruit Salad', description: 'A mix of fresh fruits.', price: '4 DT', img: FruitSalad },
      { id: 4, name: 'Smoothies', description: 'Refreshing fruit smoothies.', price: '6 DT', img: Smoothies }
    ],
    lunch: [
      { id: 1, name: 'Grilled Chicken', description: 'Juicy grilled chicken with sides.', price: '15 DT', img: djej },
      { id: 2, name: 'Couscous tunisien', description: 'Classic Caesar salad with dressing.', price: '$10 DT', img: Couscous },
      { id: 3, name: 'Pasta', description: 'Vegetarian pasta with seasonal veggies.', price: '10 DT', img: pasta},
      { id: 4, name: 'Sandwiches', description: 'Delicious sandwiches with various fillings.', price: '7 DT', img: sandwich  }
    ],
    dinner: [
      { id: 1, name: 'Steak', description: 'Grilled steak with garlic butter.', price: '25 DT', img: steak },
      { id: 2, name: 'Hout Mechwi', description: 'Pan-seared salmon with lemon.', price: '15 DT', img: hout },
      { id: 3, name: 'Chakchouka Nebliya', description: 'Stir-fried vegetables with sauce.', price: '9 DT', img: chakchouka },
      { id: 4, name: 'Cheeseburgers', description: 'Juicy cheeseburgers with toppings.', price: '9.5 DT', img: burger }
    ]
  };

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-8 animated-heading text-orange-600 times-new-roman">
          Food Menu
        </h2>
        <p className="text-lg mt-4 text-gray-700 animated-paragraph font-light">
          Discover our delightful food options curated just for you.
        </p>
      </div>

      <div className="flex justify-center space-x-16 mb-8">
        {/* Breakfast Section */}
        <button
          onClick={() => handleCategoryClick('breakfast')}
          className={`flex flex-col items-center hover-animation p-4 rounded-lg focus:outline-none ${selectedCategory === 'breakfast' ? 'bg-orange-100' : ''}`}
        >
          <FontAwesomeIcon icon={faCoffee} className="text-6xl text-teal-500 mb-2 bounce-icon" />
          <p className="text-lg font-semibold">Popular Breakfast</p>
        </button>

        {/* Lunch Section */}
        <button
          onClick={() => handleCategoryClick('lunch')}
          className={`flex flex-col items-center hover-animation p-4 rounded-lg focus:outline-none ${selectedCategory === 'lunch' ? 'bg-orange-100' : ''}`}
        >
          <FontAwesomeIcon icon={faHamburger} className="text-6xl text-orange-500 mb-2 bounce-icon" />
          <p className="text-lg font-semibold">Special Lunch</p>
        </button>

        {/* Dinner Section */}
        <button
          onClick={() => handleCategoryClick('dinner')}
          className={`flex flex-col items-center hover-animation p-4 rounded-lg focus:outline-none ${selectedCategory === 'dinner' ? 'bg-orange-100' : ''}`}
        >
          <FontAwesomeIcon icon={faUtensils} className="text-6xl text-green-500 mb-2 bounce-icon" />
          <p className="text-lg font-semibold">Lovely Dinner</p>
        </button>
      </div>

      {/* Display Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
        {menuItems[selectedCategory].map(item => (
          <div key={item.id} className="card bg-white rounded-lg shadow-lg p-6 text-center">
            <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-lg font-bold text-teal-500 mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodMenu;
