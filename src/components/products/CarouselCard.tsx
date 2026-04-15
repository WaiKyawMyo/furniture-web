"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";


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
          <CarouselItem key={product.id} className="pl-1 lg:basis-1/3">
            <div className="flex p-4 lg:px-4 gap-2">
              <img
                src={product.images[0]}
                alt={product.name}
                className="size-28 rounded-md"
              />
              <div className="">
                <h3 className="line-clamp-1 text-sm font-bold">{product.name}</h3>
                <p className="my-2 line-clamp-2 text-sm text-gray-600 ">{product.description}</p>

                <Link to={`/products/${product.id}`} className="text-sm font-semibold text-own">
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
