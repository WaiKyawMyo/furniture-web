import Pagination from "@/components/Product/pagination"
import ProductCard from "@/components/Product/ProductCard"
import ProductFileter from "@/components/Product/ProductFileter"
import { filterList, products } from "@/data/product"

const product = () => {
  return (
    <div className="">
      <section className="">
        <section>
          <ProductFileter title="Furnitures Made By" filterList={filterList.categories}/>
          <ProductFileter title="Furnitures Types" filterList={filterList.types}/>
        </section>
        <section>
          <h1 className="">All Products</h1>
          <div>
            {
              products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
              ))
            }
          </div>
          <Pagination/>
        </section>
      </section>
    </div>
  )
}

export default product