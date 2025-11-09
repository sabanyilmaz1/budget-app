import { clsx, type ClassValue } from "clsx";
import type { Register } from "react-router";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type RouteId =
  Register["routeFiles"][keyof Register["routeFiles"]]["id"];

export function $routeId(routeId: RouteId) {
  return routeId;
}
