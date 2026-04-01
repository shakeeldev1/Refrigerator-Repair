import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TrustedDishWasher() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full bg-[#142A51] py-28 px-4 md:px-10 overflow-hidden">

      <div className="max-w-6xl mx-auto relative">

        {/* GLOW BACKGROUND */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#FFBB00]/10 blur-3xl rounded-full"></div>

        {/* MAIN CARD */}
        <div
          className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 relative z-10"
          data-aos="fade-up"
        >

          {/* LEFT CONTENT */}
          <div className="flex-1 text-center md:text-left">

            {/* SMALL BADGE */}
            <span className="inline-block bg-[#FFBB00]/20 text-[#142A51] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Trusted Service
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-[#142A51] mb-5 leading-tight">
              Reliable & Trusted Dishwasher Experts
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5 text-base md:text-lg">
              We provide top-quality dishwasher repair services with a focus on
              reliability, speed, and customer satisfaction. Our skilled
              technicians ensure every appliance is repaired with precision.
            </p>

            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              From quick fixes to complex repairs, we guarantee professional
              service that keeps your appliances running efficiently for the
              long term.
            </p>

          </div>

          {/* RIGHT IMAGE AREA */}
          <div
            className="flex-1 flex justify-center relative"
            data-aos="fade-left"
          >

            {/* MAIN IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
              alt="Dishwasher Repair"
              className="w-[260px] md:w-[360px] rounded-2xl shadow-xl object-cover"
            />

            {/* FLOATING SMALL IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Technician"
              className="w-[120px] md:w-[160px] rounded-xl shadow-lg object-cover absolute -bottom-6 -right-6 border-4 border-white"
            />

          </div>
        </div>

      </div>
    </div>
  );
}

export default TrustedDishWasher;