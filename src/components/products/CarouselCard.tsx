"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Product } from "@/types";
import { Link } from "react-router";

interface ProductProp {
  products: Product[];
}
export default function CarouselPlugin({ products }: ProductProp) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent className="-ml-1">
        {products.map((product) => (
          <CarouselItem key={product.id} className="-ml-1">
            <div className="p-1">
              <img
                src={product.images[0]}
                alt={product.name}
                className="size-28 rounded-md"
              />
              <div>
                <h3 className="">{product.name}</h3>
                <p className="">{product.description}</p>

                <Link to={`/products/${product.id}`} className="">
                  Read More
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
