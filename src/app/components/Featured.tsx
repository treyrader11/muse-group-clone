"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

type FeaturedProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Featured({ className, children }: FeaturedProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className={cn(
        "flex-center",
        "flex-col",
        // "pt-20",
        // "pt-[128px]",
        "xs:pt-[14rem]",
        "font-oswald",
        "px-3",
        className
      )}
    >
      {children}
    </motion.section>
  );
}
