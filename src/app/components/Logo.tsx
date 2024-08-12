import { ASSETS_BASE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Logo({
  className,
  backgroundColor,
}: {
  className?: string;
  backgroundColor: "black" | "white";
}) {
  const onDark = backgroundColor === "black";

  const desktopLogo = onDark
    ? "667b3d3b69366c44c3c1ed24_logo-black"
    : "667b40c9f8dacab38d9c0890_logo-white";

  const mobileLogo = onDark
    ? "667b41ed7a8c0f8368a469fc_M-logo-white"
    : "667b42061b567aa6b91b5f66_M-logo-black";

  return (
    <Link
      href="/"
      className={cn(className, "size-[10%] xs:size-[30%] md:size-full")}
    >
      <Image
        width={222}
        height={60}
        alt="logo"
        src={`${ASSETS_BASE_URL}/${desktopLogo}.svg`}
        className="hidden xs:block"
        priority
      />
      <Image
        width={55}
        height={60}
        alt="logo"
        src={`${ASSETS_BASE_URL}/${mobileLogo}.svg`}
        className="xs:hidden"
        priority
      />
    </Link>
  );
}
