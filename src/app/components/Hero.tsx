// "use client";

// import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
// import { motion, useMotionValue, useAnimationControls } from "framer-motion";
// import { cn } from "@/lib/utils";

// export default function Hero() {
//   return (
//     <section>
//       <Slider />
//     </section>
//   );
// }

// const IMAGES = [
//   "667c1ec9ebf826c004a69380",
//   "654d2e2883bfc44e90a9d380",
//   "654d424d20c9a512579256fc",
//   "654d4437e50414f464bac639",
// ];

// export const SPRING_OPTIONS = {
//   type: "spring",
//   mass: 3,
//   stiffness: 400,
//   damping: 50,
// };

// const ONE_SECOND = 1000;
// const AUTO_DELAY = ONE_SECOND * 5;
// const DRAG_BUFFER = 50;

// const TWEEN_OPTIONS = {
//   type: "tween",
//   duration: 0.7,
// };

// function Slider({ className }: { className?: string }) {
//   const [imgIndex, setImgIndex] = useState(0);

//   const dragX = useMotionValue(0);

//   useEffect(() => {
//     const intervalRef = setInterval(() => {
//       const x = dragX.get();

//       if (x === 0) {
//         setImgIndex((pv) => {
//           if (pv === IMAGES.length - 1) {
//             return 0;
//           }
//           return pv + 1;
//         });
//       }
//     }, AUTO_DELAY);

//     return () => clearInterval(intervalRef);
//   }, [dragX]);

//   const onDragEnd = () => {
//     const x = dragX.get();

//     if (x <= -DRAG_BUFFER && imgIndex < IMAGES.length - 1) {
//       setImgIndex((pv) => pv + 1);
//     } else if (x >= DRAG_BUFFER && imgIndex > 0) {
//       setImgIndex((pv) => pv - 1);
//     }
//   };

//   return (
//     <div
//       className={cn(
//         "relative",
//         "py-8",
//         "overflow-hidden",
//         "mx-auto",
//         className
//       )}
//     >
//       <motion.div
//         drag="x"
//         dragConstraints={{
//           left: 0,
//           right: 0,
//         }}
//         style={{
//           x: dragX,
//         }}
//         animate={{
//           translateX: `-${imgIndex * 100}%`,
//         }}
//         transition={TWEEN_OPTIONS}
//         onDragEnd={onDragEnd}
//         className={cn(
//           "flex",
//           "items-center",
//           "cursor-grab",
//           "active:cursor-grabbing"
//         )}
//       >
//         <Images imgIndex={imgIndex} />
//       </motion.div>
//       <Indicators imgIndex={imgIndex} setImgIndex={setImgIndex} />
//     </div>
//   );
// }

// export function Images({ imgIndex }: { imgIndex: number }) {
//   return (
//     <>
//       {IMAGES.map((id, i) => {
// (
//           <motion.div
//             key={i}
//             style={{
//               backgroundImage: `url(https://cdn.prod.website-files.com/6511efa00919fb9000588f9a/${id}_slider_${
//                 i + 1
//               }_ipad.webp)`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             animate={{
//               scale: imgIndex === i ? 0.95 : 0.85,
//             }}
//             transition={TWEEN_OPTIONS}
//             className={cn(
//               "w-screen",
//               "aspect-video",
//               "shrink-0",
//               "rounded-3xl",
//               "md:rounded-[36px]",
//               "min-h-[70vh]",
//               "md:min-h-[90vh]",
//               "backdrop-blur-sm"
//             )}
//           ></motion.div>
//         );
//       })}
//     </>
//   );
// }

// export function Indicators({
//   imgIndex,
//   setImgIndex,
// }: {
//   imgIndex: number;
//   setImgIndex: Dispatch<SetStateAction<number>>;
// }) {
//   return (
//     <div className={cn("flex justify-center w-full relative")}>
//       <div
//         className={cn(
//           "flex",
//           "justify-center",
//           "gap-2",
//           "mt-4",
//           "absolute",
//           "bottom-10",
//           "bg-slate-200/10",
//           "backdrop-blur-lg",
//           "px-14",
//           "py-5",
//           "rounded-3xl",
//           "w-fit"
//         )}
//       />

//       <div className={cn("space-x-2 absolute bottom-10 py-2")}>
//         {IMAGES.map((_, i) => {
//           return (
//             <button
//               key={i}
//               onClick={() => setImgIndex(i)}
//               className={cn(
//                 "size-3.5",
//                 "rounded-full",
//                 "transition-colors",
//                 "bg-neutral-500",
//                 "relative",
//                 {
//                   "bg-yellow-200": i === imgIndex,
//                 }
//               )}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section>
      <Slider />
    </section>
  );
}

const IMAGES = [
  { id: "667c1ec9ebf826c004a69380", title: "1" },
  { id: "654d2e2883bfc44e90a9d380", title: "2" },
  { id: "654d424d20c9a512579256fc", title: "3" },
  { id: "654d4437e50414f464bac639", title: "4" },
];

export const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

const TWEEN_OPTIONS = {
  type: "tween",
  duration: 0.7,
};

function Slider({ className }: { className?: string }) {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === IMAGES.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < IMAGES.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div
      className={cn(
        "relative",
        "py-8",
        "overflow-hidden",
        "mx-auto",
        className
      )}
    >
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={TWEEN_OPTIONS}
        onDragEnd={onDragEnd}
        className={cn(
          "flex",
          "items-center",
          "cursor-grab",
          "active:cursor-grabbing"
        )}
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
      <Indicators imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
}

export function Images({ imgIndex }: { imgIndex: number }) {
  return (
    <>
      {IMAGES.map((img, i) => {
        <motion.div
          key={i}
          style={{
            backgroundImage: `url(https://cdn.prod.website-files.com/6511efa00919fb9000588f9a/${
              img.id
            }_slider_${i + 1}_ipad.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            scale: imgIndex === i ? 0.95 : 0.85,
          }}
          transition={TWEEN_OPTIONS}
          className={cn(
            "w-screen",
            "aspect-video",
            "shrink-0",
            "rounded-3xl",
            "md:rounded-[36px]",
            "min-h-[70vh]",
            "md:min-h-[90vh]",
            "backdrop-blur-sm"
          )}
        />;
        // <div className="absolute top-[32px] left-[32px]">
        //   <div
        //     className={cn(
        //       "bg-clip-text",
        //       "text-transparent",
        //       "bg-gradient-to-r",
        //       "from-yellow-200",
        //       "via-orange-400",
        //       "to-orange-400"
        //     )}
        //   >
        //     {img.title}
        //   </div>
        // </div>;
      })}
    </>
  );
}

export function Indicators({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className={cn("flex justify-center w-full relative")}>
      <div
        className={cn(
          "flex",
          "justify-center",
          "gap-2",
          "mt-4",
          "absolute",
          "bottom-10",
          "bg-slate-200/10",
          "backdrop-blur-lg",
          "px-14",
          "py-5",
          "rounded-3xl",
          "w-fit"
        )}
      />

      <div className={cn("space-x-2 absolute bottom-10 py-2")}>
        {IMAGES.map((_, i) => {
          return (
            <button
              key={i}
              onClick={() => setImgIndex(i)}
              className={cn(
                "size-3.5",
                "rounded-full",
                "transition-colors",
                "bg-neutral-500",
                "relative",
                {
                  "bg-yellow-200": i === imgIndex,
                }
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
