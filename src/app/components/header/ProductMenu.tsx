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
        // "px-20",
        "max-w-[1366px]",
        "pt-8",
        isActive ? "translate-y-0" : "-translate-y-[120%]",

        //new
        "grid",
        "place-content-center",
        className
      )}
    >
      <nav
        className={cn(
          // "mt-[84px]",
          "md:border-t",
          "border-white/10",
          // "max-w-[1366px]",
          // "mx-auto",
          // "relative",
          // "border border-red-400",

          className
        )}
      >
        <ul
          className={cn(
            // "relative",
            // "pt-20",

            "gap-8",
            "px-10",

            "grid-cols-4",
            // "md:grid-cols-4",
            // "place-items-center",
            // "mx-auto",
            // "max-w-[700px]",
            // "z-4",
            "flex",
            "flex-wrap",
            "justify-center",
            "items-evenly",
            "md:grid"
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
                "w-[120px]",
                "items-center",
                "flex",
                "flex-col",
                "gap-2"
              )}
            >
              <Image
                width={64}
                height={64}
                src={`${ASSETS_BASE_URL}/${iconId}.svg`}
                alt={label}
              />
              <p className={cn("text-center font-inter")}>{label}</p>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
