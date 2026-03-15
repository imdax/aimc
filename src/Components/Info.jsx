import React from "react";

export default function Info() {
  return (
    <div className="w-full bg-blue-950 text-white text-lg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-2 flex justify-end items-center gap-6">
        {/* ADDRESS */}
        <div className="flex items-center gap-2">
          <i className="ri-map-pin-line"></i>
          <span>8B/9 Futura Road, Keysborough VIC 3173, Australia</span>
        </div>

        {/* PHONE */}
        <div className="flex items-center gap-2">
          <i className="ri-phone-line"></i>
          <span>+61 414 873 868</span>
        </div>
      </div>
    </div>
  );
}
