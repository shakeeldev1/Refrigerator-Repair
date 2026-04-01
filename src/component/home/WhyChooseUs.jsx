import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  TbClock, 
  TbCertificate, 
  TbBolt, 
  TbCoin, 
  TbLeaf, 
  TbTool,
  TbChevronLeft,
  TbChevronRight
} from 'react-icons/tb';

const features = [
  {
    id: 1,
    title: "24/7 Emergency Availability",
    description: "Appliance breakdowns don't wait for business hours. We provide round-the-clock support in Dubai whenever cooling or mechanical problems strike.",
    icon: TbClock,
  },
  {
    id: 2,
    title: "Certified Professionals",
    description: "Our highly trained technicians diagnose and repair using industry-best standards, ensuring your appliances run safely and efficiently.",
    icon: TbCertificate,
  },
  {
    id: 3,
    title: "Fast Response Time",
    description: "Quick scheduling and prompt arrivals minimize your downtime, restoring your appliance's performance without frustrating delays.",
    icon: TbBolt,
  },
  {
    id: 4,
    title: "Upfront Pricing",
    description: "No hidden fees, no surprises. We provide clear, honest, and transparent quotes before any repair work begins.",
    icon: TbCoin,
  },
  {
    id: 5,
    title: "Eco-Friendly Solutions",
    description: "We focus on efficient repair methods that extend the lifespan of your appliances and improve your home's energy efficiency.",
    icon: TbLeaf,
  },
  {
    id: 6,
    title: "Wide Range of Services",
    description: "From refrigerators to washing machines and ovens, we offer complete repair support for all major household and commercial appliances.",
    icon: TbTool,
  },
];

export default function WhyChooseUs() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      // Scroll by the width of the visible container
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0195FF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFBB00]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading & Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div className="max-w-3xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#142A51]/5 text-[#142A51] font-semibold tracking-wide text-sm mb-4 border border-[#142A51]/10"
            >
              Why Choose Us
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#142A51] mb-6 leading-tight"
            >
              Why Dubai Trusts <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFBB00] to-[#feaa14]">
                The Repairing Hub
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 font-light leading-relaxed"
            >
              We combine technical expertise with exceptional customer service. 
              Here is why hundreds of homes and businesses rely on us for their appliance repairs.
            </motion.p>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-[#142A51] hover:bg-[#0195FF] hover:text-white hover:border-[#0195FF] transition-all duration-300 shadow-sm"
              aria-label="Previous slide"
            >
              <TbChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-[#142A51] hover:bg-[#0195FF] hover:text-white hover:border-[#0195FF] transition-all duration-300 shadow-sm"
              aria-label="Next slide"
            >
              <TbChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Features Slider */}
        <div className="relative -mx-6 px-6">
          {/* Hide scrollbar with CSS (you can add a global utility or inline styles if needed) */}
          <div 
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-10 pt-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Injecting global style for webkit scrollbar hiding just for this container */}
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  // Sizing strategy: 1 card mobile, 2 tablet, 3 desktop, 4 large desktop
                  className="snap-start shrink-0 w-[calc(100%-1rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1rem)] group bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-[#FFBB00]/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Hover Accent Line at the top */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFBB00] to-[#feaa14] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                  <div className="flex flex-col items-start text-left h-full">
                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-2xl bg-[#142A51]/5 text-[#0195FF] flex items-center justify-center mb-6 group-hover:bg-[#142A51] group-hover:text-[#FFBB00] transition-colors duration-300 shrink-0">
                      <IconComponent size={32} strokeWidth={1.5} />
                    </div>

                    {/* Text Content */}
                    <h3 className="text-xl font-bold text-[#142A51] mb-3 group-hover:text-[#0195FF] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed font-light text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}