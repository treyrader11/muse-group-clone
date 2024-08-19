import { cn } from "@/lib/utils";
import React from "react";
import { type BlogPost as TBlogPost } from "@/lib/constants";
import BlogPost from "../../components/BlogPost";

export default function NewsBlogs({ data }: { data: TBlogPost[] }) {
  return (
    <section className="">
      <ul
        className={cn(
          "grid",
          "md:grid-cols-2",
          "md:gap-8",
          "lg:gap-[4rem]"
        )}
      >
        {data.map((item, i) => (
          <li key={i} className="animate-fade-in">
            <BlogPost {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
