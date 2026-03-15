import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#003049] px-6">
      <div className="text-center max-w-xl">
        <i className="ri-article-line text-7xl text-[#c1121f]"></i>

        <h1 className="text-5xl font-bold mt-6 text-white">Blog Coming Soon</h1>

        <p className="mt-6 text-white leading-relaxed">
          We are preparing insightful articles and migration updates to help you
          navigate Australian visa pathways. Stay tuned for expert guides,
          industry news, and success stories.
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
