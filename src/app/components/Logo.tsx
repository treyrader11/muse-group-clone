import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn(className)}>
      <Image
        width={222}
        height={60}
        loading="lazy"
        alt="logo"
        src="https://cdn.prod.website-files.com/6511efa00919fb9000588f9a/667b3d3b69366c44c3c1ed24_logo-black.svg"
        className="hidden xs:block"
      />
      <Image
        width={55}
        height={60}
        loading="lazy"
        alt="logo"
        src="https://cdn.prod.website-files.com/6511efa00919fb9000588f9a/667b42061b567aa6b91b5f66_M-logo-black.svg"
        className="xs:hidden"
      />
    </Link>
  );
}
