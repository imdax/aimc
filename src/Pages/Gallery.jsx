import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
  ];

  return (
    <div className="w-full bg-[#f5f5f5]">
      {/* ================= HERO ================= */}

      <section className="relative h-[280px] flex items-center">
        {/* background image */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600)",
          }}
        ></div>

        {/* orange overlay */}

        <div className="absolute inset-0 bg-[#003049]/90"></div>

        {/* grid pattern */}

        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:30px_30px]"></div>

        {/* content */}

        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-bold pt-12">Gallery</h1>

          <p className="mt-3 text-lg">
            Home <span className="mx-2">›</span> Gallery
          </p>
        </div>
      </section>

      {/* ================= GALLERY GRID ================= */}

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-[320px] object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
