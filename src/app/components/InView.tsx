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

const DEFAULT_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const DEFAULT_VIEW_OPTIONS = { once: true };

export default function InView({
  children,
  variants = DEFAULT_VARIANTS,
  transition,
  viewOptions = DEFAULT_VIEW_OPTIONS,
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
        variants={variants}
        transition={transition}
      >
        {children}
      </motion.div>
    </div>
  );
}
