import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WashinMachineRepair() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-80px)] flex items-center px-4 md:px-12 py-16 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://i.pinimg.com/736x/e0/6c/93/e06c93e7ec8cc479e61114bab0c7778c.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#142A51]/85"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right" className="space-y-1">

          <span className="inline-block bg-[#FFBB00]/20 text-[#FFBB00] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">
            24/7 Fast & Reliable Service
          </span>

          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Expert{" "}
            <span className="text-[#FFBB00]">
              Washing Machine Repair
            </span>{" "}
            Services
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-xl">
            We provide high-quality washing machine repair with quick response
            time, skilled technicians, and guaranteed satisfaction. Keeping
            your appliances running smoothly is our priority.
          </p>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">

            <div
              className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 hover:bg-white/20 transition"
              data-aos="zoom-in"
            >
              <h3 className="text-[#FFBB00] font-semibold mb-2">
                ⚡ Fast Service
              </h3>
              <p className="text-sm text-gray-200">
                Quick response and same-day repair services at your doorstep.
              </p>
            </div>

            <div
              className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 hover:bg-white/20 transition"
              data-aos="zoom-in"
            >
              <h3 className="text-[#FFBB00] font-semibold mb-2">
                🔧 Expert Technicians
              </h3>
              <p className="text-sm text-gray-200">
                Highly trained professionals handling all brands and issues.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT CONTENT (IMAGE CARD STYLE) */}
        <div
          className="flex justify-center"
          data-aos="fade-left"
        >
          <div className="relative">

            {/* MAIN IMAGE CARD */}
            <img
              src="https://i.pinimg.com/736x/69/d3/75/69d375a46d1904cab326100d1b9278ce.jpg"
              alt="Washing Machine"
              className="w-[260px] md:w-[380px] rounded-2xl shadow-2xl border-2 border-[#FFBB00]"
            />

            {/* FLOATING SMALL CARD */}
            <div
              className="absolute -bottom-8 -right-6 bg-white text-[#142A51] p-4 rounded-xl shadow-xl w-[160px]"
              data-aos="zoom-in"
            >
              <p className="text-sm font-semibold text-[#142A51]">
                ⭐ 5-Star Service
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Trusted by 1000+ customers
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default WashinMachineRepair;