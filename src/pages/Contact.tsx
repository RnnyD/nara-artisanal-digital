import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollFade } from "@/hooks/use-scroll-fade";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref, isVisible } = useScrollFade(0.2);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Demande envoyée avec succès",
      description: "Nous étudions votre candidature avec attention. Vous recevrez une réponse personnelle sous 48h.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section ref={ref} className="py-32 px-6 lg:px-12">
          <div className="container mx-auto max-w-3xl text-center">
            <div 
              className={`space-y-6 transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Prêt(e) à entrer dans l'univers NARA ?
              </h1>
              
              <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto text-balance font-light">
                Nous étudions chaque candidature avec le plus grand soin. Si votre profil correspond à notre vision, nous prendrons contact avec vous personnellement.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="pb-32 px-6 lg:px-12">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Nom complet *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="h-12 border-border/50 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@exemple.com"
                    className="h-12 border-border/50 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio" className="text-sm font-medium">
                    Lien vers portfolio / profil *
                  </Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    required
                    placeholder="https://votreportfolio.com"
                    className="h-12 border-border/50 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">
                    Objet de la demande *
                  </Label>
                  <Select name="subject" required>
                    <SelectTrigger className="h-12 border-border/50 focus:border-accent transition-colors">
                      <SelectValue placeholder="Sélectionnez un objet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="client">Devenir client</SelectItem>
                      <SelectItem value="partnership">Partenariat</SelectItem>
                      <SelectItem value="press">Presse</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Parlez-nous de votre projet et de vos ambitions..."
                    rows={6}
                    className="border-border/50 focus:border-accent transition-colors resize-none"
                  />
                </div>

                <div className="pt-4">
                  <p className="text-sm text-foreground/60 mb-6 text-center">
                    Chaque candidature est étudiée avec le plus grand soin. Nous vous répondrons personnellement.
                  </p>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    variant="gold" 
                    className="w-full hover-lift"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
