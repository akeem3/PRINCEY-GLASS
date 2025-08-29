"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Sample product data - will be replaced with API data later
const sampleProducts = [
  {
    id: 1,
    name: "Pendant One",
    description: "Iridescent multi-colored glass pendant",
    longDescription:
      "This stunning iridescent pendant features a beautiful blend of colors that shift and change with the light. Each piece is handcrafted with care, ensuring no two pendants are exactly alike. Perfect for adding a touch of elegance to any outfit.",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate1.jpg",
  },
  {
    id: 2,
    name: "Pendant Two",
    description: "Vibrant red glass pendant",
    longDescription:
      "A bold and vibrant red glass pendant that makes a statement. The rich color and smooth finish create a striking piece that's perfect for those who love to stand out. Handcrafted with premium glass for lasting beauty.",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate2.jpg",
  },
  {
    id: 3,
    name: "Pendant Three",
    description: "Blue and grey swirled glass pendant",
    longDescription:
      "This elegant pendant features a beautiful swirl pattern in shades of blue and grey. The design creates a mesmerizing effect that draws the eye. Perfect for both casual and formal occasions.",
    category: "Accessories",
    price: 2.0,
    image_url: "/image/cate3.jpg",
  },
];

export default function ProductPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);

  // Find the product - in real app this would come from API
  const product =
    sampleProducts.find((p) => p.id === productId) || sampleProducts[0];

  return (
    <main className="bg-beige min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Shop */}
        <div className="mb-8">
          <Button
            asChild
            variant="ghost"
            className="text-black hover:text-olive"
          >
            <Link href="/shop" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Shop
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-olive text-white">
                  {product.category}
                </Badge>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-gray-900 mb-6">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-black hover:bg-[#727D57] text-white h-14 text-lg"
                >
                  Buy Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-black text-black hover:bg-black hover:text-white h-14 text-lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>

              <p className="text-sm text-gray-500 text-center">
                Free shipping on orders over $10 • 30-day return policy
              </p>
            </div>

            {/* Additional Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Product Details</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Material:</span>
                    <span>Handcrafted Glass</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Care:</span>
                    <span>Clean with soft cloth</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Origin:</span>
                    <span>Handmade in Studio</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
