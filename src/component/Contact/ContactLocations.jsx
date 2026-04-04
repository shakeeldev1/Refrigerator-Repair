import React from 'react';
import { motion } from 'framer-motion';
import { TbMapPin, TbPhoneCall, TbClock } from 'react-icons/tb';

const locations = [
  {
    area: "Naif, Deira Dubai",
    desc: "Professional refrigerator repair solutions for residential and commercial clients across central Dubai.",
    phone: "+971 50 125 4393",
    hours: "Mon-Fri: 9:00 - 20:00 | Sat: 11:00 - 15:00",
  },
  {
    area: "Al Barsha, Dubai",
    desc: "Quick response service for cooling repairs, gas charging, and component replacement throughout northern areas.",
    phone: "+971 50 125 4393",
    hours: "Mon-Fri: 9:00 - 20:00 | Sat: 11:00 - 15:00",
  },
  {
    area: "Jumeirah Area, Dubai",
    desc: "Reliable on-site refrigerator servicing covering southern Dubai locations with trained technicians.",
    phone: "+971 50 125 4393",
    hours: "Mon-Fri: 9:00 - 20:00 | Sat: 11:00 - 15:00",
  }
];

export default function ContactLocations() {
  return (
    <section className="pb-10 py-10 bg-slate-50 relative px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-[2rem] p-6 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-[#0195FF]/30 hover:shadow-2xl hover:shadow-[#0195FF]/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Branch Label & Heading */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#142A51] leading-tight">
                  {loc.area}
                </h3>
                
                {/* Modern Pill Badge for Branch */}
                <div className='flex items-center gap-1.5 bg-[#0195FF]/10 px-3 py-1.5 rounded-full shrink-0'>
                  <span className="text-[#0195FF] font-bold tracking-widest text-[9px] uppercase mt-0.5">
                    Branch
                  </span>
                  <TbMapPin className='text-[#0195FF]' size={14} strokeWidth={2} />
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed flex-grow ">
                {loc.desc}
              </p>

              {/* Contact Details with Modern Dashed Divider */}
              <div className="space-y-4 pt-5 border-t border-dashed border-slate-200">
                
                <div className="flex items-center gap-4 text-slate-600 group-hover:text-[#142A51] transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#FFBB00]/10 flex items-center justify-center shrink-0">
                    <TbPhoneCall className="text-[#FFBB00]" size={18} />
                  </div>
                  <span className="font-semibold text-sm">{loc.phone}</span>
                </div>

                <div className="flex items-center gap-4 text-slate-600 group-hover:text-[#142A51] transition-colors duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#0195FF]/10 flex items-center justify-center shrink-0">
                    <TbClock className="text-[#0195FF]" size={18} />
                  </div>
                  <span className="font-medium text-sm">{loc.hours}</span>
                </div>
                
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}