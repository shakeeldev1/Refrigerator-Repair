import React from 'react';
import { FaFireAlt, FaSyncAlt, FaVolumeUp, FaClock } from 'react-icons/fa';

const dryerServices = [
  {
    id: "01",
    title: "Dryer Not Heating",
    desc: "We fix faulty heating elements, thermal fuses, and thermostats to get your dryer hot again.",
    icon: <FaFireAlt />
  },
  {
    id: "02",
    title: "Drum Not Spinning",
    desc: "Broken belts or worn-out rollers? We replace them on-site to restore drum rotation.",
    icon: <FaSyncAlt />
  },
  {
    id: "03",
    title: "Noisy Operation",
    desc: "Eliminate squeaking and grinding noises by repairing motors and idler pulleys.",
    icon: <FaVolumeUp />
  },
  {
    id: "04",
    title: "Long Drying Times",
    desc: "Airflow issues or sensor failures? We optimize your dryer for maximum efficiency.",
    icon: <FaClock />
  }
];

export default function DryerServices() {
  return (
    <section className="bg-white py-24 px-5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with Accent */}
        <div className="flex items-center flex-col justify-center mb-10 gap-4">
          <div className=" text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
            
              <span className="text-[#FFBB00] font-bold tracking-widest text-sm uppercase">Our Expertise</span>
            </div>
            <h2 className="text-[#142B52] text-4xl md:text-4xl font-black uppercase leading-tight">
              Professional Solutions For {' '}
              <span className="text-[#FFBB00]">Every Dryer Issue</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg pl-6">
            Fast diagnostics and premium repairs for all high-end dryer models and brands.
          </p>
        </div>

        {/* Improved Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-[1px] border-gray-100 shadow-2xl rounded-2xl overflow-hidden">
          {dryerServices.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-10 border-[1px] border-gray-50 hover:bg-[#142B52] transition-all duration-500 cursor-default"
            >
              {/* Service Number Background */}
              <span className="absolute top-4 right-6 text-6xl font-black text-gray-50 group-hover:text-[#1d3a6d] transition-colors duration-500 select-none">
                {service.id}
              </span>

              {/* Icon Container */}
              <div className="relative z-10 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#FFBB00] text-3xl mb-8 group-hover:bg-[#FFBB00] group-hover:text-[#142B52] transition-all duration-500 transform ">
                {service.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-[#142B52] group-hover:text-white text-xl font-bold mb-4 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed transition-colors duration-500">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Decorative Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FFBB00] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
}