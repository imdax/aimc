import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const sentence =
  "Turning Australian Dreams into Reality with Expert Precision.";

const words = sentence.split(" ");

function HeroSection() {
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1633&auto=format&fit=crop"
          className="w-full h-[100%] object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative w-full px-6 md:px-16 lg:px-24 xl:px-32 py-20"
      >
        <div className="max-w-[900px]">
          {/* Animated Heading */}
          <h1
            className="font-bold text-white leading-[1.05]
            text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px]"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                transition={{
                  delay: i * 0.18,
                  duration: 0.5,
                }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="text-white mt-6 max-w-[650px]
            text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed"
          >
            Navigating Australian migration can be complex. At AIMC, we combine
            legal expertise with a personalized touch to simplify your journey
            toward a new life. Led by Dr. Lidia Paul, we specialize in
            high-success visa strategies for families, professionals, and
            students.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <button className="bg-[#c1121f] text-white font-semibold py-4 px-8 rounded-lg hover:bg-red-800 transition">
              Get Started Today
            </button>

            <button className="border border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-black transition">
              View Visa Types
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
      >
        <i className="ri-arrow-down-line text-2xl"></i>
      </motion.div>
    </section>
  );
}

export default HeroSection;
