"use client";

import Link from "next/link";
import Image from "next/image";

interface CustomWorkProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

const CustomWork = ({
  title = "REQUEST CUSTOM WORK",
  description = "Ready to bring your vision to life? I specialize in creating one-of-a-kind glass pieces that reflect your unique style and personality. Whether it's a special gift, a statement piece for your home, or a custom design you've been dreaming of, let's make it happen together.",
  ctaText = "Start Now",
  ctaLink = "/custom-work",
}: CustomWorkProps) => {
  return (
    <div className="bg-[#727D57] pt-10 pb-10 px-3 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[700px]">
          {/* Overlapping Image */}
          <div className="-mt-48">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-[500px] lg:h-[700px] flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/image/custom.jpg"
                  alt="Glass working process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Custom Work Content */}
          <div className="text-white">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
              <div className="space-y-5">
                <p className="text-lg text-white/90 leading-relaxed">
                  {description}
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  Every custom piece starts with a conversation about your
                  vision, your style, and your story. I&apos;ll work closely
                  with you to understand your needs, then bring your ideas to
                  life with the same passion and precision that goes into every
                  piece in my collection.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href={ctaLink}
                  className="inline-flex items-center px-8 py-4 bg-black text-white font-bold text-lg rounded-2xl hover:bg-[#727D57] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomWork;
