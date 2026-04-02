import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OurExperties() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const expertise = [
    {
      title: "Advanced Diagnostics",
      desc: "We use modern tools to detect faults accurately and fix issues efficiently.",
    },
    {
      title: "Quick Repair Service",
      desc: "Fast and reliable repair solutions with same-day service availability.",
    },
    {
      title: "Certified Technicians",
      desc: "Highly trained professionals with years of real-world experience.",
    },
    {
      title: "Genuine Parts",
      desc: "We use only original and high-quality parts for long-lasting performance.",
    },
    {
      title: "Affordable Pricing",
      desc: "Transparent pricing with no hidden charges for complete peace of mind.",
    },
    {
      title: "24/7 Support",
      desc: "Always available for emergency repairs anytime you need us.",
    },
  ];

  return (
    <div className="w-full bg-[#0f1f3d] py-24 px-4 md:px-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE (STICKY HEADING) */}
        <div className="md:sticky md:top-32 h-fit" data-aos="fade-right">

          <span className="text-[#FFBB00] text-sm uppercase tracking-widest">
            Our Expertise
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            We Deliver High Quality Appliance Repair Services
          </h2>

          <p className="text-gray-300 max-w-md">
            Our expertise ensures that every appliance is handled with precision,
            care, and advanced techniques to provide long-lasting results.
          </p>

        </div>

        {/* RIGHT SIDE (CARDS) */}
        <div className="flex flex-col gap-8">

          {expertise.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative group"
            >
              {/* GLOW EFFECT */}
              <div className="absolute inset-0 bg-[#FFBB00]/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>

              {/* CARD */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 transition transform group-hover:-translate-y-2 group-hover:shadow-2xl">

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm md:text-base">
                  {item.desc}
                </p>

                {/* LINE ANIMATION */}
                <div className="mt-4 h-[2px] w-0 bg-[#FFBB00] group-hover:w-full transition-all duration-500"></div>

              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default OurExperties;