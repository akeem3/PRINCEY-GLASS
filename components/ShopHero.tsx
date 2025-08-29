"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ShopHero = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
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
                <span className="block">SHOPPING TIME</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-semibold">
                Get Shopping mudafuckers!!!
              </p>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Discover our collection of handcrafted glass art. Each piece is
                a unique creation that brings beauty and elegance to your space.
              </p>
              <div className="flex justify-center">
                <Link
                  href="#products"
                  className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-2xl hover:bg-[#727D57] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rounded bottom corners */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-3xl"></div>
    </section>
  );
};

export default ShopHero;
