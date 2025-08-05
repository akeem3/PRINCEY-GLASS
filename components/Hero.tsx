"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero = ({
  subtitle = "Transform your space with handcrafted glass art that captures the essence of modern elegance. Each piece is a testament to timeless craftsmanship.",
  ctaText = "Get Started",
  ctaLink = "/shop",
}: HeroProps) => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
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
          <div className="flex justify-end">
            <div className="max-w-2xl text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 mt-20">
                <span className="block">FIRED BEAUTY</span>
                <span className="block">HANDMADE MAGIC</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                {subtitle}
              </p>
              <Link
                href={ctaLink}
                className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
