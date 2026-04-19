import type { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import { Icons } from "../icons";
import { cn, formatPrices } from "@/lib/utils";
interface ProductProps extends React.HTMLAttributes<HTMLDivElement>{
  product: Product;
}

const ProductCard = ({ product,className }: ProductProps) => {
  return (
    <Card className={cn("size-full overflow-hidden rounded-lg gap-0",className)}>
      <Link to={`/products/${product.id}`} aria-label={product.name}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <img
              src={product.images[0]}
              alt="product image"
              className="size-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
        </CardHeader>
      </Link>
      <CardContent className="space-y-1.5 p-4 ">
        <CardTitle className="line-clamp-1">{product.name}</CardTitle>
        <CardDescription className="line-clamp-1">{formatPrices(product.price) } {product.discount>0 && (
            <span className="ml-2 font-extralight line-through">{formatPrices(product.discount)}</span>
        )}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-1 border-0">
        {product.status === "sold" ? (
          <Button
            size={"sm"}
            disabled={true}
            aria-label="Sold Out"
            className="h-8 w-full rounded-sm font-bold"
          >
            Sold Out
          </Button>
        ) : (
          <Button size={"sm"} className="h-8 w-full rounded-sm font-bold bg-own"><Icons.Plus className=""/> Add to cart</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
