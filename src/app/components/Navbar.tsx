"use client";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={cn(
          "w-full",
          "min-h-16",
          "py-3",
          "px-[4%]",
          "fixed",
          "top-0",
          "z-10",
          "bg-white"
        )}
      >
        <div
          className={cn(
            "w-full",
            "grid",
            // "grid-cols-2", // does't stay in container
            "gap-8",
            "max-w-[1366px]",
            "[grid-template-columns:1fr_1fr]" // stays inside container
          )}
        >
          {/* <Logo />
          <Hamburger
            isActive={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto"
          /> */}
          {/* <Burger onClick={() => setIsOpen(!isOpen)} className="md:hidden" /> */}
          <NavMenu className="hidden md:flex" />
        </div>
      </div>
      <Logo className="z-[99] fixed top-3 left-[4%]" />

      <Hamburger
        isActive={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed z-[99] top-3 right-[4%]"
      />

      <MobileNavMenu isActive={isOpen}>
        <NavMenu className="flex-col justify-center items-center" />
      </MobileNavMenu>
    </>
  );
}

function NavMenu({ className }: { className?: string }) {
  const LINKS = [
    { href: "/", label: "Products" },
    { href: "/newsroom", label: "Newsroom" },
    { href: "/careers", label: "Careers" },
  ];
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
        className
      )}
    >
      {LINKS.map(({ href, label }) => (
        <Link className="hover:opacity-60" key={href} href={href}>
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
    // <div
    //   onClick={onClick}
    //   data-menu="4"
    //   className={cn(
    //     "menu",
    //     "size-10",
    //     "mt-1",
    //     "flex",
    //     "cursor-pointer",
    //     "fixed",
    //     "z-[99]",
    //     "right-[4%]",
    //     className
    //   )}
    // >
    //   <div className="icon"></div>
    // </div>

    <div
      onClick={onClick}
      className="fixed duration-500 transition-all right-[4%] z-10 w-[60px] h-[60px]"
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
}: {
  children: React.ReactNode;
  isActive: boolean;
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
        "pb-[70px]",
        "bg-gray-200",
        "w-full",
        "transition-all",
        "duration-[600ms]",
        "ease-in-out",
        "-translate-y-full",
        isActive ? "translate-y-0" : "-translate-y-full"

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
    <div
      className={cn(
        // "fixed",
        // "right-[4%]",
        // "top-6",
        // "z-10",
        className
      )}
    >
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

            "rounded-full",
            "before:rounded-full",
            "before:absolute",
            "before:bg-black",
            "before:h-[3px]",
            "before:w-9",
            "before:transition-all",
            "before:duration-500",
            "before:-translate-x-4",
            "before:-translate-y-3"

            // third line
            // "after:h-[3px]",
            // "after:w-9",
            // "after:transition-all",
            // "after:duration-500",
            // "after:-translate-x-4",
            // "after:translate-y-3",
            // isActive && "toggle-burger"
          )}
        ></div>
      </button>
    </div>
  );
}
