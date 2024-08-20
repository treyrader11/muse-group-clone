import { cn } from "@/lib/utils";
import React from "react";

type LoadMoreProps = {
  onClick: () => void;
  className?: string;
};

export default function LoadMore({ onClick, className }: LoadMoreProps) {
  return (
    <section className={cn(className)}>
      <a
        onClick={onClick}
        aria-label="Next Page"
        className={cn(
          "bg-black",
          "mx-auto",
          "min-h-20",
          "w-full",
          "rounded-2xl",
          "md:rounded-[32px]",
          "flex-center",
          "min-h-[128px]",
          "hover:opacity-90",
          "text-5xl",
          "font-oswald",
          "uppercase",
          "text-white",
          "font-[500]",
          "tracking-tighter",
          "leading-[44px]"
        )}
      >
        Load More
      </a>
    </section>
  );
}
