import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function ElectricStoveExperties() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experties = [
    {
      title: "Advanced Diagnostics",
      desc: "We identify complex electrical issues with precision tools and deep expertise.",
    },
    {
      title: "Certified Technicians",
      desc: "Our professionals are trained to handle all electric stove brands and models.",
    },
    {
      title: "Quick Repair Time",
      desc: "Fast and efficient service to minimize downtime and inconvenience.",
    },
    {
      title: "Safety First Approach",
      desc: "We follow strict safety standards to ensure secure and reliable repairs.",
    },
  ];

  return (
    <div className="w-full bg-white py-24 px-4 md:px-10 overflow-hidden">

      {/* TOP HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold text-[#142A51] mb-4">
          Our Electric Stove Expertise
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          We deliver precision-driven repair solutions backed by experience,
          innovation, and a commitment to excellence.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right" className="space-y-6">

          <h3 className="text-2xl md:text-4xl font-bold text-[#142A51] leading-snug">
            Why Our Expertise Makes the Difference
          </h3>

          <p className="text-gray-600 leading-relaxed">
            With years of hands-on experience and modern diagnostic tools, we
            ensure every electric stove repair is done with precision and care.
            Our approach combines technical excellence with customer-first service.
          </p>

          {/* HIGHLIGHTS */}
          <div className="space-y-4">
            {[
              "✔ 100% Customer Satisfaction",
              "✔ Modern Tools & Equipment",
              "✔ Affordable & Transparent Pricing",
              "✔ Trusted by Hundreds of Clients",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-[#142A51] font-medium"
              >
                <span className="w-2 h-2 bg-[#FFBB00] rounded-full"></span>
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link to="/contact" className="mt-6 bg-[#142A51] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Get Services Now
          </Link>

        </div>

        {/* RIGHT FLOATING CARDS */}
        <div className="relative flex justify-center items-center" data-aos="fade-left">

          {/* BACK GLOW */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-[#FFBB00]/20 rounded-full blur-3xl"></div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">

            {experties.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className={`bg-[#f8f9fc] rounded-2xl shadow-xl p-6 transition transform hover:-translate-y-3 hover:shadow-2xl
                ${index % 2 === 0 ? "mt-6" : "mb-6"}`}
              >
                <h4 className="text-lg font-bold text-[#142A51] mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ElectricStoveExperties;