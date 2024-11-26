import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Devenez un créateur de contenu{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  qui brille
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Apprenez à créer du contenu vidéo captivant pour YouTube, TikTok et Instagram avec notre plateforme de formation alimentée par l&apos;IA.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/inscription">
                  Commencer gratuitement
                  <Play className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Voir la démo</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  +10k créateurs formés
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  95% de satisfaction
                </span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-3xl" />
            <Image
              src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop"
              alt="Créateur de contenu en action"
              width={800}
              height={600}
              className="relative rounded-lg object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}