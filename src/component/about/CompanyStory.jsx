import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function CompanyStory() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="w-full bg-[#142A51] py-20 px-6 text-white relative">

      {/* GLOW */}
      <div className="absolute top-[-150px] right-[-150px] w-[350px] h-[350px] bg-[#FFC527] opacity-10 blur-[160px] rounded-full"></div>

      <div className="max-w-6xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div data-aos="fade-right">

            <h2 className="text-4xl md:text-5xl font-bold text-[#FFC527]">
              Company Story
            </h2>

            <h3 className="text-xl mt-4 font-semibold text-gray-200">
              Trusted Appliance Repair Experts in Dubai
            </h3>

            <p className="text-gray-300 mt-4 leading-relaxed text-sm md:text-base">
              We have built our reputation by delivering reliable repair services
              for refrigerators, washing machines, cookers, and other kitchen
              appliances across Dubai. Our skilled technicians focus on fast
              response, quality workmanship, and customer satisfaction on every
              service call.
            </p>

            {/* SMALL LINE */}
            <div className="w-16 h-[2px] bg-[#FFC527] mt-6"></div>

          </div>

          {/* IMAGE / VISUAL */}
          <div data-aos="fade-left">
            <img
              src="https://i.pinimg.com/736x/28/97/73/2897732b0e09a34ed7bd7fe2fa2d5b33.jpg"
              alt="company"
              className="w-full h-[300px] object-cover rounded-xl shadow-lg border border-[#FFC527]/20 hover:scale-[1.03] transition duration-300"
            />
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">

          <div
            data-aos="zoom-in"
            className="bg-[#0f1f3d] p-6 rounded-xl border border-[#FFC527]/20 shadow-md hover:shadow-[#FFC527]/10 transition duration-300"
          >
            <h2 className="text-3xl font-bold text-[#FFC527]">
              12<span className="text-lg">k</span>
            </h2>
            <p className="text-gray-300 mt-2 text-sm">Total Projects</p>
          </div>

          <div
            data-aos="zoom-in"
            className="bg-[#0f1f3d] p-6 rounded-xl border border-[#FFC527]/20 shadow-md hover:shadow-[#FFC527]/10 transition duration-300"
          >
            <h2 className="text-3xl font-bold text-[#FFC527]">
              25+
            </h2>
            <p className="text-gray-300 mt-2 text-sm">Team Members</p>
          </div>

          <div
            data-aos="zoom-in"
            className="bg-[#0f1f3d] p-6 rounded-xl border border-[#FFC527]/20 shadow-md hover:shadow-[#FFC527]/10 transition duration-300"
          >
            <h2 className="text-3xl font-bold text-[#FFC527]">
              15+
            </h2>
            <p className="text-gray-300 mt-2 text-sm">Years Experience</p>
          </div>

          <div
            data-aos="zoom-in"
            className="bg-[#0f1f3d] p-6 rounded-xl border border-[#FFC527]/20 shadow-md hover:shadow-[#FFC527]/10 transition duration-300"
          >
            <h2 className="text-3xl font-bold text-[#FFC527]">
              100%
            </h2>
            <p className="text-gray-300 mt-2 text-sm">Customer Satisfaction</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CompanyStory;