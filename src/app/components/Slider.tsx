"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { SLIDER_IMAGES } from "@/lib/constants";

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
        "relative",
        "py-8",
        "overflow-hidden",
        "-mt-[60px]",
        "xs:-mt-[180px]",
        "md:-mt-[155px]",
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
          "active:cursor-grabbing",
          "relative"
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
  return (
    <>
      {SLIDER_IMAGES.map((img, i) => {
        return (
          <>
            <motion.div
              key={i}
              style={{
                backgroundImage: `url(https://cdn.prod.website-files.com/6511efa00919fb9000588f9a/${
                  img.id
                }_slider_${i + 1}_ipad.webp)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              transition={TWEEN_OPTIONS}
              className={cn(
                "w-screen",
                "aspect-[8/10]",
                // "aspect-square",
                "shrink-0",
                "rounded-2xl",
                "xs:rounded-[32px]",
                "md:rounded-[34px]",
                "min-h-[70vh]",
                "md:min-h-[90vh]",
                "w-full"
              )}
            />
          </>
        );
      })}
    </>
  );
}

type TitleProps = { className?: string; imgIndex: number };

function Titles({ className, imgIndex }: TitleProps) {
  return (
    <div
      className={cn(
        "absolute",
        "top-10",
        "left-2",
        "sm:top-20",
        "md:left-[32px]"
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
              "xs:text-7xl",
              "md:text-8xl",
              "leading-[3rem]",
              "xs:leading-[4.2rem]",
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
  setImgIndex: Dispatch<SetStateAction<number>>;
};

function Bullets({ imgIndex, setImgIndex }: BulletProps) {
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
