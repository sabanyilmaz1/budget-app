import { Tagline } from "./tagline";
import { Card } from "../ui/card";
import { CardContent } from "../ui/card";

export const Why = () => {
  return (
    <section className="bg-accent/70 dark:bg-background">
      <div
        className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20"
        id="why"
      >
        <div className="mx-auto flex flex-col gap-8 sm:gap-12 md:gap-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center space-y-3 sm:space-y-4">
            <Tagline>Philosophie</Tagline>
            <h2 className="text-balance text-2xl sm:text-3xl font-semibold md:text-4xl">
              Pourquoi App Budget ?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Fini les tableaux illisibles et les apps connectées à ton compte
              bancaire. App Budget te permet de gérer ton argent à ton rythme,
              avec des mois que tu choisis et une vue claire de ton solde réel.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-background rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)] p-4 sm:p-6 hover:bg-muted/50 transition-colors">
              <CardContent className="flex flex-col gap-4 sm:gap-6 text-center p-0">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-primary font-semibold text-lg sm:text-xl">
                    Simplicité
                  </h3>
                  <span className="text-foreground text-2xl sm:text-3xl font-semibold md:text-4xl">
                    100%
                  </span>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Aucune automatisation. Tu gardes le contrôle total sur tes
                    données et tes décisions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)] p-4 sm:p-6 hover:bg-muted/50 transition-colors">
              <CardContent className="flex flex-col gap-4 sm:gap-6 text-center p-0">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-primary font-semibold text-lg sm:text-xl">
                    Clarté
                  </h3>
                  <span className="text-foreground text-2xl sm:text-3xl font-semibold md:text-4xl">
                    Totale
                  </span>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Une seule page pour tout voir : solde, budgets, épargne et
                    crédits.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)] p-4 sm:p-6 hover:bg-muted/50 transition-colors md:col-span-2 lg:col-span-1">
              <CardContent className="flex flex-col gap-4 sm:gap-6 text-center p-0">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-primary font-semibold text-lg sm:text-xl">
                    Autonomie
                  </h3>
                  <span className="text-foreground text-2xl sm:text-3xl font-semibold md:text-4xl">
                    Complète
                  </span>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Tes chiffres, tes règles. Personnalise ta formule d'épargne
                    et ton calcul dépensable.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
