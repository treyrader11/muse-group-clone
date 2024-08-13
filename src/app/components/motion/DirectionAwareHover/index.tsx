"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { variants, textVariants } from "./motion";
import type { ContainerProps } from "@/lib/types/props";

type Props = ContainerProps & {
  imageUrl: string;
  childrenClassName?: string;
  imageClassName?: string;
};

export default function DirectionAwareHover({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    console.log("direction", direction);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "md:h-96",
        "size-60",
        "md:w-96",
        "bg-transparent",
        "rounded-lg",
        "overflow-hidden",
        "group/card",
        "relative",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative size-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div
            className={cn(
              "group-hover/card:block",
              "hidden",
              "absolute",
              "inset-0",
              "size-full",
              "bg-black/40",
              "z-10",
              "transition",
              "duration-500"
            )}
          />
          <motion.div
            variants={variants}
            className={cn(
              "size-full",
              "relative",
              "bg-gray-50",
              "dark:bg-black"
            )}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <Image
              alt="image"
              className={cn(
                "size-full",
                "object-cover",
                "scale-[1.15]",
                imageClassName
              )}
              width="1000"
              height="1000"
              src={imageUrl}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn(
              "text-white",
              "absolute",
              "bottom-4",
              "left-4",
              "z-40",
              childrenClassName
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
