import React, { useState } from "react";

export default function Testimonial() {
  const [activeTab, setActiveTab] = useState("clients");
  const [index, setIndex] = useState(0);

  const clientsData = [
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

  const next = () => setIndex((prev) => (prev + 1) % clientsData.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + clientsData.length) % clientsData.length);

  const client = clientsData[index];

  return (
    <section className="w-full bg-[#003049] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* TITLE */}

        <h2 className="text-5xl font-bold text-white pt-12">Success Stories</h2>

        {/* TABS */}

        <div className="flex justify-center mt-12 border-b">
          <button
            onClick={() => setActiveTab("clients")}
            className={`px-8 py-4 font-medium transition ${
              activeTab === "clients"
                ? "bg-white rounded-t-lg shadow text-[#333]"
                : "text-[white]"
            }`}
          >
            Clients
          </button>

          <button
            onClick={() => setActiveTab("videos")}
            className={`px-8 py-4 font-medium transition ${
              activeTab === "videos"
                ? "bg-white rounded-t-lg shadow text-[#333]"
                : "text-white"
            }`}
          >
            Videos
          </button>
        </div>

        {/* CONTENT */}

        <div className="bg-white rounded-3xl shadow-lg p-12 text-left mt-12">
          {activeTab === "clients" && (
            <div>
              {/* STARS */}

              <div className="flex gap-1 text-yellow-400 text-xl mb-6">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              {/* TEXT */}

              <p className="text-gray-600 leading-relaxed text-lg">
                {client.text}
              </p>

              {/* AUTHOR */}

              <div className="mt-10">
                <h4 className="text-2xl font-bold text-[#e45724]">
                  {client.name}
                </h4>

                <p className="text-gray-600">{client.role}</p>
              </div>

              {/* NAVIGATION */}

              <div className="flex justify-between mt-12">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-200"
                >
                  <i className="ri-arrow-left-line text-xl"></i>
                </button>

                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-200"
                >
                  <i className="ri-arrow-right-line text-xl"></i>
                </button>
              </div>
            </div>
          )}

          {activeTab === "videos" && (
            <div className="text-center">
              <p className="text-gray-500 text-lg">
                Video testimonials coming soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
