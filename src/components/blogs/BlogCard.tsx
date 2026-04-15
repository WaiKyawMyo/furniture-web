import type { Post } from "@/types";
import { Link } from "react-router";

interface PostProps {
  posts: Post[];
}

const BlogCard = ({ posts }: PostProps) => {
  return (
    <div className="my-8 grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-0">
      {posts.map((post) => (
        <Link key={post.id} to={`/blogs/${post.id}`}>
          <img
            src={post.image}
            alt="Blog post"
            className="w-full rounded-2xl mb-4"
          />
          <h3 className="line-clamp-1 ml-4 font-semibold ">{post.title}</h3>
          <div className="ml-4 mt-2 text-sm">
            <span>
              by <span className="font-semibold">{post.author}</span> on 
               <span className="font-semibold"> {post.updated_at}</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
