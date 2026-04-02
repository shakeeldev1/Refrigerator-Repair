import React from 'react';
import { motion } from 'framer-motion';
import { TbCircleCheckFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function PremiumService() {
  return (
    <section className="py-10 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#0195FF] font-bold tracking-[0.2em] text-xs uppercase mb-4"
          >
            Quality Cooling Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-extrabold text-[#142A51] mb-6 leading-tight"
          >
            Dedicated to Keeping Your
            Cooling Running Smoothly
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg font-light leading-relaxed"
          >
            We are committed to delivering reliable refrigerator repair services across Dubai.
            From gas charging and compressor replacement to resolving frost, fan, and sensor issues,
            our technicians ensure efficient and long-lasting cooling performance for homes and businesses.
          </motion.p>
        </div>

        {/* Pricing Cards Grid (Single Row on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

          {/* CARD 1: Residential Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col bg-[#142A51] rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-[#142A51]/20 border border-white/10 relative overflow-hidden group"
          >
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#feaa14]/80 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />

            <div className="flex items-center gap-6 mb-8 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200&auto=format&fit=crop"
                alt="Residential Repair"
                className="w-20 h-20 rounded-2xl object-cover border-2 border-[#0195FF]/30"
              />
              <h3 className="text-3xl font-bold text-white">Residential Plan</h3>
            </div>

            <p className="text-slate-300 font-light mb-4 leading-relaxed relative z-10 min-h-[50px]">
              Efficient maintenance and key repairs to keep home refrigerators running smoothly.
            </p>

            <ul className="flex flex-col gap-4 flex-grow relative z-10">
              {["Frost Issue Repair", "Fan Change", "Basic Gas Checks", "Routine Maintenance Check"].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <TbCircleCheckFilled className="text-[#0195FF] mt-1 shrink-0" size={20} />
                  <span className="text-white ">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to='/contact'>
              <button className="w-full cursor-pointer py-2 bg-[#FFBB00] text-[#142A51] rounded-xl font-bold text-lg hover:bg-white transition-colors duration-300 relative z-10 shadow-lg shadow-[#FFBB00]/20">
                Contact Us
              </button>
            </Link>
          </motion.div>

          {/* CARD 2: Commercial & Premium Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col bg-[#142A51] rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-[#142A51]/20 border-2 border-[#FFBB00]/50 relative overflow-hidden group transform lg:-translate-y-4"
          >
            {/* Top Badge */}
            <div className="absolute top-0 right-8 bg-[#FFBB00] text-[#142A51] px-5 py-1.5 rounded-b-xl font-bold text-xs uppercase tracking-wider z-20 shadow-md">
              Recommended for Business
            </div>

            {/* Soft background glow */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFBB00]/10 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />

            <div className="flex items-center gap-6 mb-8 relative z-10 mt-2">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=200&auto=format&fit=crop"
                alt="Commercial Repair"
                className="w-20 h-20 rounded-2xl object-cover border-2 border-[#FFBB00]/50"
              />
              <h3 className="text-3xl font-bold text-white leading-tight">Commercial & <br /> Premium Plan</h3>
            </div>

            <p className="text-slate-300 font-light mb-8 leading-relaxed relative z-10 min-h-[50px]">
              Comprehensive, advanced care for demanding commercial and high-end units.
            </p>

            <ul className="flex flex-col gap-4 mb-10 flex-grow relative z-10">
              {[
                "Complete Gas Charging",
                "Compressor Change Support",
                "Thermostat & Sensor Calibration",
                "Leak Detection & System Sealing",
                "Extended Parts Support",
                "Priority Commercial Service"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <TbCircleCheckFilled className="text-[#0195FF] mt-1 shrink-0" size={20} />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

             <Link to='/contact'>
              <button className="w-full cursor-pointer py-2 bg-[#FFBB00] text-[#142A51] rounded-xl font-bold text-lg hover:bg-white transition-colors duration-300 relative z-10 shadow-lg shadow-[#FFBB00]/20">
                Contact Us
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}