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
        "pt-8",
        "md:pt-0",
        isActive ? "translate-y-0" : "-translate-y-[120%]",
        "grid",
        "place-content-center",
        className
      )}
    >
      <nav
        className={cn(
          "md:mt-[84px]",
          "md:border-t",
          "border-white/10",
          "md:w-[93vw]", // not sure about breakpoint
          "relative",
          className
        )}
      >
        <Close
          onClick={() => setIsProductMenuOpen(false)}
          className="hidden md:block absolute"
        />
        <ul
          className={cn(
            "max-w-3xl",
            "gap-8",
            "px-10",
            "md:pt-20",
            "mx-auto",
            "flex",
            "flex-wrap",
            "justify-center",
            "items-evenly",
            "md:grid",
            "grid-cols-4"
          )}
        >
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
              <p className={cn("text-center")}>{label}</p>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
