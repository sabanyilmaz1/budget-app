import { Tagline } from "./tagline";
import { Calendar, DollarSign, Eye, History } from "lucide-react";

export const HowItWork = () => {
  return (
    <section
      className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20"
      id="how-it-works"
    >
      <div className="mx-auto flex flex-col gap-8 sm:gap-12 md:gap-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center space-y-3 sm:space-y-4">
          <Tagline>Comment ça marche</Tagline>
          <h2 className="text-balance text-2xl sm:text-3xl font-semibold md:text-4xl">
            3 étapes pour reprendre le contrôle
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Pas d'algorithme. Pas d'automatisation. Juste toi, tes choix, et une
            app qui te rend les chiffres lisibles.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-4 sm:gap-6 text-center p-4 sm:p-6 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="bg-background flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Calendar className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                1. Crée ton mois
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Démarre un nouveau mois manuellement, à ton rythme.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 sm:gap-6 text-center p-4 sm:p-6 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="bg-background flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <DollarSign className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                2. Renseigne tes fixes
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Ajoute ton solde et tes dépenses fixes du mois.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 sm:gap-6 text-center p-4 sm:p-6 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="bg-background flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Eye className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                3. Observe ton budget
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Visualise ton argent dépensable et ton épargne en temps réel.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 sm:gap-6 text-center p-4 sm:p-6 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="bg-background flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <History className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                4. Consulte l'historique
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Tous tes mois passés, classés du plus récent au plus ancien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
