import { cn } from "@/lib/utils";
import React from "react";

type FeaturedProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Featured({ className, children }: FeaturedProps) {
  return (
    <section
      className={cn(
        "flex-center",
        "flex-col",
        "sm:pt-[14rem]",
        "font-oswald",
        "px-3",
        // "py-0",
        className
      )}
    >
      {children}
    </section>
  );
}
