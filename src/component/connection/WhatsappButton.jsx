import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  const phoneNumber = "+971529820114";

  const handleWhatsapp = () => {
    const message = encodeURIComponent("Hello, I want to contact you.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <button
        onClick={handleWhatsapp}
        className="relative flex items-center cursor-pointer justify-center bg-green-500 hover:bg-green-600 text-white 
                   w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-xl 
                   transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulse Ring */}
        <span className="absolute w-full h-full rounded-full bg-green-400 opacity-70 animate-ping"></span>

        {/* WhatsApp Icon */}
        <FaWhatsapp className="relative z-10 text-2xl sm:text-3xl" />
      </button>
    </div>
  );
}

export default WhatsappButton;