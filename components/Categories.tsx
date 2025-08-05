"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CategoryCard {
  id: string;
  name: string;
  image: string;
  description?: string;
}

interface CategoriesProps {
  title?: string;
  subtitle?: string;
  categories?: CategoryCard[];
  ctaText?: string;
  ctaLink?: string;
}

const Categories = ({
  title = "VIEW OUR CATEGORIES",
  subtitle = "Discover our handcrafted glass collections, each piece tells a story of passion and precision. From elegant accessories to stunning home decor.",
  categories = [
    {
      id: "accessories",
      name: "Accessories",
      image: "/image/cate1.jpg",
    },
    {
      id: "vases",
      name: "Vases & Jars",
      image: "/image/cate2.jpg",
    },
    {
      id: "figurines",
      name: "Figurines",
      image: "/image/cate3.jpg",
    },
  ],
  ctaText = "Go To Shop",
  ctaLink = "/shop",
}: CategoriesProps) => {
  return (
    <div className="bg-olive py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Green portion spread to edges */}
        <div className="bg-[#727D57] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 mb-16 rounded-2xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-72 bg-black">
                <Image
                  src={category.image}
                  alt={`${category.name} collection`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Category Name */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-black">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={ctaLink}
            className="inline-flex items-center px-10 py-5 bg-black text-white font-bold text-lg rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {ctaText}
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
