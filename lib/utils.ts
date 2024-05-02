import { type ClassValue, clsx } from "clsx";
import { Chakra_Petch, Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const headingFont = Chakra_Petch({
  subsets: ["latin"],
  weight: [
    "400",
    "500",
    "600",
    "700"
  ]
});

export const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ]
});
