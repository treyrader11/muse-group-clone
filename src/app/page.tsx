"use client";

import Hero from "./components/Hero";
import Products from "./components/Products";
// import { projects } from "../data";
// import Card from "../components/Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function HomePage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // });

  return (
    <div ref={container} >
      <Hero />
      <Products progress={scrollYProgress} />
    </div>
  );
}
