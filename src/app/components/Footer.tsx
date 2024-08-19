import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./Logo";
import { ASSETS_BASE_URL, SOCIALS, FOOTER_LINKS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={cn("pt-[256px] text-2xl px-[4%]")}>
      <div className={cn("max-w-[1366px] mx-auto border-t border-gray")}>
        <div className="mt-8 flex w-full justify-between">
          <Logo />
          <ul className={cn("pl-0 ml-0 flex gap-8")}>
            {SOCIALS.map(({ id, label, path }) => (
              <li key={id}>
                <a href={path} target="_blank" rel="noreferrer" className="">
                  <Image
                    src={`${ASSETS_BASE_URL}/${id}.svg`}
                    alt={label}
                    width={40}
                    height={40}
                    className="size-10 sm:size-14"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul
          className={cn(
            "flex",
            "flex-col",
            "justify-between",
            "leading-[40px]",
            "pb-4",
            "sm:pb-16",
            "mt-[104px]",
            "text-[#19191a]",
            "text-2xl",
            "font-bold",
            "font-sans",
            "gap-9",
            "sm:grid",
            "sm:grid-cols-2",
            "place-content-around",
            "md:grid-cols-3",
            "md:items-end",
            "whitespace-nowrap",
            "w-full"
          )}
        >
          <li>
            <ul className="flex flex-col gap-y-1 items-start">
              <li className="tracking-[-1px] leading-[150%] font-normal">
                Email us:
              </li>
              {FOOTER_LINKS.map(({ label, href }) => {
                if (href) {
                  return (
                    <li key={href}>
                      <a href={`${href}`} >
                        {label}
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </li>
          <li>
            <ul className="flex flex-col gap-y-1 pt-8">
              {FOOTER_LINKS.map(({ label, path }) => {
                if (path) {
                  return (
                    <li key={path}>
                      <Link href={path}>{label}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </li>

          <li className="flex sm:self-end md:ml-auto">
            <Copyright />
          </li>
        </ul>
      </div>
    </footer>
  );
}

function Copyright() {
  return (
    <div className={cn("mt-8 text-center font-normal text-2xl")}>
      © 1998 —{" "}
      <span>
        {new Date().toLocaleDateString("en-US", {
          year: "numeric",
        })}
      </span>
    </div>
  );
}
