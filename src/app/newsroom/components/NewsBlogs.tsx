import { cn } from "@/lib/utils";
import React from "react";
import { type BlogPost as TBlogPost } from "@/lib/constants";
import BlogPost from "../../components/BlogPost";

export default function NewsBlogs({ data }: { data: TBlogPost[] }) {
  return (
    <section>
      {/* // You can use a key on the parent element (ul or section) that changes when the filtered data changes. This will force React to fully re-render the element and apply the animation again.
          // By setting the key on the section element to something that changes with the data (like data.length), React will treat it as a new element on each filter, thus re-triggering the animation. */}
      <ul
        // key={data.length}
        className={cn(
          "grid",
          data.length > 1 // center and max-width if only 1 blog
            ? "md:grid-cols-2 max-w-7xl"
            : "max-w-4xl grid-cols-1",
          "md:gap-8",
          "lg:gap-[4rem]",
          "sm:px-6",
          "mx-auto"
        )}
      >
        {data.map((item, i) => (
          <li className="animate-fade-in" key={i}>
            <BlogPost {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
