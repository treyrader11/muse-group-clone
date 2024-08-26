import { cn } from "@/lib/utils";
import React from "react";
import Featured from "../components/Featured";
import Logo from "../components/Logo";

export default function Team() {
  return (
    <section className="flex-center flex-col">
      <div>
        <Logo />
        <h2 className="flex">muse group</h2>
      </div>
      <div>
        <h2 className="text-gradient-green title-mask">
          Functional <br />Teams
        </h2>
      </div>
      <div className="pt-16 w-[982px]">
        <p className="text-center tracking-[-.5px]">
          Muse Group empowers music makers. We create the world&#39;s most
          powerful music creation tools, and we&#39;re building the world&#39;s
          most powerful community of music makers. We&#39;re a group of music
          makers working together to create the world&#39;s most powerful music
          creation software for playing, recording and composing music. The Muse
          community is now over 400 million strong. And we&#39;re just getting
          started.
        </p>
      </div>
    </section>
  );
}
