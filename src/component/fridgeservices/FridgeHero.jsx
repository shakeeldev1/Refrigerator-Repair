import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function FridgeHero() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#142A51] text-white py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden flex items-center">

      {/* GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#FFC527] opacity-10 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12 w-full">

        {/* TEXT */}
        <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-right">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#FFC527]">
            Expert Fridge Repair Services
          </h1>

          <p className="text-gray-300 mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            We provide fast, reliable, and professional refrigerator repair services.
            Our expert technicians ensure your fridge is fixed efficiently, restoring
            cooling performance and extending appliance life.
          </p>

          {/* FEATURES */}
          <div className="mt-5 sm:mt-6 space-y-2 text-gray-300 text-xs sm:text-sm">
            <p>✔ Same Day Service</p>
            <p>✔ Certified Technicians</p>
            <p>✔ Affordable Pricing</p>
            <p>✔ 24/7 Availability</p>
          </div>

          {/* SINGLE BUTTON */}
          <div className="flex justify-center md:justify-start mt-6 sm:mt-8">
            <Link to="/contact" className="bg-[#FFC527] text-[#142A51] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-lg">
              Contact Us
            </Link>
          </div>

        </div>

        {/* IMAGE */}
        <div className="w-full md:w-1/2" data-aos="fade-left">

          <div className="relative max-w-md sm:max-w-lg md:max-w-full mx-auto">

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-[#FFC527]/10 blur-2xl rounded-2xl"></div>

            <img
              src="https://i.pinimg.com/736x/28/97/73/2897732b0e09a34ed7bd7fe2fa2d5b33.jpg"
              alt="Fridge Repair"
              className="relative w-full h-[220px] sm:h-[280px] md:h-[400px] object-cover rounded-2xl shadow-xl border border-[#FFC527]/20 hover:scale-[1.03] transition duration-300"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default FridgeHero;