import { type Transition, type Variants } from "framer-motion";

// The default transition ease values [0.4, 0.0, 0.2, 1] represent a cubic Bézier curve used for easing animations. In a cubic Bézier curve, the four values correspond to two control points that define the shape of the curve, which in turn affects how an animation progresses over time.
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

export const transitionVariants = {
  enter: { opacity: 0, y: -50, filter: "blur(4px)" },
  center: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: 50, filter: "blur(4px)" },
};

// <div className='overflow-hidden border-t border-zinc-200 dark:border-zinc-700'>
// <TransitionPanel
//   activeIndex={activeIndex}
//   transition={{ duration: 0.2, ease: 'easeInOut' }}
//   variants={{
//     enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
//     center: { opacity: 1, y: 0, filter: 'blur(0px)' },
//     exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
//   }}
// >
