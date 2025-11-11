import { ChevronRight, Plus } from "lucide-react";
import { SectionLabel } from "~/components/sectionLabel";
import { Button } from "~/components/ui/button";

export default function DashboardPage() {
  const currentDay = 15;
  const totalDays = 31;
  const monthProgress = (currentDay / totalDays) * 100;

  const remainingBalance = 1847.5;
  const totalSavings = 26670.0;
  const monthlyBudget = 4898.0;
  const totalBudget = 10000.0;

  const months = [
    {
      id: "1",
      name: "Janvier 2025",
      startDate: "01/01",
      endDate: "31/01",
      isCurrent: true,
    },
    {
      id: "2",
      name: "Février 2025",
      startDate: "01/02",
      endDate: "28/02",
      isCurrent: false,
    },
    {
      id: "3",
      name: "Mars 2025",
      startDate: "01/03",
      endDate: "31/03",
      isCurrent: false,
    },
  ];

  const envelopes = [
    { id: "1", name: "Vacances", amount: 450.0 },
    { id: "2", name: "Cadeaux", amount: 120.0 },
    { id: "3", name: "Urgences", amount: 800.0 },
    { id: "4", name: "Projets", amount: 250.0 },
  ];

  const totalEnvelopes = envelopes.reduce(
    (acc, envelope) => acc + envelope.amount,
    0
  );

  const multiMonthExpenses = [
    {
      id: "1",
      label: "Nouveau canapé",
      amount: 150.0,
      paid: true,
      months: 12,
      remaining: 8,
    },
    {
      id: "2",
      label: "Ordinateur portable",
      amount: 200.0,
      paid: false,
      months: 10,
      remaining: 10,
    },
    {
      id: "3",
      label: "Rénovation cuisine",
      amount: 300.0,
      paid: false,
      months: 24,
      remaining: 18,
    },
  ];

  const distributionData = [
    { name: "fixes", value: 1200, label: "Fixes" },
    { name: "echeances", value: 450, label: "Échéances" },
    { name: "epargne", value: 600, label: "Épargne" },
    { name: "enveloppes", value: 1847.5, label: "Enveloppes" },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 pt-4 flex flex-col gap-12">
      <div>
        <SectionLabel>Solde Actuel</SectionLabel>
        <div className="flex items-baseline gap-3">
          <h1 className="text-7xl font-light tracking-tight text-foreground">
            {remainingBalance.toFixed(2)}
          </h1>
          <span className="text-3xl font-light text-muted-foreground">€</span>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            Distribution
          </p>
          <div className="grid grid-cols-2 gap-3">
            {distributionData.map((item, index) => {
              const percentage = ((item.value / totalBudget) * 100).toFixed(0);
              return (
                <div
                  key={item.name}
                  className="rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-all"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                    {item.label}
                  </p>
                  <p className="text-2xl font-light tracking-tight text-foreground mb-2">
                    {item.value.toFixed(0)}€
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {percentage}% du total
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            Mois
          </p>
          <div className="space-y-2">
            {months.map((month) => (
              <button
                key={month.id}
                //onClick={() => onMonthSelect(month.id)}
                className="w-full group rounded-lg border border-border bg-card p-4 text-left transition-all hover:border-primary hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-foreground">
                      {month.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {month.startDate} – {month.endDate}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </button>
            ))}
            <Button
              variant="outline"
              className="w-full bg-transparent"
              size="lg"
            >
              <Plus className="h-4 w-4 mr-2" />
              Créer mois
            </Button>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="space-y-6">
        <div>
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            Enveloppes
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {envelopes.map((envelope) => (
            <button
              key={envelope.id}
              className="group rounded-lg border border-border bg-card p-5 text-left transition-all hover:border-primary hover:shadow-sm active:scale-95"
            >
              <p className="text-xs text-muted-foreground tracking-wide uppercase mb-4">
                {envelope.name}
              </p>
              <p className="text-3xl font-light tracking-tight text-foreground mb-2">
                {envelope.amount.toFixed(0)}€
              </p>
              <p className="text-xs text-muted-foreground">
                {((envelope.amount / totalEnvelopes) * 100).toFixed(0)}% du
                total
              </p>
            </button>
          ))}
          <button className="group rounded-lg border border-dashed border-border bg-card p-5 text-left transition-all hover:border-primary hover:shadow-sm active:scale-95 flex flex-col items-center justify-center min-h-[140px]">
            <Plus className="h-6 w-6 text-muted-foreground mb-2 group-hover:text-primary transition-colors" />
            <p className="text-xs text-muted-foreground tracking-wide uppercase">
              Ajouter une enveloppe
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
