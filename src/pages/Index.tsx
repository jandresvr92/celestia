import { Button } from "@/components/ui/button";
import { Flame, Sparkles, Heart, ShoppingBag } from "lucide-react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutSection } from "@/components/AboutSection";
import celestiaLogo from "@/assets/celestia-logo.jpg?url";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-cosmic">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={celestiaLogo}
              alt="Celestia Logo" 
              className="w-16 h-16 rounded-full object-cover shadow-soft"
            />
            <h1 className="text-2xl font-serif font-bold text-foreground">Celestia</h1>
          </div>
          <div className="flex items-center gap-6">
            <a href="#productos" className="text-foreground hover:text-primary transition-smooth font-sans">
              Productos
            </a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-smooth font-sans">
              Nosotros
            </a>
            <Button variant="outline" size="icon" className="rounded-full">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Carousel Section */}
      <section className="container mx-auto px-4 py-8">
        <HeroCarousel />
      </section>

      {/* Features Section */}
      <section id="productos" className="container mx-auto px-4 py-20 bg-card/50 rounded-3xl my-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-warm rounded-full flex items-center justify-center shadow-glow">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-foreground">Cera Perlada</h3>
            <p className="text-muted-foreground font-sans">
              Innovadora tecnología que te permite diseñar y rediseñar tu vela infinitas veces
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center shadow-soft">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-foreground">Fragancias Premium</h3>
            <p className="text-muted-foreground font-sans">
              Aromas cuidadosamente seleccionados que elevan tu estado de ánimo y crean ambientes únicos
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center shadow-soft">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-foreground">Hecho con Amor</h3>
            <p className="text-muted-foreground font-sans">
              Cada vela es una obra de arte artesanal que conecta con la grandeza del cosmos
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-warm rounded-3xl p-12 md:p-20 text-center shadow-glow">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Transforma Tu Hogar en un Santuario
          </h2>
          <p className="text-xl text-white/90 mb-8 font-sans max-w-2xl mx-auto">
            Descubre la colección Celestia y lleva la serenidad y magia del universo a cada rincón
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 font-sans text-lg px-10 py-6 shadow-soft"
          >
            Ver Velas Exclusivas
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-border mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={celestiaLogo}
              alt="Celestia" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-serif font-semibold text-foreground">Celestia</p>
              <p className="text-sm text-muted-foreground font-sans">Cera perlada. El lujo de reinventar tu luz.</p>
            </div>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground font-sans">
            <a href="#" className="hover:text-primary transition-smooth">Términos</a>
            <a href="#" className="hover:text-primary transition-smooth">Privacidad</a>
            <a href="#" className="hover:text-primary transition-smooth">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
