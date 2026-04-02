import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function GasCookerHero() {
  const slides = [
    {
      title: "Professional Gas Cooker Repair",
      desc: "Reliable and fast repair services for all types of gas cookers with expert technicians.",
      img: "https://i.pinimg.com/1200x/05/62/95/056295675e04d70284ff9e20f81274d9.jpg",
      stats: ["✔ 500+ Repairs", "✔ Certified Experts"],
    },
    {
      title: "Safe & Efficient Service",
      desc: "We ensure safety and performance with every repair using high-quality tools and genuine parts.",
      img: "https://i.pinimg.com/736x/e2/9d/25/e29d25437da02e393e0d005192fe295a.jpg",
      stats: ["✔ 100% Safety", "✔ Quality Parts"],
    },
    {
      title: "24/7 Emergency Support",
      desc: "Available anytime to fix your gas cooker issues quickly with reliable doorstep service.",
      img: "https://i.pinimg.com/1200x/4c/78/c9/4c78c9f4968d84e2dbce456834c84f53.jpg",
      stats: ["✔ 24/7 Available", "✔ Fast Response"],
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[90vh] md:min-h-screen overflow-hidden">

      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.img}
            alt="slide"
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#142A51]/85 z-10"></div>

      {/* CONTENT */}
      <div className="relative z-20 flex items-center justify-center px-4 sm:px-6 md:px-12 py-16 md:py-0">

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center text-center md:text-left">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">

            <span className="inline-block bg-[#FFBB00]/20 text-[#FFBB00] px-4 py-1 rounded-full text-xs sm:text-sm mb-4">
              Trusted Service
            </span>

            <h1 className="text-2xl text-white sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {slides[current].title}
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0">
              {slides[current].desc}
            </p>

            {/* STATS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-5 md:mt-6 text-xs sm:text-sm text-gray-200">
              {slides[current].stats.map((item, i) => (
                <span
                  key={i}
                  className="bg-white/10 px-3 py-2 sm:px-4 rounded-lg">
                  {item}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <button className="mt-6 md:mt-8 cursor-pointer bg-[#FFBB00] text-[#142A51] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:scale-105 transition">
              Explore Service
            </button>
          </div>

          {/* RIGHT CARD */}
          <div
            className="flex justify-center md:justify-end"
            data-aos="fade-left"
          >
            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/20 max-w-xs sm:max-w-sm text-center">

              <h3 className="text-[#FFBB00] font-semibold text-base sm:text-lg mb-2">
                Why Choose Us?
              </h3>

              <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                Professional repair services with guaranteed quality,
                affordable pricing, and quick response time.
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition ${
              current === index
                ? "bg-[#FFBB00] scale-125"
                : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
}

export default GasCookerHero;