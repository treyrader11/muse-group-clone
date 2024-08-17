// import { cn } from "@/lib/utils";
// import React from "react";

// export default function Burger({
//   isActive,
//   onClick,
//   className,
// }: {
//   isActive: boolean;
//   onClick: () => void;
//   className?: string;
// }) {
//   return (
//     <div className={cn("bg-transparent", className)}>
//       <button
//         onClick={onClick}
//         className={cn(
//           "transition-all",
//           "duration-500",
//           "w-8",
//           "xs:w-10",
//           "h-[1.4rem]",

//           "relative",
//           "m-5",
//           "duration-200",
//           // delays rotation (make same as overlay fall)
//           isActive && cn("delay-300", "rotate-[135deg]")
//         )}
//       >
//         <span
//           className={cn(
//             "absolute",
//             "top-0",
//             "left-0",
//             "h-[2.5px]",
//             "xs:h-[3px]",
//             "w-full",
//             "duration-300",
//             "transition-all",
//             isActive
//               ? "top-1/2 animate-open-menu"
//               : " animate-close-menu"
//           )}
//         />

//         <span
//           className={cn(
//             "absolute",
//             "bottom-0",
//             "left-0",
//             "h-[2.5px]",
//             "xs:h-[3px]",
//             "w-full",
//             "duration-300",
//             "transition-transform",
//             "transition-all",
//             // isActive && cn(" top-1/2 animate-close-menu"),
//             // isActive && cn(""),
//             isActive
//             ? "bottom-1/2 rotate-90" // Adjust as needed
//             : " "

//           )}
//         />
//       </button>
//     </div>
//   );
// }

import { cn } from "@/lib/utils";
import React from "react";

export default function Burger({
  isActive,
  onClick,
  className,
}: {
  isActive: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <div className={cn("bg-transparent", className)}>
      <button
        onClick={onClick}
        className={cn(
          "transition-all",
          "duration-500",
          "w-8",
          "xs:w-10",
          "h-4",
          "relative",
          "m-5",
          "duration-200",
          // delays rotation (make same as overlay fall)
          isActive && cn("delay-300", "rotate-[135deg]")
        )}
      >
        <span
          className={cn(
            "absolute",
            "left-0",
            "h-[2.5px]",
            "xs:h-[3px]",
            "w-full",
            "duration-300",
            "transition-all",
            isActive ? "top-1/2 animate-open-menu" : "top-0 animate-close-menu"
          )}
        />

        <span
          className={cn(
            "absolute",
            "bottom-0",
            "left-0",
            "h-[2.5px]",
            "xs:h-[3px]",
            "w-full",
            "duration-300",
            "transition-all",
            // isActive && cn("animate-close-menu"),
            isActive ? "top-1/2" : "animate-close-shit"
            // isActive
            // ? "bottom-1/2 animate-open-menu" // Adjust as needed
            // : "animate-close-bottom-menu "
          )}
        />
      </button>
    </div>
  );
}
