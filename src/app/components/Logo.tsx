import { ASSETS_BASE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  color?: "black" | "white";
  retainSize?: boolean;
};

export default function Logo({
  className,
  color = "black",
  retainSize = false,
}: LogoProps) {
  const onDark = color === "white";

  const desktopLogo = onDark
    ? "667b40c9f8dacab38d9c0890_logo-white"
    : "667b3d3b69366c44c3c1ed24_logo-black";

  const mobileLogo = onDark
    ? "667b41ed7a8c0f8368a469fc_M-logo-white"
    : "667b42061b567aa6b91b5f66_M-logo-black";

  return (
    <Link
      href="/"
      className={cn(
        retainSize ? "size-[30%]" : "size-[9%] xs:size-[30%] md:size-full",
        className
      )}
    >
      <Image
        width={222}
        height={60}
        alt="logo"
        src={`${ASSETS_BASE_URL}/${desktopLogo}.svg`}
        className={cn("block", { "hidden xs:block": !retainSize })}
        priority
      />
      <Image
        width={55}
        height={60}
        alt="logo"
        src={`${ASSETS_BASE_URL}/${mobileLogo}.svg`}
        // className="xs:hidden"
        className={cn("", { "xs:hidden": !retainSize })}
        priority
      />
    </Link>
  );
}
