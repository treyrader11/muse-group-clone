"use client";

import Hero from "./components/home/Hero";
import Products from "./components/home/Products";
import Featured from "./components/Featured";
import Banners from "./components/home/Banners";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import SlideUp from "./components/SlideUp";
import { Variants } from "framer-motion";
import InView from "./components/InView";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  // const slideUpVariants = {
  //   hidden: {
  //     y: "-100%",
  //     transition: { duration: 0.5, delay: 5 },
  //   },
  //   visible: {
  //     y: "0%",
  //     transition: { duration: 0.5 },
  //   },
  // };

  const textVariantsts = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: "0%",
    },
  };

  return (
    <main>
      <Preloader isInView={isLoading} />
      <div className={cn("pt-24 md:pt-[128px] overflow-clip")}>
        <Hero />
        <Featured>
          <InView
            variants={textVariantsts}
            // variants={slideUpVariants}
            transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
            // viewOptions={{ margin: "0px 0px -350px 0px" }}
          >
            <h1 className="title-mask text-gradient-orange">
              What Muse <br />
              creates
              <br />
            </h1>
          </InView>

          <InView
            variants={textVariantsts}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <h3 className="sm:px-16">For&nbsp;OUR&nbsp;400M+ USERS</h3>
          </InView>
        </Featured>
        <Products />
        <Featured>
          <InView
            variants={textVariantsts}
            transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <h2 className="title-mask text-gradient-green">
              and so much <br />
              more to come
              <br />
            </h2>
          </InView>
        </Featured>
        <Banners />
      </div>
    </main>
  );
}
