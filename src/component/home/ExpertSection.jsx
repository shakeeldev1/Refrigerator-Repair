import React from 'react';
import { motion } from 'framer-motion';
import { TbCheck } from 'react-icons/tb';

const expertPoints = [
  "Affordable repair services for residential & commercial needs",
  "Skilled technicians equipped for all cooling system issues",
  "Trusted support for maintenance and component replacements",
  "Reliable solutions for refrigeration problems of any complexity",
  "Fast and professional service to keep appliances running"
];

export default function ExpertSection() {
  return (
    <section className="py-10  bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Small Badge Header */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0195FF]/5 border border-[#0195FF]/10 text-[#0195FF] font-bold text-xs uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0195FF] animate-pulse"></span>
              Certified Technicians
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#142A51] mb-6 leading-tight">
              Reliable Refrigerator Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBB00] to-[#feaa14]">
                Every Cooling Need
              </span>
            </h2>
            
            <p className="text-slate-600 text-lg font-light leading-relaxed mb-10">
              We deliver dependable refrigerator repair services across Dubai, helping homes and businesses maintain consistent cooling performance. Our experienced technicians diagnose issues quickly and apply effective solutions from gas charging to component replacements.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 mb-12 w-full">
              {expertPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#0195FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFBB00] transition-colors duration-300">
                    <TbCheck className="text-white" size={14} strokeWidth={4} />
                  </div>
                  <span className="text-[#142A51] font-bold text-base md:text-lg">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Action Button */}
            <button className="group relative px-10 py-5 bg-[#142A51] text-white rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-[#0195FF]/30 transition-all active:scale-95">
              <span className="relative z-10">Explore More</span>
              <div className="absolute inset-0 bg-[#0195FF] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* RIGHT COLUMN: 3-Image Layout with Experience Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-[450px] md:h-[600px]"
          >
            {/* Design Accents behind images */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0195FF]/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#FFBB00]/10 rounded-full blur-3xl -z-10" />
            
            {/* 3-Image Grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full relative z-0">
              
              {/* Image 1: Tall (Left) */}
              <div className="row-span-2 col-span-1 rounded-[2rem] overflow-hidden shadow-lg border-[6px] border-slate-50 group">
                <img 
                  src="http://img.freepik.com/premium-photo/service-man-adjusting-house-heating-system_926199-3560224.jpg?w=740" 
                  alt="Certified Appliance Technician" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Image 2: Top Right */}
              <div className="row-span-1 col-span-1 rounded-[2rem] overflow-hidden shadow-lg border-[6px] border-slate-50 group">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=740&auto=format&fit=crop" 
                  alt="Technician Tools" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Image 3: Bottom Right */}
              <div className="row-span-1 col-span-1 rounded-[2rem] overflow-hidden shadow-lg border-[6px] border-slate-50 group">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=740&auto=format&fit=crop" 
                  alt="Refrigeration Unit" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay Experience Badge (Moved to bottom left to contrast with the tall image) */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 md:-left-10 bg-[#142A51] p-6 md:p-8 rounded-3xl shadow-2xl border-b-[6px] border-[#FFBB00] text-center z-20"
              >
                <div className="text-[#FFBB00] text-4xl md:text-5xl font-black mb-1">15+</div>
                <div className="text-white text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold leading-tight">
                  Years of <br /> Excellence
                </div>
              </motion.div>
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}