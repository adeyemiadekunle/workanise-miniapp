import { deleteLocalUserData } from "@/lib/local-storage";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const logout = () => {
  deleteLocalUserData();
  window.location.replace(`${window.location.origin}/auth/login`);
};

/**
 * Formats a number with specified decimal places and optional thousands separator
 * @param value - The number to format
 * @param decimals - Number of decimal places (default: 2)
 * @param useThousandSeparator - Whether to add thousand separators (default: false)
 * @returns Formatted number string
 */
export const formatNumber = (
  value: number | undefined,
  decimals: number = 2,
  useThousandSeparator: boolean = false
): string => {
  // Handle invalid input
  if (value === undefined || isNaN(value)) return "0.00";
  // Format to fixed decimal places
  let formattedNumber = Number(value).toFixed(decimals);

  // Add thousand separator if requested
  if (useThousandSeparator) {
    const parts = formattedNumber.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    formattedNumber = parts.join(".");
  }

  return formattedNumber;
};

export function getInitials(firstName: string | null, lastName: string | null) {
  const firstInitial = firstName?.charAt(0).toUpperCase() || "";
  const lastInitial = lastName?.charAt(0).toUpperCase() || "";
  return firstInitial + lastInitial;
}

// Format remaining time as HH:mm:ss
export const formatTime = (seconds: number): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
    .toString()
    .padStart(2, "0")}`;
};
