import React from "react";
function AboutHead() {
  return (
    <div
      className="w-full min-h-[100%] flex items-center justify-center px-6 md:px-16 py-12 bg-[#142A51] relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/28/97/73/2897732b0e09a34ed7bd7fe2fa2d5b33.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#142A51]/35"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl w-full text-white">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFBB00]">
            About Us
          </h1>

          {/* DECORATIVE LINE */}
          <div className="flex items-center justify-center mt-4">
            <div className="w-16 h-[2px] bg-[#FFBB00]"></div>
            <div className="w-3 h-3 bg-[#FFBB00] mx-2 rotate-45"></div>
            <div className="w-16 h-[2px] bg-[#FFBB00]"></div>
          </div>
        </div>

        {/* CONTENT BOX */}
        <div className="rounded-2xl p-6 md:p-10 shadow-2xl">
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">
            We are a professional service company dedicated to providing high-quality repair solutions for your home appliances. 
            Our goal is to deliver fast, reliable, and affordable services with complete customer satisfaction.
          </p>

          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">

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
    <div className="bg-[#142A51]/80 border border-[#FFBB00]/30 p-5 rounded-xl text-center hover:scale-105 transition duration-300 shadow-lg">
      <h3 className="text-[#FFBB00] font-semibold text-lg mb-2">{title}</h3>
      <div className="w-12 h-[2px] bg-[#FFBB00] mx-auto mb-3"></div>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  );
};

export default AboutHead;