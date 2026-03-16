import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const Services = () => {
  return (
    <section className="w-full bg-[#ededed] py-16 md:py-20 lg:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-start gap-12 lg:gap-20">
        {/* LEFT HEADING */}
        <div className="lg:-mt-6">
          <h2 className="text-[42px] sm:text-[60px] lg:text-[90px] leading-[1.05] font-extrabold text-[#1b263b]">
            EXPLORE OUR
            <br />
            VISA SERVICES
          </h2>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-[560px]">
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] lg:leading-[36px] text-[#1b263b] mb-8 lg:mb-10">
            We provide comprehensive migration strategies and meticulous
            document preparation to ensure your application meets the strict
            standards of the Department of Home Affairs. Our team is committed
            to delivering professional, honest, and results-driven advice.
          </p>

          {/* BUTTON FIXED */}
          <Link
            to="/services"
            className="inline-block px-8 py-3 lg:px-10 lg:py-4 border border-[#c1121f] text-[#c1121f] rounded-full text-[16px] lg:text-[20px] font-semibold hover:bg-[#780000] hover:text-white transition"
          >
            View All Services
          </Link>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="mt-16 lg:mt-20">
        <Carousel />
      </div>
    </section>
  );
};

export default Services;
