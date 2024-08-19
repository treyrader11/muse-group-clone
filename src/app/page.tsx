"use client";

import Hero from "./components/home/Hero";
import Products from "./components/home/Products";
import Featured from "./components/Featured";
import Banners from "./components/home/Banners";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import InView from "./components/InView";
import { createTransition } from "@/lib/motion";

const textVariants = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: "0%",
  },
};

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <main>
      <Preloader isInView={isLoading} />
      <div className={cn("pt-24 md:pt-[128px] overflow-clip")}>
        <Hero />
        <Featured>
          <WhatMuseCreates />
        </Featured>
        <Products />
        <Featured>
          <MoreToCome />
        </Featured>
        <Banners />
      </div>
    </main>
  );
}

function WhatMuseCreates() {
  return (
    <InView variants={textVariants} transition={createTransition()}>
      <h1 className="title-mask text-gradient-orange">
        What Muse <br />
        creates
        <br />
      </h1>
      <InView
        variants={textVariants}
        transition={createTransition({ ease: "easeInOut", duration: 0.5 })}
      >
        <h3 className="sm:px-16">For&nbsp;OUR&nbsp;400M+ USERS</h3>
      </InView>
    </InView>
  );
}

function MoreToCome() {
  return (
    <InView variants={textVariants} transition={createTransition()}>
      <h2 className="title-mask text-gradient-green">
        and so much <br />
        more to come
        <br />
      </h2>
    </InView>
  );
}
