import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Débutant",
    price: "0",
    description: "Parfait pour commencer votre voyage de créateur",
    features: [
      "Accès aux formations de base",
      "Communauté d'entraide",
      "Analyses basiques",
      "Support par email",
    ],
  },
  {
    name: "Pro",
    price: "29",
    description: "Pour les créateurs qui veulent passer au niveau supérieur",
    features: [
      "Toutes les formations",
      "Analyse IA personnalisée",
      "Coaching mensuel",
      "Ressources premium",
      "Support prioritaire",
      "Networking avancé",
    ],
  },
  {
    name: "Expert",
    price: "99",
    description: "La solution ultime pour les créateurs professionnels",
    features: [
      "Tout le plan Pro",
      "Coaching hebdomadaire",
      "Accès VIP aux événements",
      "Masterclass exclusives",
      "Mise en relation avec les marques",
      "Support dédié 24/7",
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Des tarifs adaptés à vos besoins
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choisissez le plan qui correspond à vos objectifs.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.name === "Pro" ? "default" : "outline"}>
                  Commencer
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}