"use client";

import { ReactNode, useRef } from "react";
import {
  motion,
  useInView,
  Variant,
  Transition,
  UseInViewOptions,
} from "framer-motion";
import { cn } from "@/lib/utils";

type InViewProps = {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
  className?: string;
};

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const VIEW_OPTIONS = { once: true };

export default function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions = VIEW_OPTIONS,
  className,
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);
  return (
    <div className={cn("overflow-clip h-fit", className)}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        // whileInView="visible"
        // viewport={{ once: true }} // this logic goes in isInView
        variants={variants}
        transition={transition}
      >
        {children}
      </motion.div>
    </div>
  );
}
