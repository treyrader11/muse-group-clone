"use client";

import Hero from "./components/Hero";
import Products from "./components/Products";
import Featured from "./components/Featured";
import Banners from "./components/Banners";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  // ask why this is async
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
      }, 1500);
    })();
  }, []);

  return (
    <>
      <Preloader isInView={isLoading} />
      <div className={cn("pt-24 md:pt-[128px] overflow-clip")}>
        <Hero />
        <Featured>
          <h1 className="title-mask text-gradient-orange">
            What Muse <br />
            creates
            <br />
          </h1>
          <h3 className="xs:px-16">For&nbsp;OUR&nbsp;400M+ USERS</h3>
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
