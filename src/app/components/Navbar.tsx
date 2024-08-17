"use client";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ASSETS_BASE_URL,
  PRODUCTS,
  ROUTES,
  NAV_HEIGHT,
  SMALL_HEIGHT_PERCENTAGE,
} from "@/lib/constants";
import CloseButton from "./CloseButton";
import { motion } from "framer-motion";
import { useWindowDimensions } from "@/lib/hooks/useWindowDimensions";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import Burger from "./Burger";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  const pathname = usePathname();
  const isNewsroomPage = pathname.includes("newsroom");

  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;

  useEffect(() => {
    // reset when page or width of viewport changes
    setIsProductMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname, isSmallScreen]);

  return (
    <>
      <NavOverlay className={cn(isNewsroomPage ? "bg-black" : "bg-white")} />
      <header
        className={cn(
          "inset-x-0", 
          "fixed",
          "top-0",
          "h-[71px]",
          "md:h-[87px]",
          "z-50",
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
            "[grid-template-columns:1fr_1fr]" // keeps contents from overflowing pass padding
          )}
        >
          <Logo
            color={isNewsroomPage ? "white" : "black"}
            className={cn("hidden md:block ")}
          />

          <NavMenu
            setIsProductMenuOpen={() => setIsProductMenuOpen(true)}
            className={cn("hidden md:flex self-start")} // hack margin
            isActive={(href) => {
              // If the product menu is open, only make the products link active
              if (isProductMenuOpen && href === "/products") return true;
              // Otherwise, match based on the current pathname
              return href === pathname;
            }}
          />
        </div>
      </header>
      <Logo
        color={isNewsroomPage ? "white" : "black"}
        className="z-[99] md:hidden fixed top-3 left-[4%]"
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
          "z-[99]",
          isNewsroomPage ? "[&_span]:bg-white" : "[&_span]:bg-black"
        )}
      />

      <ProductsMenu
        isActive={isProductMenuOpen}
        setIsProductMenuOpen={setIsProductMenuOpen}
        // isMobile={width < 768}
        className={cn({
          "bg-black text-white": isNewsroomPage,
        })}
      />

      <MobileNavMenu
        isActive={isMobileMenuOpen}
        className={cn({
          "bg-black text-white": isNewsroomPage,
        })}
      >
        <NavMenu
          setIsProductMenuOpen={() => setIsProductMenuOpen(true)}
          className={cn("flex-col flex-center pb-[70px]")}
          isActive={(href) => {
            // If the product menu is open, only make the products link active
            if (isProductMenuOpen && href === "/products") true;
            // if (isProductMenuOpen) href === "/products";
            // Otherwise, match based on the current pathname
            return href === pathname;
          }}
        />
      </MobileNavMenu>
    </>
  );
}

type NavOverlayProps = {
  className?: string;
};

function NavOverlay({ className }: NavOverlayProps) {
  const scrollY = useScrollPosition(85);
  return (
    <motion.div
      style={{
        transform: `translateY(${scrollY}px)`,
        // height: `${NAV_HEIGHT}px`,
      }}
      className={cn(
        "fixed",
        "top-0",
        "h-[71px]",
        "md:h-[87px]",
        "w-full",
        "z-50",
        className
      )}
    />
  );
}
type NavMenuProps = {
  className?: string;
  setIsProductMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: (href: string) => boolean;
};

function NavMenu({ className, setIsProductMenuOpen, isActive }: NavMenuProps) {
  return (
    <nav
      className={cn(
        "flex",
        "justify-between",
        "gap-x-5",
        "gap-y-[70px]",
        "uppercase",
        "font-oswald",
        "font-semibold",
        "text-5xl",
        // "md:text-3xl",
        "md:text-[30px]",
        // leading only works when text size is arbitrary value
        "leading-6",
        "tracking-tighter",
        className
      )}
    >
      {ROUTES.map(({ path, label }) => (
        <Link
          onClick={() => {
            if (path === "/products") setIsProductMenuOpen(true);
            else setIsProductMenuOpen(false);
          }}
          className={cn("hover:opacity-60", {
            "opacity-60": isActive(path),
          })}
          key={path}
          href={path}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

function MobileNavMenu({
  children,
  isActive,
  className,
}: {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "z-[88]",
        "fixed",
        "inset-0",
        "flex",
        "flex-col",
        "justify-end",
        "bg-grey",
        "w-full",
        "transition-all",
        "duration-[600ms]",
        "ease-in-out",
        "-translate-y-full",
        "min-h-screen",
        isActive ? "translate-y-0" : "-translate-y-full",
        className
      )}
    >
      {children}
    </div>
  );
}

function ProductsMenu({
  isActive,
  className,

  setIsProductMenuOpen,
}: {
  isActive: boolean;
  className?: string;
  setIsProductMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={cn(
        "z-[89]",
        "fixed",
        "inset-0",
        "bg-grey",
        "transition-all",
        "duration-[600ms]",
        "ease-in-out",
        "px-20",
        "max-w-[1366px]",
        "pt-8",
        isActive ? "translate-y-0" : "-translate-y-[120%]",
        className
      )}
    >
      <div
        className={cn(
          "absolute",
          "inset-x-[4%]",
          "inset-y-0",
          "mt-[84px]",
          "md:border-t",
          "max-w-[1366px]",
          "pt-8",
          "grid",
          "gap-8",
          "gap-y-10",
          "grid-cols-2",
          "md:grid-cols-4",
          "place-items-center",
          "mx-auto",
          "max-w-[700px]",
          className
        )}
      >
        <CloseButton
          onClick={() => setIsProductMenuOpen(false)}
          className="hidden md:block "
        />

        {PRODUCTS.map(({ label, iconId, path }) => (
          <Link
            key={iconId}
            href={path}
            className={cn(
              "relative",
              "size-full",
              "w-[120px]",
              "items-center",
              "flex",
              "flex-col",
              "gap-8"
            )}
          >
            {/* <div className="flex flex-col border size-full border-red-400"> */}
            <Image fill src={`${ASSETS_BASE_URL}/${iconId}.svg`} alt={label} />
            <p className="absolute -bottom-8 xs:bottom-0 text-nowrap">
              {label}
            </p>
            {/* </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
}
