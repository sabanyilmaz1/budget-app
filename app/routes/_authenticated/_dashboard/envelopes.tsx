import { ShoppingBag, Gift, AlertCircle, Lightbulb, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const envelopes = [
  {
    id: "1",
    name: "Vacances",
    amount: 450.0,
    icon: ShoppingBag,
    color: "text-chart-2",
  },
  {
    id: "2",
    name: "Cadeaux",
    amount: 120.0,
    icon: Gift,
    color: "text-chart-4",
  },
  {
    id: "3",
    name: "Urgences",
    amount: 800.0,
    icon: AlertCircle,
    color: "text-chart-5",
  },
  {
    id: "4",
    name: "Projets",
    amount: 250.0,
    icon: Lightbulb,
    color: "text-chart-3",
  },
];

export const Envelopes = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Envelopes</CardTitle>
      </CardHeader>
      <CardContent>
        {" "}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {/* Create button */}
          <button className="flex-shrink-0 w-32 h-40 rounded-2xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-2 group">
            <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
              <Plus className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
              Créer
            </span>
          </button>
          {envelopes.map((envelope) => {
            const Icon = envelope.icon;
            return (
              <div
                key={envelope.id}
                className="flex-shrink-0 w-32 h-40 rounded-2xl bg-gradient-to-br from-card to-secondary border border-border hover:border-primary/50 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-4 h-full flex flex-col">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-auto ${envelope.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1 truncate">
                      {envelope.name}
                    </p>
                    <p className="text-lg font-bold text-primary">
                      {envelope.amount.toFixed(0)} €
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
