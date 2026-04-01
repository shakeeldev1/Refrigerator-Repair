import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WashingMachineAppliance() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  // 🔍 Search state
  const [search, setSearch] = useState("");

  // 🧩 Category filter
  const [filter, setFilter] = useState("All");

  const appliances = [
    {
      img: "https://i.pinimg.com/736x/60/33/44/6033449080253986c277702918718dd2.jpg",
      title: "Drum Motor",
      desc: "Ensures smooth rotation of the drum.",
      category: "Mechanical",
    },
    {
      img: "https://i.pinimg.com/1200x/05/6d/c1/056dc1e415bec1b09a7e31215421e5b5.jpg",
      title: "Water Pump",
      desc: "Efficient water drainage system.",
      category: "Mechanical",
    },
    {
      img: "https://i.pinimg.com/736x/30/06/9d/30069df43db096a5496bd1710a5b6a14.jpg",
      title: "Control Panel",
      desc: "User interface for all operations.",
      category: "Electronic",
    },
    {
      img: "https://i.pinimg.com/736x/fc/8e/6d/fc8e6d02b3a89a732cd1eadfb2596363.jpg",
      title: "Heating Element",
      desc: "Heats water for deep cleaning.",
      category: "Electronic",
    },
    {
      img: "https://i.pinimg.com/1200x/7a/ff/ac/7affacab0a6e27416bad5be07beaad80.jpg",
      title: "Inlet Valve",
      desc: "Controls water intake into machine.",
      category: "Mechanical",
    },
    {
      img: "https://i.pinimg.com/1200x/f5/37/6a/f5376ab2e2dff0816d929662ee0063c0.jpg",
      title: "Shock Absorber",
      desc: "Reduces vibration during spin.",
      category: "Mechanical",
    },
    {
      img: "https://i.pinimg.com/736x/07/98/83/079883631798304803e4dd8ecb5ba2d5.jpg",
      title: "Sensor System",
      desc: "Detects load and water levels.",
      category: "Electronic",
    },
    {
      img: "https://i.pinimg.com/1200x/a7/94/60/a794600d6b9639e699cc088ecaca2d58.jpg",
      title: "Drum Bearing",
      desc: "Supports drum rotation smoothly.",
      category: "Mechanical",
    },
  ];

  // 🔍 Filter + Search Logic
  const filteredData = appliances.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || item.category === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-full bg-gray-100 py-20 px-4 md:px-10">

      {/* HEADING */}
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold text-[#142A51] mb-4">
          Washing Machine Appliances
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore essential parts that make your washing machine powerful and efficient.
        </p>
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search appliance..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFBB00]"
        />

        {/* FILTER */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFBB00]"
        >
          <option value="All">All</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Electronic">Electronic</option>
        </select>

      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform group"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover transition duration-500 group-hover:scale-110"/>
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-[#142A51] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>

                <span className="inline-block mt-3 text-xs bg-gray-200 px-3 py-1 rounded-full">
                  {item.category}
                </span>

                <button className="mt-4 block mx-auto text-sm bg-[#FFBB00] text-[#142A51] px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No items found
          </p>
        )}

      </div>

    </div>
  );
}

export default WashingMachineAppliance;