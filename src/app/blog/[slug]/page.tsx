import { contentClient } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
export async function generateStaticParams() {
  const posts = await contentClient.getEntries({ content_type: "blog" });

  return posts.items.map((post) => ({
    slug: post.fields.slug,
  }));
}

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const blogs = await contentClient.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });
  const blog = blogs.items[0];

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, file } = node.data.target.fields;
        return (
          <Image
            src={"https:" + file.url}
            alt={title}
            width={file.details.image?.width || 200}
            height={file.details.image?.height || 200}
          />
        );
      },
    },
  };
  const content = documentToReactComponents(blog.fields.content, options);

  return <div>{content}</div>;

};

export default BlogPage;
