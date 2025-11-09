import { useRouteLoaderData } from "react-router";
import { $routeId, type RouteId } from "~/lib/utils";
import type { loader as authenticatedLayoutLoader } from "~/routes/_authenticated/_layout";

function useTypedRouteLoaderData<TLoader extends (...args: any[]) => any>(
  routeId: RouteId,
  errorMessage?: string
): Awaited<ReturnType<TLoader>> {
  const data = useRouteLoaderData<TLoader>($routeId(routeId));

  if (!data) {
    throw new Error(
      errorMessage ||
        `Route loader data is required but not available for route: ${routeId}`
    );
  }

  return data;
}

export function useAuthenticatedLayoutData() {
  return useTypedRouteLoaderData<typeof authenticatedLayoutLoader>(
    "routes/_authenticated/_layout",
    "AuthenticatedLayoutData is required but not available"
  );
}
