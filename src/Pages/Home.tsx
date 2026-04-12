import CarouselPlugin from "@/components/products/CarouselCard";
import { Button } from "@/components/ui/button";
import Couch from "@/data/images/couch.png";
import { products } from "@/data/products";
import { Link } from "react-router";
const Home = () => {
  return (
    <div className="container mx-auto">
      <div className=" flex flex-col lg:flex-row lg:justify-between ">
        {/* Text Section */}
        <div className="text-center my-8 lg:mt-16 lg:mb-0  lg:text-left lg:w-2/5">
          <h1 className="text-4xl text-own font-extrabold mb-4 lg:mb-8 lg:text-5xl ">
            Modern Interior Design Studio
          </h1>
          <p className="mb-6 lg:mb-8 text-own">
            Funiture is an essential compoenent of any living space, providing
            functionality, comfort,and aesthetic appeal.
          </p>
          <div className="">
            <Button
              asChild
              className="mr-2 rounded-full bg-orange-300  px-8 py-6 text-base font-bold "
            >
              <Link to={"#"}>Shop Now</Link>
            </Button>
            <Button
              variant={"outline"}
              asChild
              className="rounded-full px-8 py-6 font-bold text-own"
            >
              <Link to={"#"}>Explore</Link>
            </Button>
          </div>
        </div>
        {/* Image Section */}
        <img className="w-full lg:3/5" src={Couch} alt="" />
      </div>
      <CarouselPlugin products={products}/>
    </div>
  );
};

export default Home;
