"use client";

import { useState, useEffect } from "react";

export const useScrollPosition = (cap: number = 85): number => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollYValue = window.scrollY;
      if (scrollYValue <= cap) {
        setScrollY(scrollYValue - cap); // Adjust scroll position relative to cap
      } else {
        setScrollY(0); // Cap the value at the maximum cap
      }
    };

    // Set initial scroll position
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cap]);

  return scrollY;
};
