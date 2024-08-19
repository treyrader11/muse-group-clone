"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ASSETS_BASE_URL, PRODUCTS } from "@/lib/constants";
import Close from "../Close";

type ProductsMenuProps = {
  isActive: boolean;
  className?: string;
  setIsProductMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ProductMenu({
  isActive,
  className,
  setIsProductMenuOpen,
}: ProductsMenuProps) {
  return (
    <div
      className={cn(
        "z-4",
        "fixed",
        "inset-0",
        "bg-grey",
        "transition-all",
        "duration-[600ms]",
        "ease-in-out",
        "px-20",
        "max-w-[1366px]",
        // "min-h-[100svh]",
        "pt-8",
        isActive ? "translate-y-0" : "-translate-y-[120%]",
        className
      )}
    >
      <div
        className={cn(
          "mt-[84px]",
          "md:border-t",
          "border-white/10",
          "max-w-[1366px]",
          "mx-auto",
          "relative",
          className
        )}
      >
        {/* <Close
          onClick={() => setIsProductMenuOpen(false)}
          className="hidden md:block mt-10"
        /> */}

        <ul
          className={cn(
            "absolute",
            "inset-x-[4%]",
            "inset-y-0",
            "pt-20",
            "grid",
            "gap-8",
            "gap-y-10",
            "grid-cols-2",
            "md:grid-cols-4",
            "place-items-center",
            "mx-auto",
            "max-w-[700px]"
          )}
        >
          <Close
            onClick={() => setIsProductMenuOpen(false)}
            className="hidden md:flex mt-10 z-5"
          />
          {/* {PRODUCTS.map(({ label, iconId, path }) => (
            <li key={iconId} className="">
              <Link
                href={path}
                className={cn(
                  "relative",
                  "size-full",
                  "w-[120px]",
                  "items-center",
                  "flex",
                  "flex-col",
                  "gap-10"
                )}
              >
                <div className={cn("absolute", "w-full", "h-[120px]")}>
                  <Image
                    fill
                    src={`${ASSETS_BASE_URL}/${iconId}.svg`}
                    alt={label}
                    className="object-cover"
                  />
                </div>
                <p
                  className={cn(
                    "absolute",
                    "-bottom-5",
                    "sm:bottom-0",
                    "text-nowrap",
                    "whitespace-nowrap"
                  )}
                >
                  {label}
                </p>
              </Link>
            </li>
          ))} */}
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
                "grid",
                "grid-rows-2",
                "gap-10"
              )}
            >
              <div
                className={cn(
                  "absolute",
                  "size-full",
                  "w-[120px]",
                  "items-center"
                )}
              >
                <Image
                  fill
                  src={`${ASSETS_BASE_URL}/${iconId}.svg`}
                  alt={label}
                />
              </div>
              <p
                className={cn(
                  "absolute",
                  // "-bottom-8",
                  "-bottom-5",
                  "sm:bottom-0"
                  // "text-nowrap"
                )}
              >
                {label}
              </p>
            </Link>
          ))}
        </ul>
        {/* {PRODUCTS.map(({ label, iconId, path }) => (
            <Link
              key={iconId}
              href={path}
              className={cn(
                "relative",
                "size-full",
                // "w-[120px]",
                "items-center",
                "flex",
                "flex-col",
                // "grid",
                // "grid-rows-2",
                "gap-10"
              )}
            >
              <div
                className={cn(
                  "absolute",
                  "size-full",
                  "w-[120px]",
                  "items-center"
                )}
              >
                <Image
                  fill
                  src={`${ASSETS_BASE_URL}/${iconId}.svg`}
                  alt={label}
                />
              </div>
              <p
                className={cn(
                  "absolute",
                  // "-bottom-8",
                  "-bottom-5",
                  "sm:bottom-0",
                  "text-nowrap"
                )}
              >
                {label}
              </p>
              
            </Link>
          ))} */}
      </div>
    </div>
  );
}
