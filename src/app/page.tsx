"use client";

import Hero from "./components/home/Hero";
import Products from "./components/home/Products";
import Featured from "./components/Featured";
import Banners from "./components/home/Banners";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import Preloader from "./components/Preloader";
import SlideUp from "./components/SlideUp";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  Variants,
} from "framer-motion";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  const headlineRef = useRef(null);
  const isHeadlineInView = useInView(headlineRef);

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      // document.body.style.cursor = "default";
    }, 1500);
  }, []);

  const slideUpVariants: Variants = {
    initial: {
      y: "100%",
      transition: { duration: 0.5, delay: 5 },
    },
    open: (i) => ({
      y: "-7%",
      transition: { duration: 0.5, delay: 0.01 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Preloader isInView={isLoading} />
      <div ref={container} className={cn("pt-24 md:pt-[128px] overflow-clip")}>
        <Hero />
        <Featured>
          <SlideUp
            viewOptions={{ once: false, margin: "0px 0px -250px 0px" }}
            variants={{
              initial: {
                y: "100%",
                transition: { duration: 0.5, delay: 5 },
              },
              hidden: {
                opacity: 0,
                y: "-7%",
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.09,
                },
              },
            }}
            // variants={slideUpVariants}
          >
            {/* <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              // key={index}
              className="mb-4"
            > */}
            <h1 className="title-mask text-gradient-orange">
              What Muse <br />
              creates
              <br />
            </h1>
            {/* </motion.div> */}
            {/* <h1 className="title-mask text-gradient-orange">
              What Muse <br />
              creates
              <br />
            </h1> */}
          </SlideUp>

          <h3 className="sm:px-16">For&nbsp;OUR&nbsp;400M+ USERS</h3>
        </Featured>
        <Products />
        <Featured>
          <h2 className="title-mask text-gradient-green">
            and so much <br />
            more to come
            <br />
          </h2>
        </Featured>
        <Banners />
      </div>
    </>
  );
}
