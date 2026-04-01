import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FridgeHero() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="w-full bg-[#142A51] text-white py-20 px-6 relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#FFC527] opacity-10 blur-[160px] rounded-full"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* TEXT */}
        <div className="w-full md:w-1/2" data-aos="fade-right">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#FFC527]">
            Expert Fridge Repair Services
          </h1>

          <p className="text-gray-300 mt-5 text-sm md:text-base leading-relaxed">
            We provide fast, reliable, and professional refrigerator repair services.
            Our expert technicians ensure your fridge is fixed efficiently, restoring
            cooling performance and extending appliance life.
          </p>

          {/* FEATURES */}
          <div className="mt-6 space-y-2 text-gray-300 text-sm">
            <p>✔ Same Day Service</p>
            <p>✔ Certified Technicians</p>
            <p>✔ Affordable Pricing</p>
            <p>✔ 24/7 Availability</p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">

            <button className="bg-[#FFC527] text-[#142A51] px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition duration-300">
              Book Service
            </button>

            <button className="border border-[#FFC527] text-[#FFC527] px-6 py-2 rounded-lg font-semibold hover:bg-[#FFC527] hover:text-[#142A51] transition duration-300">
              Learn More
            </button>

          </div>

        </div>

        {/* IMAGE */}
        <div className="w-full md:w-1/2" data-aos="fade-left">

          <div className="relative">

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-[#FFC527]/10 blur-2xl rounded-2xl"></div>

            <img
              src="https://i.pinimg.com/736x/28/97/73/2897732b0e09a34ed7bd7fe2fa2d5b33.jpg"
              alt="Fridge Repair"
              className="relative w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-xl border border-[#FFC527]/20 hover:scale-[1.03] transition duration-300"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default FridgeHero;