"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { type BlogPost as TBlogPost } from "@/lib/constants";
import BlogPost from "../../components/BlogPost";
import { AnimatePresence, motion } from "framer-motion";

export default function NewsBlogs({ data }: { data: TBlogPost[] }) {
  return (
    <section>
      <ul
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
        <AnimatePresence mode="wait">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <BlogPost {...item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
}
