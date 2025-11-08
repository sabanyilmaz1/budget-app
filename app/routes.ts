import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/_index/_home.tsx"),
  // Authentication routes
  route("sign-in/*", "routes/_auth/_sign-in.tsx"),
  route("sign-up/*", "routes/_auth/_sign-up.tsx"),

  // Subscription routes
  route("pricing", "routes/_subscription/_pricing.tsx"),
  route("success", "routes/_subscription/_success.tsx"),
  route(
    "subscription-required",
    "routes/_subscription/_subscription-required.tsx"
  ),

  // Dashboard routes
  layout("routes/dashboard/layout.tsx", [
    route("dashboard", "routes/dashboard/index.tsx"),
  ]),
] satisfies RouteConfig;
