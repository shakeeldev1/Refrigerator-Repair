import React from 'react';
import { motion } from 'framer-motion';

export default function Quality() {
  return (
    <section className="relative w-full h-[80vh] flex flex-col justify-center overflow-hidden bg-slate-900">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
          alt="Refrigeration Diagnostics" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay to ensure text remains highly readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#142A51]/95 via-[#142A51]/80 to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-48">
        <div className="max-w-3xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#0195FF] font-bold tracking-widest uppercase text-sm mb-4">
              Quality Cooling Services
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl  font-extrabold text-white leading-tight mb-6"
          >
            Dedicated to Keeping Your <br className="hidden md:block" />
            Cooling Running Smoothly
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 font-light leading-relaxed mb-10 max-w-2xl"
          >
            We are committed to delivering reliable refrigerator repair services across Dubai. From gas charging and compressor replacement to resolving frost, fan, and sensor issues, our technicians ensure efficient and long-lasting cooling performance for homes and businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="group relative px-8 py-2 bg-[#FFBB00] text-[#142A51] rounded-full font-bold text-lg overflow-hidden shadow-lg hover:shadow-[#FFBB00]/30 transition-all active:scale-95">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Trusted Businesses Band (Glassmorphism Effect) */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-[#142A51]/60 backdrop-blur-md border-t border-white/10 py-2">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="shrink-0"
          >
            <p className="text-white/60 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-center md:text-left">
              Trusted By Leading Businesses
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-16 w-full"
          >
            {/* Replace the src attributes below with the actual paths to your logo images. 
              The grayscale and opacity classes create a clean, uniform look until hovered.
            */}
            <img 
              src="/path-to-your-logos/alm-logo.png" 
              alt="ALM Antillean Airlines" 
              className="h-8 md:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" 
            />
            <img 
              src="/path-to-your-logos/roomz-logo.png" 
              alt="Roomz" 
              className="h-6 md:h-8 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" 
            />
            <img 
              src="/path-to-your-logos/ufp-logo.png" 
              alt="UFP Technologies" 
              className="h-8 md:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" 
            />
            <img 
              src="/path-to-your-logos/parker-games-logo.png" 
              alt="Parker Games" 
              className="h-8 md:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" 
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
}