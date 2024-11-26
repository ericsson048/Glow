import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const platforms = [
  {
    id: "youtube",
    name: "YouTube",
    description:
      "Maîtrisez l'art du long format et développez une chaîne YouTube prospère.",
    features: [
      "Optimisation SEO pour YouTube",
      "Création de miniatures attractives",
      "Stratégies de monétisation",
      "Analyse des performances",
    ],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: "tiktok",
    name: "TikTok",
    description:
      "Créez du contenu viral et engageant pour la plateforme qui monte.",
    features: [
      "Tendances et challenges",
      "Montage dynamique",
      "Croissance organique",
      "Collaboration avec les marques",
    ],
    image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "instagram",
    name: "Instagram",
    description:
      "Développez votre présence sur Instagram avec des contenus percutants.",
    features: [
      "Stories et Reels",
      "Direction artistique",
      "Engagement communautaire",
      "Stratégie de contenu",
    ],
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074&auto=format&fit=crop",
  },
];

export function Platforms() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Une formation adaptée à chaque plateforme
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Maîtrisez les spécificités de chaque réseau social pour maximiser
            votre impact.
          </p>
        </div>
        <div className="mt-16">
          <Tabs defaultValue="youtube" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {platforms.map((platform) => (
                <TabsTrigger key={platform.id} value={platform.id}>
                  {platform.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {platforms.map((platform) => (
              <TabsContent key={platform.id} value={platform.id}>
                <Card>
                  <CardContent className="grid gap-8 p-6 md:grid-cols-2">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold">{platform.name}</h3>
                      <p className="text-muted-foreground">
                        {platform.description}
                      </p>
                      <ul className="space-y-2">
                        {platform.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <span className="mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={platform.image}
                        alt={platform.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}