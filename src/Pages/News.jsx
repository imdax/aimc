import React from "react";
import { Link } from "react-router-dom";

export default function News() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#003049] px-6">
      <div className="text-center max-w-xl">
        <i className="ri-newspaper-line text-7xl text-[#c1121f]"></i>

        <h1 className="text-5xl font-bold mt-6 text-white">
          News Section Coming Soon
        </h1>

        <p className="mt-6 text-white leading-relaxed">
          We will soon publish the latest updates on Australian immigration
          policies, visa changes, and migration opportunities to keep you
          informed.
        </p>

        <Link
          to="/"
          className="inline-block mt-10 px-8 py-3 bg-[#c1121f] text-white rounded-full hover:bg-[#780000] transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
