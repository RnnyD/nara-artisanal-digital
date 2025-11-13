import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, TrendingUp, Sparkles, Users } from "lucide-react";
import textureMarble from "@/assets/texture-marble.jpg";

const values = [
  {
    icon: Users,
    title: "Humanité",
    description: "Un agent dédié, pas un chatbot. Nous croyons en l'écoute, l'empathie et l'accompagnement personnalisé.",
  },
  {
    icon: TrendingUp,
    title: "Élévation",
    description: "Des outils pour vous faire grandir, pas vous limiter. Chaque fonctionnalité est pensée pour votre succès.",
  },
  {
    icon: Heart,
    title: "Sérénité",
    description: "L'assurance que tout est sous contrôle. Dormez tranquille, nous veillons sur votre carrière.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Une obsession du détail, pour vous et par nous. Rien n'est laissé au hasard.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-5"
            style={{ 
              backgroundImage: `url(${textureMarble})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center space-y-8 animate-fade-in-up">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Notre Vision
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto text-balance font-light">
                NARA est né d'un constat simple : les talents exceptionnels méritent un partenaire qui l'est tout autant. Nous avons bâti un refuge où la technologie sert l'humain, et non l'inverse.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                Nos Valeurs
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Ce qui nous guide au quotidien dans notre mission d'accompagner les créateurs d'exception.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group hover-lift bg-card border border-border/50 rounded-2xl p-10 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-400">
                      <value.icon className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <h3 className="font-display text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-lg">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-32 px-6 lg:px-12">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 border border-accent/30 rounded-full bg-accent/5 mb-6">
                <span className="text-sm font-medium text-foreground/80">Notre Mission</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                Concentrez-vous sur votre art, nous gérons le reste.
              </h2>
              
              <p className="text-xl text-foreground/60 leading-relaxed text-balance font-light">
                Chaque créateur devrait avoir accès aux mêmes ressources que les plus grandes structures, sans en subir la complexité. C'est exactement ce que NARA offre : la puissance d'une infrastructure complète, avec la simplicité d'une conversation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
