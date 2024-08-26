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
          "inset-x-0",
          "fixed",
          "top-0",
          "h-[var(--header-height)]",
          "md:h-[calc(var(--header-height)_+_16px)]",
          "z-2",
          "py-3",
          "px-[4%]",
          { "text-white": isNewsroomPage }
        )}
      >
        <div
          className={cn(
            "grid",
            "grid-cols-2",
            "place-content-start",
            "gap-8",
            "h-full",
            "max-w-[1366px]",
            "[grid-template-columns:1fr_1fr]" // keeps contents from overflowing pass padding. tw equivalent aint working
          )}
        >
          <Logo
            color={isNewsroomPage ? "white" : "black"}
            className={cn("hidden md:block ")}
          />

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
        </div>
      </header>

      {/* Put these here because they must over lap overlays */}
      <Logo
        color={isNewsroomPage ? "white" : "black"}
        className="z-highest md:hidden fixed top-3 left-[4%]"
      />

      <Burger
        isActive={isMobileMenuOpen}
        onClick={() => {
          setIsProductMenuOpen(false);
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
        className={cn(
          "right-0",
          "md:hidden",
          "fixed",
          "z-highest",
          isNewsroomPage ? "[&_span]:bg-white" : "[&_span]:bg-black"
        )}
      />

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
            // If the product menu is open, return true for the products link
            if (isProductMenuOpen && href === "#") {
              return true;
            }
            // Otherwise, match based on the current pathname
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
