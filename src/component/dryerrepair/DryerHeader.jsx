import React from 'react';

export default function DryerHeader() {
  const phoneNumber = "+971529820114";

  const handleWhatsapp = () => {
    const message = encodeURIComponent("Hi, I need repair service for my dryer. Can you help?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section 
      className="relative min-h-[70vh] w-full flex items-center justify-center text-center px-5 py-24 sm:py-32 bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(20, 43, 82, 0.88), rgba(20, 43, 82, 0.88)), url('https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop')` 
      }}
    >
      <div className="max-w-5xl mx-auto z-10">
        {/* Animated Tagline */}
        <p className="text-[#FFBB00] font-semibold tracking-[0.25em] mb-4 text-sm sm:text-base uppercase animate-fade-in">
          Fast & Reliable Service
        </p>
        
        {/* Main Heading */}
        <h1 className="text-white text-2xl md:text-4xl  font-bold mb-6 leading-tight uppercase">
          Same Day <span className="text-[#FFBB00]">Dryer Repair</span> {''} 
          Specialists
        </h1>

        {/* Subtext */}
        <p className="text-gray-200 text-lg sm:text-xl mb-10 max-w-2xl mx-auto ">
          Expert diagnostics and high-quality repairs for all dryer brands. 
          We ensure your laundry routine is back to normal in no time.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            onClick={() => window.location.href = `tel:${phoneNumber}`}
            className="bg-[#FFBB00] cursor-pointer text-[#142B52] px-4 md:px-8 py-3 md:py-4 rounded-md font-semibold text-base transition-all duration-300 hover:opacity-90 hover:-translate-y-1 shadow-[0_4px_15px_rgba(255,187,0,0.3)]"
          >
            CALL NOW
          </button>
          
          <button 
            onClick={handleWhatsapp}
            className="bg-transparent cursor-pointer text-white border-1 border-white px-4 md:px-8 py-3 md:py-4 rounded-md font-semibold text-base transition-all duration-300 hover:bg-white hover:text-[#142B52] hover:-translate-y-1"
          >
            WHATSAPP US
          </button>
        </div>
      </div>
    </section>
  );
}