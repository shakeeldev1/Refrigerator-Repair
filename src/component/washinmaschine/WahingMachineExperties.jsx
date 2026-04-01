import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WahingMachineExperties() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const data = [
    {
      title: "Expert Diagnostics",
      desc: "We use advanced tools to quickly identify faults in your washing machine and provide accurate solutions.",
      img: "https://i.pinimg.com/736x/90/4c/95/904c950b08a3f82ce8d3bbeb918cfcba.jpg",
    },
    {
      title: "Professional Repairs",
      desc: "Our trained technicians handle all types of repairs with precision, ensuring long-lasting performance.",
      img: "https://i.pinimg.com/1200x/54/b8/38/54b838690a41998cbf9f6fe71ca8b8b0.jpg",
    },
    {
      title: "Quality Parts Replacement",
      desc: "We replace faulty components with high-quality and durable spare parts for optimal machine life.",
      img: "https://i.pinimg.com/736x/8e/08/0a/8e080a6429c4c493d3e4a62516c60134.jpg",
    },
  ];

  return (
    <div className="w-full bg-white py-20 px-4 md:px-10">

      {/* HEADING */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold text-[#142A51] mb-4">
          Our Expertise
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide professional washing machine repair and maintenance services with trusted expertise.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {data.map((item, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="w-full md:w-1/2">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#142A51] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-6 bg-[#FFBB00] text-[#142A51] px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
                Learn More
              </button>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default WahingMachineExperties;