import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ASSETS_BASE_URL, PRODUCTS } from "@/lib/constants";
import Close from "../Close";

type ProductsMenuProps = {
  isActive: boolean;
  className?: string;
  background: "dark" | "light";
  setIsProductMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ProductMenu({
  isActive,
  className,
  background,
  setIsProductMenuOpen,
}: ProductsMenuProps) {
  const isDarkBG = background === "dark";
  return (
    <DropdownOverlay
      className={cn(
        {
          "translate-y-0": isActive,
          "bg-black text-white": isDarkBG,
        },

        className
      )}
    >
      <nav
        className={cn(
          "md:pt-8",
          "top-[var(--header-height)]",
          "md:border-t",
          "border-black/40",
          { "border-white/10": isDarkBG },
          "w-[93vw]",
          "flex",
          "flex-col",
          className
        )}
      >
        <Close
          iconUrl={
            isDarkBG
              ? "651426c95acecdb34f8bdbd6_cross.svg"
              : "6514243500b73ab4728583a9_cross.svg"
          }
          onClick={() => setIsProductMenuOpen(false)}
          className={cn("")}
        />
        <div
          className={cn(
            "max-w-2xl",
            "gap-10",
            "mx-auto",
            "grid",
            "grid-cols-2",
            "md:grid-cols-4"
          )}
        >
          {PRODUCTS.map((prod, i) => (
            <ProductLink key={i} {...prod} />
          ))}
        </div>
      </nav>
    </DropdownOverlay>
  );
}

type ProductLinkProps = {
  iconId: string;
  path: string;
  label: string;
};

function ProductLink({ iconId, path, label }: ProductLinkProps) {
  return (
    <Link
      key={iconId}
      href={path}
      className={cn("items-center group flex flex-col gap-2")}
    >
      <div
        className={cn(
          "relative",
          "min-h-16",
          "min-w-16",
          "size-20",
          "md:size-32"
        )}
      >
        <Image
          fill
          src={`${ASSETS_BASE_URL}/${iconId}.svg`}
          alt={label}
          className={cn(
            "group-hover:-mt-2",
            "transition-all",
            "duration-300",
            "ease-in-out"
          )}
        />
      </div>

      <p className={cn("text-center")}>{label}</p>
    </Link>
  );
}

type DropdownOverlayProps = {
  children: React.ReactNode;
  className?: string;
};

function DropdownOverlay({ children, className }: DropdownOverlayProps) {
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
        "-translate-y-[120%]",
        "grid",
        "place-content-center",
        className
      )}
    >
      {children}
    </div>
  );
}
