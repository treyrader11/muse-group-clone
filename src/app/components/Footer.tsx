import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./Logo";
import { ASSETS_BASE_URL, SOCIALS } from "@/lib/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={cn("pt-[256px] text-2xl px-[4%]")}>
      <div className={cn("max-w-[1366px] mx-auto border-t border-gray")}>
        <div className="mt-8 flex w-full">
          <Logo backgroundColor="black" />
          <ul className={cn("pl-0", "ml-0", "flex", "gap-8")}>
            {SOCIALS.map(({ id, label, path }) => (
              <li key={id}>
                <a
                  href={path}
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <Image
                    src={`${ASSETS_BASE_URL}/${id}.svg`}
                    alt={label}
                    width={40}
                    height={40}
                    className="size-14"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
