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
    <div className="w-full bg-[#142A51] py-24 px-4 md:px-10">

      <div className="max-w-6xl mx-auto relative">

        {/* WHITE CARD */}
        <div
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 relative z-10"
          data-aos="fade-up"
        >

          {/* LEFT CONTENT */}
          <div className="flex-1 text-center md:text-left">

            <h2 className="text-3xl md:text-5xl font-bold text-[#142A51] mb-4">
              Trusted Dishwasher Repair Experts
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              We are known for delivering reliable and high-quality dishwasher
              repair services. Our experienced technicians ensure every repair
              is done with precision and care, giving you peace of mind and
              long-lasting results.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From minor issues to major repairs, we handle everything with
              professionalism and efficiency, making us a trusted choice for
              hundreds of satisfied customers.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div
            className="flex-1 flex justify-center relative"
            data-aos="fade-left"
          >

            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
              alt="Dishwasher Repair"
              className="w-[260px] md:w-[380px] rounded-2xl shadow-2xl border-4 border-[#FFBB00] relative z-20"
            />

          </div>
        </div>

        {/* FLOATING IMAGE (TOP OVERLAP) */}
        <div
          className="absolute -top-16 right-6 md:right-16 z-20"
          data-aos="zoom-in"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Technician"
            className="w-[140px] md:w-[200px] rounded-xl shadow-xl border-4 border-[#FFBB00]"
          />
        </div>

      </div>
    </div>
  );
}

export default TrustedDishWasher;