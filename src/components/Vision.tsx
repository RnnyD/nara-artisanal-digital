import { useEffect, useRef, useState } from "react";

const Vision = () => {
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
    <section ref={sectionRef} className="py-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className={`space-y-8 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Plus qu'une agence, un écosystème.
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto text-balance font-light">
            Nous allions l'accompagnement humain à une technologie intuitive pour protéger, gérer et amplifier votre carrière.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
