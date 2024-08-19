"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import {
  // type Variants
  motion,
  useInView,
  type Variant,
  type Transition,
  type UseInViewOptions,
  type Variants,
} from "framer-motion";

type SlideUpProps = {
  children: React.ReactNode;
  // variants?: {
  //   hidden: Variant;
  //   visible: Variant;
  // };
  variants?: Variants;
  transition?: Transition;
  viewOptions?: UseInViewOptions;
};

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// const slideUpVariants: Variants = {
//   initial: {
//     y: "100%",
//     transition: { duration: 0.5, delay: 5 },
//   },
//   open: (i) => ({
//     y: "-7%",
//     transition: { duration: 0.5, delay: 0.01 * i },
//   }),
//   closed: {
//     y: "100%",
//     transition: { duration: 0.5 },
//   },
// };

// type SlideUpProps = {
//   className?: string;
//   variants?: Variants;
//   children: React.ReactNode;
// };
// export default function SlideUp({ className, variants, children }: SlideUpProps) {
//   return (
//     <motion.div
//       variants={variants || textVariants}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0.25 }}
//       className={cn("text-enter", className)}
//     >
//       {children}
//     </motion.div>
//   );
// }

// type SlideUpProps = {
//   children: React.ReactNode;
//   className?: string;
//   isInView?: boolean;
//   index?: number;
// };

// export default function SlideUp({
//   children,
//   className,
//   isInView,
//   index,
// }: SlideUpProps) {
//   return (
//     <motion.span
//       // variants={slideUp}
//       // custom={index}
//       whileInView="visible"
//       // animate={"visible"}
//       animate={isInView ? "open" : "closed"}
//       // key={index}
//       className={cn(className)}
//     >
//       {children}
//     </motion.span>
//   );
// }

// docs: https://motion-primitives.com/docs/in-view
// export default function SlideUp({
//   children,
//   variants = defaultVariants,
//   // variants = slideUpVariants,
//   transition,
//   viewOptions,
// }: SlideUpProps) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, viewOptions);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={variants}
//       transition={transition}
//     >
//       {children}
//     </motion.div>
//   );
// }

export default function SlideUp({
  children,
  variants = defaultVariants,
  // variants = slideUpVariants,
  transition,
  viewOptions,
}: SlideUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "visible" : "hidden"}
      // variants={variants}
      // transition={transition}
    >
      {children}
    </motion.div>
  );
}
