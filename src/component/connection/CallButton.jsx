import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

function CallButton() {
  const phoneNumber = "00971529820114";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 cursor-pointer">
      <button
        onClick={handleCall}
        className="bg-green-500  cursor-pointer hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <FaPhoneAlt className="text-xl" />
      </button>
    </div>
  );
}

export default CallButton;