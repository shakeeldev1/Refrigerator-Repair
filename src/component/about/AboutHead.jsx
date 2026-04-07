import React from "react";

function AboutHead() {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 py-10 bg-[#142A51] relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/28/97/73/2897732b0e09a34ed7bd7fe2fa2d5b33.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#142A51]/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl w-full text-white flex flex-col justify-center">

        {/* TITLE */}
        <div className="text-center mb-8 md:mb-10 pt-6 md:pt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFBB00]">
            About Us
          </h1>

          {/* DECORATIVE LINE */}
          <div className="flex items-center justify-center mt-3 md:mt-4">
            <div className="w-10 sm:w-16 h-[2px] bg-[#FFBB00]"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#FFBB00] mx-2 rotate-45"></div>
            <div className="w-10 sm:w-16 h-[2px] bg-[#FFBB00]"></div>
          </div>
        </div>

        {/* CONTENT BOX */}
        <div className="rounded-2xl p-5 sm:p-6 md:p-10 shadow-2xl backdrop-blur-sm bg-[#142A51]/50">
          
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base text-center md:text-left">
            We are a professional service company dedicated to providing high-quality repair solutions for your home appliances. 
            Our goal is to deliver fast, reliable, and affordable services with complete customer satisfaction.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8 md:mt-10">

            <Feature title="Expert Technicians" desc="Skilled professionals with years of experience." />
            <Feature title="Fast Service" desc="Quick response and timely repair solutions." />
            <Feature title="Affordable Pricing" desc="Best services at reasonable and fair prices." />

          </div>

        </div>
      </div>
    </div>
  );
}

/* FEATURE CARD */
const Feature = ({ title, desc }) => {
  return (
    <div className="bg-[#142A51]/80 border border-[#FFBB00]/30 p-4 sm:p-5 rounded-xl text-center hover:scale-105 transition duration-300 shadow-lg">
      <h3 className="text-[#FFBB00] font-semibold text-base sm:text-lg mb-2">
        {title}
      </h3>
      <div className="w-10 sm:w-12 h-[2px] bg-[#FFBB00] mx-auto mb-3"></div>
      <p className="text-gray-300 text-xs sm:text-sm">{desc}</p>
    </div>
  );
};

export default AboutHead;