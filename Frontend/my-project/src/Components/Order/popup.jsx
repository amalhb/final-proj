import React from "react";
import { FaTrashAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Icons for actions

const ConfirmationPopup = ({ type, onConfirm, onCancel }) => {
  const isDelete = type === "delete";
  const message = isDelete
    ? "Are you sure you want to delete this dish?"
    : "Are you sure you want to confirm your order?";
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full text-center">
        <div className="flex justify-center mb-4 text-4xl text-[#FFA500]">
          {isDelete ? <FaTrashAlt /> : <FaCheckCircle />}
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{message}</h2>
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={onCancel}
            className="flex items-center gap-2 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
          >
            <FaTimesCircle className="text-red-500" /> Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex items-center gap-2 bg-[#FFA500] text-white py-2 px-4 rounded-lg hover:bg-orange-600"
          >
            {isDelete ? <FaTrashAlt /> : <FaCheckCircle />} {isDelete ? "Delete" : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
