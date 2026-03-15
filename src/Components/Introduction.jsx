import React from "react";

const Introduction = () => {
  return (
    <section className="w-full bg-[#f3f3f3] py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
              alt="team collage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-[#c1121f]">More Than Just a Visa</span>
            <br />
            <span className="text-black"> A New Beginning.</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            At AIMC, our mantra is "Precision in Every Application." While the
            Immigration Department’s timelines can be daunting, we make the
            process seamless. Whether you are a skilled engineer, a partner
            seeking reunion, or a student aiming for global education, we
            provide the educated insight and accurate data needed to ensure a
            positive outcome.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
