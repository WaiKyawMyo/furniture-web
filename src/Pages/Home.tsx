
import { CarouselCard } from "@/components/Product/Carouselcard";
import { Button } from "@/components/ui/button";
import couch from "@/data/images/midcentury-modern-grey-sofa-with-wooden-frame.png";
import { Link } from "react-router";
const Home = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="flex flex-col justify-between  lg:flex-row">
        {/* Text Section */}
        <div className="text-center lg:text-left my-8 lg:mt-20  xl:w-2/5">
          <h1 className="text-4xl font-extrabold mb-4 lg:mb-8 lg:text-6xl text-own">Modern Interior Design Studio</h1>
          <p className="mb-6 lg:mb-8 text-own">
            Furniture is an assential component of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          <div className="">
            <Button asChild className="mr-2 rounded-full bg-orange-300 px-8 py-6 text-base font-bold">
              <Link to={""}>Shpo Now</Link>
            </Button>
            <Button variant="outline" asChild className="mr-2 rounded-full px-8 py-6 text-base font-bold text-ownbunx --bun shadcn@latest add carousel">
              <Link to={""}>Explore</Link>
            </Button>
          </div>
        </div>
        {/* Image Section */}
        <img className=" w-full lg:w-3/5 mx-auto" src={couch} alt="Couch" />
      </div>
      <CarouselCard/>
    </div>
  );
};

export default Home;
