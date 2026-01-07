import BlogPostList from "@/components/blogs/BlogPostList"
import { posts } from "@/data/posts"


const blog = () => {
  return (
    <div className=" container mx-auto">
      <h1 className=" mt-8 text-2xl font-bold text-card md:text-left">Latest Blog Posts</h1>
      <BlogPostList posts={posts}/>
    </div>
  )
}

export default blog