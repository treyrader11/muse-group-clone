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
        "pt-8",
        isActive ? "translate-y-0" : "-translate-y-[120%]",
        className
      )}
    >
      <nav
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
        <ul
          className={cn(
            // "absolute",
            // "inset-x-[4%]",
            // "inset-y-0",
            "relative",
            "pt-20",
            "grid",
            "gap-8",
            "gap-y-10",
            "grid-cols-2",
            "md:grid-cols-4",
            "place-items-center",
            "mx-auto",
            "max-w-[700px]",
            "z-4"
          )}
        >
          <Close
            onClick={() => setIsProductMenuOpen(false)}
            className="hidden md:block mt-10"
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
              <p className={cn("absolute", "-bottom-5", "sm:bottom-0")}>
                {label}
              </p>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
