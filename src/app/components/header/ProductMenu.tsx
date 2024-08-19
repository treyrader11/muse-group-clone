"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ASSETS_BASE_URL, PRODUCTS } from "@/lib/constants";
import CloseButton from "../CloseButton";

type ProductsMenuProps = {
  isActive: boolean;
  className?: string;
  setIsProductMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ProductsMenu({
  isActive,
  className,
  setIsProductMenuOpen,
}: ProductsMenuProps) {
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
        // "min-h-[100svh]",
        "pt-8",
        isActive ? "translate-y-0" : "-translate-y-[120%]",
        className
      )}
    >
      <div
        className={cn(
          // "absolute",
          // "inset-x-[4%]",
          // "inset-y-0",
          "mt-[84px]",
          "md:border-t border-white/10",
          "max-w-[1366px]",
          // "pt-8",
          // "grid",
          // "gap-8",
          // "gap-y-10",
          // "grid-cols-2",
          // "md:grid-cols-4",
          // "place-items-center",
          "mx-auto",
          // "max-w-[700px]",
          "relative",
          className
        )}
      >
        <CloseButton
          onClick={() => setIsProductMenuOpen(false)}
          className="hidden md:block mt-10"
        />

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
            // "overflow-hidden"
          )}
        >
          {PRODUCTS.map(({ label, iconId, path }) => (
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
                  // "md:p-10",
                  // "grid",
                  // "grid-rows-2",
                  "gap-10"
                )}
              >
                <div
                  className={cn(
                    "absolute",
                    "size-full",
                    // "w-[120px]",
                    "h-[120px]"
                  )}
                >
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
                    // "-bottom-8",
                    "-bottom-5",
                    "xs:bottom-0",
                    "text-nowrap"
                  )}
                >
                  {label}
                </p>
              </Link>
            </li>
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
                  "xs:bottom-0",
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
