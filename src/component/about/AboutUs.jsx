import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const sections = [
    {
      title: "Who We Are",
      desc: "We are a professional repair service platform delivering reliable, fast, and high-quality appliance repair solutions with complete customer satisfaction.",
      img: "https://i.pinimg.com/736x/02/4b/e7/024be73b9b54b831ac5a2f0762f1e623.jpg",
    },
    {
      title: "Our Mission",
      desc: "Our mission is to provide affordable and efficient repair services at your doorstep while ensuring trust, quality, and long-term relationships.",
      img: "https://i.pinimg.com/736x/a7/1f/33/a71f33faf6e65d10ebef37e43c76e87c.jpg",
    },
    {
      title: "Our Expertise",
      desc: "We specialize in repairing fridge, dishwasher, washing machine, gas cooker, and electric stove with highly trained technicians.",
      img: "https://i.pinimg.com/736x/14/77/51/14775193ea0ef9566e608193200eb3ae.jpg",
    },
    {
      title: "Why Choose Us",
      desc: "We guarantee professional service, transparent pricing, and quick response time to ensure customer satisfaction every time.",
      img: "https://i.pinimg.com/736x/9d/06/2a/9d062af5afaa17d787f81deecfde63de.jpg",
    },
  ];

  return (
    <section className="w-full py-16 px-6 relative">

      {/* GLOW EFFECT */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#FFC527] opacity-10 blur-[160px] rounded-full"></div>

      {/* HEADING */}
      <div className="text-center mb-14" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FFC527]">
          Why Choose Us
        </h2>

        <p className="text-black mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Discover who we are, what we do, and why we are trusted by hundreds of customers.
        </p>

        {/* LINE DECOR */}
        <div className="flex items-center justify-center mt-5">
          <div className="w-16 h-[2px] bg-[#FFC527]"></div>
          <div className="w-3 h-3 bg-[#FFC527] mx-2 rotate-45"></div>
          <div className="w-16 h-[2px] bg-[#FFC527]"></div>
        </div>
      </div>

      {/* TIMELINE WRAPPER */}
      <div className="relative max-w-6xl mx-auto">

        {/* CENTER LINE */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-[#FFC527]/30 transform -translate-x-1/2"></div>

        {/* SECTIONS */}
        <div className="space-y-16">

          {sections.map((sec, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* NUMBER DOT */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-[#FFC527] text-[#142A51] font-bold items-center justify-center rounded-full shadow-lg z-10">
                {index + 1}
              </div>

              {/* IMAGE */}
              <div
                className="w-full md:w-1/2"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <img
                  src={sec.img}
                  alt={sec.title}
                  className="w-full h-64 object-cover rounded-xl border border-[#FFC527]/30 shadow-lg hover:scale-[1.02] transition duration-300"
                />
              </div>

              {/* TEXT */}
              <div
                className="w-full md:w-1/2"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <div className="bg-[#0f1f3d] p-6 rounded-xl border border-[#FFC527]/20 shadow-md hover:shadow-[#FFC527]/10 transition duration-300">

                  <h3 className="text-2xl font-semibold text-[#FFC527] mb-3">
                    {sec.title}
                  </h3>

                  <div className="w-12 h-[2px] bg-[#FFC527] mb-4"></div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {sec.desc}
                  </p>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default AboutUs;