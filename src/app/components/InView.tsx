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

export default function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
  className,
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions); // not sure if i'll need it
  return (
    <div className={cn("overflow-clip h-fit", className)}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileInView="visible"
        variants={variants}
        transition={transition}
        viewport={{ once: true, amount: 0.25 }} // not working yet
        // viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}
