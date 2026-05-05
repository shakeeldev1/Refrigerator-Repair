import React from 'react';
import { FaShieldAlt, FaBolt, FaTshirt, FaHistory } from 'react-icons/fa';

const dryerFacts = [
  {
    title: "Fire Hazard Prevention",
    desc: "Clogged vents and failing heating elements are leading causes of household fires. Proper maintenance keeps your home safe.",
    icon: <FaShieldAlt />
  },
  {
    title: "Maximum Energy Efficiency",
    desc: "A struggling dryer takes twice as long to dry clothes, causing a massive spike in your monthly electricity bills.",
    icon: <FaBolt />
  },
  {
    title: "Protect Your Fabrics",
    desc: "When thermostats fail, dryers overheat. This burns, shrinks, and destroys your expensive clothing and delicate fabrics.",
    icon: <FaTshirt />
  },
  {
    title: "Extend Appliance Lifespan",
    desc: "Fixing minor squeaks and drum issues early prevents catastrophic motor failures, adding years to your dryer's life.",
    icon: <FaHistory />
  }
];

export default function DryerImportance() {
  return (
    <section className="bg-[#142B52] py-24 px-5 relative overflow-hidden">
      {/* Subtle Background Pattern/Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFBB00] opacity-5 rounded-full blur-3xl -ml-40 -mt-40"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Image with Yellow Offset Design */}
        <div className="relative group mx-auto w-full max-w-md lg:max-w-none">
          {/* Yellow Offset Square */}
          <div className="absolute top-4 -left-4 w-full h-full border-4 border-[#FFBB00] rounded-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
          
          {/* Main Image - HEIGHT ADJUSTED HERE */}
          <img 
            src="https://yeobuild.com.sg/wp-content/uploads/2025/02/dryer-repair-2.jpg" 
            alt="Inside of a modern clothes dryer" 
            className="relative z-10 w-full h-[350px] lg:h-[500px] object-cover rounded-2xl shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          />
          
          {/* Floating Badge overlay */}
          <div className="absolute bottom-8 -right-4 lg:-right-10 z-20 bg-white p-6 rounded-xl shadow-2xl animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="bg-[#FFBB00] text-[#142B52] w-14 h-14 rounded-full flex items-center justify-center font-black text-xl">
                30%
              </div>
              <div>
                <p className="text-[#142B52] font-extrabold text-lg leading-tight">Energy Savings</p>
                <p className="text-gray-500 text-sm">With a healthy dryer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text & Features */}
        <div>
          <div className="mb-10 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="text-[#FFBB00] font-semibold tracking-[0.2em] text-sm uppercase">
                Appliance Health
              </span>
            </div>
            <h2 className="text-white text-2xl md:text-4xl font-black uppercase leading-tight mb-6">
              Protect Your Home & <br />
              <span className="text-[#FFBB00]">Save Your Clothes</span>
            </h2>
            <p className="text-gray-300 text-md leading-relaxed">
              A malfunctioning dryer isn't just an inconvenience. Ignoring strange noises, long drying cycles, or lack of heat can lead to ruined wardrobes, high power bills, and severe safety risks. 
            </p>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {dryerFacts.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center text-[#FFBB00] text-xl mb-2 backdrop-blur-sm border border-white/5">
                  {item.icon}
                </div>
                <h3 className="text-white text-lg font-bold uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}