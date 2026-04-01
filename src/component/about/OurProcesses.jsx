import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaTools, FaCheckCircle, FaHeadset } from "react-icons/fa";

function OurProcesses() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const steps = [
    {
      title: "Initial Consultation",
      desc: "We discuss your appliance issue and schedule a quick inspection.",
      icon: <FaPhoneAlt />,
    },
    {
      title: "Customized Solutions",
      desc: "Our technician diagnoses the fault and recommends the best repair plan.",
      icon: <FaTools />,
    },
    {
      title: "Final Walkthrough",
      desc: "After repair, we test the appliance and confirm proper operation.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Ongoing Support",
      desc: "We provide guidance and support for maintenance and future issues.",
      icon: <FaHeadset />,
    },
  ];

  return (
    <section className="w-full py-20 px-6 relative">

      {/* GLOW */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#FFC527] opacity-10 blur-[160px] rounded-full"></div>

      {/* HEADER */}
      <div className="text-center mb-14" data-aos="fade-up">

        <h2 className="text-4xl md:text-5xl font-bold text-[#FFC527]">
          Our Process
        </h2>

        <p className="text-black mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Efficient Appliance Repair, Step by Step — We follow a simple and professional process to ensure quality service every time.
        </p>

        {/* DECOR LINE */}
        <div className="flex items-center justify-center mt-5">
          <div className="w-16 h-[2px] bg-[#FFC527]"></div>
          <div className="w-3 h-3 bg-[#FFC527] mx-2 rotate-45"></div>
          <div className="w-16 h-[2px] bg-[#FFC527]"></div>
        </div>

      </div>

      {/* PROCESS CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 group">

        {steps.map((step, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="relative bg-[#0f1f3d] p-6 rounded-xl border border-[#FFC527]/20 shadow-lg  "
          >

            {/* NUMBER */}
            <div className="absolute -top-4 left-5 w-10 h-10 bg-[#FFC527] text-[#142A51] flex items-center justify-center font-bold rounded-full shadow-md border-2 border-[#0f1f3d]">
              {index + 1}
            </div>

            {/* ICON */}
            <div className="text-[#FFC527] text-3xl mb-4 mt-4 group-hover:hover:shadow-[#FFC527]/10 hover:-translate-y-2 transition duration-300 ">
              {step.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-[#FFC527] mb-2">
              {step.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {step.desc}
            </p>

            {/* HOVER LINE */}

          </div>
        ))}

      </div>

    </section>
  );
}

export default OurProcesses;