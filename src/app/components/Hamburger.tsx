import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const UNDERLAY_VARIANTS = {
  // open: {
  //   // width: "calc(100% - 32px)",
  //   // height: "calc(100vh - 32px)",
  //   // width: ["50%", "35%", "50%"],
  //   // width: ["32px", "20px", "32px"],
  //   height: "95px",
  //   transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  // },
  // closed: {
  //   width: "32px",
  //   height: "95px",
  //   transition: {
  //     // delay: 0.75,
  //     // type: "spring",
  //     mass: 3,
  //     stiffness: 400,
  //     damping: 50,
  //   },
  // },
  open: {
    // scale: [1, 0.3, 1],

    transition: {
      type: "tween",

      duration: 0.5,
      ease: "easeOut",
    },
  },
  closed: {
    scale: [1, 0, 1], // Shrink then grow back
    transition: { duration: 0.5 },
  },
};

export const zoomIn = (delay: 0.4, duration: 1) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

// First value is starting point
// middle value is an intermediate step
// last value is the final position

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "35%"],
      // transition: {
      //   type: "tween",
      //   duration: 0.3,
      //   ease: "easeOut",
      // },
    },

    closed: {
      scale: [1, 0.3, 1],
      rotate: ["45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
      top: ["50%", "35%", "50%"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
};

const BUTTON_VARIANTS = {
  open: {
    scale: [3, 0.3, 1], // Shrink then grow back
    transition: { duration: 0.5 },
  },
  closed: {
    scale: [1, 0.8, 1], // Shrink then grow back
    transition: { duration: 0.5 },
  },
};

type HamburgerProps = {
  isActive: boolean;
  onClick: () => void;
  className?: string;
};

export default function Hamburger({
  isActive,
  onClick,
  className,
}: HamburgerProps) {
  return (
    <div className={cn("bg-transparent", className)}>
      <motion.button
        initial={false}
        variants={UNDERLAY_VARIANTS}
        // variants={BUTTON_VARIANTS}
        animate={isActive ? "open" : "closed"}
        onClick={onClick}
        className={cn(
          "fixed",
          "-top-1",
          "sm:-top-4",
          "right-5",
          "sm:right-12",
          "h-24",
          "sm:h-32",
          "z-50",
          "transition-all",
          "w-8",
          "sm:w-10",

          isActive && cn("duration-200 delay-300", "rotate-[180deg]")
        )}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className={cn(
            "absolute",
            "h-[2.5px]",
            "sm:h-[3.4px]",
            "w-full",
            "rounded-md"

            // "w-8",
            // "sm:w-10",
          )}
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className={cn(
            "absolute",
            "left-0",
            "h-[2.5px]",
            "sm:h-[3.4px]",
            "w-full",
            "rounded-md"

            // "w-8",
            // "sm:w-10",
          )}
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        {/* <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute block h-1 w-5"
          style={{ x: "-50%", y: "50%" }}
        /> */}
      </motion.button>
    </div>
  );
}

