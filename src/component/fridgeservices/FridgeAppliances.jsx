import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSnowflake, FaThermometerHalf, FaTools, FaFilter } from "react-icons/fa";

function FridgeAppliances() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const appliances = [
    { name: "Cooling System", category: "Cooling", desc: "Maintains optimal temperature.", icon: <FaSnowflake /> },
    { name: "Compressor", category: "Mechanical", desc: "Powers the cooling cycle.", icon: <FaTools /> },
    { name: "Thermostat", category: "Control", desc: "Controls internal temperature.", icon: <FaThermometerHalf /> },
    { name: "Evaporator Coil", category: "Cooling", desc: "Absorbs heat from inside.", icon: <FaSnowflake /> },
    { name: "Condenser Coil", category: "Cooling", desc: "Releases heat outside.", icon: <FaSnowflake /> },
    { name: "Door Seal", category: "Seal", desc: "Prevents cold air leakage.", icon: <FaTools /> },
    { name: "Fan Motor", category: "Mechanical", desc: "Circulates cold air.", icon: <FaTools /> },
    { name: "Defrost Heater", category: "Heating", desc: "Prevents ice buildup.", icon: <FaThermometerHalf /> },
    { name: "Water Dispenser", category: "Utility", desc: "Provides cold water.", icon: <FaTools /> },
    { name: "Ice Maker", category: "Utility", desc: "Automatically makes ice.", icon: <FaSnowflake /> },
    { name: "Control Board", category: "Electronics", desc: "Manages all functions.", icon: <FaTools /> },
    { name: "Light Bulb", category: "Utility", desc: "Illuminates fridge interior.", icon: <FaTools /> },
    { name: "Drain Pan", category: "Cooling", desc: "Collects condensation.", icon: <FaSnowflake /> },
    { name: "Air Duct", category: "Cooling", desc: "Distributes cold air evenly.", icon: <FaSnowflake /> },
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredData = appliances.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "All" || item.category === filter)
    );
  });

  return (
    <section className="w-full py-20 px-6  relative">

      {/* GLOW */}
      <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-[#FFC527] opacity-10 blur-[160px] rounded-full"></div>

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-10" data-aos="fade-up">

          <h2 className="text-4xl font-bold text-[#FFC527]">
            Fridge Appliances
          </h2>

          <p className="text-black mt-3 text-sm">
            Explore key components and understand how your fridge works.
          </p>

        </div>

        {/* SEARCH & FILTER */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-10">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search appliance..."
            className="w-full md:w-1/2 px-4 py-2 rounded-lg text-white bg-[#0f1f3d] border border-[#FFC527]/30 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* FILTER */}
          <select
            className="w-full md:w-1/4 px-4 py-2 rounded-lg bg-[#0f1f3d] text-white border border-[#FFC527]/30 focus:outline-none"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Cooling">Cooling</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Control">Control</option>
            <option value="Electronics">Electronics</option>
            <option value="Utility">Utility</option>
            <option value="Heating">Heating</option>
            <option value="Seal">Seal</option>
          </select>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredData.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-[#0f1f3d] p-5 rounded-xl border border-[#FFC527]/20 shadow-md  group"
            >
             {/* ICON */}
              <div className="text-[#FFC527] text-3xl mb-3 group-hover:scale-110 transition group-hover:hover:shadow-[#FFC527]/20 hover:-translate-y-1 transition duration-300 ">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-[#FFC527]">
                {item.name}
              </h3>

              {/* DESC */}
              <p className="text-gray-300 text-sm mt-2">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FridgeAppliances;