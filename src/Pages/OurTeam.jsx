import React from "react";
import { motion } from "framer-motion";

export default function OurTeam() {
  const team = [
    {
      name: "Dr. Lidia Paul",
      role: "Principal Registered Migration Agent (MARN 0957235)",
      image:
        "https://aimcaustralianvisas.com/wp-content/uploads/2025/10/imgi_1_eeee-768x768-1.webp",
    },
  ];

  return (
    <section className="w-full bg-[#003049] py-28 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADER */}

        <h2 className="text-4xl md:text-5xl font-bold text-white pt-12">
          Expertise You Can Trust
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-lg text-white leading-relaxed">
          Our success is driven by a team of dedicated professionals committed
          to ethical migration, client success, and transforming lives. Each
          member brings deep industry expertise and a shared commitment to
          excellence in every visa application we
        </p>

        {/* TEAM GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
            >
              {/* IMAGE */}

              <div className="overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[260px] object-cover grayscale"
                />
              </div>

              {/* NAME */}

              <h3 className="mt-6 text-xl font-semibold text-[#333]">
                {member.name}
              </h3>

              {/* ROLE */}

              <p className="text-[#e45724] mt-2 text-sm font-medium">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
