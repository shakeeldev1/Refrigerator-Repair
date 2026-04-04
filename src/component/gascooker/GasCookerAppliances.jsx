import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function GasCookerAppliances() {
  const appliances = [
    {
      title: "Burner",
      desc: "Provides consistent flame for efficient cooking performance.",
      img: "https://i.pinimg.com/1200x/a1/b6/f8/a1b6f80669efd267e5152bfaeb8aeb56.jpg",
    },
    {
      title: "Gas Valve",
      desc: "Controls gas flow safely and accurately.",
      img: "https://i.pinimg.com/736x/51/b6/39/51b639715b47d596379e8dc34bcf9bd9.jpg",
    },
    {
      title: "Ignition System",
      desc: "Ensures quick and safe burner ignition.",
      img: "https://i.pinimg.com/736x/10/60/f6/1060f6c1f738c68fcb2fdf8d2020dbbe.jpg",
    },
    {
      title: "Control Knobs",
      desc: "Adjust flame intensity easily and smoothly.",
      img: "https://i.pinimg.com/1200x/2b/54/d6/2b54d66f4424af6990217263bdb10c25.jpg",
    },
    {
      title: "Gas Pipe",
      desc: "Delivers gas securely to burners.",
      img: "https://i.pinimg.com/1200x/12/e9/b6/12e9b6fff49d75267131d12fddc7b8d7.jpg",
    },
    {
      title: "Safety Sensor",
      desc: "Automatically cuts gas in case of leakage.",
      img: "https://i.pinimg.com/736x/f6/15/90/f61590e2a6c56aac3dbf36093f39b4ae.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % appliances.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white py-20 px-4 md:px-10 overflow-hidden">

      {/* HEADING */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold text-[#142A51] mb-4">
          Gas Cooker Appliances
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover essential components of gas cookers that ensure safety, efficiency, and durability.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative h-[300px] md:h-[450px]" data-aos="fade-right">
          {appliances.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={item.title}
              className={`absolute w-full h-full object-cover rounded-2xl shadow-xl transition-all duration-1000 ${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            />
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center" data-aos="fade-left">

          <div className="relative h-[220px] md:h-[260px]">

            {appliances.map((item, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-700 ${
                  index === current
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <h3 className="text-2xl md:text-4xl font-bold text-[#142A51] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

          {/* CONTACT BUTTON (PROPERLY BELOW CONTENT) */}
          <div className="-mt-4">
            <Link
              to="/contact"
              className="inline-block bg-[#FFBB00] text-[#142A51] px-6 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-md"
            >
              Contact Us
            </Link>
          </div>

        </div>

      </div>

      {/* DOT NAVIGATION */}
      <div className="flex justify-center mt-10 gap-3">
        {appliances.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index
                ? "bg-[#FFBB00] scale-125"
                : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
}

export default GasCookerAppliances;