import Link from "next/link";
import { Sparkles } from "lucide-react";

const navigation = {
  main: [
    { name: "À propos", href: "/a-propos" },
    { name: "Blog", href: "/blog" },
    { name: "Formations", href: "/formations" },
    { name: "Tarifs", href: "/tarifs" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "TikTok", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6" />
            <span className="text-xl font-bold">Glow</span>
          </div>
          <nav className="flex gap-6">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <nav className="flex gap-6">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Glow. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}