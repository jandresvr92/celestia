import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const HeroCarousel = () => {
  const { t } = useTranslation();
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const slides = [
    {
      titleKey: "hero.slide1.title",
      subtitleKey: "hero.slide1.subtitle",
      ctaKey: "hero.slide1.cta",
      bgGradient: "bg-gradient-warm"
    },
    {
      titleKey: "hero.slide2.title",
      subtitleKey: "hero.slide2.subtitle",
      ctaKey: "hero.slide2.cta",
      bgGradient: "bg-gradient-warm"
    },
    {
      titleKey: "hero.slide3.title",
      subtitleKey: "hero.slide3.subtitle",
      ctaKey: "hero.slide3.cta",
      bgGradient: "bg-gradient-warm"
    }
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className={`${slide.bgGradient} rounded-2xl md:rounded-3xl p-6 sm:p-12 md:p-20 text-center shadow-glow min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex flex-col justify-center items-center animate-fade-in`}>
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif font-bold text-white mb-3 sm:mb-6">
                {t(slide.titleKey)}
              </h2>
              <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 font-sans max-w-2xl px-4">
                {t(slide.subtitleKey)}
              </p>
              <Button 
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-sans text-sm sm:text-base md:text-lg px-6 sm:px-10 py-4 sm:py-6 shadow-soft"
              >
                <Link to="/catalog">{t(slide.ctaKey)}</Link>
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
