"use client";

import Image from "next/image";

const ContactHero = () => {
  return (
    <section className="relative h-[50vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image/banner.png"
          alt="Glassblower at work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-center text-center">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 mt-20">
                <span className="block">CONTACT US</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-semibold">
                Get in touch with us!!!
              </p>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Have questions about our glass art? Want to discuss a custom
                piece? We&#39;d love to hear from you and help bring your vision
                to life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rounded bottom corners */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-3xl"></div>
    </section>
  );
};

export default ContactHero;
