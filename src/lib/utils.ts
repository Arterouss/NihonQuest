import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function getJLPTColor(level: string): string {
  const colors: Record<string, string> = {
    N5: "bg-emerald-100 text-emerald-700 border-emerald-200",
    N4: "bg-blue-100 text-blue-700 border-blue-200",
    N3: "bg-amber-100 text-amber-700 border-amber-200",
    N2: "bg-orange-100 text-orange-700 border-orange-200",
    N1: "bg-rose-100 text-rose-700 border-rose-200",
  };
  return colors[level] || "bg-gray-100 text-gray-700 border-gray-200";
}

export function getJLPTBadgeColor(level: string): string {
  const colors: Record<string, string> = {
    N5: "#22C55E",
    N4: "#3B82F6",
    N3: "#F59E0B",
    N2: "#F97316",
    N1: "#EF4444",
  };
  return colors[level] || "#6B7280";
}

export function calculateXPLevel(xp: number): { level: number; progress: number; xpForNext: number } {
  const levels = [0, 100, 300, 600, 1000, 1500, 2200, 3000, 4000, 5500, 7500];
  let level = 1;
  for (let i = 1; i < levels.length; i++) {
    if (xp >= levels[i]) level = i + 1;
    else break;
  }
  const currentLevelXP = levels[Math.min(level - 1, levels.length - 1)];
  const nextLevelXP = levels[Math.min(level, levels.length - 1)];
  const progress = nextLevelXP > currentLevelXP 
    ? ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100 
    : 100;
  return { level, progress: Math.min(progress, 100), xpForNext: nextLevelXP - xp };
}
