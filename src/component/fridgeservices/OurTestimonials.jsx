import React, { useEffect, useState } from "react";

function OurTestimonials() {
  const testimonials = [
    {
      name: "Ali Raza",
      role: "Homeowner",
      message:
        "Excellent service! My refrigerator was not cooling, and they fixed it within an hour. Highly recommended.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Ahmed Khan",
      role: "Shop Owner",
      message:
        "Very professional team. Quick response and affordable prices. Best fridge repair service in the city.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      name: "Sana Malik",
      role: "Housewife",
      message:
        "I loved their service. The technician was polite and skilled. My fridge is working like new now!",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
      name: "Usman Tariq",
      role: "Business Owner",
      message:
        "Fast, reliable, and trustworthy. They really know what they are doing. Great experience overall.",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide effect (like Flickity)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 md:px-10 py-16">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-[#FFBB00]">
        What Our Customers Say
      </h2>

      <p className="text-gray-700 text-center mb-12 max-w-xl">
        Real feedback from our happy customers who trust our fridge repair services.
      </p>

      {/* Slider */}
      <div className="w-full max-w-5xl overflow-hidden relative">

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="min-w-full flex bg-[#142A51] py-10 rounded flex-col md:flex-row items-center gap-10 px-4"
            >
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg md:text-xl italic text-white leading-relaxed">
                  “{item.message}”
                </p>

                <h3 className="mt-6 text-2xl font-semibold text-[#FFBB00]">
                  {item.name}
                </h3>

                <span className="text-white text-sm">
                  {item.role}
                </span>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full border-4 border-[#FFBB00] shadow-lg"
                />
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-2 mt-8">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-[#FFBB00]" : "bg-gray-700"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default OurTestimonials;