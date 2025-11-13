import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-muted/20 py-16 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src="/src/assets/nara-logo.svg" alt="NARA" className="h-10" />
            </Link>
            <p className="text-foreground/60 max-w-md leading-relaxed">
              Révélons votre lumière. L'agence qui élève les créateurs indépendants.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-foreground/60 hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/60 hover:text-accent transition-colors">
                  Notre Vision
                </Link>
              </li>
              <li>
                <Link to="/platform" className="text-foreground/60 hover:text-accent transition-colors">
                  Plateforme
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/60 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold mb-4">Légal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                  CGU
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center text-sm text-foreground/50">
          <p>© {currentYear} NARA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
