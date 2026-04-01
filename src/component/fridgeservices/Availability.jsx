import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Availability() {
  const services = [
    {
      title: "24/7 Service",
      desc: "We are available anytime for emergency repairs.",
    },
    {
      title: "Fast Response",
      desc: "Quick arrival at your location within minutes.",
    },
    {
      title: "Expert Technicians",
      desc: "Skilled professionals with years of experience.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full py-24">

      {/* TOP HEADING */}
      <div
        className="text-center px-4 mb-20"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#142A51] mb-4">
          Our Availability
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are always ready to serve you with fast, reliable, and professional
          refrigerator repair services anytime, anywhere.
        </p>
      </div>

      {/* WRAPPER */}
      <div className="relative w-full">

        {/* FLOATING CARDS (ON TOP) */}
        <div className="absolute -top-12 left-0 w-full px-4 md:px-10 z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

            {services.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 200}
                className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:-translate-y-4 transition duration-300 border-t-4 border-[#FFBB00] min-h-[180px] flex flex-col justify-center"
              >
                <h3 className="text-xl font-bold text-[#142A51] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* MAIN LARGE CARD */}
        <div
          className="bg-[#142A51] text-white w-full pt-40 pb-20 px-6 md:px-16 rounded-none md:rounded-none shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="max-w-5xl mx-auto text-center md:text-left">
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#FFBB00]">
              Always Available For You
            </h2>

            <p className="text-gray-200 leading-relaxed text-base md:text-lg max-w-3xl">
              Our team is committed to providing 24/7 refrigerator repair
              services with quick response times and expert solutions. Whether
              it's a sudden breakdown or routine maintenance, we ensure your
              appliances stay in perfect working condition with minimal
              downtime.
            </p>

            <button className="mt-8 bg-[#FFBB00] text-[#142A51] font-semibold px-8 py-3 rounded-lg hover:scale-105 transition duration-300">
              Contact Us
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Availability;