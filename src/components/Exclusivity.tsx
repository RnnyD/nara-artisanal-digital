import { useEffect, useRef, useState } from "react";
import abstractShapes from "@/assets/abstract-shapes.jpg";

const Exclusivity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 opacity-5">
        <img 
          src={abstractShapes} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className={`text-center space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Un accompagnement d'exception.
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-2xl mx-auto text-balance font-light">
            Nous croyons en un accompagnement d'exception. C'est pourquoi NARA collabore avec un nombre limité de talents, sélectionnés pour leur vision et leur potentiel.
          </p>

          <div className="pt-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 border border-gold/30 rounded-full bg-gold/5">
              <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm font-medium text-foreground/80">Accès sur invitation uniquement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exclusivity;
