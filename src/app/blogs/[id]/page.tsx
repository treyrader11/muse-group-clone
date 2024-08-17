import { BLOG_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";
import React from "react";
import BlogPost from "@/app/components/BlogPost";

// async if real db
export default function BlogPostPage({ params }: { params: { id: string } }) {
  const blog = BLOG_DATA.find(({ id }) => id === params.id);
  return (
    <section className="px-4 p-12 xs:px-10">
      {blog && <BlogPost {...blog} />}
    </section>
  );
}
