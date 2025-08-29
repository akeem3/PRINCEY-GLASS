"use client";

import ProductCard from "./ProductCard";

// Sample product data - will be replaced with API data later
const sampleProducts = [
  {
    id: 1,
    name: "Pendant One",
    description: "Iridescent multi-colored glass pendant",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate1.jpg",
  },
  {
    id: 2,
    name: "Pendant Two",
    description: "Vibrant red glass pendant",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate2.jpg",
  },
  {
    id: 3,
    name: "Pendant Three",
    description: "Blue and grey swirled glass pendant",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate3.jpg",
  },
  {
    id: 4,
    name: "Pendant Four",
    description: "Golden amber glass pendant",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate1.jpg",
  },
  {
    id: 5,
    name: "Pendant Five",
    description: "Emerald green glass pendant",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate2.jpg",
  },
  {
    id: 6,
    name: "Pendant Six",
    description: "Purple and silver glass pendant",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate3.jpg",
  },
  {
    id: 7,
    name: "Pendant Seven",
    description: "Ocean blue glass pendant",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate1.jpg",
  },
  {
    id: 8,
    name: "Pendant Eight",
    description: "Sunset orange glass pendant",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate2.jpg",
  },
  {
    id: 9,
    name: "Pendant Nine",
    description: "Rose pink glass pendant",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate3.jpg",
  },
  {
    id: 10,
    name: "Pendant Ten",
    description: "Midnight black glass pendant",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate1.jpg",
  },
  {
    id: 11,
    name: "Pendant Eleven",
    description: "Pearl white glass pendant",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate2.jpg",
  },
  {
    id: 12,
    name: "Pendant Twelve",
    description: "Rainbow iridescent glass pendant",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate3.jpg",
  },
];

const ProductGrid = () => {
  return (
    <section id="products" className="bg-beige py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
