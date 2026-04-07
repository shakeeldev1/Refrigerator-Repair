import React from 'react';
import { motion } from 'framer-motion';
import { TbCheck, TbBuildingSkyscraper, TbHome, TbArrowRight, TbShield, TbClock, TbUserCheck } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function PremiumService() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-[#0195FF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#FFBB00]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-px bg-[#0195FF]" />
            <span className="text-[#0195FF] font-semibold text-sm uppercase tracking-wider">Service Excellence</span>
            <div className="w-10 h-px bg-[#0195FF]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#142A51] mb-4"
          >
            Tailored Plans for{' '}
            <span className="relative inline-block">
              <span className="text-[#FFBB00]">Every Need</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" fill="none">
                <path d="M0 2L200 2" stroke="#FFBB00" strokeWidth="3" strokeDasharray="6 6"/>
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            Choose the perfect service package designed for your specific requirements
          </motion.p>
        </div>

        {/* Horizontal Layout - Side by Side with Different Styles */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* CARD 1: Residential - Minimalist Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="flex-1 group"
          >
            <div className="relative h-full bg-white rounded-3xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500">
              
              {/* Icon Header */}
              <div className="mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#142A51] flex items-center justify-center mb-6 group-hover:bg-[#0195FF] transition-all duration-300">
                  <TbHome className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#142A51] mb-3">Residential Care</h3>
                <div className="w-12 h-1 bg-[#FFBB00] rounded-full" />
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                Complete home appliance protection with regular maintenance and priority service for your family's comfort.
              </p>

              {/* Feature List */}
              <ul className="space-y-3 mb-8">
                {[
                  { text: "Frost Issue Resolution", highlight: false },
                  { text: "Fan Motor Service", highlight: false },
                  { text: "Basic Gas Charging", highlight: false },
                  { text: "Routine Maintenance", highlight: false },
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <TbCheck className={`text-lg mt-0.5 ${feature.highlight ? 'text-[#FFBB00]' : 'text-[#0195FF]'}`} />
                    <span className={`${feature.highlight ? 'text-[#142A51] font-semibold' : 'text-gray-600'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <button className="w-full py-3 border-2 border-[#142A51] text-[#142A51] rounded-xl font-semibold hover:bg-[#142A51] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  Learn More
                  <TbArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* CARD 2: Commercial - Premium Featured Card with Split Design */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="flex-1 relative"
          >
            {/* Popular Tag */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-[#FFBB00] text-[#142A51] px-6 py-1.5 rounded-full text-[10px] md:text-sm font-bold shadow-lg flex items-center gap-1 md:gap-2">
                <TbUserCheck className="text-sm" />
                Most Popular Choice
              </div>
            </div>

            <div className="relative h-full bg-gradient-to-br from-[#142A51] to-[#0a1535] rounded-3xl p-8 shadow-2xl overflow-hidden group">
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-40 h-40 border-4 border-white rounded-full" />
                <div className="absolute bottom-10 left-10 w-60 h-60 border-4 border-white rounded-full" />
              </div>

              {/* Icon Header */}
              <div className="mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#FFBB00] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TbBuildingSkyscraper className="text-3xl text-[#142A51]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Commercial Elite</h3>
                <div className="w-12 h-1 bg-[#FFBB00] rounded-full" />
              </div>

              {/* Description */}
              <p className="text-white/70 leading-relaxed mb-6 relative z-10">
                Enterprise-grade solution for businesses requiring maximum uptime and comprehensive coverage.
              </p>

              {/* Feature Grid instead of List */}
              <div className="grid grid-cols-2 gap-3 mb-8 relative z-10">
                {[
                  "Complete Gas Charging",
                  "Compressor Support",
                  "Sensor Calibration",
                  "Leak Detection",
                  "Extended Warranty",
                  "24/7 Priority Support",
                  "Quarterly Inspections",
                  "Emergency Response"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFBB00]" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <button className="w-full py-3 bg-[#FFBB00] text-[#142A51] rounded-xl font-semibold hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group/btn relative z-10">
                  Request Consultation
                  <TbArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

   
      </div>
    </section>
  );
}