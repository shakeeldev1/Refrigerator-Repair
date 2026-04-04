import React from 'react';
import { motion } from 'framer-motion';

// Sample images for the gallery (replace with your actual project photos)
const col1Images = [
  "https://img.freepik.com/premium-photo/male-technician-uniform-reprs-broken-refrigerator-kitchen_926199-4197168.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/premium-photo/repr-r-conditioner-technician-workwear-profession-appliance_1368762-3250.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/free-photo/diagnostics-equipment-profile-serious-man-ooking-open-dishwasher-kitchen_259150-58280.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/premium-photo/repr-r-conditioner-technician-workwear-profession-appliance_1368762-12042.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
];

const col2Images = [
  "https://img.freepik.com/free-photo/electrician-using-tablet-digital-panel-control-electrical-system-analysis_169016-68336.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/premium-photo/young-man-working-as-electrician-exposing-back-fridge-check-repair-it_926199-3957343.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/premium-photo/young-professional-worker-installing-new-stylish-modern-kitchen-furniture_530697-75224.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/premium-photo/should-be-attantive-senior-male-technician-checking-refrigerator_386167-8195.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
];

export default function GallerySection() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      
      {/* CSS for Infinite Vertical Scrolling */}
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scrollUp 20s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown 20s linear infinite;
        }
        /* Pause animations on hover for better user experience */
        .slider-container:hover .animate-scroll-up,
        .slider-container:hover .animate-scroll-down {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0195FF]/5 text-[#0195FF] font-bold tracking-widest text-xs uppercase mb-6 border border-[#0195FF]/10">
              Our Gallery
            </div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#142A51] mb-6 leading-tight">
              Highlights of Our {''}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBB00] to-[#feaa14]">
                Refrigerator Service Work
              </span>
            </h2>
            
            <p className="text-lg md:flex hidden text-slate-600 font-light leading-relaxed mb-6">
              Take a look at our recent refrigerator repair and maintenance projects across Dubai.From component replacements to complete cooling restorations, our work reflects quality, precision, and reliable service delivery.
            </p>

            <button className="px-4 py-2 md:flex hidden bg-[#142A51] text-white rounded-full cursor-pointer shadow-lg hover:bg-[#0195FF] transition-colors duration-300">
              View Full Gallery
            </button>
          </motion.div>

          {/* RIGHT SIDE: Dual Vertical Sliders */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden slider-container bg-slate-50"
          >
            {/* Top Fade Overlay */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            
            {/* Bottom Fade Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

            <div className="grid grid-cols-2 gap-4 h-full px-4">
              
              {/* Slider 1: Scrolling Up */}
              <div className="overflow-hidden h-full relative">
                <div className="flex flex-col gap-4 animate-scroll-up pt-4">
                  {/* Duplicated images to create seamless infinite loop */}
                  {[...col1Images, ...col1Images].map((img, index) => (
                    <div key={`up-${index}`} className="w-full h-[200px] md:h-[250px] rounded-2xl overflow-hidden shrink-0 shadow-md">
                      <img 
                        src={img} 
                        alt="Service Gallery" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider 2: Scrolling Down */}
              <div className="overflow-hidden h-full relative">
                {/* Notice the negative top margin to offset the starting position so it can scroll down cleanly */}
                <div className="flex flex-col gap-4 animate-scroll-down absolute top-0 w-full">
                  {/* Duplicated images to create seamless infinite loop */}
                  {[...col2Images, ...col2Images].map((img, index) => (
                    <div key={`down-${index}`} className="w-full h-[200px]md:h-[250px] rounded-2xl overflow-hidden shrink-0 shadow-md">
                      <img 
                        src={img} 
                        alt="Service Gallery" 
                        className="w-full md:h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}