"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
}

const Testimonials = ({
  title = "WHAT OUR CLIENTS SAY",
  subtitle = "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem",
}: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jack William",
      rating: 4,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 5,
      text: "Princey's glass work is absolutely stunning. The attention to detail and craftsmanship is unmatched. I love my custom pendant!",
    },
    {
      id: 3,
      name: "Michael Chen",
      rating: 5,
      text: "The quality of the glass pieces is incredible. Each piece tells a story and the colors are so vibrant. Highly recommend!",
    },
    {
      id: 4,
      name: "Emma Davis",
      rating: 4,
      text: "Beautiful craftsmanship and excellent customer service. The custom piece I ordered exceeded my expectations.",
    },
    {
      id: 5,
      name: "David Wilson",
      rating: 5,
      text: "Amazing work! The glass pendant I received is not just jewelry, it's a piece of art. Will definitely order more.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? "text-yellow-400 fill-current" : "text-yellow-400"
        }`}
      />
    ));
  };

  return (
    <div className="bg-[#F5F5DC] py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Aligned with testimonial box */}
        <div className="mb-12 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Testimonials Container */}
          <div className="px-16">
            <div className="flex transition-transform duration-500 ease-in-out">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full flex-shrink-0 ${
                    index === currentIndex ? "block" : "hidden"
                  }`}
                >
                  <div className="bg-[#727D57] rounded-3xl p-8 shadow-xl">
                    <div className="text-white text-center">
                      {/* Name */}
                      <h3 className="text-xl font-bold mb-4">
                        {testimonial.name}
                      </h3>

                      {/* Star Rating */}
                      <div className="flex items-center justify-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-white/80 leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-[#727D57]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
