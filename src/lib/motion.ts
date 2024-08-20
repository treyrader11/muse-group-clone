import { type Transition, type Variants } from "framer-motion";

// type: "spring", stiffness: 100

// The default transition ease values [0.4, 0.0, 0.2, 1] represent a cubic Bézier curve used for easing animations. In a cubic Bézier curve, the four values correspond to two control points that define the shape of the curve, which in turn affects how an animation progresses over time.
export const createTransition = ({
  delay = 0,
  duration = 0.3,
  ease = [0.4, 0.0, 0.2, 1],
}: // type = "spring",
{
  delay?: number;
  duration?: number;
  ease?: string | [number, number, number, number];
} = {}): Transition => ({
  duration,
  delay,
  ease,
  // type: "spring",
  // stiffness: 100
});

export const slideUpVariants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: "0%",
  },
};
// } as const;
