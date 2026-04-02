import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function GasStoveHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0B1C3D] text-white">

      {/* BACKGROUND GRADIENT SHAPE */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#142A51] via-[#0B1C3D] to-black z-0"></div>

      {/* GLOW EFFECT */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#FFBB00]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#FFBB00]/10 blur-3xl rounded-full"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div data-aos="fade-up">

          <span className="inline-block text-[#FFBB00] text-sm tracking-widest uppercase mb-3">
            Gas Stove Experts
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
            Modern & Reliable{" "}
            <span className="text-[#FFBB00]">
              Gas Stove Repair
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            Experience next-level repair services with expert technicians,
            advanced tools, and fast response time. We ensure your gas stove
            works perfectly without any risk or delay.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-4 mt-8">

            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
              <p className="text-[#FFBB00] font-bold text-lg">500+</p>
              <span className="text-xs text-gray-300">Repairs Done</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
              <p className="text-[#FFBB00] font-bold text-lg">24/7</p>
              <span className="text-xs text-gray-300">Support</span>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10">
              <p className="text-[#FFBB00] font-bold text-lg">100%</p>
              <span className="text-xs text-gray-300">Trusted</span>
            </div>

          </div>

          {/* BUTTON */}
          <button className="mt-8 bg-[#FFBB00] text-[#142A51] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg">
            Get Service Now
          </button>

        </div>

        {/* RIGHT SIDE VISUAL */}
        <div className="relative flex justify-center" data-aos="zoom-in">

          {/* GLASS CARD */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba"
              alt="Gas Stove"
              className="w-[260px] sm:w-[320px] md:w-[380px] rounded-2xl"
            />

            {/* FLOATING BADGE */}
            <div className="absolute -top-5 left-5 bg-[#FFBB00] text-[#142A51] px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
              ✔ Certified Repair
            </div>

            {/* FLOATING SMALL CARD */}
            <div className="absolute -bottom-6 right-5 bg-white text-[#142A51] px-4 py-3 rounded-xl shadow-lg text-xs sm:text-sm">
              🔥 Fast Service <br />
              <span className="text-gray-500 text-xs">Within 30 mins</span>
            </div>

          </div>

          {/* BACK SHADOW CARD */}
          <div className="absolute top-6 left-6 w-full h-full border border-[#FFBB00]/30 rounded-3xl -z-10"></div>

        </div>

      </div>

    </div>
  );
}

export default GasStoveHero;