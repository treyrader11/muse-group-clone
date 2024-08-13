"use client";

// import Link from "@/components/Link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { translate } from "./motion";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  className?: string;
  linkTo?: string;
  phrase?: string;
};

export default function Translate({
  children,
  className,
  linkTo,
  phrase,
}: Props) {
  const getChars = (word: string) => {
    // let chars: JSX.Element[] = [];
    let chars: any = [];
    phrase?.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
          className={className}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return linkTo ? (
    <Link href={linkTo}>{children || (phrase && getChars(phrase))}</Link>
  ) : children ? (
    <motion.span
      custom={[0.02, 0.01]}
      variants={translate}
      initial="initial"
      animate="enter"
      exit="exit"
      className={className}
    >
      {children}
    </motion.span>
  ) : (
    phrase && getChars(phrase)
  );
}
