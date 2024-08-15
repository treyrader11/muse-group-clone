import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ASSETS_BASE_URL, PRODUCTS } from "@/lib/constants";
import Card from "./Card";
import { useWindowDimensions } from "@/lib/hooks/useWindowDimensions";

export default function Products() {
  return (
    <section>
      {PRODUCTS.map((project, i) => {
        return <ProductCard key={i} {...project} />;
      })}
    </section>
  );
}

type CardProps = {
  label: string;
  description: string;
  iconId: string;
  onColor?: boolean;
  banner: { mobile: string; desktop: string };
};

function ProductCard({
  label,
  description,
  iconId,
  onColor,
  banner,
}: CardProps) {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;

  return (
    <div
      className={cn(
        "min-h-screen",
        "flex",
        // "items-center",
        "justify-center",
        "sticky",
        "top-[76px]",
        "sm:top-[126px]",
        // "xs:top-[70px]",
        { "text-white": onColor }
      )}
    >
      <Card
        style={{
          backgroundImage: `url(${ASSETS_BASE_URL}/${
            isSmallScreen ? banner.mobile : banner.desktop
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // backgroundPosition: "50%",
        }}
        className={cn(
          "flex",
          "flex-col",
          "gap-4",
          "relative",
          "pt-[125%]",
          "size-fit",
          "w-full",
          "min-h-[80vh]",
          "[background-position:50%]"
        )}
      >
        <div
          className={cn(
            "absolute",
            "top-4",
            "inset-x-4",
            "justify-between",
            "w-full",
            "space-y-6"
            // "pr-12"
          )}
        >
          <div className={cn("flex justify-betweenw-full")}>
            <div
              className={cn(
                "gap-4",
                "flex-col",
                "sm:flex-row",
                "flex",
                "size-10",
                "sm:size-20"
                // "relative",
              )}
            >
              <Image
                src={`${ASSETS_BASE_URL}/${iconId}.svg`}
                alt={label}
                className="object-cover"
                width={64}
                height={64}
                // fill
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

            <div className="pr-10 hidden md:block">
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
      </Card>
    </div>
  );
}
