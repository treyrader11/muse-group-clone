import Image from "next/image";
import { cn } from "@/lib/utils";
import { ASSETS_BASE_URL, PRODUCTS } from "@/lib/constants";
import Card from "../Card";
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
    <Card
      style={{
        backgroundImage: `url(${ASSETS_BASE_URL}/${
          isSmallScreen ? banner.mobile : banner.desktop
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={cn(
        "min-h-screen",
        "sticky",
        "top-[76px]",
        "sm:top-[126px]",
        { "text-white": onColor },
        "min-h-[80vh]",
        "pt-[160%]"
      )}
    >
      <div className={cn("flex flex-col w-full gap-5")}>
        <div
          className={cn(
            "flex",
            "absolute",
            "top-0",
            "left-0",
            "flex-col",
            "pb-10",
            "w-full",
            "gap-5",
            "p-4",
            "sm:p-5"
          )}
        >
          <ProductTitle>
            <div className="size-10 sm:size-[4rem] relative">
              <Image
                src={`${ASSETS_BASE_URL}/${iconId}.svg`}
                alt={label}
                className="object-cover"
                fill
              />
            </div>

            <h3
              className={cn(
                "whitespace-nowrap",
                onColor ? "text-white" : "text-black",
                "font-oswald",
                "text-left",
                "flex-shrink",
                "text-[12vw]"
              )}
            >
              {label}
            </h3>
            <div className={cn("hidden items-center md:flex ml-auto")}>
              <ArrowIcon
                src={`${ASSETS_BASE_URL}/6511efa00919fb9000588fb${
                  onColor ? "6_Arrow-white" : "3_Arrow"
                }.svg`}
                className={cn("")}
              />
            </div>
          </ProductTitle>

          <p
            className={cn(
              "tracking-[-1px]",
              "font-inter",
              "sm:text-2xl",
              "leading-[150%]"
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}

function ArrowIcon({ className, src }: { className?: string; src: string }) {
  return (
    <div className={cn("size-[4rem] relative", className)}>
      <Image alt="arrow icon" className="" fill src={src} />
    </div>
  );
}

type ProductTitleProps = {
  className?: string;
  children: React.ReactNode;
};

function ProductTitle({ className, children }: ProductTitleProps) {
  return (
    <div
      className={cn(
        "size-full",
        "gap-4",
        "flex",
        "size-full",
        "gap-4",
        "flex-col",
        "sm:flex-row",
        className
      )}
    >
      {children}
    </div>
  );
}
