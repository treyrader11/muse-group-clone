import { ASSETS_BASE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Hero from "../components/newsroom/Hero";

export default function NewsroomPage() {
  return (
    <div className={cn("min-h-screen", "bg-purple", "pt-40", "w-full")}>
      <Hero />
    </div>
  );
}
