import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

function CallButton() {
  const phoneNumber = "00971529820114";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-18 md:bottom-23 right-5 md:right-7 z-50 cursor-pointer">
      <button
        onClick={handleCall}
        className="bg-green-500  relative cursor-pointer hover:bg-green-600 text-white w-10 h-10 md:h-12 md:w-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 " 
      >
          {/* <span className="absolute w-full h-full rounded-full bg-green-400 opacity-70 animate-pulse"></span> */}
        <FaPhoneAlt className="text-xl" />
      </button>
    </div>
  );
}

export default CallButton;