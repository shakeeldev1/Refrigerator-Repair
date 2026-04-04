import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Quality() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-slate-900">

      {/* Background Video & Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-80"
        >
          {/* Replace this src with your actual video URL */}
          <source src="/repair.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient overlay to ensure text remains highly readable over the video */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#142A51] via-[#142A51]/80 to-[#142A51]/30 mix-blend-multiply" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-16 pb-32">

        {/* Added a modern glassmorphism container to make the content pop against the moving video */}
        <div className="w-full md:max-w-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-12 rounded-md md:rounded-[2.5rem] shadow-2xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0195FF]/20 border border-[#0195FF]/30 text-[#0195FF] font-bold tracking-widest uppercase text-xs md:mb-6 mb-2 shadow-sm">
              Quality Cooling Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-3xl font-bold text-white leading-tight md:mb-2"
          >
            Dedicated to Keeping Your {''}
            <span className="text-[#FFBB00]">Cooling Running Smoothly</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-lg text-slate-200 font-light leading-relaxed mb-2 mt-2"
          >
            We are committed to delivering reliable refrigerator repair services across Dubai. From gas charging and compressor replacement to resolving frost, fan, and sensor issues, our technicians ensure efficient and long-lasting cooling performance for homes and businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to='/contact'>
              <button className="group relative px-2 py-1 rounded-md md:px-4 md:py-2 bg-[#FFBB00] text-[#142A51] md:rounded-xl cursor-pointer text-lg overflow-hidden shadow-xl hover:shadow-[#FFBB00]/40 transition-all active:scale-95">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Trusted Businesses Band (Glassmorphism Effect) */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-[#142A51]/60 backdrop-blur-md border-t border-white/10 py-4">
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
            {/* Replace the src attributes below with the actual paths to your logo images. */}
            <img
              src="https://therepairinghub.com/wp-content/uploads/2024/11/Companies-Logo-2.png"
              alt="ALM Antillean Airlines"
              className="h-6 md:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            />
            <img
              src="https://therepairinghub.com/wp-content/uploads/2024/11/Companies-Logo-1.png"
              alt="Roomz"
              className="h-6 md:h-8 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            />
            <img
              src="https://therepairinghub.com/wp-content/uploads/2024/11/Companies-Logo-4.png"
              alt="UFP Technologies"
              className="h-6 md:h-8 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            />
            <img
              src="https://therepairinghub.com/wp-content/uploads/2024/11/Companies-Logo-3.png"
              alt="Parker Games"
              className="h-6 md:h-8 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
}