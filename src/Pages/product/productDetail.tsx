import { Button } from "@/components/ui/button";
import { products } from "@/data/product";
import { Link, useParams } from "react-router";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProductCard from "@/components/Product/ProductCard";
import { Icons } from "@/components/icons";
const productDetail = () => {
  const { productid } = useParams;
  const product = products.find((product) => product.id === productid);
  return (
    <div className=" container mx-auto px-4 md:px-0">
      <Button asChild variant={"outline"} className="mt-8"> 
        <Link to={"/product"}><Icons.ArrowLeft/> All Product </Link>
      </Button>
      <section></section>
      <section className="space-y-6 overflow-hidden">
        <h2 className="line-clamp-1 text-2xl font-bold">More Products from Funiture shop</h2>
        <ScrollArea className="pb-8">
          <div className="flex gap-4">
            {products.slice(0,4).map((item) => (
              <ProductCard key={item.id} product={item} className="min-w-[260]" ></ProductCard>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
};

export default productDetail;
