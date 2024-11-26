import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-16 text-center shadow-xl sm:px-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à briller sur les réseaux sociaux ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-purple-100">
              Rejoignez notre communauté de créateurs et commencez votre voyage
              vers le succès dès aujourd&apos;hui.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/inscription">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}