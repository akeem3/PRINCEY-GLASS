"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-square">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="p-4 bg-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900">
            {product.name}
          </h3>
          <Badge variant="secondary" className="bg-olive text-white">
            {product.category}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 bg-white">
        <div className="flex gap-2 w-full">
          <Button
            asChild
            className="flex-1 bg-black hover:bg-[#727D57] text-white"
          >
            <Link href={`/shop/${product.id}`}>View Details</Link>
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-black text-black hover:bg-black hover:text-white"
          >
            Buy Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
