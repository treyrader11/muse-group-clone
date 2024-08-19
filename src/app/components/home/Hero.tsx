import { cn } from "@/lib/utils";
import Slider from "./Slider";

export default function Hero() {
  return (
    <section
      className={cn(
        "min-h-screen",
        // "sm:min-h-0",
        // "sm:max-h-[80vh]",
        "sm:px-12",
      
      )}
    >
      <Slider />
    </section>
  );
}
