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
    <>
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

          "object-fill",
          // "flex",
          "flex-col",
          // "items-center",
          "min-h-screen",
          "grid",
          "place-content-center",
          "size-full",
    
          className
        )}
      >
        <IconMenu />
      </div>
    </>
  );
}

function IconMenu() {
  // const firstRowProducts = PRODUCTS.slice(0, 4);
  // const secondRowProducts = PRODUCTS.slice(4, 8);
  // const secondRowProducts = PRODUCTS.slice(4, 8);
  // const secondRowProducts = PRODUCTS.slice(4, 8);
  const firstRowProducts = PRODUCTS.slice(0, 2);
  const secondRowProducts = PRODUCTS.slice(2, 4);
  const thirdRowProducts = PRODUCTS.slice(4, 6);
  const fourthRowProducts = PRODUCTS.slice(6, 8);

  return (
    <div
      className={cn(
        "relative",
        "z-1",
        "flex",
        "flex-col",
        "gap-8",
        "w-screen",
        "border border-red-400",
        // "px-0"
      )}
    >
      <IconSet products={firstRowProducts} />
      <IconSet products={secondRowProducts} />
      <IconSet products={thirdRowProducts} />
      <IconSet products={fourthRowProducts} />
      {/* <IconSet products={secondRowProducts} /> */}
    </div>
  );
}

function IconSet({ products }: { products: typeof PRODUCTS }) {
  return (
    <div className={cn("flex-center", "", "gap-8", )}>
      <div className={cn("flex-center gap-8 sm:gap-16")}>
        {products.map((product) => (
          <Icon
            key={product.iconId}
            imgUrl={product.iconId}
            title={product.label}
          />
        ))}
      </div>
    </div>
  );
}

function Icon({ imgUrl, title }: { imgUrl: string; title: string }) {
  return (
    <a className={cn("flex", "flex-col", "items-center")}>
      <Image
        width={64}
        height={64}
        loading="lazy"
        src={`${ASSETS_BASE_URL}/${imgUrl}.svg`}
        alt={title}
        className="align-middle overflow-clip"
      />
      <div
        className={cn(
          "text-center",
          "-mt-2",
          "font-inter",
          "leading-[150%]"
          // "whitespace-nowrap"
        )}
      >
        {title}
      </div>
    </a>
  );
}

// function Icon({ imgUrl, title }: { imgUrl: string; title: string }) {
//   return (
//     <a className={cn("flex", "flex-col", "items-center")}>
//       <Image
//         width={64}
//         height={64}
//         loading="lazy"
//         // fill
//         src={`${ASSETS_BASE_URL}/${imgUrl}.svg`}
//         alt="Ultimate Guitar"
//         className="align-middle overflow-clip"
//       />

//       <div
//         className={cn(
//           "text-center",
//           "-mt-2",
//           "font-inter",
//           "leading-[150%]",
//           ""
//         )}
//       >
//         {title}
//       </div>
//     </a>
//   );
// }
