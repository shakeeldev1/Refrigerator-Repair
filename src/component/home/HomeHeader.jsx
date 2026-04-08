import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TbFridge, TbWashMachine, TbMicrowave, TbAirConditioning } from 'react-icons/tb';

const slides = [
  {
    title: "Expert Care for Your",
    highlightedText: "Washing Machine",
    description: "Is your washing machine making strange noises or not spinning? Our experts diagnose and fix all major brands with same-day service. Get your laundry back on track today!",
    image: "https://img.freepik.com/premium-photo/working-man-plumber-repairs-washing-machine-home-washing-machine-installation-repair-plumber-connecting-appliance_353017-416.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
    badge: "Same Day Service",
    buttonText: "Book Now",
  },
  {
    title: "24/7 Professional",
    highlightedText: "Refrigerator Repair",
    description: "Fast, reliable, and affordable repair services for your home. From specialized fridge cooling solutions to complete care, our certified technicians are ready to restore your comfort.",
    image: "https://img.freepik.com/premium-photo/man-repairing-fridge-with-customer_656932-2770.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
    badge: "Certified Technicians",
    buttonText: "Contact Us",
  },
  {
    title: "Complete AC Installation &",
    highlightedText: "AC Repair Services",
    description: "Stay cool all year round with our professional AC installation, maintenance, and repair services. Free inspection with every repair call. Energy-efficient solutions available.",
    image: "https://img.freepik.com/free-photo/wireman-dissasembling-air-conditioner_482257-91015.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
    badge: "24/7 Support",
    buttonText: "Call Us",
  }
];

export default function HomeHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const phoneNumber = "00971529820114";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsapp = () => {
    const message = encodeURIComponent("Hello, I want to contact you.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

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

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#142A51]/50 via-[#142A51]/70 to-[#142A51]/90" />
          <div className="absolute inset-0 bg-[#0195FF]/10 mix-blend-overlay" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute z-30 inset-y-0 left-0 hidden md:flex items-center px-2 sm:px-6">
        <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#FFBB00] hover:text-[#142A51] transition-all">
          <FaChevronLeft />
        </button>
      </div>

      <div className="absolute z-30 inset-y-0 right-0 hidden md:flex items-center px-2 sm:px-6">
        <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#FFBB00] hover:text-[#142A51] transition-all">
          <FaChevronRight />
        </button>
      </div>

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

            <p className="text-white/80 text-lg mb-10 max-w-3xl leading-relaxed font-light px-4">
              {currentSlide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:w-auto">

              {/* ✅ CALL BUTTON LOGIC */}

              <button
                onClick={handleCall}
                className="w-full sm:w-auto cursor-pointer bg-[#FFBB00] hover:bg-[#feaa14] text-[#142A51] md:font-bold px-2 md:px-8 py-2 rounded-full flex items-center justify-center gap-3 transition-colors shadow-lg shadow-[#FFBB00]/20 text-lg"
              >
                <FaPhoneAlt />
                <a href="https://wa.me/971529820114" target="_blank" rel="noopener noreferrer">
                  {currentSlide.buttonText}
                </a>
              </button>

              {/* ✅ WHATSAPP BUTTON LOGIC */}
              <button
                onClick={handleWhatsapp}
                className="w-full sm:w-auto border-2 cursor-pointer border-white/30 hover:border-white hover:bg-white/10 text-white md:font-semibold px-4 md:px-5 py-2 rounded-full flex items-center justify-center gap-3 transition-colors text-lg"
              >
                <FaWhatsapp size={22} />
                <a href="https://wa.me/+971529820114" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </button>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative hidden z-20 w-full max-w-7xl mx-auto px-6 pb-10 md:flex justify-center items-center">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-10 bg-[#FFBB00]" : "w-2 bg-white/30 hover:bg-white/60"
                }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}