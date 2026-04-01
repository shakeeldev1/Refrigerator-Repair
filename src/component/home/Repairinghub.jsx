import React from 'react';
import { motion } from 'framer-motion';
import { 
  TbGasStation, 
  TbEngine, 
  TbSnowflake, 
  TbPropeller, 
  TbActivity, 
  TbSettings,
  TbArrowRight
} from 'react-icons/tb';

const services = [
  {
    id: 1,
    title: "Gas Charging",
    description: "Restoring optimal refrigerant levels to ensure your unit reaches peak cooling efficiency and reduces energy waste.",
    icon: TbGasStation,
    color: "#0195FF"
  },
  {
    id: 2,
    title: "Compressor Change",
    description: "Professional replacement of faulty compressors with high-quality units to restore quiet and powerful operation.",
    icon: TbEngine,
    color: "#FFBB00"
  },
  {
    id: 3,
    title: "Frost Issue Repair",
    description: "Eliminating ice buildup and clearing blockages to improve internal airflow and temperature stability.",
    icon: TbSnowflake,
    color: "#0195FF"
  },
  {
    id: 4,
    title: "Fan & Motor Repair",
    description: "Fixing circulation problems with precision fan repair or replacement for uniform cooling throughout.",
    icon: TbPropeller,
    color: "#FFBB00"
  },
  {
    id: 5,
    title: "Sensor Replacement",
    description: "Replacing faulty temperature sensors to restore accuracy and prevent system malfunctions or short-cycling.",
    icon: TbActivity,
    color: "#0195FF"
  },
  {
    id: 6,
    title: "General Maintenance",
    description: "Comprehensive routine servicing to identify potential issues early and significantly extend your appliance lifespan.",
    icon: TbSettings,
    color: "#FFBB00"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Repairinghub() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-1 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#0195FF] font-bold uppercase tracking-widest text-sm mb-3"
            >
              Our Expertise
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#142A51] leading-tight"
            >
              Affordable <span className="text-[#FFBB00]">Cooling Solutions</span> <br className="hidden lg:block" />
              for Every Situation
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-sm text-lg font-light leading-relaxed"
          >
            We provide complete refrigerator and appliance repair across Dubai, ensuring 24/7 performance for your home.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-[#142A51]/5"
            >
              {/* Icon & Decorative Background */}
              <div className="relative mb-8 inline-block">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-[360deg]"
                  style={{ backgroundColor: '#142A51' }}
                >
                  <service.icon size={32} strokeWidth={1.5} style={{ color: service.color }} />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#142A51]/5 rounded-2xl -z-10" />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-[#142A51] mb-4 group-hover:text-[#0195FF] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-light mb-8">
                {service.description}
              </p>

              {/* "Learn More" Link */}
              <div className="flex items-center gap-2 text-[#142A51] font-bold text-sm uppercase tracking-wider group-hover:text-[#FFBB00] transition-colors cursor-pointer">
                Learn More 
                <TbArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>

              {/* Bottom Gradient Bar */}
              <div 
                className="absolute bottom-0 left-8 right-8 h-1 rounded-t-full transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"
                style={{ backgroundColor: service.color }}
              />
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}