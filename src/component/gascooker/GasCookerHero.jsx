import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function GasCookerHero() {
  const slides = [
    {
      title: "Professional Gas Cooker Repair",
      desc: "Reliable and fast repair services for all types of gas cookers with expert technicians.",
      img: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
      stats: ["✔ 500+ Repairs", "✔ Certified Experts"],
    },
    {
      title: "Safe & Efficient Service",
      desc: "We ensure safety and performance with every repair using high-quality tools and genuine parts.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      stats: ["✔ 100% Safety", "✔ Quality Parts"],
    },
    {
      title: "24/7 Emergency Support",
      desc: "Available anytime to fix your gas cooker issues quickly with reliable doorstep service.",
      img: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
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
    <div className="relative w-full min-h-screen overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* BACKGROUND IMAGE */}
          <img
            src={slide.img}
            alt="slide"
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-[#142A51]/85"></div>

          {/* CONTENT */}
          <div className="relative h-full flex items-center px-4 md:px-12">

            <div className="max-w-7xl mx-auto w-full text-white grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              {/* LEFT TEXT */}
              <div data-aos="fade-right">

                <span className="inline-block bg-[#FFBB00]/20 text-[#FFBB00] px-4 py-1 rounded-full text-sm mb-4">
                  Trusted Service
                </span>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>

                <p className="text-gray-300 text-base md:text-lg max-w-xl">
                  {slide.desc}
                </p>

                {/* STATS */}
                <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-200">
                  {slide.stats.map((item, i) => (
                    <span key={i} className="bg-white/10 px-4 py-2 rounded-lg">
                      {item}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <button className="mt-8 bg-[#FFBB00] text-[#142A51] px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
                  Book Service
                </button>

              </div>

              {/* RIGHT GLASS CARD */}
              <div
                className="hidden md:flex justify-center"
                data-aos="fade-left"
              >
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 max-w-sm text-center">

                  <h3 className="text-[#FFBB00] font-semibold text-lg mb-2">
                    Why Choose Us?
                  </h3>

                  <p className="text-gray-200 text-sm">
                    Professional repair services with guaranteed quality,
                    affordable pricing, and quick response time.
                  </p>

                </div>
              </div>

            </div>

          </div>
        </div>
      ))}

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-[#FFBB00] scale-125" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
}

export default GasCookerHero;