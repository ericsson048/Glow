import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Grâce à Glow, j'ai pu développer ma chaîne YouTube de 0 à 100k abonnés en seulement 8 mois. La qualité des formations et le support personnalisé ont fait toute la différence.",
    author: "Marie Laurent",
    role: "YouTubeuse Lifestyle",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
  },
  {
    content:
      "L'approche basée sur l'IA m'a permis d'identifier rapidement mes points d'amélioration. Les résultats sur TikTok ont été immédiats !",
    author: "Thomas Martin",
    role: "Créateur TikTok",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2787&auto=format&fit=crop",
  },
  {
    content:
      "La communauté Glow est incroyable. J'ai pu networker avec d'autres créateurs et même décrocher des collaborations grâce à la plateforme.",
    author: "Sophie Dubois",
    role: "Influenceuse Instagram",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ce que disent nos créateurs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez les success stories de notre communauté.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary" />
                <p className="mt-4 text-lg">{testimonial.content}</p>
                <div className="mt-6 flex items-center space-x-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}