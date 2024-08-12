import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ASSETS_BASE_URL, PRODUCTS } from "@/lib/constants";

export default function Products() {
  return (
    <div>
      {PRODUCTS.map((project, i) => {
        return <ProductCard key={i} {...project} />;
      })}
    </div>
  );
}

interface CardProps {
  label: string;
  description: string;
  coverId: string;
  iconId: string;
  onColor?: boolean;
}

function ProductCard({
  coverId,
  label,
  description,
  iconId,
  onColor,
}: CardProps) {
  return (
    <div
      className={cn(
        "min-h-screen",
        "flex",

        "items-center",
        "justify-center",
        "sticky",
        "top-0",
        "top-[70px]",
        { "text-white": onColor }
      )}
    >
      <div
        style={{
          backgroundImage: `url(${ASSETS_BASE_URL}/${coverId})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={cn(
          "flex",
          "flex-col",
          "gap-4",
          "relative",
          //   "min-h-[500px]",
          "max-w-[1500px]",
          "w-full",
          "p-[40px]",
          //   "origin-top",
          "rounded-3xl",
          "pt-[125%]"
        )}
      >
        <div
          className={cn(
            "flex",
            "absolute",
            "top-0",
            "justify-between",
            "w-full"
            // "pr-12"
          )}
        >
          <div className={cn("gap-4", "flex-col", "sm:flex-row", "flex")}>
            <Image
              src={`${ASSETS_BASE_URL}/${iconId}.svg`}
              alt={label}
              className="object-cover"
              width={64}
              height={64}
            />
            <h3
              className={cn(
                "uppercase",
                "text-white",
                "text-6xl",
                "font-extrabold",
                "tracking-tighter",
                "font-oswald"
              )}
            >
              {label}
            </h3>
          </div>

          <div className="pr-14">
            <Image
              width={64}
              height={64}
              alt="arrow icon"
              src={`${ASSETS_BASE_URL}/6511efa00919fb9000588fb${
                onColor ? "6_Arrow-white" : "3_Arrow"
              }.svg`}
            />
          </div>
        </div>
        <div
          className={cn(
            "tracking-[-1px]",
            "font-inter",
            "text-2xl",
            "leading-[150%]"
          )}
        >
          {description}
        </div>
      </div>
    </div>
  );
}
