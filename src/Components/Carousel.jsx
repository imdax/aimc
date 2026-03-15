import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Family & Partner Visas",
    image:
      "https://images.unsplash.com/photo-1541679368093-5c967ac6de11?q=80&w=687&auto=format&fit=crop",
  },
  {
    title: "Skilled & Work Visas",
    image:
      "https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "Student & Graduate Visas",
    image:
      "https://images.unsplash.com/photo-1756272753586-09924e78d51b?q=80&w=1374&auto=format&fit=crop",
  },
  {
    title: "Business & Investment Visas",
    image:
      "https://plus.unsplash.com/premium_photo-1697738734543-9bda15604cd9?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Skills Assessment & Migration Advice",
    image:
      "https://images.unsplash.com/photo-1753200468785-eecdd7f6014c?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "Refugee & Humanitarian Visas",
    image:
      "https://images.unsplash.com/photo-1727627441693-8f3be59d1778?w=600&auto=format&fit=crop",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(1);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const getSlide = (offset) =>
    slides[(index + offset + slides.length) % slides.length];

  return (
    <section className="w-full py-24 flex flex-col items-center">
      {/* Carousel */}
      <div className="flex items-center justify-center gap-6 lg:gap-12 w-full max-w-375 px-6">
        {/* LEFT CARD */}
        <motion.div
          key={getSlide(-1).image}
          initial={{ opacity: 0, scale: 0.9, x: -60 }}
          animate={{ opacity: 0.4, scale: 0.95, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block w-75 lg:w-90 h-105 lg:h-130 rounded-3xl overflow-hidden relative"
        >
          <img
            src={getSlide(-1).image}
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-8 left-8 text-white font-semibold text-xl w-55">
            {getSlide(-1).title}
          </div>
        </motion.div>

        {/* CENTER CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={getSlide(0).image}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[650px] lg:w-[820px] h-[420px] lg:h-[520px] rounded-3xl overflow-hidden relative shadow-2xl"
          >
            <img
              src={getSlide(0).image}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-10 left-10 text-white backdrop-blur-sm border-0 rounded-2xl font-bold text-2xl md:text-3xl lg:text-4xl p-2">
              {getSlide(0).title}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT CARD */}
        <motion.div
          key={getSlide(1).image}
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 0.4, scale: 0.95, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block w-[300px] lg:w-[360px] h-[420px] lg:h-[520px] rounded-3xl overflow-hidden relative"
        >
          <img src={getSlide(1).image} className="w-full h-full object-cover" />

          <div className="absolute bottom-8 left-8 text-white font-semibold text-xl w-[220px]">
            {getSlide(1).title}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center w-full max-w-[1500px] px-8 mt-12">
        {/* Counter */}
        <div className="text-4xl font-semibold">
          {String(index + 1).padStart(2, "0")}
          <span className="text-gray-400 text-xl"> / {slides.length}</span>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <button
            onClick={prev}
            className="w-14 h-14 rounded-full border flex items-center justify-center hover:bg-gray-200 transition"
          >
            <i className="ri-arrow-left-line text-2xl"></i>
          </button>

          <button
            onClick={next}
            className="w-14 h-14 rounded-full border flex items-center justify-center hover:bg-gray-200 transition"
          >
            <i className="ri-arrow-right-line text-2xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
