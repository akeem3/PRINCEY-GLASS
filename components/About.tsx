"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

interface AboutProps {
  title?: string;
  greeting?: string;
  description?: string;
  ctaText?: string;
}

const About = ({
  title = "ABOUT PRINCEY",
  greeting = "Hey guys!!",
  description = "Welcome to Princey Glass, where passion meets craftsmanship in every piece we create. I'm Princey, and I've been crafting beautiful glass art for over 4 years now, turning molten glass into stunning pieces that tell stories.",
  ctaText = "Read More",
}: AboutProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="pt-32 pb-48 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* About Content Card */}
            <div className="relative w-full max-w-[500px] h-full">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#5a6445] rounded-3xl"></div>
              <div className="relative bg-[#727D57] rounded-3xl p-10 shadow-xl h-full">
                <div className="text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {title}
                  </h2>
                  <p className="text-xl text-white/90 font-semibold mb-6">
                    {greeting}
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    {description}
                  </p>
                </div>

                <div className="mt-6">
                  <button
                    onClick={openModal}
                    className="inline-flex items-center px-8 py-4 bg-black text-white font-bold text-lg rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {ctaText}
                  </button>
                </div>
              </div>
            </div>

            {/* Image Box - Using Actual Image */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-[500px] flex items-center justify-center">
              <div className="relative w-64 lg:w-80 h-64 lg:h-80">
                <Image
                  src="/image/cate1.jpg"
                  alt="Glass pendant"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="bg-[#727D57] text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">About Princey Glass</h2>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content with Scroll */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-6 text-gray-800">
                <div>
                  <h3 className="text-xl font-bold text-[#727D57] mb-3">
                    My Journey
                  </h3>
                  <p className="leading-relaxed">
                    My journey with glass began 8 years ago when I first
                    discovered the mesmerizing dance of molten glass. What
                    started as a hobby quickly became my passion, and now
                    it&apos;s my life&apos;s work. Every piece I create carries
                    a piece of my story, my growth, and my love for this ancient
                    craft.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#727D57] mb-3">
                    The Craft
                  </h3>
                  <p className="leading-relaxed">
                    Glass blowing is more than just a technique—it&apos;s a
                    meditation, a dance between fire and form. Each piece
                    requires precise timing, temperature control, and an
                    intimate understanding of how glass behaves under heat. When
                    I work with glass, I&apos;m not just shaping material;
                    I&apos;m capturing moments of beauty that will last forever.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#727D57] mb-3">
                    My Studio
                  </h3>
                  <p className="leading-relaxed">
                    My studio is my sanctuary, a place where creativity flows
                    freely and where every tool has its purpose. From the torch
                    that reaches temperatures of 2000°F to the specialized tools
                    that help me shape and form, every element plays a crucial
                    role in bringing my visions to life. The studio is where raw
                    materials—rods of colored glass, clear glass, and various
                    oxides—transform into wearable art.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#727D57] mb-3">
                    The Process
                  </h3>
                  <p className="leading-relaxed">
                    Every piece starts with a vision. I sketch, I plan, and I
                    imagine the final result. Then comes the heat—the glass must
                    be heated to just the right temperature, where it becomes
                    pliable but not too soft. The shaping process is a delicate
                    balance of pressure, timing, and intuition. I use various
                    techniques: marvering (rolling on a steel table), blowing,
                    and sculpting with specialized tools.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#727D57] mb-3">
                    What Makes Each Piece Unique
                  </h3>
                  <p className="leading-relaxed">
                    No two pieces are ever exactly alike. The nature of
                    handcrafted glass means that each piece has its own
                    character, its own story. I incorporate different
                    techniques: fuming with precious metals for iridescent
                    effects, layering colors for depth, and using various oxides
                    for unique textures. Some pieces feature dichroic glass that
                    changes color depending on the angle of light, while others
                    showcase intricate patterns created through careful layering
                    and manipulation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#727D57] mb-3">
                    My Philosophy
                  </h3>
                  <p className="leading-relaxed">
                    I believe that art should be accessible, wearable, and
                    meaningful. Each piece I create is designed to be more than
                    just an accessory—it&apos;s a conversation starter, a piece
                    of art that you can carry with you. Whether it&apos;s a
                    delicate pendant that catches the light just so, or a bold
                    statement piece that commands attention, every creation is
                    made with the intention of bringing joy and beauty to your
                    life.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#727D57] mb-3">
                    The Future
                  </h3>
                  <p className="leading-relaxed">
                    As I continue to grow and evolve as an artist, I&apos;m
                    constantly exploring new techniques, new materials, and new
                    ways to push the boundaries of what&apos;s possible with
                    glass. I&apos;m excited to share this journey with you, to
                    create pieces that resonate with your style and your story.
                    Every piece I make is a step forward in this beautiful,
                    ever-evolving craft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
