"use client";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import path from "path";
import { ASSETS_BASE_URL, PRODUCTS, ROUTES } from "@/lib/constants";
import { useWindowDimensions } from "@/lib/hooks";
import CloseButton from "./CloseButton";

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
      <header
        className={cn(
          "w-full",
          "min-h-16",
          "py-3",
          "px-[4%]",
          "fixed",
          "top-0",
          "z-[99]",
          // isNewsroomPage ? "bg-black text-white" : "bg-white"
          { " text-white": isNewsroomPage }
          //  "bg-transparent text-black"
        )}
      >
        <div
          className={cn(
            "grid",
            // "grid-cols-2", // does't stay in container
            "[grid-template-columns:1fr_1fr]", // stays inside container
            "gap-8",
            "max-w-[1366px]"
            // "relative z-[99]"

            // " z-[99] fixed top-3 left-[4%]"
          )}
        >
          <Logo
            backgroundColor={isNewsroomPage ? "white" : "black"}
            className={cn("hidden md:block")}
          />
          {/* <Burger onClick={() => setIsOpen(!isOpen)} className="md:hidden" /> */}
          <NavMenu
            setIsProductMenuOpen={() => setIsProductMenuOpen(true)}
            isProductMenuOpen={isProductMenuOpen}
            className={cn("hidden md:flex")}
            isActive={(href) => href === pathname}
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
          setIsProductMenuOpen={setIsProductMenuOpen}
          isProductMenuOpen={isProductMenuOpen}
          className={cn("flex-col justify-center items-center")}
          isActive={(href) => href === pathname}
        />
      </MobileNavMenu>
    </>
  );
}

function NavMenu({
  className,
  setIsProductMenuOpen,
  isProductMenuOpen,
  isActive,
}: {
  className?: string;
  setIsProductMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isProductMenuOpen: boolean;
  isActive: (href: string) => boolean;
}) {
  return (
    <nav
      className={cn(
        "flex",
        "justify-evenly",
        "gap-x-5",
        "gap-y-[70px]",
        "uppercase",
        "font-oswald",
        "font-semibold",
        "text-5xl",
        "md:text-3xl",
        "leading-6",
        "tracking-tighter",
        "pb-[70px]",
        className
      )}
    >
      {ROUTES.map(({ href, label }) => (
        <Link
          onClick={() => setIsProductMenuOpen(true)}
          className={cn("hover:opacity-60", {
            "opacity-60": isActive(href),
          })}
          key={href}
          href={href}
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
          "focus:outline-none", // more accessible
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
        // "absolute",
        "inset-0",
        "bg-grey",
        "transition-all",
        "duration-[600ms]",
        "ease-in-out",
        "px-20",
        isActive ? "translate-y-0" : "-translate-y-[120%]",
        // "inset-x-[4%]",

        "inset-y-0",
        // "bg-black",
        // "mt-[84px]",
        // "border-t-2",
        // "border-black",
        // "flex",
        // "flex-end",
        // "items-center",
        "max-w-[1366px]",
        "align-self",
        // "mx-auto",
        // "mt-[84px]",
        "pt-8",
        "grid",
        "gap-8",
        "grid-cols-2",
        "md:grid-cols-4",
        className
      )}
    >
      <CloseMenu>
        <CloseButton
          onClick={() => setIsProductMenuOpen(false)}
          className="hidden md:block"
        />

        {PRODUCTS.map(({ label, iconId, route }) => (
          <Link
            href={route}
            className={cn(
              "relative",
              "w-[128px]",
              "inline-block"
            )}
          >
            <Image
              fill
              src={`https://cdn.prod.website-files.com/6511efa00919fb9000588f9a/${iconId}.svg`}
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
