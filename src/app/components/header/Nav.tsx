import { cn } from "@/lib/utils";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

type NavProps = {
  className?: string;
  setIsProductMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: (href: string) => boolean;
};

export default function Nav({
  className,
  setIsProductMenuOpen,
  isActive,
}: NavProps) {
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
            if (path === "#") setIsProductMenuOpen(true);
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

type MobileNavProps = {
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
};

export function MobileNav({ children, isActive, className }: MobileNavProps) {
  return (
    <div
      className={cn(
        "z-3",
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
        // Use both screen and svh in case svh is not supported
        "min-h-screen",
        "min-h-[100svh]",
        isActive ? "translate-y-0" : "-translate-y-full",
        className
      )}
    >
      {children}
    </div>
  );
}
