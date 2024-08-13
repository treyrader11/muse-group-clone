"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { slideUp } from "./motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  isInView?: boolean;
  index?: number;
};

export default function SlideUp({
  children,
  className,
  isInView,
  index,
}: Props) {
  return (
    <motion.span
      variants={slideUp}
      custom={index ?? index}
      animate={isInView ? "open" : "closed"}
      key={index}
      className={cn(className)}
    >
      {children}
    </motion.span>
  );
}
