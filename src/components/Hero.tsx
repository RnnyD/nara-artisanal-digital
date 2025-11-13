import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
import textureMarble from "@/assets/texture-marble.jpg";
import { useParallax } from "@/hooks/use-parallax";
import { useScrollFade } from "@/hooks/use-scroll-fade";

const Hero = () => {
  const parallaxOffset = useParallax(0.3);
  const { ref, isVisible } = useScrollFade(0.2);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-100"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-background" />
        
        {/* Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url(${textureMarble})`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center">
        <div 
          className={`max-w-5xl mx-auto space-y-8 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance text-background">
            Votre talent mérite un univers.
          </h1>
          
          <p className="text-xl md:text-2xl text-background/90 max-w-2xl mx-auto font-light text-balance">
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
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-accent/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
