"use client";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ASSETS_BASE_URL, PRODUCTS, ROUTES } from "@/lib/constants";
import CloseButton from "./CloseButton";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useWindowDimensions } from "@/lib/hooks/useWindowDimensions";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  // const [navOverlayHeight, setNavOverlayHeight] = useState(0);
  const [activeLink, setActiveLink] = useState("");

  const pathname = usePathname();
  const isNewsroomPage = pathname.includes("newsroom");

  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;

  // const { scrollY, scrollX } = useScroll(); // if i run into probelsm with custom hook, use framer motion and pass in the value

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (link !== "overlay") {
      // Route to the new page
    } else {
      // Trigger the overlay
    }
  };
  useEffect(() => {
    // reset when page or width of viewport changes
    setIsProductMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname, isSmallScreen]);

  //if i run into probelsm with custom hook, use framer motion and pass in the value
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   if (latest <= 85) {
  //     setNavOverlayHeight(latest - 85); // Cap the value at 85px
  //   }
  // });

  return (
    <>
      <NavOverlay
        // scrollY={navOverlayHeight}
        className={cn(isNewsroomPage ? "bg-black" : "bg-white")}
      />
      <header
        className={cn(
          // "w-full",
          "inset-x-0",
          "fixed",
          "top-0",
          "h-[87px]",
          "z-50",
          "min-h-16",
          "py-3",
          "px-[4%]",
          { "text-white": isNewsroomPage }
        )}
      >
        <div className={cn("grid grid-cols-2 gap-8 max-w-[1366px]")}>
          <Logo
            backgroundColor={isNewsroomPage ? "white" : "black"}
            className={cn("hidden md:block ")}
          />
          {/* <Burger onClick={() => setIsOpen(!isOpen)} className="md:hidden" /> */}

          <NavMenu
            setIsProductMenuOpen={() => setIsProductMenuOpen(true)}
            className={cn("hidden md:flex self-start -mt-2")} // hack margin
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
        backgroundColor={isNewsroomPage ? "white" : "black"}
        className="z-[99] md:hidden fixed top-3 left-[4%]"
      />

      <Hamburger
        isActive={isMobileMenuOpen}
        onClick={() => {
          setIsProductMenuOpen(false);
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
        className={cn({
          "bg-white before:bg-white": isNewsroomPage,
        })}
      />

      <ProductsMenu
        isActive={isProductMenuOpen}
        setIsProductMenuOpen={setIsProductMenuOpen}
        isMobile={width < 768}
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
          className={cn("flex-col justify-center items-center pb-[70px]")}
          isActive={(href) => {
            // If the product menu is open, only make the products link active
            if (isProductMenuOpen && href === "/products") return true;

            // Otherwise, match based on the current pathname
            return href === pathname;
          }}
        />
      </MobileNavMenu>
    </>
  );
}

type NavOverlayProps = {
  // scrollY: number; // if i run into probelsm with custom hook, use framer motion and pass in the value
  className?: string;
};

function NavOverlay({ className }: NavOverlayProps) {
  const scrollY = useScrollPosition(85);
  return (
    <motion.div
      style={{
        transform: `translateY(${scrollY}px)`,
      }}
      className={cn(
        "fixed",
        "top-0",
        "h-[71px]",
        "md:h-[84px]",
        "w-full",
        "z-10",
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
        "md:text-3xl",
        "leading-6",
        "tracking-tighter",
        className
      )}
    >
      {ROUTES.map(({ path, label }) => (
        <Link
          onClick={() => {
            if (path === "/products") {
              setIsProductMenuOpen(true);
            } else {
              setIsProductMenuOpen(false);
            }
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

function Burger({
  className,
  onClick,
  isActive,
}: {
  isActive: boolean;
  className?: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "fixed",
        "duration-500",
        "transition-all",
        "right-[4%]",
        "z-10",
        "size-[60px]"
      )}
    >
      <span
        className={cn(
          "before:absolute",
          "before:w-[60px]",
          "before:h-2",
          "before:bg-black",
          "before:top-0",
          "before:left-0",
          "after:absolute",
          "after:w-[60px]",
          "after:h-2",
          "after:bg-black",
          "after:bottom-0",
          "after:left-0",
          "transition-transform",
          "duration-500",
          isActive &&
            cn(
              "before:transform",
              "before:rotate-45",
              "before:scale-x-[1.25]",
              "before:translate-x-[12px]",
              "before:translate-y-[12px]",
              "after:transform",
              "after:-rotate-45",
              "after:scale-x-[1.25]",
              "after:translate-x-[12px]",
              "after:-translate-y-[12px]"
            )
        )}
      />
    </div>
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
        "z-10",
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

        // with keyframes in config
        // isActive ? "flex" : "hidden",
        // "absolute",
        // "top-0",
        // "origin-top",
        // "animate-open-menu"
      )}
    >
      {children}
    </div>
  );
}

// "origin-top" <- tells it where to start the animation
// tutorial: https://www.youtube.com/watch?v=0TxMHYCMALE

function Hamburger({
  className,
  onClick,
  isActive,
}: {
  isActive: boolean;
  className?: string;
  onClick: () => void;
}) {
  return (
    <div className={cn("md:hidden fixed z-[99] top-3 right-[4%]")}>
      <button
        id="hamburger-button"
        onClick={onClick}
        className={cn(
          "focus:outline-none", // using focus states like this makes more accessible
          "text-3xl",
          "cursor-pointer",
          "relative",
          "size-8",
          isActive && "toggle-burger rotate-[720deg]"
        )}
      >
        <div
          className={cn(
            "absolute",
            "h-[3px]",
            "w-9",
            "bg-black",
            "top-4",
            "-mt-0.5",
            //before
            "before:absolute",
            "before:bg-black",
            "before:h-[3px]",
            "before:w-9",
            "before:transition-all",
            "before:duration-500",
            "before:-translate-x-4",
            "before:-translate-y-3",
            className
          )}
        />
      </button>
    </div>
  );
}

function ProductsMenu({
  isActive,
  className,
  isMobile,
  setIsProductMenuOpen,
}: {
  isMobile: boolean;
  isActive: boolean;
  className?: string;
  setIsProductMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={cn(
        "z-20",
        "fixed",
        "inset-0",
        "bg-grey",
        "transition-all",
        "duration-[600ms]",
        "ease-in-out",
        "px-20",
        "inset-y-0",
        "max-w-[1366px]",
        "align-self",
        "pt-8",
        "grid",
        "gap-8",
        "grid-cols-2",
        "md:grid-cols-4",
        isActive ? "translate-y-0" : "-translate-y-[120%]",
        className
      )}
    >
      <CloseMenu>
        <CloseButton
          onClick={() => setIsProductMenuOpen(false)}
          className="hidden md:block"
        />

        {PRODUCTS.map(({ label, iconId, path }) => (
          <Link
            key={iconId}
            href={path}
            className={cn("relative w-[128px] inline-block")}
          >
            <Image
              fill
              src={`${ASSETS_BASE_URL}/${iconId}.svg`}
              alt={label}
              className=""
            />
            <p className="space-y-10">{label}</p>
          </Link>
        ))}
      </CloseMenu>
    </div>
  );
}

function CloseMenu({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute",
        "inset-x-[4%]",
        "inset-y-0",
        "mt-[84px]",
        "md:border-t",
        // "border-black",
        "max-w-[1366px]",
        "pt-8",
        "grid",
        "gap-8",
        "grid-cols-2",
        "md:grid-cols-4",
        "place-items-center",
        className
      )}
    >
      {children}
    </div>
  );
}
