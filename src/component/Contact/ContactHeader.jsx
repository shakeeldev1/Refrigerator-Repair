import React from 'react';
import { motion } from 'framer-motion';

export default function ContactHeader() {
  return (
    <div className="relative w-full h-[40vh] min-h-[400px] flex flex-col justify-center items-center overflow-hidden bg-[#142A51]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" 
          alt="Contact The Repairing Hub" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#142A51] via-[#142A51]/80 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-[#FFBB00] font-bold tracking-[0.2em] text-sm uppercase mb-4"
        >
          Get In Touch
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
        >
          Contact Us
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 max-w-2xl mx-auto text-lg font-light"
        >
          Get in touch with our refrigerator repair team in Dubai for fast assistance. Whether you need emergency service, maintenance, or technical support, we are ready to help.
        </motion.p>
      </div>
    </div>
  );
}