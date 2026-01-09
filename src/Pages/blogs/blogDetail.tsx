import RichTextRenderer from "@/components/blogs/RichTextRenderer";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";
import { Link, useParams } from "react-router";

export const blogDetail = () => {
  const { postid } = useParams();
  const post = posts.find((post) => post.id === postid);
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <section className="flex flex-col lg:flex-row">
        <section className="w-full lg:w-3/4 lg:pr-16">
          <Button variant="outline" asChild className="mb-6 mt-8">
            <Link to={"/blogs"}>
              <Icons.ArrowLeft />
              All Posts
            </Link>
          </Button>
          {post ? (
            <>
              <h2 className="text-3xl font-extrabold ">{post.title}</h2>
              <div className="text-sm">
                <span>
                  by <span className="font-[600]">{post.author}</span>on
                   <span className="font-[600]">{post.updated_at}</span>
                </span>
              </div>
              <h3 className="text-base font-[400] my-6 ">{post.content}</h3>
              <img src={post.image} alt="" className="w-full rounded-xl" />
              <RichTextRenderer content={post.body} className='my-8'/>
              <div className="mb-12 space-x-2">
                {post.tags.map((tag)=> (
                  <Button variant='secondary'>{tag}</Button>
                ))}
              </div>
            </>
          ) : (
            <p className="text-muted-foreground mt-8 mb-16 text-center text-xl font-bold lg:mt-24">
              No Post found
            </p>
          )}
        </section>
        <section className="w-full lg:w-1/4 lg:mt-24">\
          <div className="mb-8 flex items-center gap-2 text-base font-semibold">
            <Icons.layer />
            <h3>Other Blog Posts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col1">
            {posts.map((post)=>(
              <Link to={`/blogs/${post.id}`} className="mb-6 flex items-start gap-2">
                <img src={post.image} alt='blog post' className="w-1/4  rounded" />
                <div className="w-3/4 text-sm font-[500] text-muted-foreground">
                  <p className="line-clamp-2">{post.content}</p>
                  <i>... see more</i>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};
