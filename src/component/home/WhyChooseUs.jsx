import React, { useRef, useEffect } from 'react';
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
  const autoScrollRef = useRef(null);
  const isHoveringRef = useRef(false);

  // Auto-scroll function
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (!isHoveringRef.current && sliderRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
          // If reached near the end, smoothly reset to start
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            sliderRef.current.scrollTo({ left: 1, behavior: 'instant' });
          } else {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }
      }, 2500);
    };

    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    autoScrollRef.current = setInterval(() => {
      if (!isHoveringRef.current && sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 1, behavior: 'instant' });
        } else {
          sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 2500);
  };

  // Create infinite loop with enough copies
  const infiniteFeatures = [...features, ...features, ...features, ...features];

  return (
    <section className="py-10 w-full md:max-w-6xl mx-auto bg-white relative overflow-hidden">
      
      {/* Background Decor with your colors */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0195FF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFBB00]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#0195FF]/10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-[#0195FF] font-bold tracking-wider text-sm uppercase border-b-2 border-[#FFBB00] pb-2">
              Why Choose Us
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#142A51] mb-4"
          >
            Why Dubai Trusts{' '}
            <span className="text-[#FFBB00]">The Repairing Hub</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            We combine technical expertise with exceptional customer service.
          </motion.p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-[#0195FF]/20 text-[#142A51] hidden md:flex items-center justify-center hover:bg-[#0195FF] hover:text-white hover:border-[#0195FF] transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100"
          >
            <TbChevronLeft size={24} />
          </button>

          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-[#0195FF]/20 text-[#142A51] hidden md:flex items-center justify-center hover:bg-[#0195FF] hover:text-white hover:border-[#0195FF] transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100"
          >
            <TbChevronRight size={24} />
          </button>

          {/* Features Slider */}
          <div className="relative overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex gap-2 md:gap-6 overflow-x-auto scroll-smooth pb-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {infiniteFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={`${feature.id}-${index}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: (index % features.length) * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="snap-start shrink-0 w-[85vw] sm:w-[280px] md:w-[320px] lg:w-[350px] bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#FFBB00]/30 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Fixed height container */}
                    <div className="h-full flex flex-col p-6 md:p-7">
                      
                      {/* Animated Corner Accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FFBB00]/10 to-transparent rounded-bl-3xl" />
                      
                      {/* Icon with your color scheme */}
                      <div className="relative mb-2">
                        <div className="absolute inset-0 bg-[#0195FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative w-14 h-14 rounded-xl bg-[#142A51] flex items-center justify-center transition-all duration-300">
                          <IconComponent size={28} strokeWidth={1.5} className="text-white" />
                        </div>
                      </div>

                      {/* Title with fixed height */}
                      <h3 className="text-xl font-bold text-[#142A51]  transition-colors line-clamp-2 mb-2">
                        {feature.title}
                      </h3>
                      
                      {/* Description with fixed height */}
                      <p className="text-slate-600 leading-relaxed text-sm line-clamp-3 min-h-[84px]">
                        {feature.description}
                      </p>

                      {/* Decorative bottom line */}
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <div className="w-12 h-0.5 bg-[#FFBB00] rounded-full transition-all duration-500" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="hidden md:flex justify-center gap-2 mt-8">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (sliderRef.current) {
                    const cardWidth = 350 + 24; // card width + gap
                    sliderRef.current.scrollTo({
                      left: cardWidth * idx,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="h-2 rounded-full transition-all duration-300 bg-[#0195FF]/30 hover:bg-[#0195FF] w-2 hover:w-6"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}