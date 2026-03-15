import React from "react";

const Strip = () => {
  const items = [
    "Skilled Migration",
    "Partner & Spouse Visas",
    "Student Visas",
    "Visitor Visas",
    "Refugee & Humanitarian",
    "Skills Assessment",
    "Working Holiday Visas",
    "Business & Investment Visas",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#c1121f] py-5">
      <div className="flex whitespace-nowrap marquee">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center text-white text-lg font-medium mx-10"
          >
            <span>{item}</span>

            <span className="mx-10 text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strip;
