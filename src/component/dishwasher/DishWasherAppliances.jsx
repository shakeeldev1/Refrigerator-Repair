import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWater, FaTools, FaBolt, FaFan } from "react-icons/fa";

function DishWasherAppliances() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const appliances = [
    {
      icon: <FaWater />,
      title: "Water Pump",
      category: "Core",
      desc: "Ensures proper water circulation inside the dishwasher.",
    },
    {
      icon: <FaFan />,
      title: "Drying Fan",
      category: "Core",
      desc: "Helps in drying dishes efficiently after wash cycle.",
    },
    {
      icon: <FaBolt />,
      title: "Heating Element",
      category: "Electrical",
      desc: "Heats water to required temperature for cleaning.",
    },
    {
      icon: <FaTools />,
      title: "Control Panel",
      category: "Electrical",
      desc: "Manages and controls all dishwasher operations.",
    },
  ];

  const filteredData = appliances.filter((item) => {
    return (
      (filter === "All" || item.category === filter) &&
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="w-full py-20 bg-gray-100 px-4 md:px-10">

      {/* HEADING */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold text-[#142A51] mb-4">
          Dishwasher Appliances
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore the key components used in dishwashers that ensure smooth and efficient performance.
        </p>
      </div>

      {/* SEARCH + FILTER */}
      <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">

        {/* Search */}
        <input
          type="text"
          placeholder="Search appliances..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FFBB00]"
        />

        {/* Filters */}
        <div className="flex gap-3">
          {["All", "Core", "Electrical"].map((cat, i) => (
            <button
              key={i}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === cat
                  ? "bg-[#142A51] text-white"
                  : "bg-white text-[#142A51] border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {filteredData.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-3 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="text-3xl text-[#FFBB00] mb-4">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#142A51] mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default DishWasherAppliances;