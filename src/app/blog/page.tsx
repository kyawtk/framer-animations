import { contentClient } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Image from "next/image";
import BlogCard from "./components/BlogCard";
const BlogsHomePage = async () => {
  const blogs = await contentClient.getEntries({ content_type: "blog" });

  return (
    <div>
      <div className="flex flex-col gap-2">
        {blogs.items.map((blog) => {
          return (
            <BlogCard
              blog={blog}
              key={blog.sys.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogsHomePage;
