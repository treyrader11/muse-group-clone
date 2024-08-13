import { useState, useEffect } from "react";
import { NAV_HEIGHT } from "../constants";

export const useScrollPosition = (cap: number = NAV_HEIGHT) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollYValue = window.scrollY;
      if (scrollYValue <= cap) setScrollY(scrollYValue - cap);
      // Adjust scroll position relative to cap
      else setScrollY(0); // Cap the value at the maximum cap
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cap]);

  return scrollY;
};
