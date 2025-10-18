import { Link } from "react-router";
import { Separator } from "../ui/separator";

export default function FooterSection() {
  return (
    <footer className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <Separator role="presentation" className="mb-8 sm:mb-12" />

      <div className="flex w-full flex-col-reverse items-center gap-6 sm:gap-8 lg:flex-row lg:justify-between lg:gap-6">
        <p className="text-sm sm:text-base text-muted-foreground text-center lg:text-left">
          © 2025 App Budget. Tous droits réservés.
        </p>

        <nav
          className="flex flex-col items-center gap-4 sm:gap-6 text-sm sm:text-base md:flex-row md:gap-8"
          aria-label="Legal links"
        >
          <Link
            to="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Politique de confidentialité
          </Link>
          <Link
            to="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Conditions d'utilisation
          </Link>
          <Link
            to="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
