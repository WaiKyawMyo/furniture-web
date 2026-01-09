import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Product } from "@/types";
import { Link } from "react-router";
import { Icons } from "../icons";
import { formatPrice } from "@/lib/utils";
interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <Card className="w-full overflow-hidden rounded-lg">
      <Link to={`/products/${product.id}`} aria-label={product.name}>
        <CardHeader className="border-b p-0 pb-0">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <img
              src={product.images[0]}
              alt="Product image"
              className="size-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="space-y-1.5 p-4">
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          <CardDescription className="line-clamp-1">
            {formatPrice(product.price)}
            {product.discount > 0 && (
              <span className="ml-2 font-extralight line-through">
                {formatPrice(product.discount)}
              </span>
            )}
          </CardDescription>
        </CardContent>
      </Link>

      <CardFooter className="flex-col gap-2">
        {product.status === "sold" ? (
          <Button
            size="sm"
            disabled={true}
            aria-label="Sold Out"
            className="h-8 w-full rounded-sm"
          >
            Sold out
          </Button>
        ) : (
          <Button size="sm" className="bg-own h-8 w-full rounded-sm font-bold">
            <Icons.PlusIcon className="" /> Add To Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
