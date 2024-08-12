"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const IMAGES = [
  {
    id: "667c1ec9ebf826c004a69380",
    comp: <About />,
    title: `Home to the word's most popular music software and collections`,
    class: "text-gradient-yellow",
  },
  {
    id: "654d2e2883bfc44e90a9d380",
    comp: `"Muse Group."<br />"For the music"<br />"makers."`,
    title: `Muse Group. For the music makers.`,
    class: "text-gradient-red",
  },
  {
    id: "654d424d20c9a512579256fc",
    comp: <OurMission />,
    title: `Our Mission: Changing the lives of musicians every day`,
    class: "text-gradient-yellow-2",
  },
  // {
  //   id: "654d424d20c9a512579256fc",
  //   comp: `"Millions of"<br />"creatives"<br />"have joined"<br />"the Muse"<br />"commuunity"`,
  //   title: `Millions of creatives have joined the Muse community`,
  //   classnames: "bg-gradient-to-r from-[#5127da] to-[#9bcefd]",
  // },
  {
    id: "654d4437e50414f464bac639",
    comp: `<p>"Home to the"<br />"word's most"<br />"popular music"<br />"software and"<br />"collections"</p>`,
    title: "Home to the word's most popular music software and collections",
    classnames: "bg-gradient-to-r from-[#5127da] to-[#9bcefd]",
    class: "text-gradient-purp",
  },
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

export default function Slider({ className }: { className?: string }) {
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
          "active:cursor-grabbing",
          "relative"
        )}
      >
        <Images imgIndex={imgIndex} />
        <Title
          // className={IMAGES[imgIndex].classnames}
          title={IMAGES[imgIndex].comp}
          className={IMAGES[imgIndex].class}
        />
      </motion.div>
      <Indicators imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
}

export function Images({ imgIndex }: { imgIndex: number }) {
  return (
    <>
      {IMAGES.map((img, i) => {
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
              animate={{
                scale: 0.9,
              }}
              transition={TWEEN_OPTIONS}
              className={cn(
                "w-screen",
                "aspect-[8/10]",
                // "aspect-square",
                "shrink-0",
                "rounded-2xl",
                "xs:rounded-[38px]",
                "md:rounded-[34px]",
                "min-h-[70vh]",
                "md:min-h-[90vh]",
                "backdrop-blur-sm"
                // "relative"
              )}
            />
            {/* <Title className={img.classnames}>{img.title}</Title> */}
          </>
        );
      })}
    </>
  );
}

function Title({
  className,
  // children,
  title: Title,
}: {
  className?: string;
  // children?: React.ReactNode;
  title: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "absolute",
        "top-12",
        "left-8",
        "sm:top-20",
        "md:left-[32px]"
      )}
    >
      <div
        // style={{className}}
        className={cn(
          "uppercase",
          "text-5xl",
          "xs:text-6xl",
          "md:text-8xl",
          "font-black",
          "leading-[40px]",
          "xs:leading-[50px]",
          "md:leading-[75px]",
          // "bg-clip-text",
          // "text-transparent",
          "tracking-tighter",
          // "bg-gradient-to-r",
          // "from-yellow-200",
          // "via-orange",
          // "to-orange",
          // "max-w-[80%]",
          // "xs:max-w-[65%]",
          className,
          "text-"
        )}
      >
        {Title}
        {/* {children} */}
      </div>
    </div>
  );
}

function Indicators({
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
                  "bg-yellow": i === imgIndex,
                }
              )}
            />
          );
        })}
      </div>
    </div>
  );
}

function OurMission() {
  return (
    <>
      Our Mission:
      <br />
      Changing the
      <br />
      lives of musicans
      <br />
      every day
    </>
  );
}

function About() {
  return (
    <p>
      Home to the:
      <br />
      {`word's most`}
      <br />
      popular music
      <br />
      software and
      <br />
      collections
    </p>
  );
}
