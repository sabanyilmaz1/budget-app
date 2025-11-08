import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import { Tagline } from "~/components/ui/tagline";

export const Faq = () => {
  return (
    <section
      className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="mx-auto flex flex-col gap-8 sm:gap-12 md:gap-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center space-y-3 sm:space-y-4">
          <Tagline>FAQ</Tagline>
          <h2 className="text-balance text-2xl sm:text-3xl font-semibold md:text-4xl">
            Questions fréquentes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Retrouve les réponses aux questions les plus courantes. Tu ne
            trouves pas ce que tu cherches ?{" "}
            <a
              href="mailto:contact@appbudget.fr"
              className="text-primary italic underline"
            >
              Contactez-nous
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* General FAQ Section */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-foreground text-lg sm:text-xl font-semibold">
              Général
            </h3>
            <Accordion type="single" collapsible aria-label="General FAQ items">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-sm sm:text-base">
                  Pourquoi App Budget ne se connecte pas à ma banque ?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  App Budget est conçu pour te donner le contrôle total. Pas de
                  connexion bancaire signifie pas de risque de sécurité, pas de
                  dépendance à des APIs tierces, et surtout : tu décides quand
                  et comment tu mets à jour tes données. C'est une approche
                  manuelle et intentionnelle.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-sm sm:text-base">
                  Comment fonctionne la formule personnalisée ?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  Tu peux choisir comment calculer ton argent dépensable et ton
                  épargne. Par exemple, tu peux décider de mettre de côté un
                  pourcentage fixe, ou calculer ton épargne après avoir déduit
                  toutes tes dépenses fixes et enveloppes. C'est toi qui définis
                  les règles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-sm sm:text-base">
                  Puis-je importer mes données depuis une autre app ?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  Pour le moment, App Budget ne supporte pas l'import de
                  fichiers. L'idée est de repartir sur une base saine et de
                  construire ton budget mois par mois, manuellement. Cela te
                  permet de vraiment comprendre où va ton argent.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-sm sm:text-base">
                  Mes données sont-elles sécurisées ?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  Absolument. Tes données sont stockées de manière sécurisée
                  avec PostgreSQL (Neon) et protégées par BetterAuth. Seul toi
                  as accès à ton compte et à tes informations financières.
                  Aucune donnée n'est partagée avec des tiers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Features FAQ Section */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-foreground text-lg sm:text-xl font-semibold">
              Fonctionnalités
            </h3>
            <Accordion
              type="single"
              collapsible
              aria-label="Features FAQ items"
            >
              <AccordionItem value="features-1">
                <AccordionTrigger className="text-left text-sm sm:text-base">
                  Qu'est-ce qu'une enveloppe budgétaire ?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  Une enveloppe est un budget alloué à une catégorie spécifique
                  (resto, sport, loisirs, etc.). Tu définis le montant au début
                  du mois, et tu peux suivre ce qu'il te reste à dépenser dans
                  cette catégorie. C'est une méthode simple et efficace pour ne
                  pas dépasser.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="features-2">
                <AccordionTrigger className="text-left text-sm sm:text-base">
                  Comment gérer mes achats en plusieurs fois ?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  App Budget te permet de créer des crédits ou achats en N fois.
                  Tu renseignes le montant total, le nombre d'échéances, et
                  l'app calcule automatiquement ce qu'il te reste à payer chaque
                  mois. Pratique pour suivre tes engagements financiers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="features-3">
                <AccordionTrigger className="text-left text-sm sm:text-base">
                  Puis-je voir l'historique de mes mois passés ?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  Oui ! La Vue B te permet de consulter tous tes mois passés,
                  classés du plus récent au plus ancien. Tu peux ainsi analyser
                  tes habitudes de dépenses et voir ta progression au fil du
                  temps.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="features-4">
                <AccordionTrigger className="text-left text-sm sm:text-base">
                  Quelle est la différence entre épargne et cagnotte ?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  L'épargne est ton argent mis de côté de manière générale. Les
                  cagnottes sont des objectifs spécifiques (vacances, nouveau
                  téléphone, etc.). Tu peux créer plusieurs cagnottes et suivre
                  ta progression vers chaque objectif individuellement.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
