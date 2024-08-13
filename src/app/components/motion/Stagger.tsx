"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Stagger({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      transition={{
        staggerChildren: 0.05,
        delay: delay, // not working
      }}
      viewport={{ once: true }}
      className={cn(
        "absolute",
        "inset-0",
        "flex",
        "flex-col",
        "items-start",
        "justify-end",
        "p-8",
        "bg-gradient-to-t",
        "from-slate-950/90",
        "to-slate-950/0",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
