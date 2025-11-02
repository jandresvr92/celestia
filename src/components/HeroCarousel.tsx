import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Cera Perlada",
    subtitle: "El Lujo de Reinventar Tu Luz",
    description: "Descubre velas artesanales que transforman tu espacio en un santuario de paz",
    cta: "Ver Catálogo",
    gradient: "bg-gradient-warm",
  },
  {
    id: 2,
    title: "Fragancias Celestiales",
    subtitle: "Aromas que Elevan tu Espíritu",
    description: "Cada fragancia es una conexión única con el universo y tu bienestar",
    cta: "Explorar Colección",
    gradient: "bg-gradient-to-br from-accent to-primary",
  },
  {
    id: 3,
    title: "Diseño Versátil",
    subtitle: "Crea y Recrea Tu Vela Perfecta",
    description: "La innovadora cera perlada te permite personalizar tu experiencia infinitas veces",
    cta: "Descubre Más",
    gradient: "bg-gradient-to-br from-primary via-warm-glow to-accent",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-3xl shadow-glow">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : index < currentSlide
              ? "opacity-0 -translate-x-full"
              : "opacity-0 translate-x-full"
          }`}
        >
          <div className={`w-full h-full ${slide.gradient} flex items-center justify-center p-8`}>
            <div className="max-w-3xl text-center space-y-6 animate-fade-in">
              <div className="flex justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
                <Sparkles className="w-6 h-6 text-white/80 animate-pulse delay-75" />
                <Sparkles className="w-6 h-6 text-white animate-pulse delay-150" />
              </div>
              
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                {slide.title}
              </h2>
              
              <p className="text-2xl md:text-3xl font-serif font-light text-white/95">
                {slide.subtitle}
              </p>
              
              <p className="text-lg md:text-xl text-white/90 font-sans max-w-2xl mx-auto">
                {slide.description}
              </p>

              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-sans text-lg px-10 py-6 shadow-soft mt-6"
                onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
