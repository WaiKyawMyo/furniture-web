import BlogCard from "@/components/blogs/BlogCard";
import CarouselPlugin from "@/components/products/CarouselCard";
import { Button } from "@/components/ui/button";
import Couch from "@/data/images/couch.png";
import { posts } from "@/data/posts";
import { products } from "@/data/products";
import { Link } from "react-router";

const samplePosts = posts.slice(0,3)

const Home = () => {
  const Title = ({title,href,sideText}:{title:string,href:string,sideText:string})=> (
    <div className="px-4 md:px-0 lg:px-0 mt-28 mb-10 flex flex-col lg:flex-row lg:justify-between md:flex-row md:justify-between ">
      <h2 className="text-2xl font-bold mb-4 md:mb-0">{title}</h2>
      <Link className="text-muted-foreground font-semibold underline" to={href}>{sideText}</Link>
    </div>
  )
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
      <Title title="Recnt Blog" href="/blogs" sideText="View All Posts"/>
      <BlogCard posts={samplePosts}/>
    </div>
  );
};

export default Home;
