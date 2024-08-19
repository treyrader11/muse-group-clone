import { type Transition, type Variants } from "framer-motion";

export const createTransition = ({
  delay = 0,
  duration = 0.3,
  ease = [0.4, 0.0, 0.2, 1],
}: {
  delay?: number;
  duration?: number;
  ease?: string | [number, number, number, number];
} = {}): Transition => ({
  duration,
  delay,
  ease,
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
