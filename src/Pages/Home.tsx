import BlogCard from "@/components/blogs/BlogCard";
import { CarouselCard } from "@/components/Product/Carouselcard";
import ProductCard from "@/components/Product/ProductCard";
import { Button } from "@/components/ui/button";
import couch from "@/data/images/midcentury-modern-grey-sofa-with-wooden-frame.png";
import { posts } from "@/data/posts";
import { products } from "@/data/product";
import { Link } from "react-router";

const samplePosts = posts.slice(0,3)
const sampleProducts = products.slice(0,4)

const Home = () => {
  const Title = ({
    title,
    href,
    sideText,
  }: {
    title: string;
    href: string;
    sideText: string;
  }) => (
    <div className="mt-28 mb-10 flex flex-col lg:flex-row lg:justify-between px-4 md:px-0">
      <h2 className="text-2xl font-bold mb-4 md:mb-0">{title}</h2>
      <Link className="text-muted-foreground font-semibold underline" to={href}>{sideText}</Link>
    </div>
  );
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col justify-between lg:flex-row">
        {/* Text Section */}
        <div className="my-8 text-center lg:mt-20 lg:text-left xl:w-2/5">
          <h1 className="text-own mb-4 text-4xl font-extrabold lg:mb-8 lg:text-6xl">
            Modern Interior Design Studio
          </h1>
          <p className="text-own mb-6 lg:mb-8">
            Furniture is an assential component of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          <div className="">
            <Button
              asChild
              className="mr-2 rounded-full bg-orange-300 px-8 py-6 text-base font-bold"
            >
              <Link to={""}>Shpo Now</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="text-ownbunx --bun shadcn@latest add carousel mr-2 rounded-full px-8 py-6 text-base font-bold"
            >
              <Link to={""}>Explore</Link>
            </Button>
          </div>
        </div>
        {/* Image Section */}
        <img className="mx-auto w-full lg:w-3/5" src={couch} alt="Couch" />
      </div>
      <CarouselCard Products={products} />
      <Title title="Featured Products" href="/products" sideText="View All Products"/>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {sampleProducts.map((product)=>(
        <ProductCard product={product}/>
      ))
        
      }
      </div>
      
        
      <Title title="Recent Blog" href="/blogs" sideText="View All Posts"/>
      <BlogCard posts={samplePosts} />
    </div>
  );
};

export default Home;
