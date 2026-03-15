import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Engineering-Grade Precision",
    image:
      "https://images.unsplash.com/photo-1744051518421-1eaf2fbde680?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Registered MARA Expertise",
    image:
      "https://aimcaustralianvisas.com/wp-content/uploads/2025/10/imgi_1_eeee-768x768-1.webp",
  },
  {
    title: "Multilingual Global Support",
    image:
      "https://images.unsplash.com/photo-1771924369336-ab113095a229?q=80&w=1470&auto=format&fit=crop",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const card = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function WhatSet() {
  return (
    <section className="w-full">
      {/* RED SECTION */}
      <div className="bg-[#0d1b2a] text-white pt-20 pb-56 px-6 md:px-16 lg:px-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[36px] md:text-[48px] lg:text-[64px] font-semibold tracking-wide"
        >
          WHAT SETS US APART
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-[900px] mx-auto mt-6 text-[16px] md:text-[18px] leading-relaxed text-white/90"
        >
          At AIMC Australian Visas, we bridge the gap between complex migration
          law and successful outcomes through a unique, precision-led approach.
          Directed by Dr. Lidia Paul — a Mechanical Engineer and Registered
          Migration Agent — our firm treats every application as a technical
          project, ensuring meticulous documentation and strategic planning.
        </motion.p>
      </div>

      {/* CARDS */}
      <div className="bg-[#efefef] px-6 md:px-16 lg:px-24 pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 -mt-44"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -12 }}
              className="group rounded-2xl overflow-hidden shadow-xl bg-white cursor-pointer"
            >
              {/* IMAGE */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-fit transition duration-700 group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

                {/* title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-[22px] md:text-[24px] font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhatSet;
