import { cn } from "@/lib/utils";
import React from "react";
import Featured from "../components/Featured";
import Logo from "../components/Logo";
import Image from "next/image";
import { TEAM_AVATARS } from "@/lib/constants";

export default function Team() {
  return (
    <section
      className={cn(
        "flex-center",
        "leading-10",
        "text-2xl",
        "tracking-tighter",
        "pt-16",
        "flex-col",
        "gap-6",
        "font-oswald",
        "text-center"
        // "relative"
      )}
    >
      <TeamLogo />
      <div>
        <h2 className="text-gradient-green title-mask">
          Functional <br />
          Teams
        </h2>
      </div>
      <div className="pt-5">
        <p className="text-center font-inter font-semibold ">
          Muse Group empowers music makers. We create the world&#39;s most
          popular software for playing, recording and composing music. The Muse
          community is now over 400 million strong. And we&#39;re just getting
          started.
        </p>
      </div>
      <Avatars />
    </section>
  );
}

function TeamLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative size-6 ")}>
        <Logo className="size-full absolute" />
      </div>

      <span
        className={cn(
          "flex",
          "tracking-tighter",
          "text-3xl",
          "uppercase",
          "font-black"
        )}
      >
        muse group
      </span>
    </div>
  );
}

type AvatarSetProps = {
  avatars: string[];
  className?: string;
};

function AvatarSet({ avatars, className }: AvatarSetProps) {
  return (
    <div className={cn("flex gap-3 flex-wrap", className)}>
      {avatars.map((avatar, i) => (
        <div className="relative size-12" key={i}>
          <Image
            src={avatar}
            alt={`Avatar ${i + 1}`}
            fill
            className="object-contain rounded-full"
          />
        </div>
      ))}
    </div>
  );
}

// Avatars Component
function Avatars({ className }: { className?: string }) {
  const set1 = TEAM_AVATARS.slice(0, 6);
  const set2 = TEAM_AVATARS.slice(6, 13);
  const set3 = TEAM_AVATARS.slice(13, 19);

  return (
    <div className={cn("flex flex-col gap-8 flex-center", className)}>
      <div className="grid gap-4 grid-rows-3">
        <AvatarSet avatars={set1} />
        <AvatarSet avatars={set2} className="-ml-8" />
        <AvatarSet avatars={set3} />
      </div>
      <p className={cn("mt-4 leading-10 font-inter tracking-normal")}>
        People Operations, Revenue, Operations, Communications, Information
        Security, Finance, Design & Brand
      </p>
    </div>
  );
}
