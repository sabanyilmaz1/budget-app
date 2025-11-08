import { Link } from "react-router";

import { Button } from "~/components/ui/button";

import { Check } from "lucide-react";
import { Tagline } from "~/components/ui/tagline";
import { Navbar } from "./navbar";

export default function IntegrationsSection({
  loaderData,
}: {
  loaderData?: { isSignedIn: boolean; hasActiveSubscription: boolean };
}) {
  return (
    <section id="hero">
      <Navbar loaderData={loaderData} />
      <div className="bg-accent/70 dark:bg-background py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 mt-4 sm:mt-6 md:mt-8">
          <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
            <div className="mx-auto max-w-lg space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
              <Tagline>App Budget</Tagline>
              <h2 className="text-balance text-2xl sm:text-3xl font-semibold md:text-4xl">
                Reprends le contrôle de ton argent — simplement.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                App Budget t'aide à suivre tes dépenses, ton épargne et tes
                objectifs mois par mois, sans dépendre d'aucune banque.
              </p>
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-start gap-3">
                  <div className="pt-0.5">
                    <Check className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-card-foreground text-sm sm:text-base leading-6 font-medium">
                    Aucune connexion bancaire requise
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="pt-0.5">
                    <Check className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-card-foreground text-sm sm:text-base leading-6 font-medium">
                    Gestion manuelle et personnalisée
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="pt-0.5">
                    <Check className="text-primary h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-card-foreground text-sm sm:text-base leading-6 font-medium">
                    Vue claire de ton budget mensuel
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="sm" asChild className="w-full sm:w-auto">
                  <Link
                    to={
                      loaderData?.isSignedIn
                        ? loaderData?.hasActiveSubscription
                          ? "/dashboard"
                          : "/pricing"
                        : "/sign-up"
                    }
                    prefetch="viewport"
                  >
                    {loaderData?.isSignedIn
                      ? loaderData?.hasActiveSubscription
                        ? "Go to Dashboard (Demo)"
                        : "Créer mon premier mois"
                      : "Get Started (Demo)"}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full sm:w-auto"
                >
                  <Link
                    to="https://github.com/michaelshimeles/react-starter-kit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comment ça marche
                  </Link>
                </Button>
              </div>
            </div>
            <div className="dark:bg-muted/50 relative mx-auto w-fit order-1 lg:order-2">
              <div className="bg-radial to-muted dark:to-background absolute inset-0 z-10 from-transparent to-75%"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
