import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Services from "@/components/Services";
import Exclusivity from "@/components/Exclusivity";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Vision />
        <Services />
        <Exclusivity />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
