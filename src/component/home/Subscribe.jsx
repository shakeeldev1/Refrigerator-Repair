import React from 'react';
import { motion } from 'framer-motion';
import { TbMailFilled } from 'react-icons/tb';

export default function Subscribe() {
  return (
    <section className="relative w-full py-10 overflow-hidden flex items-center justify-center" 
    style={{
        "background":'url(/img.png)',
        "backgroundSize":'cover'
      }}
    >
      
      {/* Background Image & Energetic Overlays */}
      <div className="absolute inset-0 z-0"
      
        
        >
        {/* Deep blue gradient overlay for professional look and text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#142A51]/95 via-[#0195FF]/80 to-[#142A51]/60 mix-blend-multiply" />
        
        {/* Glowing energetic light flares */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0195FF]/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFBB00]/30 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex justify-center ">
        
        {/* Left Side: Glassmorphism Subscribe Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-3/5 p-8 md:p-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl shadow-black/30 relative overflow-hidden"
        >
          {/* Decorative corner accent */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#FFBB00] rounded-full blur-2xl opacity-50" />

          <div className="relative z-10">
            <span className="inline-block text-[#FFBB00] font-bold tracking-[0.2em] text-xs uppercase mb-4 drop-shadow-md">
              Subscribe For Updates
            </span>
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 leading-tight">
              Subscribe for Reliable 
              Cooling Service Updates
            </h2>
            
            <p className="text-white/80 text-base  font-light leading-relaxed mb-6 max-w-xl">
              Stay informed about refrigerator maintenance tips, service offers, and cooling solutions across Dubai. Subscribe to receive useful updates directly in your inbox.
            </p>

            {/* Input Form */}
            <form className="flex flex-col sm:flex-row w-full max-w-lg gap-3 sm:gap-0 bg-white/5 sm:bg-white  rounded-2xl sm:rounded-full border border-white/20 sm:border-transparent focus-within:ring-4 focus-within:ring-[#0195FF]/30 transition-all duration-300">
              
              <div className="flex-grow flex items-center px-4">
                <TbMailFilled className="text-slate-400 mr-3 hidden sm:block" size={24} />
                <input 
                  type="email" 
                  placeholder="sample@mail.com" 
                  required
                  className="w-full bg-transparent border-none outline-none text-[#142A51] placeholder:text-slate-400 py-2 sm:py-0 text-base font-medium"
                />
              </div>

              <button 
                type="submit" 
                className="w-full sm:w-auto px-8 py-2 bg-[#FFBB00] text-[#142A51] font-bold text-base rounded-xl sm:rounded-full shadow-lg hover:shadow-[#FFBB00]/40 hover:bg-[#ffc933] transition-all duration-300 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>



      </div>
    </section>
  );
}