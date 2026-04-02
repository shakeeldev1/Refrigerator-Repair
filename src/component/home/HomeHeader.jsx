import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TbFridge, TbWashMachine, TbMicrowave, TbAirConditioning } from 'react-icons/tb';

const slides = [
  {
    id: 1,
    title: "24/7 Expert Appliance &",
    highlightedText: "Refrigerator Repair",
    description: "Fast, reliable, and affordable repair services for your home and business. From specialized fridge cooling solutions to complete kitchen appliance care, our certified technicians are ready to restore your comfort.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop",
    icon: TbFridge,
    badge: "Emergency Response",
    buttonText: "Call Now",
  },
  {
    id: 2,
    title: "Professional Washing Machine",
    highlightedText: "Repair Services",
    description: "Is your washing machine making strange noises or not spinning? Our experts diagnose and fix all major brands with same-day service. Get your laundry back on track today!",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=2071&auto=format&fit=crop",
    icon: TbWashMachine,
    badge: "Same Day Service",
    buttonText: "Book Now",
  },
  {
    id: 3,
    title: "Premium Oven & Cooktop",
    highlightedText: "Repair Experts",
    description: "Don't let a broken oven ruin your cooking plans. Our certified technicians repair all major brands with genuine parts. 90-day warranty on all repairs.",
    image: "https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=2070&auto=format&fit=crop",
    icon: TbMicrowave,
    badge: "Certified Technicians",
    buttonText: "Get Quote",
  },
  {
    id: 4,
    title: "AC Installation &",
    highlightedText: "Repair Services",
    description: "Stay cool all year round with our professional AC maintenance and repair services. Free inspection with every repair call. Energy-efficient solutions available.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2070&auto=format&fit=crop",
    icon: TbAirConditioning,
    badge: "24/7 Support",
    buttonText: "Call Us",
  },
];

export default function HomeHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#142A51]">
      
      {/* BACKGROUND IMAGE LAYER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full z-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
          />
          {/* Overlays to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#142A51]/90 via-[#142A51]/70 to-[#142A51]/90" />
          <div className="absolute inset-0 bg-[#0195FF]/10 mix-blend-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* SIDE NAVIGATION ARROWS (Hidden on very small mobile, visible on sm and up) */}
      <div className="absolute z-30 inset-y-0 left-0 hidden md:flex items-center px-2 sm:px-6">
        <button 
            onClick={prevSlide} 
            className="w-10 h-10 md:w-10 md:h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#FFBB00] hover:text-[#142A51] transition-all"
        >
          <FaChevronLeft className="ml-[-2px] sm:ml-[-4px]" />
        </button>
      </div>
      <div className="absolute z-30 inset-y-0 right-0 hidden md:flex items-center px-2 sm:px-6">
        <button 
            onClick={nextSlide} 
            className=" md:w-10 md:h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#FFBB00] hover:text-[#142A51] transition-all"
        >
          <FaChevronRight className="mr-[-2px] sm:mr-[-4px]" />
        </button>
      </div>

      {/* MAIN CONTENT LAYER (Centered) */}
      <div className="relative z-10 w-full md:max-w-5xl mx-auto px-10 sm:px-16 py-20 flex-grow flex flex-col justify-center items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="mb-6 inline-block px-5 py-2 rounded-full bg-[#FFBB00]/10 border border-[#FFBB00]/30 text-[#FFBB00] font-semibold tracking-wide text-xs sm:text-sm uppercase">
              {currentSlide.badge}
            </div>

            <h1 className="text-2xl md:text-5xl font-bold text-white mb-6 leading-[1.15]">
              {currentSlide.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBB00] to-[#feaa14]">
                {currentSlide.highlightedText}
              </span>
            </h1>

            <p className="text-white/80 text-lg   mb-10 max-w-3xl leading-relaxed font-light px-4">
              {currentSlide.description}
            </p>

            {/* Centered Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center  sm:w-auto">
              <button className="w-full sm:w-auto bg-[#FFBB00] hover:bg-[#feaa14] text-[#142A51] font-bold  px-4 md:px-8 py-2 rounded-full flex items-center justify-center gap-3 transition-colors shadow-lg shadow-[#FFBB00]/20 text-lg">
                <FaPhoneAlt />
                {currentSlide.buttonText}
              </button>
              <button className="w-full sm:w-auto border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold  px-4 md:px-5 py-2 rounded-full flex items-center justify-center gap-3 transition-colors text-lg">
                <FaWhatsapp size={22} />
                WhatsApp Us
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BOTTOM SLIDE DOTS */}
      <div className="relative hidden   z-20 w-full max-w-7xl mx-auto px-6 pb-10 md:flex justify-center items-center">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-10 bg-[#FFBB00]" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}