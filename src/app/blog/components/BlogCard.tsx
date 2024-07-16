"use client";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
    console.log("🚀 ~ BlogCard ~ blog:", blog)

  return (
    <Link
      className="hover:ring-2 rounded-lg ring-blue-500 transition-all max-w-60"
      href={`/blog/${blog.fields.slug}`}
    >
      <div className="card-body">
        <h3 className="card-title hover:text-blue-500">{blog.fields.title}</h3>
        <p></p>
      </div>

    </Link>
  );
};

export default BlogCard;
