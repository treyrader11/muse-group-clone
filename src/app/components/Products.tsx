import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ASSETS_BASE_URL, PRODUCTS } from "@/lib/constants";

export default function Products() {
  return (
    <div>
      {PRODUCTS.map((project, i) => {
        return <ProductCard key={i} index={i} {...project} />;
      })}
    </div>
  );
}

interface CardProps {
  index: number;
  label: string;
  description: string;
  coverId: string;
  iconId: string;
}

function ProductCard({ coverId, label, description, iconId }: CardProps) {
  return (
    <div
      className={cn(
        "min-h-screen",
        "flex",
        "items-center",
        "justify-center",
        "sticky",
        "top-0"
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
          "relative",
          "h-[500px]",
          "max-w-[1500px]",
          "w-full",
          "p-[50px]",
          "origin-top",
          "rounded-3xl"
        )}
      >
        <div className="flex justify-between w-full">
          <div className={cn("gap-4", "flex")}>
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

          <Image
            width={64}
            height={64}
            alt="arrow icon"
            src={`${ASSETS_BASE_URL}/6511efa00919fb9000588fb3_Arrow.svg`}
          />
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

        {/* <div
          style={{
            backgroundImage: `url(${ASSETS_BASE_URL}/${coverId})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={cn("flex h-full gap-[50px]")}
        >
          <div
            className={cn(
              "relative",
              "w-full",
              "rounded-3xl",
              "overflow-hidden"
            )}
          >
            <div className={cn("size-full relative")}>
              <Image
                fill
                src={`${ASSETS_BASE_URL}/${coverId}`}
                alt="image"
                className="object-cover"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
