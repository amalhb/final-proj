import React, { useState } from "react";
import ConfirmationPopup from "./popup";

const Order = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      imageUrl:
        "https://th.bing.com/th/id/OIP.mhgoI2abIOjjqmVm7ka3vgHaFj?rs=1&pid=ImgDetMain",
      title: "Baklawa",
      price: "85 DT/kg",
    },
    {
      id: 2,
      imageUrl:
        "https://th.bing.com/th/id/R.5c44df9c0b7ba08a1cb1c526a021c0bc?rik=E1PeEbKo%2bD%2bklA&pid=ImgRaw&r=0&sres=1&sresct=1",
      title: "Oija Mergez",
      price: "14 DT",
    },
    {
      id: 3,
      imageUrl:
        "https://th.bing.com/th/id/R.affc54a3d1701f6242c586e110774cfc?rik=Iu3RzQ0eCgTGXg&riu=http%3a%2f%2fcdn.cook.stbm.it%2fthumbnails%2fricette%2f9%2f9773%2fhd750x421.jpg&ehk=qKZh3YyQYCnvw1HVtUHWPpfuII80nFFF8g%2fBKjdX9ag%3d&risl=&pid=ImgRaw&r=0",
      title: "Brike",
      price: "18 DT",
    },
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("");
  const [orderToActOn, setOrderToActOn] = useState(null);

  const handleDeleteClick = (orderId) => {
    setOrderToActOn(orderId);
    setPopupType("delete");
    setShowPopup(true);
  };

  const handleConfirmClick = () => {
    setPopupType("confirm");
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    setOrders(orders.filter((order) => order.id !== orderToActOn));
    setShowPopup(false);
    setOrderToActOn(null);
  };

  const handleConfirmOrder = () => {
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
    setOrderToActOn(null);
  };

  return (
    <div className="bg-gray-50 py-10 px-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">My Orders</h2>
      <ul className="space-y-8 max-w-3xl mx-auto">
        {orders.map((order) => (
          <li key={order.id} className="flex items-center bg-white p-6 rounded-lg shadow-lg">
            <img
              src={order.imageUrl}
              alt={order.title}
              className="w-32 h-32 object-cover rounded-lg mr-6"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-800">{order.title}</h3>
              <p className="text-lg font-bold text-teal-500 mt-2">{order.price}</p>
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => handleDeleteClick(order.id)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300"
                >
                  Remove Dish
                </button>
                <button
                  onClick={handleConfirmClick}
                  className="bg-[#FFA500] text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600"
                >
                  Confirm it
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {showPopup && (
        <ConfirmationPopup
          type={popupType}
          onConfirm={popupType === "delete" ? handleConfirmDelete : handleConfirmOrder}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Order;
