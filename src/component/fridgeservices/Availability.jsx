import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

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
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gray-50 overflow-hidden">
      
      {/* TOP HEADING */}
      <div
        className="text-center px-4 sm:px-6 mb-16 md:mb-20"
        data-aos="fade-up"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#142A51] mb-4">
          Our Availability
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          We are always ready to serve you with fast, reliable, and professional
          refrigerator repair services anytime, anywhere.
        </p>
      </div>

      {/* WRAPPER */}
      <div className="relative w-full">

        {/* FLOATING CARDS */}
        <div className="relative md:absolute md:-top-16 left-0 w-full px-4 sm:px-6 md:px-10 z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">

            {services.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="bg-white rounded-2xl shadow-lg md:shadow-xl p-6 sm:p-7 md:p-8 text-center transform hover:-translate-y-2 md:hover:-translate-y-4 transition duration-300 border-t-4 border-[#FFBB00] min-h-[160px] flex flex-col justify-center"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#142A51] mb-2 sm:mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* MAIN CARD */}
        <div
          className="bg-[#142A51] text-white w-full pt-20 sm:pt-24 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-16 shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="max-w-6xl mx-auto text-center md:text-left">
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-[#FFBB00]">
              Always Available For You
            </h2>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto md:mx-0">
              Our team is committed to providing 24/7 refrigerator repair
              services with quick response times and expert solutions. Whether
              it's a sudden breakdown or routine maintenance, we ensure your
              appliances stay in perfect working condition with minimal
              downtime.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link to='/contact' className="mt-6 sm:mt-8 bg-[#FFBB00] text-[#142A51] font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:scale-105 transition duration-300">
                Contact Us
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Availability;