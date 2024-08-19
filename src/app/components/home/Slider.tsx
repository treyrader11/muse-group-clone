"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { ASSETS_BASE_URL, SLIDER_IMAGES } from "@/lib/constants";
import { useWindowDimensions } from "@/lib/hooks/useWindowDimensions";

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
type SliderProps = { className?: string };

export default function Slider({ className }: SliderProps) {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  // create a hook that lets you pass a width cap

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === SLIDER_IMAGES.length - 1) {
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

    if (x <= -DRAG_BUFFER && imgIndex < SLIDER_IMAGES.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div
      className={cn(
        "rounded-xl",
        "sm:rounded-2xl",
        "md:rounded-3xl",
        "relative",
        "overflow-clip",
        "-mt-[9rem]",
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
          "mx-auto",
          "cursor-grab",
          "active:cursor-grabbing"
        )}
      >
        <Images />
      </motion.div>
      <Bullets imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <Titles imgIndex={imgIndex} />
    </div>
  );
}

export function Images() {
  const { width } = useWindowDimensions();
  const isMobile = width < 640;
  return (
    <>
      {SLIDER_IMAGES.map(({ id: { mobile, desktop } }) => {
        const imageId = isMobile ? mobile : desktop;
        return (
          <div
            key={mobile}
            style={{
              backgroundImage: `url(${ASSETS_BASE_URL}/${imageId}.webp)`,
              backgroundSize: "cover",
            }}
            className="w-full aspect-[4/5]"
          >
            <motion.div
              transition={TWEEN_OPTIONS}
              className={cn(
                "w-screen",
                "shrink-0",
                "min-h-[80vh]",
                "sm:min-h-[50vh]",
                "aspect-[8/10]"
              )}
            />
          </div>
        );
      })}
    </>
    // <>
    //   {SLIDER_IMAGES.map(({ id: {img: { mobile, desktop } }) => {
    //     // const { mobile, desktop } = img
    //     const imageUrl = isMobile ? mobile : desktop;
    //     return (
    //       <div
    //         key={mobile}
    //         style={{
    //           backgroundImage: `url(https://cdn.prod.website-files.com/6511efa00919fb9000588f9a/${img.id}.webp)`,
    //           backgroundSize: "cover",
    //           // backgroundSize: "contain",
    //           // backgroundRepeat: "no-repeat",
    //         }}
    //         className="w-full aspect-[4/5] "
    //       >
    //         <motion.div
    //           transition={TWEEN_OPTIONS}
    //           className={cn(
    //             // "w-fit",
    //             // "shrink-0"
    //             "min-h-[80vh]",
    //             "aspect-[8/10]"
    //           )}
    //         />
    //       </div>
    //     );
    //   })}
    // </>
  );
}

type TitleProps = { className?: string; imgIndex: number };

function Titles({ className, imgIndex }: TitleProps) {
  return (
    <div
      className={cn(
        "absolute",
        "left-2",
        "top-0",
        "md:left-[32px]",
        "border border-red-400"
      )}
    >
      {SLIDER_IMAGES.map(({ comp, textGradient }, i) =>
        i === imgIndex ? (
          <motion.h1
            key={i}
            animate={{
              scale: 0.9,
            }}
            transition={TWEEN_OPTIONS}
            dangerouslySetInnerHTML={{ __html: comp }} // not for production (just use component)
            className={cn(
              "absolute",
              "text-left",
              "font-oswald",
              "text-[3rem]",
              "sm:text-7xl",
              "md:text-8xl",
              "leading-[3rem]",
              "sm:leading-[4.2rem]",
              "md:leading-[5.5rem]",

              textGradient,
              className
            )}
          />
        ) : null
      )}
    </div>
  );
}

type BulletProps = {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
};

function Bullets({ imgIndex, setImgIndex }: BulletProps) {
  return (
    <div className={cn("flex-center w-full relative")}>
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
          "w-fit",
          // "z-20"
          "z-1"
        )}
      />

      <div className={cn("space-x-2 absolute bottom-10 py-2")}>
        {SLIDER_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setImgIndex(i)}
            className={cn(
              "size-3.5",
              "rounded-full",
              "transition-colors",
              "bg-white",
              "relative",
              // "z-20",
              "z-1",
              {
                "bg-yellow": i === imgIndex,
              }
            )}
          />
        ))}
      </div>
    </div>
  );
}
