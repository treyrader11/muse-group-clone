import { ASSETS_BASE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const imageProps = {
  width: 222,
  height: 60,
  alt: "Muse Group logo",
  priority: true,
};

type LogoProps = {
  className?: string;
  color?: "black" | "white";
  forPreloader?: boolean;
};

export default function Logo({
  className,
  color = "black",
  forPreloader,
}: LogoProps) {
  const onDark = color === "white";

  const desktopLogo = onDark
    ? "667b40c9f8dacab38d9c0890_logo-white"
    : "667b3d3b69366c44c3c1ed24_logo-black";

  const mobileLogo = onDark
    ? "667b41ed7a8c0f8368a469fc_M-logo-white"
    : "667b42061b567aa6b91b5f66_M-logo-black";

  if (forPreloader) {
    return (
      <div
        className={cn(
          "w-[202px]",
          "h-[40px]",
          "sm:w-[222px]",
          "sm:h-[60px]",
          "transition-all",
          "duration-[800ms]",
          "ease-in-out",
          "translate-y-full",
          "relative",
          className
        )}
      >
        <Image
          fill
          alt="Muse Group logo"
          src={`${ASSETS_BASE_URL}/667b40c9f8dacab38d9c0890_logo-white.svg`}
        />
      </div>
    );
  } else
    return (
      <Link href="/" className={cn("size-[8%]", "sm:size-[30vw]", className)}>
        <Image
          {...imageProps}
          src={`${ASSETS_BASE_URL}/${desktopLogo}.svg`}
          className={cn("hidden sm:block")}
        />
        <Image
          {...imageProps}
          src={`${ASSETS_BASE_URL}/${mobileLogo}.svg`}
          className="sm:hidden"
        />
      </Link>
    );
}
