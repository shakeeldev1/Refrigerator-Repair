import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ElectricStoveAppliaces() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const appliances = [
    {
      title: "Heating Coil",
      desc: "Generates heat efficiently for consistent cooking performance.",
      img: "https://i.pinimg.com/1200x/02/69/2b/02692b2effce0f63b1f63a66f7598528.jpg",
    },
    {
      title: "Temperature Sensor",
      desc: "Maintains accurate temperature control for safe cooking.",
      img: "https://i.pinimg.com/736x/44/1f/f8/441ff8b3cf5e28532e71d98160aceca5.jpg",
    },
    {
      title: "Control Panel",
      desc: "User-friendly interface to manage all stove functions.",
      img: "https://i.pinimg.com/736x/57/fa/c4/57fac4329c684286b3dd60b258035db7.jpg",
    },
    {
      title: "Electric Wiring",
      desc: "Ensures safe power flow throughout the appliance.",
      img: "https://i.pinimg.com/736x/48/ea/11/48ea1112d30523f70f19688bcbd3d668.jpg",
    },
    {
      title: "Thermostat",
      desc: "Regulates heat levels for precise cooking results.",
      img: "https://i.pinimg.com/1200x/c0/88/44/c08844226ef865017c64bc6566577303.jpg",
    },
    {
      title: "Safety Fuse",
      desc: "Protects the appliance from overheating or electrical faults.",
      img: "https://i.pinimg.com/736x/8c/ca/30/8cca30b93faa428a3f58192a6206a5b3.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev + 2 >= appliances.length ? 0 : prev + 2
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev + 2 >= appliances.length ? 0 : prev + 2
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev - 2 < 0 ? appliances.length - 2 : prev - 2
    );
  };

  return (
    <div className="w-full bg-white py-20 px-4 md:px-10">

      {/* HEADING */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold text-[#142A51] mb-4">
          Electric Stove Appliances
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the essential components that power modern electric stoves with precision and safety.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-7xl mx-auto overflow-hidden">

        {/* SLIDER TRACK */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 50}%)`,
          }}
        >
          {appliances.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 flex-shrink-0 px-3"
            >
              <div className="bg-[#142A51] rounded-3xl shadow-xl flex flex-col md:flex-row items-center p-6 md:p-8 h-full">

                {/* TEXT */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-[#FFBB00] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white text-sm md:text-base">
                    {item.desc}
                  </p>

                  <button className="mt-4 bg-[#FFBB00] text-[#142A51] px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
                    Learn More
                  </button>
                </div>

                {/* IMAGE */}
                <div className="flex-1 flex justify-center mt-4 md:mt-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[180px] md:w-[220px] rounded-xl shadow-md transition duration-500 hover:scale-105"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

   

      </div>
      

    </div>
  );
}

export default ElectricStoveAppliaces;