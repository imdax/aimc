import React from "react";

const stories = [
  {
    title: "MetalBiz Recyclers",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600",
  },
  {
    title: "Kennards Hire",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600",
  },
  {
    title: "ABN Group",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600",
  },
];

const ClientStory = () => {
  return (
    <section className="w-full bg-[#f4f4f4] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-[42px] md:text-[60px] lg:text-[72px] font-extrabold text-[#1b263b] leading-[1.1] mb-6">
            Voices of Success
          </h2>

          <p className="max-w-[900px] text-[#1b263b] text-[16px] md:text-[18px] leading-[30px]">
            From daunting applications to granted visas, our clients share their
            stories of transition and triumph. These testimonials reflect our
            commitment to excellence, transparency, and building a community of
            successful migrants.
          </p>
        </div>

        {/* Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.map((story, index) => (
            <div key={index}>
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-[230px] md:h-[260px] lg:h-[280px] object-cover"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                    <i className="ri-play-fill text-3xl text-black ml-1"></i>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[18px] md:text-[20px] font-semibold text-red-600 text-center">
                {story.title}
              </h3>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-end mt-16">
          <button className="px-10 py-4 border border-red-500 text-red-500 rounded-full text-[18px] font-semibold hover:bg-red-500 hover:text-white transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientStory;
