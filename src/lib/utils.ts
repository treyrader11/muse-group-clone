import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isLastListItem<T>(item: T, list: T[]): boolean {
  return item === list[list.length - 1];
}
