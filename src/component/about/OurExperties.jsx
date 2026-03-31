import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OurExperties() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const services = [
    {
      title: "Fridge Repair",
      desc: "Quick and reliable fridge repair services.",
      img: "https://i.pinimg.com/736x/14/77/51/14775193ea0ef9566e608193200eb3ae.jpg",
    },
    {
      title: "Washing Machine",
      desc: "Expert solutions for all machine issues.",
      img: "https://i.pinimg.com/736x/9f/24/27/9f2427984723213e5d3485be037e03dd.jpg",
    },
    {
      title: "Stove Repair",
      desc: "Safe gas and electric stove fixing.",
      img: "https://i.pinimg.com/736x/07/aa/82/07aa82b0a5cb4d0063028fc4250235ab.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#142A51] py-16 px-4 text-white relative">

      {/* GLOW */}
      <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#FFC527] opacity-10 blur-[140px] rounded-full"></div>

      {/* MAIN CARD */}
      <div className="max-w-5xl mx-auto bg-[#0f1f3d] rounded-xl p-8 relative border border-[#FFC527]/20 shadow-lg">

        {/* HEADING */}
        <div className="text-center mb-6" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFC527]">
            Our Expertise
          </h2>

          <p className="text-gray-300 text-sm mt-2 max-w-xl mx-auto">
            Professional repair services with reliable availability and expert technicians.
          </p>
        </div>

        {/* SERVICES */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10 relative">

          {services.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="group relative w-full md:w-1/3 bg-[#142A51] rounded-lg shadow-md border border-[#FFC527]/20 overflow-hidden hover:shadow-[#FFC527]/10 transition duration-300"
            >

              {/* IMAGE */}
              <div className="h-32 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* TEXT */}
              <div className="p-4 text-center">
                <h3 className="text-[#FFC527] font-semibold text-md">
                  {item.title}
                </h3>

                {/* Hidden on default, slight reveal on hover */}
                <p className="text-gray-300 text-xs mt-2 opacity-80 group-hover:opacity-100 transition">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

          {/* OVERLAPPING BOTTOM EFFECT */}
          <div className="hidden md:block absolute bottom-[-20px] left-0 w-full h-10 bg-transparent"></div>

        </div>

      </div>
    </section>
  );
}

export default OurExperties;