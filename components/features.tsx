import {
  Brain,
  Camera,
  LineChart,
  MessageSquare,
  Sparkles,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "IA personnalisée",
    description:
      "Notre IA analyse votre contenu et vous guide vers l'amélioration continue.",
  },
  {
    icon: Camera,
    title: "Formations complètes",
    description:
      "Des modules détaillés pour maîtriser chaque aspect de la création vidéo.",
  },
  {
    icon: Users,
    title: "Communauté active",
    description:
      "Échangez avec d'autres créateurs et développez votre réseau.",
  },
  {
    icon: LineChart,
    title: "Analyses détaillées",
    description:
      "Suivez vos progrès et optimisez vos performances avec nos outils d'analyse.",
  },
  {
    icon: MessageSquare,
    title: "Coaching personnalisé",
    description:
      "Bénéficiez d'un accompagnement sur mesure pour atteindre vos objectifs.",
  },
  {
    icon: Sparkles,
    title: "Ressources exclusives",
    description:
      "Accédez à notre bibliothèque de ressources premium pour vous démarquer.",
  },
];

export function Features() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tout ce dont vous avez besoin pour réussir
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Des outils puissants et une formation complète pour devenir un créateur
            de contenu professionnel.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md"
            >
              <feature.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}