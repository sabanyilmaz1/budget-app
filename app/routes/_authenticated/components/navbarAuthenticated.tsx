import { Calendar, LayoutDashboard, PiggyBank, Settings } from "lucide-react";
import { href, Link, useLocation } from "react-router";
import { Button } from "~/components/ui/button";
import { useAuthenticatedLayoutData } from "~/routes/useTypedRouteLoaderData";

export const NavbarAuthenticated = () => {
  const { lastMonth } = useAuthenticatedLayoutData();
  const pathname = useLocation();

  const isActive = (href: string) => pathname.pathname === href;
  const monthId = lastMonth?._id;
  const hasLastMonth = !!monthId;

  console.log("hasLastMonth", hasLastMonth);

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-lg font-bold">B</span>
            </div>
            <h1 className="text-lg font-semibold">Budget Manager</h1>
          </div>
          <nav className="flex gap-1">
            <Button
              variant={isActive(href("/dashboard")) ? "default" : "ghost"}
              size="sm"
              className="gap-2"
              asChild
            >
              <Link to={href("/dashboard")}>
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            </Button>
            {hasLastMonth ? (
              <Button
                variant={
                  isActive(href("/month/:monthId", { monthId }))
                    ? "default"
                    : "ghost"
                }
                size="sm"
                className="gap-2"
                asChild
              >
                <Link
                  to={href("/month/:monthId", {
                    monthId,
                  })}
                >
                  <Calendar className="h-4 w-4" />
                  <span className="hidden sm:inline">Mois</span>
                </Link>
              </Button>
            ) : (
              <Button variant="ghost" size="sm" className="gap-2" disabled>
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Mois</span>
              </Button>
            )}
            <Button
              variant={isActive(href("/savings")) ? "default" : "ghost"}
              size="sm"
              className="gap-2"
              asChild
            >
              <Link to="/savings">
                <PiggyBank className="h-4 w-4" />
                <span className="hidden sm:inline">Épargne</span>
              </Link>
            </Button>
            <Button
              variant={isActive(href("/settings")) ? "default" : "ghost"}
              size="sm"
              className="gap-2"
              asChild
            >
              <Link to={href("/settings")}>
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Paramètres</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
