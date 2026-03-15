import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="w-full text-[#1A1A1B] bg-white">
      {/* ================= HERO ================= */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative max-w-4xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Expert Migration Solutions for a Global Future
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Navigating the complexities of Australian migration with precision,
            integrity, and a commitment to your success.
          </p>
        </motion.div>
      </section>

      {/* ================= VISION / MISSION ================= */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold text-[#c1121f]">Vision</h2>

            <p className="mt-4 text-gray-600 text-lg">
              To be the most trusted gateway to Australia, transforming lives
              through honest, data-driven migration expertise.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold text-[#c1121f]">Mission</h2>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              To simplify the migration journey for families and professionals
              by providing meticulous legal guidance. We bridge the gap between
              your dreams and Australian reality ensuring every application is
              handled with the highest professional care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="bg-[#F5F5F5] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            {/* Precision */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <i className="ri-focus-2-line text-4xl text-[#c1121f]"></i>
              <h3 className="mt-4 text-xl font-semibold">Precision</h3>
              <p className="mt-3 text-gray-600">
                Every visa application is treated as a technical project where
                accuracy and detail determine success.
              </p>
            </motion.div>

            {/* Integrity */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <i className="ri-shield-check-line text-4xl text-[#c1121f]"></i>
              <h3 className="mt-4 text-xl font-semibold">Integrity</h3>
              <p className="mt-3 text-gray-600">
                Honest eligibility advice and transparent communication guide
                every migration strategy we deliver.
              </p>
            </motion.div>

            {/* Reliability */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <i className="ri-time-line text-4xl text-[#c1121f]"></i>
              <h3 className="mt-4 text-xl font-semibold">Reliability</h3>
              <p className="mt-3 text-gray-600">
                Our meticulous process ensures results that exceed expectations
                and deliver peace of mind.
              </p>
            </motion.div>

            {/* Empathy */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <i className="ri-heart-line text-4xl text-[#c1121f]"></i>
              <h3 className="mt-4 text-xl font-semibold">Empathy</h3>
              <p className="mt-3 text-gray-600">
                Migration is life-changing. We support every client journey as
                if it were our own.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= AIMC STORY ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">
              Where Engineering Precision Meets Migration Law
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Founded by Dr. Lidia Paul, AIMC Australian Visas was built on the
              belief that migration services should be as accurate as they are
              compassionate. As a Mechanical Engineer and Registered Migration
              Agent (MARN 0957235), Dr. Lidia brings an analytical perspective
              to the migration process.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our firm specializes in navigating complex immigration processing
              timelines using precise documentation and strategic ranking
              systems ensuring your application is optimized for success.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              src="https://aimcaustralianvisas.com/wp-content/uploads/2025/10/imgi_1_eeee-768x768-1.webp"
              alt="Dr Lidia Paul"
              className="rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS SUMMARY ================= */}
      <section className="bg-[#c1121f] text-white py-24 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold">
            Meticulous Process. 100% Compliance.
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            We stay updated with legislative requirements and maintain deep
            knowledge of the Australian Qualifications Network ensuring every
            migration strategy meets the standards required for your visa grant.
          </p>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">
            Ready to Start Your Australian Chapter?
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Link
              to="/team"
              className="px-8 py-4 bg-[#c1121f] text-white rounded-full font-semibold hover:bg-[#d74820] transition"
            >
              Meet Our Team
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 border border-[#c1121f] text-[#c1121f] rounded-full font-semibold hover:bg-[#c1121f] hover:text-white transition"
            >
              Book a Consultation
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
