import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function DishwasherrepairHero() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#142A51] text-white flex items-center px-4 md:px-12 py-16 overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">

          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-6">
            Professional{" "}
            <span className="text-[#FFBB00]">
              Dishwasher Repair
            </span>{" "}
            Services
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
            Fast, reliable, and affordable dishwasher repair services at your
            doorstep. Our expert technicians are available 24/7 to fix all types
            of issues and ensure your appliances run smoothly with zero hassle.
          </p>

        </div>

        {/* RIGHT IMAGES */}
        <div
          className="relative flex justify-center items-center"
          data-aos="fade-left"
        >

          {/* SOFT BACKGROUND GLOW */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-[#FFBB00]/20 rounded-full blur-3xl"></div>

          {/* BACK IMAGE (SUBTLE OFFSET) */}
          <img
            src="https://i.pinimg.com/1200x/c6/b9/74/c6b974c18248d6c89fc02d575902fad5.jpg"
            alt="Repair Work"
            className="w-[220px] md:w-[300px] rounded-xl shadow-xl border-2 border-[#FFBB00]/70 absolute -left-6 -top-6 md:-left-10 md:-top-10 z-10"
          />

          {/* FRONT IMAGE */}
          <img
            src="https://i.pinimg.com/1200x/12/f7/44/12f7442139a9b81a35274b5b61c1ad6f.jpg"
            alt="Dishwasher"
            className="w-[260px] md:w-[360px] h-[300px] md:h-[400px] rounded-xl shadow-2xl border-2 border-[#FFBB00] relative z-20"
          />

        </div>

      </div>
    </div>
  );
}

export default DishwasherrepairHero;