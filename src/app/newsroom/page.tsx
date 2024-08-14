import { ASSETS_BASE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function NewsroomPage() {
  return (
    <div className={cn("min-h-screen", "bg-purple", "pt-40")}>
      <h1 className={cn("font-oswald", "title-mask", "text-gradient-yellow")}>
        Explore news and features
      </h1>
      <div>
        <Image
          src={`${ASSETS_BASE_URL}/6543dd67343fe98e99e261b3_noise.png`}
          alt="newsroom banner"
          width={1200}
          height={630}
          className="object-cover"
        />
      </div>
    </div>
  );
}
