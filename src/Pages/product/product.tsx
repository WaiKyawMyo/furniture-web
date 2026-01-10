import { PaginationBotton } from "@/components/Product/Pagination";
import ProductCard from "@/components/Product/ProductCard";
import ProductFileter from "@/components/Product/ProductFileter";
import { filterList, products } from "@/data/product";

const product = () => {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col lg:flex-row">
        <section className="my-8 ml-4 w-full lg:ml-0 lg:w-1/5">
          <ProductFileter filterList={filterList} />
        </section>
        <section className=" w-full lg:ml-0 lg:w-4/5">
          <h1 className="my-8 ml-4 text-2xl font-bold">All Products</h1>
          <div className="mb-12 grid grid-cols-1 gap-6 gap-y-12 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <PaginationBotton/>
        </section>
      </section>
    </div>
  );
};

export default product;
