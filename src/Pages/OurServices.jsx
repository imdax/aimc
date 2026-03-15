import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function OurServices() {
  const services = [
    {
      title: "Skilled Migration",
      icon: "ri-flight-takeoff-line",
      content:
        "Navigating Subclass 189, 190, and 491 visas. Expert points-test optimization and state nomination strategy.",
    },

    {
      title: "Partner & Spouse Visas",
      icon: "ri-heart-3-line",
      content:
        "Reuniting families through Prospective Marriage (Subclass 300) and Partner visas (820/801 & 309/100).",
    },

    {
      title: "Student & Graduate Visas",
      icon: "ri-graduation-cap-line",
      content:
        "Enrollment assistance and visa processing for international students and graduates (Subclass 500 & 485).",
    },

    {
      title: "Employer Nomination",
      icon: "ri-briefcase-4-line",
      content:
        "Support for Subclass 482 (TSS), 186 (ENS), and 494 (SESR) visas for businesses and workers.",
    },

    {
      title: "Business & Investor Visas",
      icon: "ri-bank-line",
      content:
        "Strategic migration solutions for entrepreneurs and investors entering Australia.",
    },

    {
      title: "Skills Assessment",
      icon: "ri-award-line",
      content:
        "Professional qualification assessment for Engineers Australia, VETASSESS, TRA and more.",
    },

    {
      title: "Visitor & Holiday Visas",
      icon: "ri-earth-line",
      content:
        "Tourist visas, business visitor streams, and working holiday visa processing.",
    },

    {
      title: "Refugee & Humanitarian",
      icon: "ri-shield-user-line",
      content:
        "Legal support for protection visas and humanitarian migration streams.",
    },

    {
      title: "Appeals & Complex Cases",
      icon: "ri-scales-3-line",
      content:
        "AAT appeals, visa cancellations, and complex character or health waivers.",
    },
  ];

  const process = [
    {
      title: "Consultation",
      desc: "A deep dive into your history and migration goals.",
      icon: "ri-discuss-line",
    },

    {
      title: "Strategy",
      desc: "Developing a custom migration roadmap with engineering precision.",
      icon: "ri-lightbulb-line",
    },

    {
      title: "Lodgement",
      desc: "Meticulous document preparation and submission.",
      icon: "ri-file-paper-2-line",
    },

    {
      title: "Grant",
      desc: "Expert liaison with the Department of Home Affairs until your visa is issued.",
      icon: "ri-check-double-line",
    },
  ];

  return (
    <div className="w-full bg-white text-[#003049]">
      {/* ================= HERO ================= */}

      <section className="py-24 px-6 text-center bg-[url('https://images.unsplash.com/photo-1454496406107-dc34337da8d6?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white pt-12">
          Our Visa Services
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-white leading-relaxed">
          Professional migration pathways tailored to your goals. From family
          reunions to skilled professional assessments, we handle the complexity
          so you can focus on the journey.
        </p>
      </section>

      {/* ================= SERVICE GRID ================= */}

      <section className="py-16 px-6 bg-[#f5f5f5]">
        <h2 className="text-center text-4xl font-bold mb-16">Our Services</h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <i className={`${service.icon} text-4xl text-[#c1121f]`}></i>

              <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>

              <p className="mt-4 text-[#669bbc] leading-relaxed">
                {service.content}
              </p>

              <Link
                to="/contact"
                className="inline-block mt-6 text-[#c1121f] font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS FLOW ================= */}

      <section className="py-24 px-6">
        <h2 className="text-center text-4xl font-bold mb-20">
          Your Journey to Approval
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {process.map((step, index) => (
            <div key={index}>
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#c1121f] text-white text-2xl">
                <i className={step.icon}></i>
              </div>

              <h3 className="mt-6 font-semibold text-xl">{step.title}</h3>

              <p className="mt-3 text-[#669bbc]">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-[#003049] text-white py-24 px-6 text-center">
        <h2 className="text-4xl font-bold">
          Not sure which visa is right for you?
        </h2>

        <p className="mt-6 text-[#c2d7e4] text-lg">
          Our experts can assess your eligibility in a 1-on-1 consultation.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#c1121f] rounded-full font-semibold hover:bg-[#780000] transition"
          >
            Book a Consultation
          </Link>

          <Link
            to="/assessment"
            className="px-8 py-4 border border-white rounded-full font-semibold hover:bg-white hover:text-[#003049] transition"
          >
            Take Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
