import React from 'react';
import { motion } from 'framer-motion';
import { TbCheck } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const expertPoints = [
  "Comprehensive repair for front-load and top-load washers",
  "Expert fixing of drum issues, motor failures, and leaks",
  "Quick replacement of worn-out belts, pumps, and valves",
  "Specialized electronics and control panel troubleshooting",
  "Same-day maintenance to prevent future appliance breakdowns"
];

export default function ExpertSection() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-[#142A51] mb-4 leading-tight">
              Expert Washing Machine{' '}
              <span className="text-[#FFBB00]">
                Repair & Maintenance
              </span>
            </h2>

            <div className="w-16 h-1 bg-[#0195FF] rounded-full mb-6" />

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              We provide professional washing machine repair services for all major brands and models. Our skilled technicians are equipped to handle everything from minor drainage issues to complex motor repairs, ensuring your laundry routine stays on track without interruption.
            </p>

            {/* Clean Feature List */}
            <div className="space-y-4 mb-10 w-full">
              {expertPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (index * 0.08) }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5">
                    <TbCheck className="text-[#0195FF] text-xl" strokeWidth={2.5} />
                  </div>
                  <span className="text-[#142A51] text-base leading-relaxed">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link to='/contact'>
                <button className="px-8 py-3 bg-[#142A51] text-white rounded-full font-semibold hover:bg-[#0195FF] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
                  Explore More
                </button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Image with Hover Effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image with Hover Effect */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://t3.ftcdn.net/jpg/04/23/35/16/240_F_423351639_qcIVh5khAZrpTdIHakM5n8G6wtgFIA7y.jpg"
                alt="Washing Machine Repair Technician"
                className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-110"
              />

              {/* Simple Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#142A51]/90 backdrop-blur-sm p-4">
                <div className="flex justify-around">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FFBB00]">800+</div>
                    <div className="text-xs text-white/80">Units Repaired</div>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FFBB00]">99%</div>
                    <div className="text-xs text-white/80">Success Rate</div>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FFBB00]">45min</div>
                    <div className="text-xs text-white/80">Arrival Time</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}