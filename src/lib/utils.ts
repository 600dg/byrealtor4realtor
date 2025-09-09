import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Smoothly scroll to an element id with a fixed header offset
export function smoothScrollTo(elementId: string, headerHeight: number = 120) {
  if (typeof document === "undefined") return;
  const element = document.getElementById(elementId);
  if (!element) return;
  const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  window.scrollTo({ top: y, behavior: "smooth" });
}
