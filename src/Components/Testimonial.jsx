import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Krishantha Weerakoon",
    role: "Skilled Migration Candidate",
    text: `"My experience with Dr. Lidia Paul in obtaining my skills assessment was excellent. She supported me greatly, cleared all my queries, and provided prompt responses. The team handled each step in a highly professional manner with clear communication and guidance."`,
  },
  {
    name: "Sudeera Withanage",
    role: "Spouse Visa Success",
    text: `"Dr. Lidia was absolutely outstanding as our migration agent for my partner's spouse visa. Her expertise and dedication made the entire process seamless and stress-free. Thanks to her meticulous guidance, we received our visa grant in just five months."`,
  },
  {
    name: "Nirosha Perera",
    role: "Complex Visa Applicant",
    text: `"I had a complex visa case that required expert handling, and Dr. Lidia Paul was the perfect choice. Her deep understanding of migration law and strategic approach led to a successful outcome."`,
  },
  {
    name: "Hashi Senadipathi",
    role: "Skilled Migration Candidate",
    text: `"Dr. Lidia Paul's expertise and personalized approach made my migration journey smooth and successful. Her attention to detail ensured that every aspect of my application was handled with the utmost care."`,
  },
];

function Testimonial() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir) => {
    setIndex([(index + dir + testimonials.length) % testimonials.length, dir]);
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => clearInterval(autoplay);
  }, [index]);

  const visibleCards = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <section className="w-full bg-[#efefef] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="max-w-[650px]">
            <h2 className="text-[42px] md:text-[56px] lg:text-[72px] font-bold text-[#1b263b] leading-[1.1]">
              THE IMPACT WE CREATE
            </h2>

            <p className="mt-6 text-[16px] md:text-[18px] text-[#1b263b] leading-relaxed">
              We simplify the path to Australia by combining deep legal
              knowledge with a results-oriented approach.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="flex gap-4 mt-6 lg:mt-0">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-200 transition"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>

            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-200 transition"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="mt-16 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -200 : 200, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
              {visibleCards.map((t, i) => (
                <div
                  key={i}
                  className="relative bg-[#c1121f] text-white p-10 rounded-3xl overflow-hidden"
                >
                  {/* decorative circle */}
                  <div className="absolute right-[-100px] bottom-[-100px] w-[350px] h-[350px] bg-white/10 rounded-full"></div>

                  <h3 className="text-[28px] font-semibold">{t.name}</h3>

                  <p className="text-[18px] text-white/90 mt-1">{t.role}</p>

                  <p className="mt-6 leading-relaxed text-[16px]">{t.text}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
