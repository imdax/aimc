import React from "react";

export default function ContactInfo() {
  return (
    <section className="w-full py-24 bg-[#003049] px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">Contact Us</h2>

        <p className="text-white mt-4">
          Reach out to our migration experts directly.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {/* EMAIL */}

          <a
            href="mailto:aimc.australian.visas@gmail.com"
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <i className="ri-mail-line text-4xl text-[#c1121f]"></i>

            <h3 className="mt-4 font-semibold text-lg">Email</h3>

            <p className="text-gray-600 mt-2">
              aimc.australian.visas@gmail.com
            </p>
          </a>

          {/* PHONE */}

          <a
            href="tel:+61123456789"
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <i className="ri-phone-line text-4xl text-[#c1121f]"></i>

            <h3 className="mt-4 font-semibold text-lg">Phone</h3>

            <p className="text-gray-600 mt-2">+61 414 873 868</p>
          </a>

          {/* WHATSAPP */}

          <a
            href="https://wa.me/61414873868
"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <i className="ri-whatsapp-line text-4xl text-green-500"></i>

            <h3 className="mt-4 font-semibold text-lg">WhatsApp</h3>

            <p className="text-gray-600 mt-2">Chat with us instantly</p>
          </a>
        </div>
      </div>
    </section>
  );
}
