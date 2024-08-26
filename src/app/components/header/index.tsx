"use client";

import { cn } from "@/lib/utils";
import Logo from "../Logo";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useWindowDimensions } from "@/lib/hooks/useWindowDimensions";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import Burger from "../Burger";
import Nav, { MobileNav } from "./Nav";
import ProductMenu from "./ProductMenu";
import Hamburger from "../Hamburger";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  const pathname = usePathname();
  const isNewsroomPage = pathname.includes("newsroom");

  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;

  useEffect(() => {
    setIsProductMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname, isSmallScreen]);

  return (
    <>
      <HeaderOverlay className={cn(isNewsroomPage ? "bg-black" : "bg-white")} />
      <header
        className={cn(
          "fixed",
          "inset-x-0",
          "top-0", // may not be needed
          // needs work

          "py-3",
          "h-[var(--header-height)]",
          // "md:h-[calc(var(--header-height)_+_16px)]",
          "z-highest",
          "px-[4%]",
          { "text-white": isNewsroomPage }
        )}
      >
        <div
          className={cn(
            // "py-5",
            // "h-[var(--header-height)]", // set height here due to product menu overlap and z-index
            "md:h-[calc(var(--header-height)_+_16px)]",
            "items-center",
            "flex",
            "md:grid",
            "md:grid-cols-2",
            "gap-8",
            "max-w-[1366px]",
            "[grid-template-columns:1fr_1fr]" // keeps contents from overflowing pass padding. tw equivalent aint working
          )}
        >
          <Logo color={isNewsroomPage ? "white" : "black"} />
          <Nav
            setIsProductMenuOpen={() => setIsProductMenuOpen(true)}
            className={cn("hidden md:flex self-start")} // hack margin
            isActive={(href) => {
              // If the product menu is open, return true for the products link
              if (isProductMenuOpen && href === "#") {
                return true;
              }
              // Otherwise, match based on the current pathname
              return href === pathname;
            }}
          />
          <Burger
            isActive={isMobileMenuOpen}
            onClick={() => {
              setIsProductMenuOpen(false);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={cn(
              "md:hidden",
              "ml-auto",
              isNewsroomPage ? "[&_span]:bg-white" : "[&_span]:bg-black"
            )}
          />
        </div>
      </header>

      <ProductMenu
        isActive={isProductMenuOpen}
        setIsProductMenuOpen={setIsProductMenuOpen}
        background={isNewsroomPage ? "dark" : "light"}
      />

      <MobileNav
        isActive={isMobileMenuOpen}
        className={cn({
          "bg-black text-white": isNewsroomPage,
        })}
      >
        <Nav
          setIsProductMenuOpen={() => setIsProductMenuOpen(true)}
          className={cn("flex-col flex-center pb-[70px]")}
          isActive={(href) => {
            if (isProductMenuOpen && href === "#") {
              return true;
            }
            return href === pathname;
          }}
        />
      </MobileNav>
    </>
  );
}

function HeaderOverlay({ className }: { className?: string }) {
  const scrollY = useScrollPosition(85);
  return (
    <motion.div
      style={{
        transform: `translateY(${scrollY}px)`,
      }}
      className={cn(
        "fixed",
        "top-0",
        "h-[var(--header-height)]",
        "md:h-[calc(var(--header-height)_+_16px)]",
        "w-full",
        "z-2",
        className
      )}
    />
  );
}
