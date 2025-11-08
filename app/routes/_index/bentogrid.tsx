import { Tagline } from "~/components/ui/tagline";
import { Card, CardContent } from "~/components/ui/card";

export const Bentogrid = () => {
  return (
    <section
      className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20"
      id="features"
    >
      <div className="mx-auto flex flex-col gap-8 sm:gap-12 md:gap-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center space-y-3 sm:space-y-4">
          <Tagline>Fonctionnalités</Tagline>
          <h2 className="text-balance text-2xl sm:text-3xl font-semibold md:text-4xl">
            Tout ce dont tu as besoin pour gérer ton argent
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Une approche simple et claire pour reprendre le contrôle de tes
            finances.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 lg:grid-rows-2">
          {/* Wide Feature Card - Top Left */}
          <Card className="bg-background rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)] overflow-hidden lg:col-span-2 hover:bg-muted/50 transition-colors">
            <img
              src="/placeholder.svg?height=332&width=813"
              alt="Vue mensuelle et globale"
              className="hidden h-auto w-full object-cover md:block md:h-[332px]"
            />
            <img
              src="/placeholder.svg?height=332&width=480"
              alt="Vue mensuelle et globale"
              className="block h-auto w-full md:hidden"
            />
            <CardContent className="flex flex-col gap-2 p-4 sm:p-6">
              <h3 className="text-foreground text-lg sm:text-xl font-semibold">
                💰 Vue mensuelle & globale
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Ton argent, tes mois, tes décisions. Une vue claire de ton solde
                réel.
              </p>
            </CardContent>
          </Card>

          {/* Regular Feature Card - Top Right */}
          <Card className="bg-background rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)] overflow-hidden lg:col-span-1 hover:bg-muted/50 transition-colors">
            <img
              src="/placeholder.svg?height=332&width=480"
              alt="Enveloppes budgétaires"
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-4 sm:p-6">
              <h3 className="text-foreground text-lg sm:text-xl font-semibold">
                🧺 Enveloppes
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Alloue un budget pour le resto, le sport, ou les cafés.
              </p>
            </CardContent>
          </Card>

          {/* Regular Feature Card - Bottom Left */}
          <Card className="bg-background rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)] overflow-hidden lg:col-span-1 hover:bg-muted/50 transition-colors">
            <img
              src="/placeholder.svg?height=332&width=480"
              alt="Épargne et cagnottes"
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-4 sm:p-6">
              <h3 className="text-foreground text-lg sm:text-xl font-semibold">
                🪙 Épargne & Cagnottes
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Suis ta progression vers tes projets et objectifs.
              </p>
            </CardContent>
          </Card>

          {/* Wide Feature Card - Bottom Right */}
          <Card className="bg-background rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)] overflow-hidden lg:col-span-2 hover:bg-muted/50 transition-colors">
            <img
              src="/placeholder.svg?height=332&width=813"
              alt="Achats en N fois et crédits"
              className="hidden h-[332px] w-full object-cover md:block"
            />
            <img
              src="/placeholder.svg?height=332&width=480"
              alt="Achats en N fois et crédits"
              className="block h-auto w-full object-cover md:hidden md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-4 sm:p-6">
              <h3 className="text-foreground text-lg sm:text-xl font-semibold">
                💳 Achats en N fois / Crédits
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Visualise tes échéances et ton reste à rembourser.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
