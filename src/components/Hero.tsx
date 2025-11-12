import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            Votre talent mérite un univers.
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto font-light text-balance">
            NARA. L'agence et la plateforme qui élèvent les créateurs indépendants.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button size="xl" variant="gold" asChild className="hover-lift">
              <Link to="/platform">Découvrir la plateforme</Link>
            </Button>
            <Button size="xl" variant="ghost-gold" asChild className="hover-lift">
              <Link to="/contact">Parler à un agent</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-gold/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
